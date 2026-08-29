import SHOPIFY_CONFIG from "./config";

export function logout() {
    const idToken =
        sessionStorage.getItem(
            "shopify_id_token"
        );

    sessionStorage.removeItem(
        "shopify_access_token"
    );

    sessionStorage.removeItem(
        "shopify_id_token"
    );

    sessionStorage.removeItem(
        "shopify_token_expires_at"
    );

    sessionStorage.removeItem(
        "shopify_state"
    );

    sessionStorage.removeItem(
        "shopify_code_verifier"
    );

    const params =
        new URLSearchParams();

    if (idToken) {
        params.set(
            "id_token_hint",
            idToken
        );
    }

    params.set(
        "post_logout_redirect_uri",
        window.location.origin
    );

    window.location.href =
        `${SHOPIFY_CONFIG.logoutUrl}?${params.toString()}`;
}