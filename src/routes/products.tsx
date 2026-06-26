import productBg from "@/assets/bg-doodle.png";
import { useRef } from "react";
import MakhanaCursor from "@/components/MakhanaCursor";
import pcp from "@/assets/packet-chat-pata.png";
import pcp1 from "@/assets/packet-peri-peri.png";
import pcp2 from "@/assets/packet-cheese.png";
import pcp3 from "@/assets/packet-pudina.png";
import pcp4 from "@/assets/packet-salt-pepper.png";
import pcp5 from "@/assets/packet-cream-onion.png";
import cookiep from "@/assets/product-cookies.jpg";
import cookiesf from "@/assets/product-cookies.jpg";
import cursorMakhana from "@/assets/makhana.png";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import { Navbar, Footer } from "./index";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

// Export this so it can be used in other files
export const PRODUCTS_DATA = [
  {
    id: "peri-peri-makhana",
    name: "Peri Peri Makhana",
    desc: "Bold, fiery and packed with smoky peri-peri flavour.",
    longDesc: "Experience the perfect blend of heat and flavor with our Peri Peri Makhana. Carefully roasted to perfection and coated with a signature peri-peri spice blend that delivers a bold, fiery kick with every crunchy bite. Made from premium quality makhana sourced from the wetlands of India, this snack is not just delicious but also packed with essential nutrients. The smoky peri-peri flavor combined with the natural lightness of makhana creates an irresistible snack that keeps you coming back for more. Perfect for spice lovers who want a healthy alternative to traditional snacks.",
    tag: "Spicy",
    price: "€29.90",
    images: {
      "30g": pcp1,
      "60g": pcp1,
      "120g": pcp1,
    },
    benefits: ["Rich in protein", "High in fiber", "Low in calories", "No artificial flavors"],
    ingredients: ["Makhana (Fox Nuts)", "Peri Peri Spice Blend", "Cold Pressed Oil", "Sea Salt"],
    nutritionalInfo: {
      calories: "120 kcal",
      protein: "3.5g",
      carbs: "18g",
      fat: "4g",
    },
  },
  {
    id: "cheese-makhana",
    name: "Cheese Makhana",
    desc: "Creamy cheese seasoning with a perfectly crunchy bite.",
    longDesc: "Indulge in the ultimate comfort snack with our Cheese Makhana. Each piece is perfectly roasted and generously coated with a creamy, savory cheese seasoning that melts in your mouth. The rich cheese flavor perfectly complements the natural crunch of premium makhana, creating a satisfying snack experience. Whether you're a cheese lover or just looking for a deliciously different snack, our Cheese Makhana delivers the perfect balance of creaminess and crunch. Made with authentic cheese powder and high-quality ingredients, it's a snack that feels indulgent but is naturally wholesome.",
    tag: "Cheesy",
    price: "€29.90",
    images: {
      "30g": pcp2,
      "60g": pcp2,
      "120g": pcp2,
    },
    benefits: ["Good source of calcium", "Rich in antioxidants", "Gluten-free", "Suitable for vegetarians"],
    ingredients: ["Makhana (Fox Nuts)", "Cheese Powder", "Buttermilk Powder", "Cold Pressed Oil", "Sea Salt"],
    nutritionalInfo: {
      calories: "130 kcal",
      protein: "4g",
      carbs: "16g",
      fat: "5g",
    },
  },
  {
    id: "chat-pata-makhana",
    name: "Chat Pata Makhana",
    desc: "Tangy Indian spices with a chatpata kick.",
    longDesc: "Bring the vibrant flavors of Indian street food to your snack time with our Chat Pata Makhana. This irresistible blend features tangy tamarind, zesty spices, and a perfect balance of sweet and sour notes that dance on your taste buds. Each piece of makhana is roasted to golden perfection and coated with our special chatpata masala that captures the essence of Indian chaat. It's a nostalgic flavor journey that combines the crunch of makhana with the bold, tangy spices that make Indian street food so beloved. Healthy snacking has never been this exciting!",
    tag: "Tangy",
    price: "€29.90",
    images: {
      "30g": pcp,
      "60g": pcp,
      "120g": pcp,
    },
    benefits: ["Aids digestion", "Boosts metabolism", "Low glycemic index", "Rich in minerals"],
    ingredients: ["Makhana (Fox Nuts)", "Chat Masala Blend", "Tamarind Powder", "Cold Pressed Oil", "Sea Salt"],
    nutritionalInfo: {
      calories: "115 kcal",
      protein: "3.2g",
      carbs: "17g",
      fat: "4.2g",
    },
  },
  {
    id: "cream-onion-makhana",
    name: "Cream & Onion Makhana",
    desc: "Rich cream balanced with savoury onion flavour.",
    longDesc: "Discover the perfect harmony of rich cream and savory onion in our Cream & Onion Makhana. This sophisticated flavor combination elevates the humble makhana to gourmet snack status. The creamy notes create a smooth, luxurious mouthfeel while the onion adds a savory depth that's both comforting and exciting. Each crunchy piece is perfectly roasted and seasoned to deliver a balanced flavor profile that appeals to both classic and adventurous palates. It's the sophisticated snack choice for those who appreciate the finer things in life, without compromising on health.",
    tag: "Popular",
    price: "€29.90",
    images: {
      "30g": pcp5,
      "60g": pcp5,
      "120g": pcp5,
    },
    benefits: ["Heart-healthy", "Good source of fiber", "No MSG", "All-natural ingredients"],
    ingredients: ["Makhana (Fox Nuts)", "Onion Powder", "Cream Powder", "Cold Pressed Oil", "Sea Salt"],
    nutritionalInfo: {
      calories: "125 kcal",
      protein: "3.6g",
      carbs: "17.5g",
      fat: "4.5g",
    },
  },
  {
    id: "pudina-makhana",
    name: "Pudina Makhana",
    desc: "Refreshing mint flavour with a crisp roasted finish.",
    longDesc: "Refresh your senses with our Pudina Makhana, a delightful blend of cooling mint and perfectly roasted makhana. The fresh, invigorating mint flavor brings a breath of freshness to every bite, making it the perfect palate cleanser and afternoon snack. Each piece is carefully coated with pure mint extract and complementary spices that enhance the natural goodness of makhana. This unique flavor combination not only tastes incredible but also offers the digestive benefits of mint, making it both a delicious and functional snack choice.",
    tag: "Fresh",
    price: "€29.90",
    images: {
      "30g": pcp3,
      "60g": pcp3,
      "120g": pcp3,
    },
    benefits: ["Aids digestion", "Freshens breath", "Rich in antioxidants", "Calming properties"],
    ingredients: ["Makhana (Fox Nuts)", "Mint Extract", "Cold Pressed Oil", "Sea Salt", "Herbal Spices"],
    nutritionalInfo: {
      calories: "110 kcal",
      protein: "3g",
      carbs: "16.5g",
      fat: "4g",
    },
  },
  {
    id: "salt-pepper-makhana",
    name: "Salt & Pepper Makhana",
    desc: "Simple, classic and incredibly addictive.",
    longDesc: "Sometimes the simplest things are the best. Our Salt & Pepper Makhana celebrates the beauty of simplicity with a classic combination that never goes out of style. Each piece is roasted to crispy perfection and seasoned with the perfect balance of sea salt and freshly ground black pepper. This timeless flavor allows the natural taste and texture of premium makhana to shine through. It's the versatile snack that pairs perfectly with your evening tea, movie night, or anytime you crave something satisfyingly simple and wholesome.",
    tag: "Classic",
    price: "€29.90",
    images: {
      "30g": pcp4,
      "60g": pcp4,
      "120g": pcp4,
    },
    benefits: ["Low sodium", "Heart-healthy", "Pure ingredients", "Versatile snack"],
    ingredients: ["Makhana (Fox Nuts)", "Sea Salt", "Black Pepper", "Cold Pressed Oil"],
    nutritionalInfo: {
      calories: "105 kcal",
      protein: "2.8g",
      carbs: "15.8g",
      fat: "3.8g",
    },
  },
  {
    id: "makhana-cookies",
    name: "Makhana Cookies",
    desc: "Crunchy cookies made with wholesome makhana goodness.",
    longDesc: "Reinventing the classic cookie with the goodness of makhana! Our Makhana Cookies are a deliciously innovative treat that combines the crunch of roasted makhana with the sweetness of wholesome ingredients. Each cookie is baked to golden perfection, delivering a satisfyingly crispy texture with every bite. Made with premium makhana flour and natural sweeteners, these cookies offer a healthier alternative to traditional sweets without compromising on taste. Perfect for guilt-free indulgence, they're a testament to how traditional ingredients can create modern, delicious treats.",
    tag: "Cookies",
    price: "€29.90",
    images: {
      "150g": cookiep,
      "250g": cookiep,
      "500g": cookiep,
    },
    benefits: ["Baked not fried", "No preservatives", "Whole grain goodness", "Energy boosting"],
    ingredients: ["Makhana Flour", "Wheat Flour", "Natural Sweetener", "Cold Pressed Oil", "Baking Soda"],
    nutritionalInfo: {
      calories: "150 kcal",
      protein: "4g",
      carbs: "22g",
      fat: "5g",
    },
  },
  {
    id: "sugar-free-cookies",
    name: "Sugar Free Cookies",
    desc: "Guilt-free cookies crafted without added sugar.",
    longDesc: "Indulge in sweetness without the guilt with our Sugar Free Cookies. Crafted with care for health-conscious cookie lovers, these delicious treats offer all the satisfaction of a classic cookie without any added sugar. Sweetened naturally and made with wholesome makhana flour, these cookies are perfect for those managing their sugar intake but unwilling to compromise on taste. Each bite delivers a satisfyingly crispy texture and delightful sweetness that comes from natural ingredients. It's proof that healthy and delicious can go hand in hand.",
    tag: "Sugar Free",
    price: "€29.90",
    images: {
      "150g": cookiesf,
      "250g": cookiesf,
      "500g": cookiesf,
    },
    benefits: ["Sugar-free", "Diabetic-friendly", "High in fiber", "Natural sweetness"],
    ingredients: ["Makhana Flour", "Natural Sugar Substitute", "Wheat Flour", "Cold Pressed Oil", "Baking Soda"],
    nutritionalInfo: {
      calories: "130 kcal",
      protein: "3.8g",
      carbs: "18g",
      fat: "4.8g",
    },
  },
];

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

function ProductsHero() {
  return (
    <section className="grid lg:grid-cols-2 min-h-[700px]">

      {/* LEFT */}
      <div className="bg-cream flex items-center px-8 lg:px-20 py-20">
        <div className="max-w-xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
            India's Premium Superfood
          </p>

          <h1 className="mt-5 font-display text-5xl lg:text-7xl font-semibold leading-[0.95] text-olive">
            Samarth
            <br />
            Makhana
          </h1>

          <p className="mt-8 text-lg text-ink/70 leading-relaxed">
            Discover wholesome roasted makhana and handcrafted cookies
            made from premium lotus seeds sourced directly from the
            wetlands of India.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-olive text-white">
              Shop Now
            </button>

            <button className="px-8 py-4 rounded-full border border-gold text-gold">
              Explore Products
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-ink/60">
            <span>✦ High Protein</span>
            <span>✦ Roasted Not Fried</span>
            <span>✦ 100% Natural</span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative overflow-hidden min-h-[500px]">
        <img
          src={ig1}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

    </section>
  );
}

function ProductsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [selectedWeight, setSelectedWeight] = useState<Record<string, string>>({});

  const filteredProducts = [...PRODUCTS_DATA]
    .filter((product) => {
      // Filter by search
      if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }

      const isCookie = product.name.toLowerCase().includes("cookie");

      if (filterBy === "cookies") return isCookie;
      if (filterBy === "makhana") return !isCookie;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "az") return a.name.localeCompare(b.name);
      if (sortBy === "za") return b.name.localeCompare(a.name);
      if (sortBy === "priceLow") {
        return parseFloat(a.price.replace(/[^\d.]/g, "")) -
          parseFloat(b.price.replace(/[^\d.]/g, ""));
      }
      if (sortBy === "priceHigh") {
        return parseFloat(b.price.replace(/[^\d.]/g, "")) -
          parseFloat(a.price.replace(/[^\d.]/g, ""));
      }
      return 0;
    });

  useEffect(() => {
    document.body.style.cursor = `url(${cursorMakhana}) 16 16, auto`;
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <MakhanaCursor />
      <Navbar scrolled={scrolled} />

      <div className="bg-cream min-h-screen">
        <div className="relative min-h-screen bg-cream">

          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 opacity-[1] pointer-events-none"
            style={{
              backgroundImage: `url(${productBg})`,
              backgroundRepeat: "repeat",
              backgroundSize: "500px",
              backgroundPosition: "center",
            }}
          />

          {/* Page Content */}
          <div className="relative z-10">
            {/* HERO */}
            <ProductsHero />

            {/* ESSENTIALS - Product Grid */}
            <section className="px-6 lg:px-20 py-16 max-w-7xl mx-auto">

              {/* Heading */}
              <div className="text-center">
                <p className="uppercase tracking-[0.3em] text-gold text-sm">
                  Discover Our Collection
                </p>
                <h2 className="font-display text-5xl lg:text-6xl text-olive mt-4">
                  Our Products
                </h2>
              </div>

              {/* Filter and Sort Controls */}
              <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Filter Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setFilterBy("all")}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filterBy === "all"
                      ? "bg-olive text-white"
                      : "bg-white text-olive border border-olive/30 hover:bg-olive/10"
                      }`}
                  >
                    All Products
                  </button>
                  <button
                    onClick={() => setFilterBy("makhana")}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filterBy === "makhana"
                      ? "bg-olive text-white"
                      : "bg-white text-olive border border-olive/30 hover:bg-olive/10"
                      }`}
                  >
                    Makhana
                  </button>
                  <button
                    onClick={() => setFilterBy("cookies")}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filterBy === "cookies"
                      ? "bg-olive text-white"
                      : "bg-white text-olive border border-olive/30 hover:bg-olive/10"
                      }`}
                  >
                    Cookies
                  </button>
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-olive/30 rounded-full px-6 py-2.5 pr-12 text-sm font-medium text-olive cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all duration-300 hover:border-gold"
                  >
                    <option value="default">Sort By</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                    <option value="az">Name: A to Z</option>
                    <option value="za">Name: Z to A</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {filteredProducts.map((p) => (
                    <article
                      key={p.id}
                      className="
                        group
                        bg-white
                        rounded-[28px]
                        overflow-hidden
                        border-2 border-olive/30
                        flex flex-col
                        h-full
                        transition-all
                        duration-500
                        hover:-translate-y-2
                        hover:shadow-[0_25px_60px_-20px_rgba(157,113,60,0.25)]
                      "
                    >
                      {/* Product Image */}
                      <div className="relative h-[240px] mx-4 mt-4 rounded-3xl bg-cream/40 flex items-center justify-center p-6 overflow-hidden">
                        {/* Ticket Badge */}
                        <div
                          className={`
                            absolute top-4 left-4 h-[36px] px-4 flex items-center text-xs font-semibold text-white z-10
                            ${p.tag === "Popular" ? "bg-gold" : "bg-olive"}
                          `}
                          style={{
                            clipPath: "polygon(12px 0%, 100% 0%, 100% 100%, 12px 100%, 0% 50%)",
                          }}
                        >
                          <span className="absolute left-[5px] w-[5px] h-[5px] rounded-full bg-white/80" />
                          {p.tag}
                        </div>

                        <img
                          src={
                            p.images[
                            (selectedWeight[p.name] || Object.keys(p.images)[0]) as keyof typeof p.images
                            ]
                          }
                          alt={p.name}
                          className="w-[200px] h-[230px] object-cover transition-all duration-700 rounded-3xl group-hover:scale-110"
                        />
                      </div>

                      {/* Content */}
                      <div className="px-6 pb-6 pt-4 flex flex-col flex-1">
                        <h3 className="font-display text-2xl font-semibold text-olive">
                          {p.name}
                        </h3>

                        <p className="mt-3 text-sm text-ink/75 leading-relaxed line-clamp-2">
                          {p.desc}
                        </p>

                        {/* Price */}
                        <div className="mt-3">
                          <span className="text-lg font-semibold text-gold">{p.price}</span>
                        </div>

                        {/* Sizes */}
                        <div className="mt-4">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 mb-2">
                            Available Sizes
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {Object.keys(p.images).map((weight) => (
                              <button
                                key={weight}
                                onMouseEnter={() =>
                                  setSelectedWeight((prev) => ({
                                    ...prev,
                                    [p.name]: weight,
                                  }))
                                }
                                className={`
                                  px-3 py-1.5 text-xs rounded-full border transition-all duration-300
                                  ${(selectedWeight[p.name] || Object.keys(p.images)[0]) === weight
                                    ? "bg-gold text-white border-gold"
                                    : "border-gold text-gold hover:bg-gold hover:text-white"
                                  }
                                `}
                              >
                                {weight}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Button */}
                        <a
                          href="#shop"
                          className="
                            mt-5 inline-flex items-center justify-center w-full rounded-full
                            bg-olive text-cream py-3 text-[11px] font-semibold uppercase
                            tracking-[0.18em] transition-all duration-300 hover:bg-olive/90
                          "
                        >
                          Shop Now
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-olive/60">No products found</p>
                  <p className="text-sm text-olive/40 mt-2">Try adjusting your filters or search</p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}