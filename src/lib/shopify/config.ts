export const SHOPIFY_CONFIG = {
  storeDomain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
  storefrontToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN,

  customerClientId: import.meta.env.VITE_SHOPIFY_CUSTOMER_CLIENT_ID,

  authUrl: import.meta.env.VITE_SHOPIFY_AUTH_URL,
  tokenUrl: import.meta.env.VITE_SHOPIFY_TOKEN_URL,
  logoutUrl: import.meta.env.VITE_SHOPIFY_LOGOUT_URL,
};

export default SHOPIFY_CONFIG;