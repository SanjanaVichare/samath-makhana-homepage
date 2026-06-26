import { Leaf, Sprout, Flame, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function WhyChooseUs() {
  const items = [
    { Icon: Leaf, title: "Farm Fresh", text: "Direct from family farms in Bihar — no middlemen, no compromise." },
    { Icon: Sprout, title: "High Protein", text: "9-10g protein per 100g. The clean fuel your day deserves." },
    { Icon: Flame, title: "Roasted, Never Fried", text: "Slow-roasted in iron pans for a crunch you can taste." },
    { Icon: ShieldCheck, title: "No Preservatives", text: "Pure ingredients. Nothing artificial. Ever." },
  ];
  return (
    <section className="relative py-28 px-6 lg:px-10 bg-cream">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">Why Choose Us</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-olive">
            Small choices. <span className="italic">Real</span> difference.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              data-reveal
              data-delay={i * 100}
              className="reveal group relative bg-white rounded-3xl p-8 border border-wheat/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-24px_rgba(77,98,44,0.35)]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-olive/10 text-olive transition-colors group-hover:bg-olive group-hover:text-cream">
                <Icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-olive">{title}</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setStatus("err");
    setStatus("ok");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };
  return (
    <section className="relative py-28 px-6 lg:px-10 bg-cream">
      <div className="mx-auto max-w-3xl">
        <div
          data-reveal
          className="reveal relative overflow-hidden rounded-[36px] bg-olive text-cream p-10 sm:p-14 text-center"
        >
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-wheat/20 blur-3xl" />
          <div className="relative">
            <p className="text-[11px] uppercase tracking-[0.3em] text-wheat font-semibold">Newsletter</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Slow emails, <span className="italic">small joys.</span>
            </h2>
            <p className="mt-4 text-cream/80 max-w-md mx-auto text-sm leading-relaxed">
              Recipes, restocks, and the occasional kitchen story. Once a month, never more.
            </p>
            <form onSubmit={onSubmit} noValidate className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Email</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                placeholder="your@email.com"
                className="flex-1 rounded-full bg-cream/10 border border-cream/30 focus:border-cream outline-none px-5 py-3 text-sm text-cream placeholder:text-cream/50"
              />
              <button
                type="submit"
                className="rounded-full bg-gold text-cream px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-gold/90 transition-all hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
            {status === "ok" && <p className="mt-4 text-xs text-wheat">Welcome to the table 🌿</p>}
            {status === "err" && <p className="mt-4 text-xs text-wheat">Please enter a valid email.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative py-28 px-6 lg:px-10 bg-cream">
      <div
        data-reveal
        className="reveal mx-auto max-w-6xl text-center"
      >
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">Ready when you are</p>
        <h2 className="mt-4 font-display text-5xl lg:text-7xl font-semibold text-olive leading-[1.05]">
          Snack quietly. <br />
          <span className="italic">Live loudly.</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-ink/70 leading-relaxed">
          Discover the small-batch range or talk to us about wholesale and gifting. We answer every email.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-4 rounded-full bg-olive text-cream text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive/90 hover:scale-[1.02] transition-all"
          >
            Shop Now
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full border-2 border-olive text-olive text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive hover:text-cream transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
