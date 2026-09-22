import { Leaf, Sprout, Flame, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function WhyChooseUs() {
  const items = [
    {
      Icon: Leaf,
      title: "Farm Fresh",
      text: "Direct from family farms — no middlemen, no compromise.",
    },
    {
      Icon: Sprout,
      title: "High Protein",
      text: "9-10g protein per 100g. The clean fuel your day deserves.",
    },
    {
      Icon: Flame,
      title: "Roasted, Never Fried",
      text: "Slow-roasted in iron pans for a crunch you can taste.",
    },
    {
      Icon: ShieldCheck,
      title: "No Preservatives",
      text: "Pure ingredients. Nothing artificial. Ever.",
    },
  ];

  return (
    <section className="relative py-25 px-6 lg:px-1 bg-cream">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">
            Why Choose Us
          </p>

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
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-olive/10 text-olive transition-colors group-hover:bg-olive group-hover:text-cream">
                <Icon size={26} strokeWidth={1.5} />
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold text-olive">
                {title}
              </h3>

              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                {text}
              </p>
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

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return setStatus("err");
    }

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
            <p className="text-[11px] uppercase tracking-[0.3em] text-wheat font-semibold">
              Newsletter
            </p>

            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Slow emails, <span className="italic">small joys.</span>
            </h2>

            <p className="mt-4 text-cream/80 max-w-md mx-auto text-sm leading-relaxed">
              Recipes, restocks, and the occasional kitchen story. Once a
              month, never more.
            </p>

            <form
              onSubmit={onSubmit}
              noValidate
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>

              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
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

            {status === "ok" && (
              <p className="mt-4 text-xs text-wheat">
                Welcome to the table 🌿
              </p>
            )}

            {status === "err" && (
              <p className="mt-4 text-xs text-wheat">
                Please enter a valid email.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import classic from "@/assets/packet-chat-pata.png";
import cheese from "@/assets/packet-cheese.png";
import cream from "@/assets/packet-cream-onion.png";
import peri from "@/assets/packet-peri-peri.png";
import pudina from "@/assets/packet-pudina.png";
import pepper from "@/assets/packet-salt-pepper.png";

export function FinalCTA() {
  const products = [
    {
      src: classic,
      className:
        "top-8 left-[8%] w-36 lg:w-44 -rotate-[8deg] z-10",
    },
    {
      src: pepper,
      className:
        "top-2 left-[22%] w-36 lg:w-44 -rotate-[4deg] z-20",
    },
    {
      src: cream,
      className:
        "top-0 left-[36%] w-36 lg:w-44 rotate-0 z-30",
    },
    {
      src: cheese,
      className:
        "top-0 right-[36%] w-36 lg:w-44 rotate-0 z-30",
    },
    {
      src: pudina,
      className:
        "top-2 right-[22%] w-36 lg:w-44 rotate-[4deg] z-20",
    },
    {
      src: peri,
      className:
        "top-8 right-[8%] w-36 lg:w-44 rotate-[8deg] z-10",
    },
  ];

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        bg-olive
        px-6
        py-4
        lg:px-10
      "
    >
      {/* =================================================
          DECORATIVE PRODUCT IMAGES
      ================================================= */}
      <div className="pointer-events-none absolute inset-0">
        {products.map((product, index) => (
          <img
            key={index}
            src={product.src}
            alt=""
            className={`
              absolute
              ${product.className}
              drop-shadow-2xl
              transition-transform
              duration-500
              hover:scale-105
            `}
          />
        ))}
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}
      <div
        data-reveal
        className="
          reveal
          relative
          z-20
          mx-auto
          max-w-5xl
          pt-37
          text-center
        "
      >
        {/* Heading */}
        <h2
          className="
            mt-5
            font-display
            text-5xl
            font-semibold
            leading-tight
            text-white
            lg:text-7xl
          "
        >
          Snack quietly.
          <span className="italic"> Live loudly.</span>
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-xl
            font-semibold
            leading-relaxed
            tracking-wide
            text-white/90
          "
        >
          Discover the small-batch range or talk to us about wholesale,
          gifting and premium snack solutions. We answer every email.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">

          {/* Shop Now */}
          <Link
            to="/shop"
            className="
              rounded-full
              bg-white
              px-10
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-olive
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white/90
            "
          >
            Shop Now
          </Link>

          {/* Contact Us */}
          <Link
            to="/contact"
            className="
              rounded-full
              border-2
              border-white
              bg-transparent
              px-10
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-olive
            "
          >
            Contact Us
          </Link>

        </div>
      </div>
    </section>
  );
}