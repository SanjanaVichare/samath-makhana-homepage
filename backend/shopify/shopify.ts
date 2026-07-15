import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const shopify = axios.create({
    baseURL: `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2025-07/graphql.json`,

    headers: {
        "Content-Type": "application/json",

        "X-Shopify-Storefront-Access-Token":
            process.env.SHOPIFY_STOREFRONT_TOKEN!,
    },
});

console.log("Store:", process.env.SHOPIFY_STORE_DOMAIN);
console.log("Token:", process.env.SHOPIFY_STOREFRONT_TOKEN);