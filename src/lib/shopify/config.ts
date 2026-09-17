const env = import.meta.env;

const SHOPIFY_CONFIG = {
  storeDomain:
    env.VITE_SHOPIFY_STORE_DOMAIN as string | undefined,

  storefrontApiVersion:
    (env.VITE_SHOPIFY_STOREFRONT_API_VERSION as
      | string
      | undefined) || "2026-07",

  storefrontToken:
    env.VITE_SHOPIFY_STOREFRONT_PUBLIC_TOKEN as
    | string
    | undefined,

  customerClientId:
    env.VITE_SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID as
    | string
    | undefined,

  // Fallbacks only. We prefer Shopify discovery endpoints.
  authUrl:
    env.VITE_SHOPIFY_AUTHORIZATION_ENDPOINT as
    | string
    | undefined,

  tokenUrl:
    env.VITE_SHOPIFY_TOKEN_ENDPOINT as
    | string
    | undefined,

  logoutUrl:
    env.VITE_SHOPIFY_LOGOUT_ENDPOINT as
    | string
    | undefined,

  redirectUri:
    env.VITE_SHOPIFY_REDIRECT_URI as
    | string
    | undefined,
};

export const isStorefrontConfigured = () =>
  Boolean(
    SHOPIFY_CONFIG.storeDomain &&
    SHOPIFY_CONFIG.storefrontToken,
  );

export const getMissingCustomerAuthConfig = () => {
  const missing: string[] = [];

  if (!SHOPIFY_CONFIG.storeDomain) {
    missing.push("VITE_SHOPIFY_STORE_DOMAIN");
  }

  if (!SHOPIFY_CONFIG.customerClientId) {
    missing.push(
      "VITE_SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID",
    );
  }

  if (
    !SHOPIFY_CONFIG.redirectUri &&
    typeof window === "undefined"
  ) {
    missing.push("VITE_SHOPIFY_REDIRECT_URI");
  }

  return missing;
};

export const isCustomerAuthConfigured = () =>
  getMissingCustomerAuthConfig().length === 0;

export default SHOPIFY_CONFIG;