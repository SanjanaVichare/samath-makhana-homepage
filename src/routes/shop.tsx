import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Heart, Eye, Star, ShoppingBag, SlidersHorizontal } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { PRODUCTS, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import peri from "@/assets/packet-peri-peri.png";
import cheese from "@/assets/packet-cheese.png";
import chatpata from "@/assets/packet-chat-pata.png";
import cream from "@/assets/packet-cream-onion.png";
import pudina from "@/assets/packet-pudina.png";
import salt from "@/assets/packet-salt-pepper.png";
import cookies from "@/assets/packet-cookies.png";
import sugarfree from "@/assets/packet-cookies-sugar-free.png";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
});

const PRODUCT_PACKET_IMAGES: Record<string, string> = {
  "peri-peri-makhana": peri,
  "cheese-makhana": cheese,
  "chat-pata-makhana": chatpata,
  "cream-onion-makhana": cream,
  "pudina-makhana": pudina,
  "salt-pepper-makhana": salt,
  "makhana-cookies": cookies,
  "sugar-free-cookies": sugarfree,
};

const CATEGORIES = ["All", "Makhana", "Cookies"] as const;
const SORTS = ["Featured", "Price: Low to High", "Price: High to Low", "Top Rated"] as const;
const PAGE_SIZE = 6;

function ShopPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [maxPrice, setMaxPrice] = useState(700);
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Featured");
  const [page, setPage] = useState(1);
  const [wish, setWish] = useState<Record<string, boolean>>({});
  const [quick, setQuick] = useState<Product | null>(null);
  const { add } = useCart();

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (q && !`${p.name} ${p.description}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (p.sizes[0].price > maxPrice) return false;
      return true;
    });
    switch (sort) {
      case "Price: Low to High":
        list = [...list].sort((a, b) => a.sizes[0].price - b.sizes[0].price);
        break;
      case "Price: High to Low":
        list = [...list].sort((a, b) => b.sizes[0].price - a.sizes[0].price);
        break;
      case "Top Rated":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
    }
    return list;
  }, [q, cat, maxPrice, sort]);

  const visible = filtered.slice(0, page * PAGE_SIZE);

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative py-24 px-6 lg:px-10 bg-gradient-to-b from-wheat/40 to-cream">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">Shop the Collection</p>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl font-semibold text-olive">
            The <span className="italic">Pantry</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-ink/70">
            Small-batch makhana and wholesome cookies, roasted slow and shipped fresh.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-6xl bg-white rounded-3xl p-6 lg:p-8 shadow-[0_24px_60px_-30px_rgba(77,98,44,0.25)] border border-wheat/60 -mt-12 relative">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto_auto]">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
              <input
                type="search"
                value={q}
                onChange={(e) => { setQ(e.target.value); setPage(1); }}
                placeholder="Search makhana, cookies…"
                aria-label="Search products"
                className="w-full rounded-full bg-cream/60 border border-wheat pl-11 pr-4 py-3 text-sm outline-none focus:border-olive transition-colors"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => { setCat(c); setPage(1); }}
                  className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.15em] font-semibold transition-all ${cat === c ? "bg-olive text-cream" : "bg-cream text-ink hover:bg-wheat/60"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="text-sm text-ink/70 flex items-center gap-2">
              <SlidersHorizontal size={14} />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                aria-label="Sort"
                className="bg-transparent border-b border-wheat focus:border-olive outline-none py-1 text-sm"
              >
                {SORTS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-ink/60">Max ₹{maxPrice}</span>
            <input
              type="range"
              min={100}
              max={700}
              step={10}
              value={maxPrice}
              onChange={(e) => { setMaxPrice(Number(e.target.value)); setPage(1); }}
              aria-label="Maximum price"
              className="flex-1 accent-olive"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {visible.length === 0 ? (
            <p className="text-center text-ink/60 py-20">No products match. Try adjusting filters.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  wished={!!wish[p.id]}
                  onWish={() => setWish((w) => ({ ...w, [p.id]: !w[p.id] }))}
                  onQuick={() => setQuick(p)}
                  onAdd={() => add({
                    id: p.id, name: p.name, price: p.sizes[0].price,
                    image: p.images[0], weight: p.sizes[0].weight,
                  })}
                />
              ))}
            </div>
          )}
          {visible.length < filtered.length && (
            <div className="mt-14 text-center">
              <button
                onClick={() => setPage((n) => n + 1)}
                className="px-8 py-4 rounded-full border-2 border-olive text-olive text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive hover:text-cream transition-all"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {quick && <QuickView product={quick} onClose={() => setQuick(null)} />}
    </PageShell>
  );
}

function ProductCard({
  product, wished, onWish, onQuick, onAdd,
}: {
  product: Product;
  wished: boolean;
  onWish: () => void;
  onQuick: () => void;
  onAdd: () => void;
}) {

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const packetImage = PRODUCT_PACKET_IMAGES[product.id];

  return (
    <article
      className="
    group
    relative
    bg-white
    rounded-[28px]
    overflow-hidden
    border
    border-wheat/60
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-[#E7C96D]
    hover:shadow-[0_30px_70px_-18px_rgba(255,196,40,0.28)]
  "
    >
      {product.badge && (
        <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-olive text-cream text-[10px] font-semibold uppercase tracking-[0.15em]">
          {product.badge}
        </span>
      )}

      <button
        type="button"
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        onClick={onWish}
        className={`absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-white shadow flex items-center justify-center transition-colors ${wished ? "text-gold" : "text-ink/60 hover:text-gold"
          }`}
      >
        <Heart size={16} fill={wished ? "currentColor" : "none"} />
      </button>

      <Link
        to="/product/$productId"
        params={{ productId: product.id }}
        className="relative block h-[260px] mx-4 mt-4 rounded-3xl bg-cream/50 overflow-hidden"
      >
        {/* Main Golden Glow */}
        <div
          className="
      absolute
      left-1/2
      top-[62%]
      -translate-x-1/2
      -translate-y-1/2
      w-56
      h-56
      rounded-full
      bg-[#FFD45C]
      opacity-75
      blur-[80px]
      transition-all
      duration-700
      group-hover:scale-125
      group-hover:opacity-100
    "
        />

        {/* Soft Product Halo */}
        <div
          className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[180px]
      h-[220px]
      rounded-full
      bg-gradient-to-b
      from-[#FFF7DA]
      via-[#FFE08A]
      to-transparent
      opacity-80
      blur-[45px]
      transition-all
      duration-700
      group-hover:scale-125
    "
        />

        {/* Secondary Glow */}
        <div
          className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-32
      h-32
      rounded-full
      bg-olive/20
      blur-3xl
      transition-all
      duration-700
      group-hover:scale-110
    "
        />

        {/* Packet Image */}
        <img
          src={packetImage}
          alt={product.name}
          loading="lazy"
          className="
      absolute
      inset-0
      h-full
      w-full
      object-contain
      p-6
      z-10
      transition-all
      duration-700
      ease-out
      drop-shadow-[0_18px_30px_rgba(255,190,60,0.35)]
      group-hover:drop-shadow-[0_30px_50px_rgba(255,200,80,0.55)]
      group-hover:scale-110
      group-hover:-translate-y-2
    "
        />
      </Link>

      <div className="px-6 pb-6 pt-5">
        <div className="flex items-center gap-1 text-gold text-xs">
          <Star size={12} fill="currentColor" />
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-ink/40">· {product.reviews} reviews</span>
        </div>

        <h3 className="mt-2 font-display text-2xl font-semibold text-olive">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-ink/70 line-clamp-2">
          {product.description}
        </p>


        <div className="mt-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 mb-3">
            Available Sizes
          </p>

          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.weight}
                onMouseEnter={() => setSelectedSize(size)}
                className={`
          px-3
          py-1.5
          text-xs
          rounded-full
          border
          transition-all
          duration-300
          ${selectedSize.weight === size.weight
                    ? "bg-gold text-white border-gold"
                    : "border-gold text-gold hover:bg-gold hover:text-white"
                  }
        `}
              >
                {size.weight}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-baseline justify-between">
          <p className="font-display text-2xl text-olive">
            ₹{selectedSize.price}
          </p>

          <p className="text-xs text-ink/50">
            {selectedSize.weight}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <button
            onClick={onQuick}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-olive text-olive py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-olive hover:text-cream transition-colors"
          >
            <Eye size={14} /> Quick View
          </button>

          <button
            onClick={onAdd}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-olive text-cream py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] hover:bg-olive/90 transition-colors"
          >
            <ShoppingBag size={14} /> Add
          </button>
        </div>
      </div>
    </article>
  );
}

function QuickView({ product, onClose }: { product: Product; onClose: () => void }) {
  const { add } = useCart();
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${product.name}`}
      onClick={onClose}
      className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-cream rounded-[28px] max-w-3xl w-full grid md:grid-cols-2 overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <img src={product.images[0]} alt={product.name} className="h-72 md:h-full w-full object-cover" />
        <div className="p-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">{product.category}</p>
          <h3 className="mt-2 font-display text-3xl text-olive">{product.name}</h3>
          <p className="mt-3 text-sm text-ink/70">{product.description}</p>
          <p className="mt-5 font-display text-3xl text-olive">₹{product.sizes[0].price}</p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => {
                add({ id: product.id, name: product.name, price: product.sizes[0].price, image: product.images[0], weight: product.sizes[0].weight });
                onClose();
              }}
              className="flex-1 rounded-full bg-olive text-cream py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-olive/90"
            >
              Add to Cart
            </button>
            <Link
              to="/product/$productId"
              params={{ productId: product.id }}
              className="flex-1 text-center rounded-full border border-olive text-olive py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-olive hover:text-cream transition-colors"
            >
              View Product
            </Link>
          </div>
          <button onClick={onClose} className="mt-4 w-full text-xs uppercase tracking-[0.18em] text-ink/60 hover:text-olive">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
