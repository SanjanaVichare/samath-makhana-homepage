import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Star, Minus, Plus, ShoppingCart, Zap, ChevronRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { getProduct, PRODUCTS, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const RECENT_KEY = "samarth_recent_v1";

export const Route = createFileRoute("/product/$productId")({
  component: ProductPage,
  loader: ({ params }) => {
    const p = getProduct(params.productId);
    if (!p) throw notFound();
    return { product: p };
  },
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [recent, setRecent] = useState<string[]>([]);
  const { add } = useCart();
  const navigate = useNavigate();

  // Create gallery array from product images
  const gallery = useMemo(
    () => (product ? product.images : []),
    [product]
  );

  useEffect(() => {
    setSize(product.sizes[0]);
    setQty(1);
    setActiveImg(0);
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      const arr: string[] = raw ? JSON.parse(raw) : [];
      setRecent(arr.filter((id) => id !== product.id));
      const next = [product.id, ...arr.filter((id) => id !== product.id)].slice(0, 6);
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch { /* ignore */ }
  }, [product.id]);

  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const recentProducts = recent.map(getProduct).filter(Boolean).slice(0, 4);

  const addToCart = () => {
    add(
      { id: product.id, name: product.name, price: size.price, image: product.images[0], weight: size.weight },
      qty,
    );
  };

  return (
    <PageShell>
      <div className="px-6 lg:px-10 pt-10">
        <nav className="mx-auto max-w-6xl text-xs uppercase tracking-[0.18em] text-ink/50 flex items-center gap-2">
          <Link to="/" className="hover:text-olive">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-olive">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-olive">{product.name}</span>
        </nav>
      </div>

      <section className="py-12 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          {/* Gallery — sticky on desktop */}
          <div className="lg:sticky lg:top-28 self-start">
            <motion.div
              key={activeImg}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/3] rounded-[32px] overflow-hidden bg-wheat/30"
            >
              <img src={gallery[activeImg]} alt={product.name} className="h-full w-full object-contain p-6 transition-all duration-500" />
            </motion.div>
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  aria-label={`Image ${i + 1}`}
                  className={`aspect-[4/3] rounded-2xl overflow-hidden border-2 bg-wheat/30 transition-all ${activeImg === i ? "border-olive" : "border-transparent opacity-70 hover:opacity-100"}`}
                >
                  <img src={src} alt="" className="h-full w-full object-contain p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Buy panel — scrollable */}
          <div>

            {product.badge && (
              <div className="flex gap-2 mb-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-olive/10 text-olive px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>
            )}
            <h1 className="mt-4 font-display text-4xl lg:text-5xl text-olive font-semibold">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2 text-gold text-sm">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
              ))}
              <span className="text-ink/60">{product.rating.toFixed(1)} · {product.reviews} reviews</span>
            </div>
            <p className="mt-5 text-ink/75 leading-relaxed">{product.description}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-4xl text-olive">₹{size.price}</span>
              <span className="text-sm text-ink/50 line-through">₹{Math.round(size.price * 1.2)}</span>
              <span className="text-xs text-gold font-semibold">Save 20%</span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50 mt-1">Free shipping over ₹499</p>

            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink/60">Size</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s.weight}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 rounded-full border text-xs font-semibold transition-all ${size.weight === s.weight ? "bg-olive text-cream border-olive" : "border-wheat text-ink hover:border-olive"}`}
                  >
                    {s.weight} · ₹{s.price}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <div className="inline-flex items-center border border-ink/15 rounded-full overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="h-12 w-12 grid place-items-center hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-10 text-center font-semibold tabular-nums">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="h-12 w-12 grid place-items-center hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
              <button
                type="button"
                onClick={addToCart}
                className="inline-flex items-center gap-2 bg-olive text-cream rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ink transition-colors"
              >
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </button>
              <button
                type="button"
                onClick={() => {
                  addToCart();
                  navigate({ to: "/cart" });
                }}
                className="inline-flex items-center gap-2 bg-gold text-ink rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ink hover:text-cream transition-colors"
              >
                <Zap className="h-4 w-4" /> Buy Now
              </button>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border border-wheat/60 p-5">
                <h3 className="text-xs uppercase tracking-[0.2em] text-olive font-semibold">Nutrition (per 100g)</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  {product.nutrition.map((n) => (
                    <div key={n.label} className="flex justify-between border-b border-wheat/50 pb-2">
                      <dt className="text-ink/60">{n.label}</dt>
                      <dd className="font-semibold text-olive">{n.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-2xl bg-white border border-wheat/60 p-5">
                <h3 className="text-xs uppercase tracking-[0.2em] text-olive font-semibold">Ingredients</h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {product.ingredients.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {product.category === "Makhana" && (
              <div className="mt-6 rounded-2xl bg-white border border-wheat/60 p-5 text-sm text-ink/70">
                <h3 className="text-xs uppercase tracking-[0.2em] text-olive font-semibold mb-3">Packaging & Origin</h3>
                <dl className="grid sm:grid-cols-2 gap-y-2 gap-x-6">
                  <div className="flex justify-between border-b border-wheat/50 pb-2"><dt className="text-ink/60">Net Weight</dt><dd className="font-semibold text-olive">90 g</dd></div>
                  <div className="flex justify-between border-b border-wheat/50 pb-2"><dt className="text-ink/60">Sticker Size</dt><dd className="font-semibold text-olive">240 × 68 mm</dd></div>
                  <div className="flex justify-between border-b border-wheat/50 pb-2"><dt className="text-ink/60">Pouch</dt><dd className="font-semibold text-olive">6.5 × 9.5 in standup</dd></div>
                  <div className="flex justify-between border-b border-wheat/50 pb-2"><dt className="text-ink/60">Manufactured by</dt><dd className="font-semibold text-olive">Shee Food</dd></div>
                  <div className="flex justify-between border-b border-wheat/50 pb-2 sm:col-span-2"><dt className="text-ink/60">Marketed by</dt><dd className="font-semibold text-olive">Samartha Makhana</dd></div>
                </dl>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mx-auto max-w-6xl mt-32">
            <h2 className="font-display text-3xl lg:text-4xl text-olive mb-10">You may also love</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to="/product/$productId"
                  params={{ productId: p.id }}
                  className="group bg-white rounded-3xl overflow-hidden border border-wheat/60 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-xl text-olive">{p.name}</h4>
                    <p className="mt-1 text-sm text-ink/60">₹{p.sizes[0].price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Recently viewed */}
        {recentProducts.length > 0 && (
          <div className="mx-auto max-w-6xl mt-20">
            <h2 className="font-display text-3xl text-olive">Recently viewed</h2>
            <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-4">
              {recentProducts.map((p) => p && (
                <Link key={p.id} to="/product/$productId" params={{ productId: p.id }} className="group block">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-wheat/30">
                    <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="mt-2 text-sm text-olive font-medium">{p.name}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </PageShell>
  );
}