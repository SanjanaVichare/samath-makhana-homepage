import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";
import story from "@/assets/story-lotus.jpg";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Wellness" | "Recipes" | "Story" | "Lifestyle";
  author: string;
  date: string;
  readTime: string;
  cover: string;
  content: { type: "p" | "h2" | "quote" | "img"; text?: string; src?: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "benefits-of-healthy-snacks",
    title: "The Real Benefits of Healthy Snacks (Beyond the Hype)",
    excerpt: "Snacking smart is less about restriction and more about quality. Here's what actually changes when you switch.",
    category: "Wellness",
    author: "Riya Bansal",
    date: "March 12, 2026",
    readTime: "5 min read",
    cover: ig1,
    content: [
      { type: "p", text: "We've been told for years that snacking is the enemy. The truth is more nuanced — what matters is what you reach for, not whether you reach at all." },
      { type: "h2", text: "Sustained energy, not sugar spikes" },
      { type: "p", text: "Whole-food snacks like roasted makhana release energy slowly. You stay focused through the afternoon instead of crashing at 4pm." },
      { type: "quote", text: "The best snack is one that holds you over without holding you back." },
      { type: "p", text: "Protein and fiber are the two anchors. Aim for at least one in every snack." },
      { type: "img", src: ig2 },
      { type: "h2", text: "Mood matters too" },
      { type: "p", text: "Stable blood sugar means stable mood. Swap one chip habit for makhana for two weeks and notice how you feel." },
    ],
  },
  {
    slug: "why-makhana-is-a-superfood",
    title: "Why Makhana Earned Its Superfood Status",
    excerpt: "From temple offerings to gym bags — the quiet rise of the lotus seed and what makes it nutritionally special.",
    category: "Wellness",
    author: "Dr. Aman Verma",
    date: "March 5, 2026",
    readTime: "6 min read",
    cover: story,
    content: [
      { type: "p", text: "Makhana is the seed of the lotus flower, hand-harvested from ponds across Bihar. It has been part of Indian rituals and diets for centuries — and modern nutrition is finally catching up." },
      { type: "h2", text: "The numbers" },
      { type: "p", text: "100g of roasted makhana delivers around 9-10g of protein, 14g of fiber, and almost no fat. It is naturally gluten-free and low on the glycemic index." },
      { type: "h2", text: "Why it travels well" },
      { type: "p", text: "Light, shelf-stable, and easy to flavour without ruining the nutrition profile — makhana is the kind of snack you can stash anywhere." },
    ],
  },
  {
    slug: "healthy-weight-loss-snacks",
    title: "5 Healthy Snacks That Don't Sabotage Weight Loss",
    excerpt: "If you're trying to eat lighter, these five swaps will quietly do a lot of the heavy lifting.",
    category: "Wellness",
    author: "Anjali Kapoor",
    date: "February 22, 2026",
    readTime: "4 min read",
    cover: ig3,
    content: [
      { type: "p", text: "Weight loss is mostly about consistency. The snack drawer is where most people lose that consistency." },
      { type: "h2", text: "The five swaps" },
      { type: "p", text: "Roasted makhana for chips. Greek yogurt for ice cream. Dark chocolate for milk chocolate. Hummus and carrots for biscuits. Fruit for fruit juice." },
      { type: "quote", text: "Small swaps, repeated daily, beat dramatic resets." },
    ],
  },
  {
    slug: "delicious-makhana-recipes",
    title: "Three Makhana Recipes Worth Saving",
    excerpt: "Beyond snacking. Try makhana kheer, masala makhana trail mix, and a roasted makhana salad topper.",
    category: "Recipes",
    author: "Chef Meera Joshi",
    date: "February 14, 2026",
    readTime: "7 min read",
    cover: ig4,
    content: [
      { type: "h2", text: "1. Makhana Kheer" },
      { type: "p", text: "Slow-cook makhana in full-fat milk with cardamom and a touch of jaggery. Top with slivered almonds." },
      { type: "h2", text: "2. Masala Trail Mix" },
      { type: "p", text: "Toss roasted makhana with peanuts, raisins, and chaat masala. Keeps for weeks in an airtight jar." },
      { type: "h2", text: "3. Salad Topper" },
      { type: "p", text: "Crushed peri peri makhana on a green salad replaces croutons with twice the protein." },
    ],
  },
  {
    slug: "farm-to-table-journey",
    title: "From Lotus Pond to Pantry: Our Farm-to-Table Journey",
    excerpt: "A look at how Samarth makhana actually gets made — from family farms in Bihar to your kitchen shelf.",
    category: "Story",
    author: "Samarth Team",
    date: "February 1, 2026",
    readTime: "8 min read",
    cover: ig5,
    content: [
      { type: "p", text: "Every batch of Samarth makhana starts with a partnership. We work directly with family-run farms in Bihar's Darbhanga region." },
      { type: "h2", text: "Harvesting by hand" },
      { type: "p", text: "Lotus seeds are still harvested by hand — divers wade into ponds, collect pods, and dry them in the sun before roasting." },
      { type: "img", src: story },
      { type: "h2", text: "Slow roasting" },
      { type: "p", text: "We roast in small batches in iron pans, then hand-season. Nothing about this is industrial — and you can taste the difference." },
    ],
  },
  {
    slug: "healthy-lifestyle-tips",
    title: "Ten Quiet Habits of People Who Eat Well",
    excerpt: "No diets, no rules — just the small, repeatable things that healthy eaters do without thinking.",
    category: "Lifestyle",
    author: "Riya Bansal",
    date: "January 18, 2026",
    readTime: "5 min read",
    cover: ig6,
    content: [
      { type: "p", text: "There is no single secret. Just a stack of small habits, practised so often they become invisible." },
      { type: "h2", text: "The list" },
      { type: "p", text: "Eat protein at breakfast. Keep fruit visible. Drink water before coffee. Cook one extra portion at dinner. Don't shop hungry. Read labels. Pre-portion snacks. Walk after meals. Sleep before midnight. Forgive the off days." },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
