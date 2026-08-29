import SHOPIFY_CONFIG from "./config";
import { getAccessToken } from "./session";
import type { ShopifyCustomer, ShopifyCustomerAddress, ShopifyOrder } from "./types";

export class NotAuthenticatedError extends Error {}

export async function shopifyCustomerQuery<T = any>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T> {
  const accessToken = getAccessToken();

  if (!accessToken) {
    throw new NotAuthenticatedError("Customer is not logged in");
  }

  const response = await fetch(
    `https://${SHOPIFY_CONFIG.storeDomain}/customer/api/${SHOPIFY_CONFIG.storefrontApiVersion}/graphql`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },

      body: JSON.stringify({ query, variables }),
    },
  );

  const data = await response.json().catch(() => null);

  if (response.status === 401) {
    throw new NotAuthenticatedError("Customer session expired");
  }

  if (!response.ok) {
    throw new Error(data?.errors?.[0]?.message || "Shopify Customer API request failed");
  }

  if (data?.errors?.length) {
    throw new Error(data.errors[0]?.message || "Shopify GraphQL request failed");
  }

  return data.data as T;
}

const CUSTOMER_QUERY = `
  query GetCustomer {
    customer {
      id
      firstName
      lastName
      displayName
      emailAddress { emailAddress }
      phoneNumber { phoneNumber }
    }
  }
`;

export async function getCustomer(): Promise<ShopifyCustomer | null> {
  const data = await shopifyCustomerQuery<any>(CUSTOMER_QUERY);
  const c = data?.customer;
  if (!c) return null;

  return {
    id: c.id,
    firstName: c.firstName ?? null,
    lastName: c.lastName ?? null,
    displayName: c.displayName ?? null,
    email: c.emailAddress?.emailAddress ?? null,
    phone: c.phoneNumber?.phoneNumber ?? null,
  };
}

const ORDERS_QUERY = `
  query GetOrders($first: Int!) {
    customer {
      orders(first: $first, sortKey: PROCESSED_AT, reverse: true) {
        nodes {
          id
          name
          processedAt
          financialStatus
          fulfillments(first: 1) { nodes { status } }
          statusPageUrl
          totalPrice { amount currencyCode }
        }
      }
    }
  }
`;

export async function getOrders(first = 20): Promise<ShopifyOrder[]> {
  const data = await shopifyCustomerQuery<any>(ORDERS_QUERY, { first });

  return (data?.customer?.orders?.nodes ?? []).map((o: any) => ({
    id: o.id,
    name: o.name,
    processedAt: o.processedAt,
    financialStatus: o.financialStatus ?? null,
    fulfillmentStatus: o.fulfillments?.nodes?.[0]?.status ?? null,
    total: formatMoney(o.totalPrice),
    statusPageUrl: o.statusPageUrl ?? null,
  }));
}

const ADDRESSES_QUERY = `
  query GetAddresses($first: Int!) {
    customer {
      addresses(first: $first) {
        nodes {
          id
          firstName
          lastName
          address1
          address2
          city
          zoneCode
          territoryCode
          zip
          phoneNumber
        }
      }
    }
  }
`;

export async function getAddresses(first = 10): Promise<ShopifyCustomerAddress[]> {
  const data = await shopifyCustomerQuery<any>(ADDRESSES_QUERY, { first });
  return data?.customer?.addresses?.nodes ?? [];
}

export function formatMoney(money?: { amount?: string; currencyCode?: string } | null) {
  if (!money?.amount) return "—";
  const amount = Number(money.amount);
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: money.currencyCode || "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `₹${Math.round(amount)}`;
  }
}
