export type ShopifyVariant = {
  id: string;
  title: string;
  /** Normalised weight label, e.g. "90g" */
  weight: string;
  price: number;
  compareAtPrice: number | null;
  availableForSale: boolean;
  sku: string | null;
  image: string | null;
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  availableForSale: boolean;
  images: string[];
  variants: ShopifyVariant[];
};

export type ShopifyCartLine = {
  id: string;
  quantity: number;
  variantId: string;
};

export type ShopifyCart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: ShopifyCartLine[];
};

export type ShopifyCustomerAddress = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  address1: string | null;
  address2: string | null;
  city: string | null;
  zoneCode: string | null;
  territoryCode: string | null;
  zip: string | null;
  phoneNumber: string | null;
};

export type ShopifyCustomer = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  displayName: string | null;
  email: string | null;
  phone: string | null;
};

export type ShopifyOrder = {
  id: string;
  name: string;
  processedAt: string;
  financialStatus: string | null;
  fulfillmentStatus: string | null;
  total: string;
  statusPageUrl: string | null;
};
