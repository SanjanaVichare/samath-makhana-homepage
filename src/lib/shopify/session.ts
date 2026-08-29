export const AUTH_EVENT = "samarth:auth-changed";

const ACCESS_TOKEN = "shopify_access_token";
const ID_TOKEN = "shopify_id_token";
const EXPIRES_AT = "shopify_token_expires_at";
const REFRESH_TOKEN = "shopify_refresh_token";

export type TokenPayload = {
  access_token: string;
  id_token?: string;
  refresh_token?: string;
  expires_in?: number;
};

/**
 * Save the Shopify Customer Account session.
 */
export function saveSession(token: TokenPayload) {
  sessionStorage.setItem(
    ACCESS_TOKEN,
    token.access_token,
  );

  if (token.id_token) {
    sessionStorage.setItem(
      ID_TOKEN,
      token.id_token,
    );
  }

  if (token.refresh_token) {
    sessionStorage.setItem(
      REFRESH_TOKEN,
      token.refresh_token,
    );
  }

  if (token.expires_in) {
    sessionStorage.setItem(
      EXPIRES_AT,
      String(
        Date.now() + token.expires_in * 1000,
      ),
    );
  }

  emitAuthChange();
}

/**
 * Get the current Shopify access token.
 *
 * Automatically clears the session if the token
 * has expired.
 */
export function getAccessToken() {
  if (typeof window === "undefined") {
    return null;
  }

  const token =
    sessionStorage.getItem(ACCESS_TOKEN);

  if (!token) {
    return null;
  }

  const expiresAt =
    sessionStorage.getItem(EXPIRES_AT);

  if (
    expiresAt &&
    Number(expiresAt) <= Date.now()
  ) {
    clearSession();
    return null;
  }

  return token;
}

/**
 * Get the Shopify ID token.
 */
export function getIdToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return sessionStorage.getItem(ID_TOKEN);
}

/**
 * Clear the Shopify authentication session.
 */
export function clearSession() {
  [
    ACCESS_TOKEN,
    ID_TOKEN,
    EXPIRES_AT,
    REFRESH_TOKEN,
    "shopify_state",
    "shopify_code_verifier",
    "shopify_return_to",
  ].forEach((key) =>
    sessionStorage.removeItem(key),
  );

  emitAuthChange();
}

/**
 * Notify the application that authentication
 * state has changed.
 */
export function emitAuthChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new Event(AUTH_EVENT),
    );
  }
}