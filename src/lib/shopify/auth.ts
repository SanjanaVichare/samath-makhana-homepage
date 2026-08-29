import SHOPIFY_CONFIG from "./config";

function generateRandomString(length = 64) {
  const array = new Uint8Array(length);

  crypto.getRandomValues(array);

  return Array.from(array)
    .map((byte) =>
      byte.toString(16).padStart(2, "0")
    )
    .join("")
    .slice(0, length);
}

async function generateCodeChallenge(
  verifier: string
) {
  const data =
    new TextEncoder().encode(verifier);

  const digest =
    await crypto.subtle.digest(
      "SHA-256",
      data
    );

  return btoa(
    String.fromCharCode(
      ...new Uint8Array(digest)
    )
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

export async function login() {
  const state =
    generateRandomString(32);

  const codeVerifier =
    generateRandomString(64);

  const codeChallenge =
    await generateCodeChallenge(
      codeVerifier
    );

  // Save OAuth information
  sessionStorage.setItem(
    "shopify_state",
    state
  );

  sessionStorage.setItem(
    "shopify_code_verifier",
    codeVerifier
  );

  const redirectUri =
    SHOPIFY_CONFIG.redirectUri ||
    `${window.location.origin}/auth/callback`;

  const params = new URLSearchParams({
    client_id:
      SHOPIFY_CONFIG.customerClientId,

    response_type: "code",

    redirect_uri:
      redirectUri,

    scope:
      "openid email customer-account-api:full",

    state,

    code_challenge:
      codeChallenge,

    code_challenge_method:
      "S256",
  });

  console.log(
    "Redirecting to Shopify..."
  );

  window.location.href =
    `${SHOPIFY_CONFIG.authUrl}?${params.toString()}`;
}

export async function signup() {
  await login();
}