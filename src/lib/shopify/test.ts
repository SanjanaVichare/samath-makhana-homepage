import { shopifyFetch } from "./client";

export async function testShopifyConnection() {
  const data = await shopifyFetch(`
    query {
      shop {
        name
      }
    }
  `);

  console.log(data);
}