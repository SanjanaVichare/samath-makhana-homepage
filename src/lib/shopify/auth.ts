import SHOPIFY_CONFIG, { isCustomerAuthConfigured } from "./config";

const RETURN_TO_KEY = "shopify_return_to";

function generateRandomString(length = 64) {
  const array = new Uint8Array(length);

  crypto.getRandomValues(array);

  return Array.from(array)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, length);
}

async function generateCodeChallenge(verifier: string) {
  const data = new TextEncoder().encode(verifier);

  const digest = await crypto.subtle.digest("SHA-256", data);

  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

/** Only same-origin relative paths are accepted, to avoid open redirects. */
export function sanitizeReturnTo(value?: string | null) {
  if (!value) return null;
  if (!value.startsWith("/") || value.startsWith("//")) return null;
  return value;
}

export function storeReturnTo(returnTo?: string | null) {
  const safe = sanitizeReturnTo(returnTo);
  if (safe) sessionStorage.setItem(RETURN_TO_KEY, safe);
  else sessionStorage.removeItem(RETURN_TO_KEY);
}

export function consumeReturnTo() {
  const value = sessionStorage.getItem(RETURN_TO_KEY);
  sessionStorage.removeItem(RETURN_TO_KEY);
  return sanitizeReturnTo(value) ?? "/";
}

export function getRedirectUri() {
  return SHOPIFY_CONFIG.redirectUri || `${window.location.origin}/auth/callback`;
}

export async function login(returnTo?: string | null) {
  if (!isCustomerAuthConfigured()) {
    throw new Error(
      "Shopify customer accounts are not configured. Add the Customer Account API environment variables.",
    );
  }

  const state = generateRandomString(32);

  const codeVerifier = generateRandomString(64);

  const codeChallenge = await generateCodeChallenge(codeVerifier);

  // Save OAuth information
  sessionStorage.setItem("shopify_state", state);

  sessionStorage.setItem("shopify_code_verifier", codeVerifier);

  storeReturnTo(returnTo);

  const params = new URLSearchParams({
    client_id: SHOPIFY_CONFIG.customerClientId as string,

    response_type: "code",

    redirect_uri: getRedirectUri(),

    scope: "openid email customer-account-api:full",

    state,

    code_challenge: codeChallenge,

    code_challenge_method: "S256",
  });

  window.location.href = `${SHOPIFY_CONFIG.authUrl}?${params.toString()}`;
}

export async function signup(returnTo?: string | null) {
  await login(returnTo);
}
