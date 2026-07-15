import SHOPIFY_CONFIG from "./config";

const API_VERSION = "2025-07";

const SHOPIFY_ENDPOINT = `https://${SHOPIFY_CONFIG.storeDomain}/api/${API_VERSION}/graphql.json`;

export async function shopifyFetch(query: string, variables = {}) {
  const response = await fetch(SHOPIFY_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token":
        SHOPIFY_CONFIG.storefrontToken,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await response.json();

  if (json.errors) {
    throw new Error(JSON.stringify(json.errors));
  }

  return json.data;
}