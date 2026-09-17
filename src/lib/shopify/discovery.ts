import SHOPIFY_CONFIG from "./config";

type ShopifyAuthDiscovery = {
    authorization_endpoint: string;
    token_endpoint: string;
    end_session_endpoint: string;
    issuer?: string;
    jwks_uri?: string;
};

type ShopifyCustomerApiDiscovery = {
    graphql_api: string;
    mcp_api?: string;
};

let authDiscoveryPromise:
    | Promise<ShopifyAuthDiscovery>
    | null = null;

let customerApiDiscoveryPromise:
    | Promise<ShopifyCustomerApiDiscovery>
    | null = null;

function getStoreDomain() {
    if (!SHOPIFY_CONFIG.storeDomain) {
        throw new Error(
            "VITE_SHOPIFY_STORE_DOMAIN is not configured.",
        );
    }

    return SHOPIFY_CONFIG.storeDomain;
}

export async function getAuthDiscovery(): Promise<ShopifyAuthDiscovery> {
    if (!authDiscoveryPromise) {
        authDiscoveryPromise = fetch(
            `https://${getStoreDomain()}/.well-known/openid-configuration`,
        ).then(async (response) => {
            if (!response.ok) {
                throw new Error(
                    `Shopify OpenID discovery failed (${response.status}).`,
                );
            }

            return response.json();
        });
    }

    return authDiscoveryPromise;
}

export async function getCustomerApiDiscovery(): Promise<ShopifyCustomerApiDiscovery> {
    if (!customerApiDiscoveryPromise) {
        customerApiDiscoveryPromise = fetch(
            `https://${getStoreDomain()}/.well-known/customer-account-api`,
        ).then(async (response) => {
            if (!response.ok) {
                throw new Error(
                    `Shopify Customer API discovery failed (${response.status}).`,
                );
            }

            return response.json();
        });
    }

    return customerApiDiscoveryPromise;
}