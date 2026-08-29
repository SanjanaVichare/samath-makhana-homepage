import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import SHOPIFY_CONFIG from "@/lib/shopify/config";

import {
  consumeReturnTo,
  getRedirectUri,
} from "@/lib/shopify/auth";

import { saveSession } from "@/lib/shopify/session";

export const Route = createFileRoute(
  "/auth/callback",
)({
  component: AuthCallbackPage,
});

function AuthCallbackPage() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;

    hasRun.current = true;

    handleCallback();
  }, []);

  async function handleCallback() {
    try {
      const params = new URLSearchParams(
        window.location.search,
      );

      const code = params.get("code");
      const state = params.get("state");
      const error = params.get("error");
      const errorDescription =
        params.get("error_description");

      console.log("Shopify callback:", {
        hasCode: Boolean(code),
        hasState: Boolean(state),
        error,
        errorDescription,
      });

      // --------------------------------
      // Shopify returned an error
      // --------------------------------

      if (error) {
        console.error(
          "Shopify authentication error:",
          error,
          errorDescription,
        );

        window.location.replace("/login");

        return;
      }

      // --------------------------------
      // Check authorization code
      // --------------------------------

      if (!code) {
        console.error(
          "No authorization code returned by Shopify.",
        );

        window.location.replace("/login");

        return;
      }

      // --------------------------------
      // Validate OAuth state
      // --------------------------------

      const savedState =
        sessionStorage.getItem(
          "shopify_state",
        );

      if (!state || !savedState) {
        console.error(
          "Missing OAuth state.",
        );

        window.location.replace("/login");

        return;
      }

      if (state !== savedState) {
        console.error(
          "OAuth state mismatch.",
        );

        sessionStorage.removeItem(
          "shopify_state",
        );

        sessionStorage.removeItem(
          "shopify_code_verifier",
        );

        window.location.replace("/login");

        return;
      }

      // --------------------------------
      // Get PKCE verifier
      // --------------------------------

      const codeVerifier =
        sessionStorage.getItem(
          "shopify_code_verifier",
        );

      if (!codeVerifier) {
        console.error(
          "Missing Shopify PKCE code verifier.",
        );

        window.location.replace("/login");

        return;
      }

      // --------------------------------
      // Check Shopify configuration
      // --------------------------------

      const {
        customerClientId,
        tokenUrl,
      } = SHOPIFY_CONFIG;

      if (!customerClientId || !tokenUrl) {
        throw new Error(
          "Shopify Customer Account API is not configured correctly.",
        );
      }

      // --------------------------------
      // Get redirect URI
      // --------------------------------

      const redirectUri =
        getRedirectUri();

      console.log(
        "Exchanging Shopify authorization code...",
      );

      // --------------------------------
      // Exchange authorization code
      // --------------------------------

      const tokenResponse = await fetch(
        tokenUrl,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },

          body: new URLSearchParams({
            grant_type:
              "authorization_code",

            client_id:
              customerClientId,

            redirect_uri:
              redirectUri,

            code,

            code_verifier:
              codeVerifier,
          }).toString(),
        },
      );

      // --------------------------------
      // Parse token response
      // --------------------------------

      const tokenData =
        await tokenResponse.json();

      console.log(
        "Shopify token response:",
        {
          ok: tokenResponse.ok,

          hasAccessToken:
            Boolean(
              tokenData.access_token,
            ),
        },
      );

      // --------------------------------
      // Handle failed token exchange
      // --------------------------------

      if (!tokenResponse.ok) {
        console.error(
          "Shopify token exchange failed:",
          tokenData,
        );

        throw new Error(
          tokenData.error_description ||
          tokenData.error ||
          "Token exchange failed",
        );
      }

      // --------------------------------
      // Verify access token
      // --------------------------------

      if (!tokenData.access_token) {
        throw new Error(
          "Shopify did not return an access token.",
        );
      }

      // --------------------------------
      // Save Shopify session
      // --------------------------------

      saveSession(tokenData);

      // --------------------------------
      // Remove temporary OAuth data
      // --------------------------------

      sessionStorage.removeItem(
        "shopify_state",
      );

      sessionStorage.removeItem(
        "shopify_code_verifier",
      );

      console.log(
        "Shopify login successful!",
      );

      // --------------------------------
      // Return to original page
      // --------------------------------

      const returnTo =
        consumeReturnTo();

      window.location.replace(
        returnTo,
      );
    } catch (error) {
      console.error(
        "Shopify authentication callback failed:",
        error,
      );

      // --------------------------------
      // Clean temporary OAuth data
      // --------------------------------

      sessionStorage.removeItem(
        "shopify_state",
      );

      sessionStorage.removeItem(
        "shopify_code_verifier",
      );

      alert(
        "Login failed. Please try again.",
      );

      window.location.replace(
        "/login",
      );
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md">
        <div className="mx-auto mb-5 w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin" />

        <h1 className="text-2xl font-semibold">
          Signing you in...
        </h1>

        <p className="text-gray-500 mt-2">
          Please wait while we finish setting up
          your account.
        </p>
      </div>
    </div>
  );
}