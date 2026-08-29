import SHOPIFY_CONFIG from "./config";

export async function shopifyCustomerQuery(
    query: string,
    variables: Record<string, unknown> = {}
) {
    const accessToken = sessionStorage.getItem(
        "shopify_access_token"
    );

    if (!accessToken) {
        throw new Error("Customer is not logged in");
    }

    const response = await fetch(
        `https://${SHOPIFY_CONFIG.storeDomain}/customer/api/${SHOPIFY_CONFIG.storefrontApiVersion}/graphql`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },

            body: JSON.stringify({
                query,
                variables,
            }),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        console.error(
            "Shopify Customer API error:",
            data
        );

        throw new Error(
            data?.errors?.[0]?.message ||
            "Shopify Customer API request failed"
        );
    }

    if (data.errors) {
        console.error(
            "Shopify GraphQL errors:",
            data.errors
        );

        throw new Error(
            data.errors[0]?.message ||
            "Shopify GraphQL request failed"
        );
    }

    return data;
}


// -----------------------------------------
// Get currently logged-in customer
// -----------------------------------------

export async function getCustomer() {
    const CUSTOMER_QUERY = `
    query GetCustomer {
      customer {
        id
        firstName
        lastName
        displayName

        emailAddress {
          emailAddress
        }
      }
    }
  `;

    const data = await shopifyCustomerQuery(
        CUSTOMER_QUERY
    );

    return data.data?.customer ?? null;
}