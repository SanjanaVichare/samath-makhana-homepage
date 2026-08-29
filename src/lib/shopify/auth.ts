import SHOPIFY_CONFIG, {
  getMissingCustomerAuthConfig,
  isCustomerAuthConfigured,
} from "./config";

const RETURN_TO_KEY = "shopify_return_to";

/**
 * Generate a cryptographically secure random
 * string for OAuth state / PKCE.
 */
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

/**
 * Generate the PKCE SHA-256 code challenge.
 */
async function generateCodeChallenge(
  verifier: string,
) {
  const data =
    new TextEncoder().encode(verifier);

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

/**
 * Only same-origin relative paths are accepted.
 *
 * This prevents open-redirect attacks.
 */
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

/**
 * Store the page the user should return to
 * after successful authentication.
 */
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

/**
 * Retrieve and remove the stored return URL.
 */
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

/**
 * Get the OAuth redirect URI.
 *
 * Uses the configured Vercel/production URI when
 * available, otherwise falls back to the current
 * origin.
 */
export function getRedirectUri() {
  return (
    SHOPIFY_CONFIG.redirectUri ||
    `${window.location.origin}/auth/callback`
  );
}

/**
 * Start Shopify Customer Account OAuth login.
 */
export async function login(
  returnTo?: string | null,
) {
  // --------------------------------
  // Check configuration
  // --------------------------------

  if (!isCustomerAuthConfigured()) {
    const missing =
      getMissingCustomerAuthConfig();

    throw new Error(
      `Shopify customer accounts are not configured. Missing: ${missing.join(", ")}`,
    );
  }

  // --------------------------------
  // Generate OAuth state
  // --------------------------------

  const state =
    generateRandomString(32);

  // --------------------------------
  // Generate PKCE verifier
  // --------------------------------

  const codeVerifier =
    generateRandomString(64);

  // --------------------------------
  // Generate PKCE challenge
  // --------------------------------

  const codeChallenge =
    await generateCodeChallenge(
      codeVerifier,
    );

  // --------------------------------
  // Save temporary OAuth information
  // --------------------------------

  sessionStorage.setItem(
    "shopify_state",
    state,
  );

  sessionStorage.setItem(
    "shopify_code_verifier",
    codeVerifier,
  );

  storeReturnTo(returnTo);

  // --------------------------------
  // Configuration is guaranteed after
  // isCustomerAuthConfigured()
  // --------------------------------

  const customerClientId =
    SHOPIFY_CONFIG.customerClientId;

  const authUrl =
    SHOPIFY_CONFIG.authUrl;

  if (!customerClientId || !authUrl) {
    throw new Error(
      "Shopify Customer Account authentication configuration is incomplete.",
    );
  }

  // --------------------------------
  // Build Shopify OAuth URL
  // --------------------------------

  const params = new URLSearchParams({
    client_id: customerClientId,

    response_type: "code",

    redirect_uri: getRedirectUri(),

    scope:
      "openid email customer-account-api:full",

    state,

    code_challenge: codeChallenge,

    code_challenge_method: "S256",
  });

  // --------------------------------
  // Redirect to Shopify
  // --------------------------------

  window.location.href =
    `${authUrl}?${params.toString()}`;
}

/**
 * Start the account creation flow.
 *
 * Shopify Customer Account authentication
 * handles account creation through the hosted
 * customer account experience.
 */
export async function signup(
  returnTo?: string | null,
) {
  await login(returnTo);
}