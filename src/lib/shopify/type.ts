export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ShopifyResponse<T> {
  data: T;
}