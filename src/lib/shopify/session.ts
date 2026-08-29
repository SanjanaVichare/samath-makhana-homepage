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

export function saveSession(token: TokenPayload) {
  sessionStorage.setItem(ACCESS_TOKEN, token.access_token);

  if (token.id_token) sessionStorage.setItem(ID_TOKEN, token.id_token);
  if (token.refresh_token) sessionStorage.setItem(REFRESH_TOKEN, token.refresh_token);

  if (token.expires_in) {
    sessionStorage.setItem(EXPIRES_AT, String(Date.now() + token.expires_in * 1000));
  }

  emitAuthChange();
}

export function getAccessToken() {
  if (typeof window === "undefined") return null;

  const token = sessionStorage.getItem(ACCESS_TOKEN);
  if (!token) return null;

  const expiresAt = sessionStorage.getItem(EXPIRES_AT);
  if (expiresAt && Number(expiresAt) <= Date.now()) {
    clearSession();
    return null;
  }

  return token;
}

export function getIdToken() {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(ID_TOKEN);
}

export function clearSession() {
  [ACCESS_TOKEN, ID_TOKEN, EXPIRES_AT, REFRESH_TOKEN, "shopify_state", "shopify_code_verifier"].forEach(
    (k) => sessionStorage.removeItem(k),
  );
}

export function emitAuthChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUTH_EVENT));
  }
}
