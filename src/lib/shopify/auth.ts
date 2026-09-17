import SHOPIFY_CONFIG, {
  getMissingCustomerAuthConfig,
  isCustomerAuthConfigured,
} from "./config";

import { getAuthDiscovery } from "./discovery";

const RETURN_TO_KEY = "shopify_return_to";
const STATE_KEY = "shopify_state";
const CODE_VERIFIER_KEY = "shopify_code_verifier";

function generateRandomString(length = 64) {
  const array = new Uint8Array(length);

  crypto.getRandomValues(array);

  return Array.from(array)
    .map((byte) =>
      byte.toString(16).padStart(2, "0"),
    )
    .join("")
    .slice(0, length);
}

async function generateCodeChallenge(
  verifier: string,
) {
  const data = new TextEncoder().encode(verifier);

  const digest = await crypto.subtle.digest(
    "SHA-256",
    data,
  );

  return btoa(
    String.fromCharCode(
      ...new Uint8Array(digest),
    ),
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

export function sanitizeReturnTo(
  value?: string | null,
) {
  if (!value) return null;

  if (
    !value.startsWith("/") ||
    value.startsWith("//")
  ) {
    return null;
  }

  return value;
}

export function storeReturnTo(
  returnTo?: string | null,
) {
  const safe = sanitizeReturnTo(returnTo);

  if (safe) {
    sessionStorage.setItem(
      RETURN_TO_KEY,
      safe,
    );
  } else {
    sessionStorage.removeItem(
      RETURN_TO_KEY,
    );
  }
}

export function consumeReturnTo() {
  const value =
    sessionStorage.getItem(
      RETURN_TO_KEY,
    );

  sessionStorage.removeItem(
    RETURN_TO_KEY,
  );

  return sanitizeReturnTo(value) ?? "/";
}

export function getRedirectUri() {
  return (
    SHOPIFY_CONFIG.redirectUri ||
    `${window.location.origin}/auth/callback`
  );
}

export async function login(
  returnTo?: string | null,
) {
  if (!isCustomerAuthConfigured()) {
    const missing =
      getMissingCustomerAuthConfig();

    throw new Error(
      `Shopify customer accounts are not configured. Missing: ${missing.join(", ")}`,
    );
  }

  if (!SHOPIFY_CONFIG.customerClientId) {
    throw new Error(
      "Shopify Customer Account Client ID is missing.",
    );
  }

  // Discover Shopify's current OAuth endpoints.
  const discovery =
    await getAuthDiscovery();

  const state =
    generateRandomString(32);

  const codeVerifier =
    generateRandomString(64);

  const codeChallenge =
    await generateCodeChallenge(
      codeVerifier,
    );

  sessionStorage.setItem(
    STATE_KEY,
    state,
  );

  sessionStorage.setItem(
    CODE_VERIFIER_KEY,
    codeVerifier,
  );

  storeReturnTo(returnTo);

  const authorizationEndpoint =
    discovery.authorization_endpoint ||
    SHOPIFY_CONFIG.authUrl;

  if (!authorizationEndpoint) {
    throw new Error(
      "Shopify authorization endpoint is missing.",
    );
  }

  const redirectUri =
    getRedirectUri();

  const authorizationUrl =
    new URL(
      authorizationEndpoint,
    );

  authorizationUrl.searchParams.set(
    "scope",
    "openid email customer-account-api:full",
  );

  authorizationUrl.searchParams.set(
    "client_id",
    SHOPIFY_CONFIG.customerClientId,
  );

  authorizationUrl.searchParams.set(
    "response_type",
    "code",
  );

  authorizationUrl.searchParams.set(
    "redirect_uri",
    redirectUri,
  );

  authorizationUrl.searchParams.set(
    "state",
    state,
  );

  authorizationUrl.searchParams.set(
    "code_challenge",
    codeChallenge,
  );

  authorizationUrl.searchParams.set(
    "code_challenge_method",
    "S256",
  );

  window.location.href =
    authorizationUrl.toString();
}

export async function signup(
  returnTo?: string | null,
) {
  await login(returnTo);
}

export function getStoredOAuthState() {
  return sessionStorage.getItem(
    STATE_KEY,
  );
}

export function getStoredCodeVerifier() {
  return sessionStorage.getItem(
    CODE_VERIFIER_KEY,
  );
}

export function clearOAuthState() {
  sessionStorage.removeItem(
    STATE_KEY,
  );

  sessionStorage.removeItem(
    CODE_VERIFIER_KEY,
  );
}