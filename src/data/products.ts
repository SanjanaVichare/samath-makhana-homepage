import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";
import pcp from "@/assets/packet-chat-pata.png";
import pcp1 from "@/assets/packet-peri-peri.png";
import pcp2 from "@/assets/packet-cheese.png";
import pcp3 from "@/assets/packet-pudina.png";
import pcp4 from "@/assets/packet-salt-pepper.png";
import pcp5 from "@/assets/packet-cream-onion.png";
import cookiep from "@/assets/cookie-pattern.png";
import cookiesf from "@/assets/cookie-pattern.png";

import pClassic from "@/assets/product-classic.jpg";
import pSpiced from "@/assets/product-spiced.jpg";
import pCookies from "@/assets/product-cookies.jpg";

export type ProductSize = { weight: string; price: number, image: string; };
export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "Makhana" | "Cookies";
  badge?: "Best Seller" | "Organic" | "New" | "Limited Edition";
  rating: number;
  reviews: number;
  ingredients: string[];
  nutrition: { label: string; value: string }[];
  storage: string;
  benefits: string[];
  sizes: ProductSize[];
  images: string[];
  tag: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "peri-peri-makhana",
    name: "Peri Peri Makhana",
    tagline: "Bold and fiery",
    description: "Bold, fiery and packed with smoky peri-peri flavour. Slow-roasted lotus seeds tossed in a small-batch peri peri spice blend.",
    category: "Makhana",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 312,
    ingredients: ["Lotus Seeds", "Peri Peri Spice Blend", "Cold-pressed Sunflower Oil", "Pink Himalayan Salt"],
    nutrition: [
      { label: "Energy", value: "385 kcal" },
      { label: "Protein", value: "9.7 g" },
      { label: "Carbs", value: "72 g" },
      { label: "Fat", value: "4.2 g" },
      { label: "Fiber", value: "14 g" },
    ],
    storage: "Store in a cool, dry place. Consume within 7 days of opening.",
    benefits: ["High protein", "Gluten free", "No preservatives", "Roasted, never fried"],
    sizes: [
      {
        weight: "30g",
        price: 99,
        image: pcp1,
      },
      {
        weight: "60g",
        price: 179,
        image: pcp1,
      },
      {
        weight: "120g",
        price: 329,
        image: pcp1,
      },
    ],
    images: [pSpiced, ig1, ig2],
    tag: "Spicy",
  },
  {
    id: "cheese-makhana",
    name: "Cheese Makhana",
    tagline: "Creamy & crunchy",
    description: "Creamy cheese seasoning with a perfectly crunchy bite. Real cheddar powder, never artificial.",
    category: "Makhana",
    badge: "Organic",
    rating: 4.8,
    reviews: 187,
    ingredients: ["Lotus Seeds", "Cheddar Cheese Powder", "Sunflower Oil", "Sea Salt"],
    nutrition: [
      { label: "Energy", value: "392 kcal" },
      { label: "Protein", value: "10.1 g" },
      { label: "Carbs", value: "70 g" },
      { label: "Fat", value: "5.4 g" },
      { label: "Fiber", value: "13 g" },
    ],
    storage: "Keep airtight, away from sunlight. Best within 7 days of opening.",
    benefits: ["Real cheese", "Gluten free", "High protein", "Kid-friendly"],
    sizes: [
      { weight: "30g", price: 99, image: pcp2, },
      { weight: "60g", price: 179, image: pcp2, },
      { weight: "120g", price: 329, image: pcp2, },
    ],
    images: [pClassic, ig3, ig4],
    tag: "Cheesy",
  },
  {
    id: "chat-pata-makhana",
    name: "Chat Pata Makhana",
    tagline: "Tangy desi twist",
    description: "Tangy Indian spices with a chatpata kick. The street-food snack, reimagined healthier.",
    category: "Makhana",
    rating: 4.7,
    reviews: 142,
    ingredients: ["Lotus Seeds", "Amchur", "Black Salt", "Chaat Masala", "Sunflower Oil"],
    nutrition: [
      { label: "Energy", value: "380 kcal" },
      { label: "Protein", value: "9.5 g" },
      { label: "Carbs", value: "71 g" },
      { label: "Fat", value: "4.0 g" },
      { label: "Fiber", value: "14 g" },
    ],
    storage: "Cool, dry place. Reseal after opening.",
    benefits: ["Low calorie", "Gluten free", "Vegan", "No fried"],
    sizes: [
      { weight: "30g", price: 89, image: pcp, },
      { weight: "60g", price: 169, image: pcp, },
      { weight: "120g", price: 309, image: pcp, },
    ],
    images: [ig5, ig1, ig2],
    tag: "Tangy",
  },
  {
    id: "cream-onion-makhana",
    name: "Cream & Onion Makhana",
    tagline: "Savoury and rich",
    description: "Rich cream balanced with savoury onion flavour. A familiar comfort, the wholesome way.",
    category: "Makhana",
    badge: "New",
    rating: 4.6,
    reviews: 98,
    ingredients: ["Lotus Seeds", "Onion Powder", "Cream Powder", "Sea Salt", "Sunflower Oil"],
    nutrition: [
      { label: "Energy", value: "388 kcal" },
      { label: "Protein", value: "9.8 g" },
      { label: "Carbs", value: "71 g" },
      { label: "Fat", value: "4.6 g" },
      { label: "Fiber", value: "13.5 g" },
    ],
    storage: "Cool, dry place. Consume within 7 days of opening.",
    benefits: ["High protein", "Gluten free", "No artificial colours"],
    sizes: [
      { weight: "30g", price: 99, image: pcp5, },
      { weight: "60g", price: 179, image: pcp5, },
      { weight: "120g", price: 329, image: pcp5, },
    ],
    images: [ig6, ig2, ig3],
    tag: "Popular",
  },
  {
    id: "pudina-makhana",
    name: "Pudina Makhana",
    tagline: "Refreshing mint",
    description: "Refreshing mint flavour with a crisp roasted finish.",
    category: "Makhana",
    rating: 4.5,
    reviews: 76,
    ingredients: ["Lotus Seeds", "Mint Powder", "Black Salt", "Sunflower Oil"],
    nutrition: [
      { label: "Energy", value: "378 kcal" },
      { label: "Protein", value: "9.4 g" },
      { label: "Carbs", value: "70 g" },
      { label: "Fat", value: "3.9 g" },
      { label: "Fiber", value: "14 g" },
    ],
    storage: "Cool, dry place.",
    benefits: ["Refreshing", "Aids digestion", "Vegan"],
    sizes: [
      { weight: "30g", price: 89, image: pcp3, },
      { weight: "60g", price: 169, image: pcp3, },
      { weight: "120g", price: 309, image: pcp3, },
    ],
    images: [ig2, ig1, ig5],
    tag: "Fresh",
  },
  {
    id: "salt-pepper-makhana",
    name: "Salt & Pepper Makhana",
    tagline: "Classic & addictive",
    description: "Simple, classic and incredibly addictive. The original way to enjoy makhana.",
    category: "Makhana",
    badge: "Organic",
    rating: 4.8,
    reviews: 221,
    ingredients: ["Lotus Seeds", "Pink Himalayan Salt", "Cracked Black Pepper", "Cold-pressed Oil"],
    nutrition: [
      { label: "Energy", value: "375 kcal" },
      { label: "Protein", value: "9.6 g" },
      { label: "Carbs", value: "70 g" },
      { label: "Fat", value: "3.8 g" },
      { label: "Fiber", value: "14 g" },
    ],
    storage: "Cool, dry place.",
    benefits: ["Minimal ingredients", "High protein", "Heart-friendly"],
    sizes: [
      { weight: "30g", price: 89, image: pcp4, },
      { weight: "60g", price: 169, image: pcp4, },
      { weight: "120g", price: 309, image: pcp4, },
    ],
    images: [ig3, ig4, ig6],
    tag: "Classic",
  },
  {
    id: "makhana-cookies",
    name: "Makhana Cookies",
    tagline: "Crunchy & wholesome",
    description: "Crunchy cookies made with wholesome makhana goodness. Lightly sweetened, never heavy.",
    category: "Cookies",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 405,
    ingredients: ["Makhana Flour", "Whole Wheat", "Jaggery", "Cold-pressed Oil", "Cardamom"],
    nutrition: [
      { label: "Energy", value: "412 kcal" },
      { label: "Protein", value: "8.2 g" },
      { label: "Carbs", value: "62 g" },
      { label: "Fat", value: "14 g" },
      { label: "Fiber", value: "6 g" },
    ],
    storage: "Cool, dry place. Best within 10 days of opening.",
    benefits: ["No maida", "No refined sugar", "High protein", "Light texture"],
    sizes: [
      { weight: "150g", price: 199, image: pcp3, },
      { weight: "250g", price: 319, image: pcp3, },
      { weight: "500g", price: 599, image: pcp3, },
    ],
    images: [pCookies, ig4, ig5],
    tag: "Cookies",
  },
  {
    id: "sugar-free-cookies",
    name: "Sugar Free Cookies",
    tagline: "Guilt-free indulgence",
    description: "Guilt-free cookies crafted without added sugar. Naturally sweetened with dates.",
    category: "Cookies",
    badge: "Limited Edition",
    rating: 4.7,
    reviews: 156,
    ingredients: ["Makhana Flour", "Whole Wheat", "Dates Paste", "Almonds", "Cold-pressed Oil"],
    nutrition: [
      { label: "Energy", value: "398 kcal" },
      { label: "Protein", value: "8.6 g" },
      { label: "Carbs", value: "58 g" },
      { label: "Fat", value: "13 g" },
      { label: "Fiber", value: "7 g" },
    ],
    storage: "Cool, dry place. Best within 10 days of opening.",
    benefits: ["No added sugar", "Diabetic friendly", "Rich in fiber"],
    sizes: [
      { weight: "150g", price: 229, image: pcp3, },
      { weight: "250g", price: 369, image: pcp3, },
      { weight: "500g", price: 679, image: pcp3, },
    ],
    images: [pCookies, ig6, ig3],
    tag: "Sugar Free",
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
