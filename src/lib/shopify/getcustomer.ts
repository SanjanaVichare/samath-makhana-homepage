import { shopifyCustomerQuery } from "./customer";

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

export async function getCustomer() {
    const data = await shopifyCustomerQuery(
        CUSTOMER_QUERY
    );

    return data.data?.customer ?? null;
}