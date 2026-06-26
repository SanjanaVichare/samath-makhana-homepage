import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Star, Minus, Plus, Share2, ShoppingBag, ChevronRight } from "lucide-react";
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

  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);
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
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Gallery */}
          <div>
            <div className="aspect-square rounded-[32px] overflow-hidden bg-wheat/30">
              <img src={product.images[activeImg]} alt={product.name} className="h-full w-full object-cover transition-all duration-500" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  aria-label={`Image ${i + 1}`}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeImg === i ? "border-olive" : "border-transparent opacity-70 hover:opacity-100"}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Buy panel */}
          <div className="lg:sticky lg:top-28 self-start">
            {product.badge && (
              <span className="px-3 py-1 rounded-full bg-olive/10 text-olive text-[10px] font-semibold uppercase tracking-[0.15em]">
                {product.badge}
              </span>
            )}
            <h1 className="mt-4 font-display text-4xl lg:text-5xl text-olive font-semibold">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2 text-gold text-sm">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
              ))}
              <span className="text-ink/60">{product.rating} · {product.reviews} reviews</span>
            </div>
            <p className="mt-5 text-ink/75 leading-relaxed">{product.description}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-4xl text-olive">₹{size.price}</span>
              <span className="text-sm text-ink/50 line-through">₹{Math.round(size.price * 1.2)}</span>
              <span className="text-xs text-gold font-semibold">Save 20%</span>
            </div>

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

            <div className="mt-6 flex items-center gap-4">
              <div className="inline-flex items-center border border-wheat rounded-full overflow-hidden">
                <button onClick={() => setQty((n) => Math.max(1, n - 1))} aria-label="Decrease" className="h-11 w-11 inline-flex items-center justify-center hover:bg-cream">
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button onClick={() => setQty((n) => n + 1)} aria-label="Increase" className="h-11 w-11 inline-flex items-center justify-center hover:bg-cream">
                  <Plus size={14} />
                </button>
              </div>
              <button
                onClick={addToCart}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-olive text-cream py-3.5 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive/90 transition-colors"
              >
                <ShoppingBag size={15} /> Add to Cart
              </button>
            </div>
            <button
              onClick={() => { addToCart(); navigate({ to: "/cart" }); }}
              className="mt-3 w-full rounded-full border-2 border-olive text-olive py-3.5 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive hover:text-cream transition-colors"
            >
              Buy Now
            </button>

            <div className="mt-6 flex items-center gap-3 text-xs text-ink/60">
              <Share2 size={14} />
              <span>Share:</span>
              {["Twitter", "Facebook", "WhatsApp"].map((s) => (
                <a key={s} href="#" className="hover:text-olive">{s}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mx-auto max-w-6xl mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <DetailCard title="Ingredients" items={product.ingredients} />
          <DetailCard title="Health Benefits" items={product.benefits} />
          <div className="bg-white rounded-3xl p-6 border border-wheat/60">
            <h3 className="font-display text-xl text-olive">Nutrition (per 100g)</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {product.nutrition.map((n) => (
                <li key={n.label} className="flex justify-between border-b border-wheat/50 pb-2">
                  <span className="text-ink/70">{n.label}</span>
                  <span className="font-semibold text-olive">{n.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-wheat/60">
            <h3 className="font-display text-xl text-olive">Storage</h3>
            <p className="mt-4 text-sm text-ink/70 leading-relaxed">{product.storage}</p>
          </div>
        </div>

        {/* Related */}
        <div className="mx-auto max-w-6xl mt-24">
          <h2 className="font-display text-3xl text-olive">You may also love</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link key={p.id} to="/product/$productId" params={{ productId: p.id }} className="group bg-white rounded-3xl overflow-hidden border border-wheat/60 transition-all hover:-translate-y-1 hover:shadow-xl">
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

function DetailCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-wheat/60">
      <h3 className="font-display text-xl text-olive">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-ink/75">
        {items.map((i) => (
          <li key={i} className="flex gap-2"><span className="text-gold">●</span>{i}</li>
        ))}
      </ul>
    </div>
  );
}
