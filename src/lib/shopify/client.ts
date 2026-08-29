import SHOPIFY_CONFIG, { isStorefrontConfigured } from "./config";

export class ShopifyError extends Error {}

export function storefrontEndpoint() {
  return `https://${SHOPIFY_CONFIG.storeDomain}/api/${SHOPIFY_CONFIG.storefrontApiVersion}/graphql.json`;
}

export async function shopifyFetch<T = any>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
  if (!isStorefrontConfigured()) {
    throw new ShopifyError(
      "Shopify Storefront API is not configured. Set VITE_SHOPIFY_STORE_DOMAIN and VITE_SHOPIFY_STOREFRONT_PUBLIC_TOKEN.",
    );
  }

  let response: Response;

  try {
    response = await fetch(storefrontEndpoint(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_CONFIG.storefrontToken as string,
      },
      body: JSON.stringify({ query, variables }),
    });
  } catch (err) {
    throw new ShopifyError("Could not reach Shopify. Please check your connection.");
  }

  const json = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ShopifyError(
      `Shopify request failed (${response.status}). Check your Storefront token and API version.`,
    );
  }

  if (json?.errors?.length) {
    throw new ShopifyError(json.errors[0]?.message ?? "Shopify GraphQL request failed");
  }

  return json.data as T;
}
