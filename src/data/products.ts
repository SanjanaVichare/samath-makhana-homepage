import pcp from "@/assets/packet-chat-pata.png";
import pcp1 from "@/assets/packet-peri-peri.png";
import pcp2 from "@/assets/packet-cheese.png";
import pcp3 from "@/assets/packet-pudina.png";
import pcp4 from "@/assets/packet-salt-pepper.png";
import pcp5 from "@/assets/packet-cream-onion.png";
import cookiep from "@/assets/packet-cookies.png";
import cookiesf from "@/assets/packet-cookies-sugar-free.png";

import bowlperi from "@/assets/bowl-peri-peri.png";
import bowlcheese from "@/assets/bowl-cheese.png";
import bowlchatpata from "@/assets/bowl-chat-pata.png";
import bowlcream from "@/assets/bowl-cream-onion.png";
import bowlpudina from "@/assets/bowl-pudina.png";
import bowlsalt from "@/assets/bowl-salt-pepper.png";
import bowlcookies from "@/assets/bowl-cookies.png";
import bowlcookiesf from "@/assets/bowl-cookies-sugar-free.png";

export type ProductSize = { weight: string; price: number; image: string };
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
      { weight: "50g", price: 129, image: pcp1 },
      { weight: "90g", price: 219, image: pcp1 },
      { weight: "100g", price: 239, image: pcp1 },
    ],
    images: [pcp1, bowlperi, pcp1],
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
      { weight: "60g", price: 149, image: pcp2 },
      { weight: "100g", price: 239, image: pcp2 },
    ],
    images: [pcp2, bowlcheese, pcp2],
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
    benefits: ["Low calorie", "Gluten free", "Vegan", "Never fried"],
    sizes: [
      { weight: "50g", price: 119, image: pcp },
      { weight: "90g", price: 199, image: pcp },
      { weight: "100g", price: 219, image: pcp },
    ],
    images: [pcp, bowlchatpata, pcp],
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
      { weight: "60g", price: 149, image: pcp5 },
      { weight: "100g", price: 239, image: pcp5 },
    ],
    images: [pcp5, bowlcream, pcp5],
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
      { weight: "50g", price: 109, image: pcp3 },
      { weight: "90g", price: 189, image: pcp3 },
      { weight: "100g", price: 209, image: pcp3 },
    ],
    images: [pcp3, bowlpudina, pcp3],
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
      { weight: "50g", price: 109, image: pcp4 },
      { weight: "100g", price: 209, image: pcp4 },
      { weight: "500g", price: 899, image: pcp4 },
    ],
    images: [pcp4, bowlsalt, pcp4],
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
      { weight: "100g", price: 179, image: cookiep },
      { weight: "500g", price: 749, image: cookiep },
    ],
    images: [cookiep, bowlcookies, cookiep],
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
      { weight: "100g", price: 199, image: cookiesf },
      { weight: "500g", price: 849, image: cookiesf },
    ],
    images: [cookiesf, bowlcookiesf, cookiesf],
    tag: "Sugar Free",
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
