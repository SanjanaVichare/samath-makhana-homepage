import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { useCart } from "@/context/CartContext";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const { items, setQty, remove, subtotal, count, clear } = useCart();
  const shipping = items.length === 0 || subtotal >= 499 ? 0 : 49;
  const total = subtotal + shipping;

  return (
    <PageShell>
      <section className="px-6 lg:px-10 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">Your Cart</p>
          <h1 className="mt-3 font-display text-4xl lg:text-5xl text-olive">
            {count === 0 ? "Empty for now" : `${count} item${count === 1 ? "" : "s"}`}
          </h1>

          {items.length === 0 ? (
            <div className="mt-16 bg-white rounded-[32px] p-12 text-center border border-wheat/60">
              <div className="mx-auto h-24 w-24 rounded-full bg-wheat/40 flex items-center justify-center text-olive">
                <ShoppingBag size={36} strokeWidth={1.4} />
              </div>
              <h2 className="mt-6 font-display text-3xl text-olive">Your cart is feeling light.</h2>
              <p className="mt-3 text-ink/65 max-w-md mx-auto">A few crunchy makhana would fix that. Browse the collection and add a favourite.</p>
              <Link to="/shop" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-olive text-cream text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive/90">
                Continue Shopping <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
              <div className="space-y-4">
                {items.map((it) => (
                  <article key={`${it.id}-${it.weight}`} className="bg-white rounded-3xl p-5 border border-wheat/60 flex gap-5 items-center">
                    <img src={it.image} alt={it.name} className="h-24 w-24 rounded-2xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl text-olive truncate">{it.name}</h3>
                      <p className="text-xs text-ink/60 uppercase tracking-[0.15em]">{it.weight}</p>
                      <p className="mt-1 font-semibold text-olive">₹{it.price}</p>
                    </div>
                    <div className="inline-flex items-center border border-wheat rounded-full overflow-hidden">
                      <button aria-label="Decrease" onClick={() => setQty(it.id, it.weight, it.qty - 1)} className="h-9 w-9 inline-flex items-center justify-center hover:bg-cream"><Minus size={13} /></button>
                      <span className="w-8 text-center text-sm">{it.qty}</span>
                      <button aria-label="Increase" onClick={() => setQty(it.id, it.weight, it.qty + 1)} className="h-9 w-9 inline-flex items-center justify-center hover:bg-cream"><Plus size={13} /></button>
                    </div>
                    <button
                      onClick={() => remove(it.id, it.weight)}
                      aria-label={`Remove ${it.name}`}
                      className="h-9 w-9 inline-flex items-center justify-center rounded-full text-ink/50 hover:text-red-500 hover:bg-red-50"
                    >
                      <Trash2 size={15} />
                    </button>
                  </article>
                ))}
                <div className="flex justify-between items-center pt-4">
                  <Link to="/shop" className="text-xs uppercase tracking-[0.18em] text-olive font-semibold hover:underline">← Continue Shopping</Link>
                  <button onClick={clear} className="text-xs uppercase tracking-[0.18em] text-ink/50 hover:text-red-500">Clear cart</button>
                </div>
              </div>

              {/* Summary */}
              <aside className="bg-white rounded-[28px] p-7 border border-wheat/60 h-fit lg:sticky lg:top-28">
                <h2 className="font-display text-2xl text-olive">Order summary</h2>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex justify-between"><span className="text-ink/70">Subtotal</span><span className="font-semibold">₹{subtotal}</span></li>
                  <li className="flex justify-between"><span className="text-ink/70">Shipping</span><span className="font-semibold">{shipping === 0 ? "Free" : `₹${shipping}`}</span></li>
                  {shipping > 0 && (
                    <li className="text-xs text-gold">Add ₹{499 - subtotal} more for free shipping</li>
                  )}
                </ul>
                <div className="mt-6 pt-5 border-t border-wheat flex justify-between items-baseline">
                  <span className="text-sm uppercase tracking-[0.18em] text-ink/60">Total</span>
                  <span className="font-display text-3xl text-olive">₹{total}</span>
                </div>
                <Link to="/contact" className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-olive text-cream py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive/90 transition-colors">
                  Checkout <ArrowRight size={14} />
                </Link>
                <p className="mt-4 text-[11px] text-ink/50 text-center">Secure checkout · COD available across India</p>
              </aside>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
