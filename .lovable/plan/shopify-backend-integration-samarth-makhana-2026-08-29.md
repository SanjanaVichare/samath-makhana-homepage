# Shopify Backend Integration — Samarth Makhana

Goal: put Shopify behind the existing site. No visual redesign; only data sources, state and error/loading wiring change.

## 1. What the project looks like today

- TanStack Start (file routes in `src/routes`), React 19, Tailwind v4, framer-motion.
- Products are **static**: `src/data/products.ts` (hand-written names, taglines, nutrition, benefits, sizes, local PNG assets for packets + bowls).
- Cart is **local only**: `src/context/CartContext.tsx`, `localStorage` key `PRAM_cart_v1`, keyed by `id + weight`.
- Checkout does not exist — the cart page's button links to `/contact`.
- Shopify layer already partly exists in `src/lib/shopify/`: `config.ts` (env), `client.ts` (Storefront fetch), `auth.ts` (Customer Account OAuth + PKCE), `customer.ts` / `getcustomer.ts` (duplicated customer query), `usecustomer.ts`, `logout.ts`, `test.ts`, empty `graphql.ts`.
- `/login`, `/signup`, `/auth/callback` routes exist and already redirect into Shopify's hosted Customer Account login.
- No account, orders, addresses or checkout routes exist.
- A stray Express app under `backend/` contains **real Shopify credentials committed in `backend/.env`** and uses the deprecated `customerAccessTokenCreate` flow. It is not part of the deployed site.

## 2. Blockers you must resolve first

1. **Env values are empty in this project's `.env`** (only the variable names exist). Nothing can talk to Shopify until they're filled. Real values appear to live in `backend/.env` — those are Storefront token + Customer Account client ID for store `wscasb-9h.myshopify.com`.
2. **`backend/.env` has committed secrets.** Recommend rotating the Storefront token after this work.
3. **Email/password login and signup are not possible on Shopify's new Customer Account API.** Shopify removed `customerAccessTokenCreate`/`customerCreate` from the Storefront API for new customer accounts; login, signup and Google sign-in all go through Shopify's hosted OAuth page. So the existing "Continue to Login" / "Create Account" buttons stay exactly as they are (they already redirect correctly) — I will not fake an email/password form against Shopify.
4. **Google sign-in is a Shopify Admin setting**, not frontend code: Settings → Customer accounts → Login with Google. Once enabled, the Google button appears on Shopify's hosted login page. Your existing button stays and simply starts the same OAuth flow.
5. **Product mapping**: Shopify has no equivalent of your local nutrition/benefits/ingredients/story copy or your packet+bowl artwork. Plan below keeps that presentation data local and pulls price / variant / availability / IDs from Shopify, matched by product handle.

## 3. Approach

**Products (hybrid, presentation stays local)**
- Add `handle` to each entry in `src/data/products.ts` (data only — no UI change).
- New `src/lib/shopify/products.ts`: fetch products/variants (title, price, compareAtPrice, availableForSale, variant id, sku, images) by handle.
- New `src/hooks/useShopifyProducts.ts` (TanStack Query, already installed): merges Shopify commerce data onto the local product objects. When Shopify is unreachable or a handle is missing, the existing local price/size list renders as today, so the site never breaks.
- Shop page and product detail page keep their exact markup; they read price/availability/variant id from the merged object. Size selector maps to Shopify variants.

**Cart (Shopify Cart API, existing UI)**
- New `src/lib/shopify/cart.ts`: `cartCreate`, `cartLinesAdd`, `cartLinesUpdate`, `cartLinesRemove`, `cart` query, returning `checkoutUrl`.
- Rewrite the internals of `CartContext` only — same exported API (`items`, `add`, `remove`, `setQty`, `clear`, `count`, `subtotal`) plus `checkoutUrl` and `loading`. Cart ID persisted in `localStorage` (`cartId` is not a credential); line items come from Shopify. Navbar, cart page and product page keep their current code paths.

**Checkout**
- The existing cart-page button points to Shopify's `cart.checkoutUrl` instead of `/contact`. No custom checkout UI.

**Auth (consolidate what exists)**
- Keep `auth.ts` PKCE flow. Add `?redirect=` return-URL handling in `auth.ts` + `auth.callback.tsx`.
- Collapse the duplicate customer fetchers: keep `src/lib/shopify/customer.ts` as the single Customer Account API client + `getCustomer()`; delete `getcustomer.ts`, `usecustomer.ts`, `test.ts`, empty `graphql.ts`.
- New `src/context/AuthContext.tsx`: single `loading | authenticated | unauthenticated` state, token expiry check, mounted in `__root.tsx`.
- Navbar's existing account link reflects state (same markup, different label/target). Logout uses existing `logout.ts`.

**Account pages (new routes, built from existing design tokens only)**
- `/account` (profile), `/account/orders`, `/account/addresses`, using Customer Account API queries/mutations, guarded by a `useRequireAuth` hook that redirects to `/login?redirect=…`. These are new pages because no account UI exists; they reuse existing typography/colour classes.

**Errors & loading**
- All Shopify calls go through typed helpers with error results; surfaced via `sonner` toasts (already a dependency) and inline states matching current styling. No `alert()` added beyond ones already present.

**Cleanup**
- Delete the unused `backend/` Express app (it holds committed secrets and a deprecated auth flow). Say the word if you'd rather keep it.

## 4. Files

Create: `src/lib/shopify/products.ts`, `src/lib/shopify/cart.ts`, `src/lib/shopify/types.ts`, `src/hooks/useShopifyProducts.ts`, `src/hooks/useRequireAuth.ts`, `src/context/AuthContext.tsx`, `src/routes/account.tsx`, `src/routes/account.index.tsx`, `src/routes/account.orders.tsx`, `src/routes/account.addresses.tsx`.

Modify: `src/context/CartContext.tsx` (Shopify cart), `src/data/products.ts` (add handles), `src/routes/shop.tsx` + `src/routes/product.$productId.tsx` (bind to Shopify data), `src/routes/cart.tsx` (checkout URL), `src/components/layout/Navbar.tsx` (auth state on existing markup), `src/routes/__root.tsx` (AuthProvider), `src/routes/login.tsx` / `signup.tsx` / `auth.callback.tsx` (return URL), `src/lib/shopify/customer.ts`, `src/lib/shopify/config.ts` (API version fallback).

Delete: `src/lib/shopify/getcustomer.ts`, `usecustomer.ts`, `test.ts`, `graphql.ts`, and the `backend/` folder.

## 5. Environment variables (all already named in your `.env`)

| Variable | Purpose | Client/Server | Required |
|---|---|---|---|
| `VITE_SHOPIFY_STORE_DOMAIN` | `xxx.myshopify.com` | Client | Yes |
| `VITE_SHOPIFY_STOREFRONT_API_VERSION` | e.g. `2025-07` | Client | Yes |
| `VITE_SHOPIFY_STOREFRONT_PUBLIC_TOKEN` | Public Storefront token (safe in browser) | Client | Yes |
| `VITE_SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID` | Customer Account API public client ID | Client | Yes |
| `VITE_SHOPIFY_AUTHORIZATION_ENDPOINT` | OAuth authorize URL | Client | Yes |
| `VITE_SHOPIFY_TOKEN_ENDPOINT` | OAuth token URL | Client | Yes |
| `VITE_SHOPIFY_LOGOUT_ENDPOINT` | OAuth logout URL (currently a placeholder in `backend/.env`) | Client | Yes |
| `VITE_SHOPIFY_REDIRECT_URI` | e.g. `https://yourdomain.com/auth/callback` | Client | Yes |

No Admin API token is used, so nothing secret reaches the browser.

## 6. Shopify Admin checklist

- Storefront API: headless/custom app installed, scopes `unauthenticated_read_product_listings`, `unauthenticated_read_product_inventory`, `unauthenticated_write_checkouts`, `unauthenticated_read_checkouts`.
- All products published to the Headless/Storefront sales channel; handles must match what I put in `products.ts`.
- Customer Account API: public client (PKCE), scopes `openid email customer-account-api:full`.
- Callback URLs: `http://localhost:8080/auth/callback`, your Lovable preview URL `/auth/callback`, and your production `/auth/callback`.
- Logout URLs and JavaScript origins for the same three origins.
- Customer accounts set to "Customer Accounts" (new), and Login with Google enabled there.
- Checkout, shipping zones and a payment provider active, or checkout URLs will error.
