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
    description: "Tangy Indian spices with a chatpata kick. Perfectly roasted for a guilt-free crunch.",
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

// ---- Official product details (manufacturing document data) ----
export type NutritionRow50 = { nutrient: string; per50g: string; rda: string };
export type ProductDetails = {
  displayName: string;
  ingredients: string;
  addedFlavour?: string;
  allergen?: { label: string; text: string };
  nutrition50: NutritionRow50[];
  manufacturer: {
    category: string;
    name: string;
    fssai: string;
    address: string;
    email: string;
    stickerSize: string;
  };
};

const MANUFACTURER = {
  category: "Roasted Flavour Makhana",
  name: "SHHE FOODS PVT. LTD",
  fssai: "10421310000224",
  address: "B21P1, Donar Industrial Area, Donar, Darbhanga, Bihar, 846009",
  email: "SHHEFOODS@GMAIL.COM",
  stickerSize: "240 × 68 mm",
};

const rows = (
  v: [string, string, string][],
): NutritionRow50[] => v.map(([nutrient, per50g, rda]) => ({ nutrient, per50g, rda }));

export const PRODUCT_DETAILS: Record<string, ProductDetails> = {
  "cream-onion-makhana": {
    displayName: "Cream & Onion",
    ingredients:
      "Makhana, Olive Oil, Sunflower Oil, Spices & Makhana Condiments (Yellow Chilli, Onion, Parsley), Salt, Sugar, Milk Solid, Hydrolysed Vegetable Proteins (Peanut), Flavour Enhancer (INS 635).",
    addedFlavour:
      "CONTAINS ADDED FLAVOURS – NATURAL AND NATURE IDENTICAL (CREAM & ONION) FLAVOURING SUBSTANCES",
    nutrition50: rows([
      ["Energy", "209.37 kcal", "10.47%"],
      ["Protein", "5.63 g", "10.42%"],
      ["Carbohydrate", "28.49 g", "9.50%"],
      ["Total Sugar", "3.10 g", "—"],
      ["Added Sugar", "1.10 g", "2.20%"],
      ["Total Fat", "11.20 g", "16.72%"],
      ["Saturated Fat", "1.56 g", "7.09%"],
      ["Trans Fat", "0 g", "0%"],
      ["Dietary Fibre", "3.58 g", "8.95%"],
      ["Sodium", "270.65 mg", "13.53%"],
      ["Cholesterol", "0 mg", "0%"],
    ]),
    manufacturer: MANUFACTURER,
  },
  "cheese-makhana": {
    displayName: "Tangy Cheese",
    ingredients:
      "Makhana, Olive Oil, Sunflower Oil, Sugar, Salt, Hydrolyses Peanut Protein, Dehydrated Blend of Whey (From Milk), Stabilizer Emulsifier (INS 339), Cheese Concentrate, Colour (INS 160c).",
    addedFlavour:
      "CONTANS ADDED FLAVOUR (NATURAL, NATURE IDENTICAL AND ARTIFICIAL FLAVOURING SUBSTANCES: MILK)",
    allergen: {
      label: "Allergen Alert",
      text: "THIS PRODUCTS CONTAINS PEANUT, MILK & WHEAT COMPONENTS",
    },
    nutrition50: rows([
      ["Energy", "203.30 kcal", "10.17%"],
      ["Protein", "5.06 g", "9.37%"],
      ["Carbohydrate", "23.24 g", "7.75%"],
      ["Total Sugar", "3.10 g", "—"],
      ["Added Sugar", "1.65 g", "3.30%"],
      ["Total Fat", "16.20 g", "24.18%"],
      ["Saturated Fat", "2.05 g", "9.32%"],
      ["Trans Fat", "0 g", "0%"],
      ["Dietary Fibre", "4.02 g", "10.05%"],
      ["Sodium", "203.30 mg", "10.17%"],
      ["Cholesterol", "0 mg", "0%"],
    ]),
    manufacturer: MANUFACTURER,
  },
  "pudina-makhana": {
    displayName: "Pudina",
    ingredients:
      "Makhana, Olive Oil, Sunflower Oil, Spices & Condiments (Red Chilli, Coriander Seeds, Dried Mango, Cumin, Turmeric, Dried Ginger, Long Pepper, Fenugreek, Mace, Nutmeg), Edible Salt, Black Salt, Sugar, Mint Leaves (7%), Fenugreek Leaves, Hydrolysed Veg. Protein (Peanut), Natural Flavour (Mint), Flavour Enhancer (INS-627)(INS-631), Anticaking Agent (INS-551).",
    allergen: { label: "Allergen Alert", text: "MAY CONTAINS PEANUTS" },
    nutrition50: rows([
      ["Energy", "230.92 kcal", "11.55%"],
      ["Protein", "6.21 g", "11.50%"],
      ["Carbohydrate", "29.25 g", "9.75%"],
      ["Total Sugar", "3.20 g", "—"],
      ["Added Sugar", "1.60 g", "3.20%"],
      ["Total Fat", "9.90 g", "14.78%"],
      ["Saturated Fat", "1.95 g", "8.86%"],
      ["Trans Fat", "0 g", "0%"],
      ["Dietary Fibre", "3.95 g", "9.88%"],
      ["Sodium", "283.85 mg", "14.19%"],
      ["Cholesterol", "0 mg", "0%"],
    ]),
    manufacturer: MANUFACTURER,
  },
  "salt-pepper-makhana": {
    displayName: "Salt & Pepper",
    ingredients:
      "Makhana, Olive Oil, Sunflower Oil, Black Pepper, Pink Salt, Hydrolysed Vegetable Protein (Peanuts), Flavour Enhancer (INS 635).",
    addedFlavour:
      "CONTAINS ADDED FLAVOURS – NATURAL AND NATURE IDENTICAL (GHEE) FLAVOURING SUBSTANCES",
    allergen: { label: "Allergen Advice", text: "Contains Peanut and Milk Solid" },
    nutrition50: rows([
      ["Energy", "211.09 kcal", "10.55%"],
      ["Protein", "5.95 g", "11.01%"],
      ["Carbohydrate", "33.04 g", "11.01%"],
      ["Total Sugar", "2.00 g", "—"],
      ["Added Sugar", "0 g", "0%"],
      ["Total Fat", "6.13 g", "9.15%"],
      ["Saturated Fat", "2.10 g", "9.55%"],
      ["Trans Fat", "0 g", "0%"],
      ["Dietary Fibre", "3.46 g", "8.65%"],
      ["Sodium", "324.55 mg", "16.23%"],
      ["Cholesterol", "0 mg", "0%"],
    ]),
    manufacturer: MANUFACTURER,
  },
  "chat-pata-makhana": {
    displayName: "Chatkara",
    ingredients:
      "Makhana, Olive Oil, Sunflower Oil, Sugar, Spices & Condiments (Red Chilli, Dried Mango, Dried Onion, Coriander Seeds, Cumin, Nutmeg, Mace), Salt, Jaggery, Tomato Powder, Hydrolyse Peanut Protein, Colour (INS 160c), Flavour Enhancer (INS-635).",
    addedFlavour:
      "CONTANS ADDED FLAVOUR (NATURAL, NATURE IDENTICAL AND ARTIFICIAL FLAVOURING SUBSTANCES-TOMATO)",
    allergen: {
      label: "Allergen Information",
      text: "THIS PRODUCTS CONTAINS PEANUT COMPONENTS",
    },
    nutrition50: rows([
      ["Energy", "221.41 kcal", "11.07%"],
      ["Protein", "5.20 g", "9.63%"],
      ["Carbohydrate", "33.44 g", "11.15%"],
      ["Total Sugar", "1.63 g", "—"],
      ["Added Sugar", "0.56 g", "1.12%"],
      ["Total Fat", "7.43 g", "11.09%"],
      ["Saturated Fat", "1.10 g", "5.00%"],
      ["Trans Fat", "0 g", "0%"],
      ["Dietary Fibre", "3.08 g", "7.70%"],
      ["Sodium", "277.65 mg", "13.88%"],
      ["Cholesterol", "0 mg", "0%"],
    ]),
    manufacturer: MANUFACTURER,
  },
  "peri-peri-makhana": {
    displayName: "Peri-Peri",
    ingredients:
      "Makhana, Olive Oil, Sunflower Oil, Sugar, Spices & Condiments (Red Chilli, Dried Mango, Dried Onion, Coriander Seeds, Cumin, Dried Garlic Flakes, Nutmeg, Mace), Salt, Tomato Powder, Hydrolyse Peanut Protein, Colour (INS 160C), Natural and Nature Identical and Flavouring Substances (Peri Peri), Flavour Enhancer (INS 627) & (INS 631).",
    allergen: {
      label: "Allergen Information",
      text: "THIS PRODUCTS CONTAINS PEANUT COMPONENTS",
    },
    nutrition50: rows([
      ["Energy", "227.70 kcal", "11.39%"],
      ["Protein", "4.98 g", "9.22%"],
      ["Carbohydrate", "31.25 g", "10.42%"],
      ["Total Sugar", "0.40 g", "—"],
      ["Added Sugar", "0.10 g", "0.20%"],
      ["Total Fat", "9.20 g", "13.73%"],
      ["Saturated Fat", "2.10 g", "9.55%"],
      ["Trans Fat", "0 g", "0%"],
      ["Dietary Fibre", "3.13 g", "7.83%"],
      ["Sodium", "266 mg", "13.30%"],
      ["Cholesterol", "0 mg", "0%"],
    ]),
    manufacturer: MANUFACTURER,
  },
};

export function getProductDetails(id: string): ProductDetails | undefined {
  return PRODUCT_DETAILS[id];
}
