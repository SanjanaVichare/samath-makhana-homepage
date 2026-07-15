import SHOPIFY_CONFIG from "./config";

function randomString(length: number) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

export function login() {
  const state = randomString(32);
  const codeVerifier = randomString(64);

  sessionStorage.setItem("shopify_state", state);
  sessionStorage.setItem("shopify_verifier", codeVerifier);

  const params = new URLSearchParams({
    client_id: SHOPIFY_CONFIG.customerClientId,
    response_type: "code",
    redirect_uri: `${window.location.origin}/auth/callback`,
    scope: "openid email customer-account-api:full",

    state,
    code_challenge: codeVerifier,
    code_challenge_method: "plain",
  });

  window.location.href =
    `${SHOPIFY_CONFIG.authUrl}?${params.toString()}`;
}