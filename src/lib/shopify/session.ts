import SHOPIFY_CONFIG from "./config";
import { getAuthDiscovery } from "./discovery";

export const AUTH_EVENT =
  "samarth:auth-changed";

const ACCESS_TOKEN =
  "shopify_access_token";

const ID_TOKEN =
  "shopify_id_token";

const EXPIRES_AT =
  "shopify_token_expires_at";

const REFRESH_TOKEN =
  "shopify_refresh_token";

export type TokenPayload = {
  access_token: string;
  id_token?: string;
  refresh_token?: string;
  expires_in?: number;
};

export function saveSession(
  token: TokenPayload,
) {
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
        Date.now() +
        token.expires_in * 1000,
      ),
    );
  }

  emitAuthChange();
}

export function getStoredRefreshToken() {
  if (
    typeof window === "undefined"
  ) {
    return null;
  }

  return sessionStorage.getItem(
    REFRESH_TOKEN,
  );
}

export function getAccessToken() {
  if (
    typeof window === "undefined"
  ) {
    return null;
  }

  const token =
    sessionStorage.getItem(
      ACCESS_TOKEN,
    );

  if (!token) {
    return null;
  }

  return token;
}

export function getTokenExpiresAt() {
  if (
    typeof window === "undefined"
  ) {
    return null;
  }

  const value =
    sessionStorage.getItem(
      EXPIRES_AT,
    );

  if (!value) {
    return null;
  }

  return Number(value);
}

export function isTokenExpired(
  bufferSeconds = 30,
) {
  const expiresAt =
    getTokenExpiresAt();

  if (!expiresAt) {
    return false;
  }

  return (
    expiresAt <=
    Date.now() +
    bufferSeconds * 1000
  );
}

export async function refreshAccessToken() {
  const refreshToken =
    getStoredRefreshToken();

  if (!refreshToken) {
    return null;
  }

  if (!SHOPIFY_CONFIG.customerClientId) {
    throw new Error(
      "Shopify Customer Account Client ID is missing.",
    );
  }

  const discovery =
    await getAuthDiscovery();

  const tokenUrl =
    discovery.token_endpoint ||
    SHOPIFY_CONFIG.tokenUrl;

  if (!tokenUrl) {
    throw new Error(
      "Shopify token endpoint is missing.",
    );
  }

  const body =
    new URLSearchParams();

  body.set(
    "grant_type",
    "refresh_token",
  );

  body.set(
    "client_id",
    SHOPIFY_CONFIG.customerClientId,
  );

  body.set(
    "refresh_token",
    refreshToken,
  );

  const response =
    await fetch(tokenUrl, {
      method: "POST",

      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded",
      },

      body: body.toString(),
    });

  const data =
    await response
      .json()
      .catch(() => null);

  if (!response.ok) {
    clearSession();

    throw new Error(
      data?.error_description ||
      data?.error ||
      "Unable to refresh Shopify session.",
    );
  }

  if (!data?.access_token) {
    clearSession();

    throw new Error(
      "Shopify did not return a refreshed access token.",
    );
  }

  saveSession(data);

  return data.access_token as string;
}

export async function getValidAccessToken() {
  const token =
    getAccessToken();

  if (!token) {
    return null;
  }

  if (!isTokenExpired()) {
    return token;
  }

  return refreshAccessToken();
}

export function getIdToken() {
  if (
    typeof window === "undefined"
  ) {
    return null;
  }

  return sessionStorage.getItem(
    ID_TOKEN,
  );
}

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

export function emitAuthChange() {
  if (
    typeof window !== "undefined"
  ) {
    window.dispatchEvent(
      new Event(AUTH_EVENT),
    );
  }
}