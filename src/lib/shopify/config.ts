const env = import.meta.env;

const SHOPIFY_CONFIG = {
  storeDomain:
    env.VITE_SHOPIFY_STORE_DOMAIN as string | undefined,

  storefrontApiVersion:
    (env.VITE_SHOPIFY_STOREFRONT_API_VERSION as
      | string
      | undefined) || "2025-07",

  storefrontToken:
    env.VITE_SHOPIFY_STOREFRONT_PUBLIC_TOKEN as
    | string
    | undefined,

  customerClientId:
    env.VITE_SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID as
    | string
    | undefined,

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

/**
 * True when the Storefront API can be reached
 * for products, cart and checkout.
 */
export const isStorefrontConfigured = () =>
  Boolean(
    SHOPIFY_CONFIG.storeDomain &&
    SHOPIFY_CONFIG.storefrontToken,
  );

/**
 * Returns the Customer Account API configuration
 * variables that are currently missing.
 *
 * This is useful for debugging deployment
 * environment-variable problems.
 */
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

  if (!SHOPIFY_CONFIG.authUrl) {
    missing.push(
      "VITE_SHOPIFY_AUTHORIZATION_ENDPOINT",
    );
  }

  if (!SHOPIFY_CONFIG.tokenUrl) {
    missing.push(
      "VITE_SHOPIFY_TOKEN_ENDPOINT",
    );
  }

  return missing;
};

/**
 * True when Shopify hosted customer accounts
 * using OAuth/PKCE can be used.
 */
export const isCustomerAuthConfigured = () =>
  getMissingCustomerAuthConfig().length === 0;

export default SHOPIFY_CONFIG;