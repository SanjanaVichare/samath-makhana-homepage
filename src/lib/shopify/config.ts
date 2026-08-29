const SHOPIFY_CONFIG = {
  storeDomain:
    import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,

  storefrontApiVersion:
    import.meta.env
      .VITE_SHOPIFY_STOREFRONT_API_VERSION,

  storefrontToken:
    import.meta.env
      .VITE_SHOPIFY_STOREFRONT_PUBLIC_TOKEN,

  customerClientId:
    import.meta.env
      .VITE_SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID,

  authUrl:
    import.meta.env
      .VITE_SHOPIFY_AUTHORIZATION_ENDPOINT,

  tokenUrl:
    import.meta.env
      .VITE_SHOPIFY_TOKEN_ENDPOINT,

  logoutUrl:
    import.meta.env
      .VITE_SHOPIFY_LOGOUT_ENDPOINT,

  redirectUri:
    import.meta.env
      .VITE_SHOPIFY_REDIRECT_URI,
};

export default SHOPIFY_CONFIG;