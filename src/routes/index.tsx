import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-makhana.jpg";
import storyImg from "@/assets/story-lotus.jpg";
import pClassic from "@/assets/product-classic.jpg";
import pSpiced from "@/assets/product-spiced.jpg";
import pCookies from "@/assets/product-cookies.jpg";
import bestseller from "@/assets/bestseller-cookies.jpg";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const NAV = ["Home", "Products", "Our Story", "Benefits", "Shop"];

const PRODUCTS = [
  { img: pClassic, name: "Himalayan Salt Makhana", desc: "Classic roasted in ghee with pink salt. Light, crunchy, honest.", tag: "Classic" },
  { img: pSpiced, name: "Peri Peri Masala Makhana", desc: "A slow-roasted bite with smoky chilli and a warm Indian masala finish.", tag: "Spiced" },
  { img: pCookies, name: "Makhana Cookies", desc: "Buttery cookies baked with crushed makhana. Our signature jar.", tag: "Signature" },
];

const BENEFITS = [
  { icon: "🌱", title: "High in Protein", text: "More protein than popcorn or chips." },
  { icon: "🚫", title: "Zero Nasties", text: "No artificial flavors or preservatives." },
  { icon: "🏺", title: "Ancient Superfood", text: "Eaten in India for thousands of years." },
  { icon: "🍪", title: "Now in Cookie Form", text: "Traditional nutrition, modern taste." },
];

const TESTIMONIALS = [
  { name: "Aarav Mehta", quote: "Genuinely the cleanest snack in my pantry. The cookies don't last a week.", stars: 5 },
  { name: "Priya Sharma", quote: "Peri peri makhana replaced chips at our movie nights. No regrets.", stars: 5 },
  { name: "Ishaan Kapoor", quote: "Tastes handmade because it is. You can feel the care in every bite.", stars: 5 },
  { name: "Neha Iyer", quote: "Light, crunchy, and somehow still filling. My desk-drawer essential.", stars: 5 },
  { name: "Rohan Das", quote: "Finally a brand that doesn't oversell. Just good makhana, well roasted.", stars: 5 },
];

const IG = [ig1, ig2, ig3, ig4, ig5, ig6];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            const delay = Number((e.target as HTMLElement).dataset.delay ?? 0);
            setTimeout(() => e.target.classList.add("revealed"), delay || i * 80);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Home() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Marquee />
      <Products />
      <Story />
      <Benefits />
      <Testimonials />
      <Bestseller />
      <Instagram />
      <Footer />
    </div>
  );
}

function Navbar({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-[400ms] ease-out ${
        scrolled ? "bg-cream/95 backdrop-blur shadow-[0_2px_24px_-12px_rgba(0,0,0,0.2)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-semibold text-olive tracking-tight">
          Samath <span className="italic">Makhana</span>
        </a>
        <nav className="hidden lg:flex gap-10">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase().replace(/\s/g, "-")}`}
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink hover:text-olive transition-colors"
            >
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <button aria-label="Cart" className="text-ink hover:text-olive transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 4h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6" />
              <circle cx="10" cy="21" r="1.2" />
              <circle cx="18" cy="21" r="1.2" />
            </svg>
          </button>
          <a
            href="#shop"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-olive text-cream text-xs font-semibold uppercase tracking-[0.15em] hover:bg-olive/90 hover:scale-[1.02] transition-all duration-200"
          >
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <div className="grid h-full grid-cols-1 lg:grid-cols-[55fr_45fr]">
        <div className="relative overflow-hidden bg-wheat">
          <img
            src={heroImg}
            alt="Roasted makhana in a rustic wooden bowl"
            className="h-full w-full object-cover hero-img-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
        </div>
        <div className="relative flex items-center bg-cream px-8 lg:px-16 py-20">
          <div className="max-w-xl">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold hero-text-in"
              style={{ animationDelay: "0.1s" }}
            >
              Rooted in Nature
            </p>
            <h1
              className="mt-6 font-display text-[64px] leading-[0.95] sm:text-[80px] lg:text-[88px] font-semibold text-olive hero-text-in"
              style={{ animationDelay: "0.3s" }}
            >
              Pure. Roasted.<br />
              <span className="italic">Irresistible.</span>
            </h1>
            <p
              className="mt-7 text-[17px] leading-relaxed text-ink/70 hero-text-in"
              style={{ animationDelay: "0.45s" }}
            >
              Handcrafted makhana snacks made for the mindful generation.
            </p>
            <div
              className="mt-10 flex flex-wrap gap-4 hero-text-in"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="#shop"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-olive text-cream text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive/90 hover:scale-[1.02] transition-all duration-200"
              >
                Shop Now
              </a>
              <a
                href="#products"
                className="inline-flex items-center px-7 py-3.5 rounded-full border border-gold text-gold text-xs font-semibold uppercase tracking-[0.18em] hover:bg-gold hover:text-cream transition-colors duration-200"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-cue">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Scroll</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" stroke="#9D713C" strokeWidth="1.5">
          <path d="M7 1v18M1 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

function Marquee() {
  const items = "🌿 100% Natural · No Preservatives · High Protein · Gluten Free · Handcrafted in India · Guilt-Free Snacking";
  return (
    <div className="bg-olive text-cream py-4 overflow-hidden">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="px-8 text-[13px] font-bold uppercase tracking-[0.2em]"
          >
            {items} 🌿
          </span>
        ))}
      </div>
    </div>
  );
}

function Products() {
  return (
    <section id="products" className="bg-cream py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <p data-reveal className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-gold">Our Signature Range</p>
          <h2 data-reveal data-delay="100" className="reveal mt-4 font-display text-5xl lg:text-[52px] font-semibold text-olive">
            What We Make
          </h2>
          <p data-reveal data-delay="200" className="reveal mt-4 italic text-gold text-lg">
            Every batch is small. Every flavour is intentional.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              data-reveal
              data-delay={i * 150}
              className="reveal group rounded-xl bg-wheat overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(157,113,60,0.5)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">{p.tag}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-olive">{p.name}</h3>
                <p className="mt-3 text-sm text-ink/75 leading-relaxed flex-1">{p.desc}</p>
                <button className="mt-6 self-start inline-flex items-center px-5 py-2.5 rounded-full bg-gold text-cream text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-olive transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="our-story" className="grid lg:grid-cols-2 min-h-[640px]">
      <div className="relative overflow-hidden min-h-[420px]">
        <img
          src={storyImg}
          alt="Farmer hands holding raw lotus seeds"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="bg-olive text-cream flex items-center px-8 lg:px-20 py-20">
        <div className="max-w-lg">
          <p data-reveal className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-wheat">Our Story</p>
          <h2 data-reveal data-delay="120" className="reveal mt-5 font-display text-4xl lg:text-5xl font-semibold leading-tight">
            From the Lotus Ponds of India to Your Snack Bowl.
          </h2>
          <p data-reveal data-delay="240" className="reveal mt-6 text-cream/85 leading-relaxed">
            Samath sources lotus seeds from family-run farms in Bihar, then slow-roasts them in small kitchens — the way grandmothers have for generations. No shortcuts, no fillers, just the patient craft of turning a humble seed into something irresistible.
          </p>
          <a
            href="#"
            data-reveal
            data-delay="360"
            className="reveal mt-9 inline-flex items-center px-7 py-3.5 rounded-full border border-cream text-cream text-xs font-semibold uppercase tracking-[0.18em] hover:bg-cream hover:text-olive transition-colors duration-200"
          >
            Read Our Story
          </a>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="benefits" className="bg-wheat py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 data-reveal className="reveal text-center font-display text-4xl lg:text-5xl font-semibold text-olive">
          Why Samath?
        </h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              data-reveal
              data-delay={i * 120}
              className="reveal group rounded-xl p-8 text-center bg-wheat hover:bg-cream transition-colors duration-300"
            >
              <div className="text-4xl mb-5 text-gold group-hover:text-olive transition-colors">{b.icon}</div>
              <h3 className="font-display text-xl font-semibold text-olive">{b.title}</h3>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const paused = useRef(false);
  useEffect(() => {
    const t = setInterval(() => {
      if (!paused.current) setI((v) => (v + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section
      className="bg-cream py-28 px-6 lg:px-10"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="mx-auto max-w-6xl">
        <h2 data-reveal className="reveal text-center font-display text-4xl lg:text-5xl font-semibold text-olive">
          What Our Snackers Say
        </h2>
        <div data-reveal data-delay="150" className="reveal mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${i * (100 / 3)}%)` }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div key={idx} className="shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="bg-cream border border-wheat rounded-2xl p-8 shadow-[0_8px_28px_-16px_rgba(0,0,0,0.15)] h-full">
                  <div className="text-gold tracking-widest">
                    {"★".repeat(t.stars)}
                  </div>
                  <p className="mt-5 italic text-ink leading-relaxed">"{t.quote}"</p>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.25em] font-semibold text-olive">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === i ? "w-8 bg-gold" : "w-2 bg-gold/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Bestseller() {
  const words = ["Makhana", "Cookies", "—", "Snack.", "Anytime.", "Guilt-Free."];
  return (
    <section className="bg-ink text-cream py-32 px-6 lg:px-10 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bestseller})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p data-reveal className="reveal text-[11px] font-bold uppercase tracking-[0.35em] text-gold">Bestseller</p>
        <h2 className="mt-6 font-display text-5xl lg:text-[64px] leading-[1.05] font-semibold">
          {words.map((w, idx) => (
            <span
              key={idx}
              data-reveal
              data-delay={idx * 110}
              className="reveal blur-in inline-block mr-3"
            >
              {w}
            </span>
          ))}
        </h2>
        <a
          data-reveal
          data-delay="800"
          href="#shop"
          className="reveal mt-12 inline-flex items-center px-8 py-4 rounded-full bg-gold text-ink text-xs font-semibold uppercase tracking-[0.2em] hover:bg-cream transition-colors duration-200"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}

function Instagram() {
  return (
    <section className="bg-cream py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 data-reveal className="reveal text-center font-display text-4xl lg:text-5xl font-semibold text-olive">
          Follow <span className="italic">@SamathMakhana</span>
        </h2>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-1">
          {IG.map((src, i) => (
            <a
              key={i}
              href="#"
              data-reveal
              data-delay={i * 80}
              className="reveal group relative aspect-square overflow-hidden"
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: "rgba(77,98,44,0.6)" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FAF6E9" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#FAF6E9" />
                </svg>
                <span className="text-cream text-[11px] uppercase tracking-[0.2em] font-semibold">View Post</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-olive text-cream pt-20 pb-8 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-semibold">Samath <span className="italic">Makhana</span></h3>
          <p className="mt-4 text-cream/80 text-sm leading-relaxed">Rooted in Nature. Made for You.</p>
          <div className="mt-6 flex gap-4">
            {["instagram", "facebook", "twitter"].map((s) => (
              <a key={s} href="#" aria-label={s} className="text-wheat hover:text-cream transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-wheat">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/85">
            {["Shop All", "Our Story", "Benefits", "Journal", "Stockists"].map((l) => (
              <li key={l}><a href="#" className="hover:text-cream transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-wheat">Support</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/85">
            <li>hello@samathmakhana.in</li>
            <li>+91 98765 43210</li>
            <li>Shipping & Returns</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-wheat">Newsletter</h4>
          <p className="mt-5 text-sm text-cream/80">Small batch drops. Quiet emails.</p>
          <form className="mt-5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent border-b border-cream/40 focus:border-cream outline-none py-2 text-sm text-cream placeholder:text-cream/50"
            />
            <button className="px-4 py-2 rounded-full bg-gold text-cream text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-gold/90 transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="mt-16 pt-6 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-wheat">© {new Date().getFullYear()} Samath Makhana. All rights reserved.</p>
        <p className="text-xs text-wheat">Handcrafted in India 🌿</p>
      </div>
    </footer>
  );
}
