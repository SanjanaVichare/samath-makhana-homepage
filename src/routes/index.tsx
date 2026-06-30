import MakhanaCursor from "@/components/MakhanaCursor";
import makhanaInBowl from "@/assets/makahna-bowl.png";
import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-makhana.jpg";
import storyImg from "@/assets/story-lotus.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cookiePack from "@/assets/cookies.png";
import cookieSplash from "@/assets/product-spiced.jpg";
import cursorMakhana from "@/assets/makhana.png";
import productBg from "@/assets/bg-doodle.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import bcookie from "@/assets/broken-cookie.png"
import bestcookie from "@/assets/cookie-full.png"
import pcp from "@/assets/packet-chat-pata.png";
import pcp1 from "@/assets/packet-peri-peri.png";
import pcp2 from "@/assets/packet-cheese.png";
import pcp3 from "@/assets/packet-pudina.png";
import pcp4 from "@/assets/packet-salt-pepper.png";
import pcp5 from "@/assets/packet-cream-onion.png";
import cookiep from "@/assets/packet-cookies.png";
import cookiesf from "@/assets/packet-cookies-sugar-free.png";
import bowlchatpata from "@/assets/bowl-chat-pata.png";
import bowlcheese from "@/assets/bowl-cheese.png";
import bowlcookies from "@/assets/bowl-cookies.png";
import bowlperi from "@/assets/bowl-peri-peri.png";
import bowlcream from "@/assets/bowl-cream-onion.png";
import bowlsalt from "@/assets/bowl-salt-pepper.png";
import bowlpudina from "@/assets/bowl-pudina.png";
import bowlcookiesf from "@/assets/bowl-cookies-sugar-free.png";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";
import SiteNavbar from "@/components/layout/Navbar";
import SiteFooter from "@/components/layout/Footer";
import { NewsletterSection, FinalCTA } from "@/components/sections/HomeAdditions";
import amazon from "@/assets/amazon.png";
import blinkit from "@/assets/blinkit.png";
import zepto from "@/assets/Zepto.png";
import instamart from "@/assets/instamart.png";
import flipkart from "@/assets/flipcart.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const BRANDS = [
  { name: "Amazon", logo: amazon },
  { name: "Blinkit", logo: blinkit },
  { name: "Zepto", logo: zepto },
  { name: "Instamart", logo: instamart },
  { name: "Flipkart", logo: flipkart },
];

const PRODUCTS = [
  {
    name: "Peri Peri Makhana",
    desc: "Bold, fiery and packed with smoky peri-peri flavour.",
    tag: "Spicy",
    images: {
      "30g": pcp1,
      "60g": pcp1,
      "120g": pcp1,
    },
    bowlImages: {
      "30g": bowlperi,
      "60g": bowlperi,
      "120g": bowlperi,
    },
  },
  {
    name: "Cheese Makhana",
    desc: "Creamy cheese seasoning with a perfectly crunchy bite.",
    tag: "Cheesy",
    images: {
      "30g": pcp2,
      "60g": pcp2,
      "120g": pcp2,
    },
    bowlImages: {
      "30g": bowlcheese,
      "60g": bowlcheese,
      "120g": bowlcheese,
    },
  },
  {
    name: "Chat Pata Makhana",
    desc: "Tangy Indian spices with a chatpata kick.",
    tag: "Tangy",
    images: {
      "30g": pcp,
      "60g": pcp,
      "120g": pcp,
    },
    bowlImages: {
      "30g": bowlchatpata,
      "60g": bowlchatpata,
      "120g": bowlchatpata,
    },
  },
  {
    name: "Cream & Onion Makhana",
    desc: "Rich cream balanced with savoury onion flavour.",
    tag: "Popular",
    images: {
      "30g": pcp5,
      "60g": pcp5,
      "120g": pcp5,
    },
    bowlImages: {
      "30g": bowlcream,
      "60g": bowlcream,
      "120g": bowlcream,
    },
  },
  {
    name: "Pudina Makhana",
    desc: "Refreshing mint flavour with a crisp roasted finish.",
    tag: "Fresh",
    images: {
      "30g": pcp3,
      "60g": pcp3,
      "120g": pcp3,
    },
    bowlImages: {
      "30g": bowlpudina,
      "60g": bowlpudina,
      "120g": bowlpudina,
    },
  },
  {
    name: "Salt & Pepper Makhana",
    desc: "Simple, classic and incredibly addictive.",
    tag: "Classic",
    images: {
      "30g": pcp4,
      "60g": pcp4,
      "120g": pcp4,
    },
    bowlImages: {
      "30g": bowlsalt,
      "60g": bowlsalt,
      "120g": bowlsalt,
    },
  },
  {
    name: "Makhana Cookies",
    desc: "Crunchy cookies made with wholesome makhana goodness.",
    tag: "Cookies",
    images: {
      "150g": cookiep,
      "250g": cookiep,
      "500g": cookiep,
    },
    bowlImages: {
      "150g": bowlcookies,
      "250g": bowlcookies,
      "500g": bowlcookies,
    },
  },
  {
    name: "Sugar Free Cookies",
    desc: "Guilt-free cookies crafted without added sugar.",
    tag: "Sugar Free",
    images: {
      "150g": cookiesf,
      "250g": cookiesf,
      "500g": cookiesf,
    },
    bowlImages: {
      "150g": bowlcookiesf,
      "250g": bowlcookiesf,
      "500g": bowlcookiesf,
    },
  },
];

const BENEFITS = [
  { title: "High in Protein", text: "More protein than popcorn or chips." },
  { title: "Zero Nasties", text: "No artificial flavors or preservatives." },
  { title: "Ancient Superfood", text: "Eaten in India for thousands of years." },
  { title: "Now in Cookie Form", text: "Traditional nutrition, modern taste." },
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

function PatternBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${productBg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "1040px",
          backgroundPosition: "center top",
          opacity: 0.8,
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

function Home() {
  useReveal();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.cursor = `url(${cursorMakhana}) 16 16, auto`;
    document.body.classList.add("home-cursor");

    return () => {
      document.body.style.cursor = "auto";
      document.body.classList.remove("home-cursor");
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <MakhanaCursor />
      <div className="min-h-screen bg-cream text-ink">
        <SiteNavbar transparentOnTop />

        <Hero />
        <Marquee />
        <PatternBackground>
          <ShopBrands />
          <Products />
        </PatternBackground>
        <PatternBackground>
          <Bestseller />
        </PatternBackground>
        <FinalCTA />
        <Story />
        <PatternBackground>
          <Benefits />
        </PatternBackground>
        <PatternBackground>
          <InfluencerReels />
        </PatternBackground>
        <PatternBackground>
          <Testimonials />
        </PatternBackground>
        <PatternBackground>
          <Instagram />
        </PatternBackground>
        <SiteFooter />
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="
    fixed
    bottom-6
    right-6
    z-[999]
    w-16
    h-16
    rounded-full
    bg-[#25D366]
    flex
    items-center
    justify-center
    text-white
    shadow-[0_10px_30px_rgba(37,211,102,0.45)]
    hover:scale-110
    transition-all
  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.61 4.44 1.67 6.31L3 29l6.91-1.63A12.93 12.93 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.6c-1.96 0-3.88-.53-5.56-1.54l-.4-.24-4.1.97.98-4-.26-.41A10.55 10.55 0 1 1 16 26.6zm5.78-7.91c-.32-.16-1.9-.94-2.19-1.05-.29-.11-.5-.16-.71.16-.21.32-.82 1.05-1.01 1.27-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.56-.94-.84-1.58-1.88-1.77-2.19-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.63s1.14 3.05 1.3 3.26c.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.66.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.54-.08-.13-.29-.21-.61-.37z" />
          </svg>
        </a>
      </div>
    </>
  );
}

export function Navbar({ scrolled }: { scrolled: boolean }) {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const isProductsPage = pathname === "/products";

  const links = isProductsPage
    ? [
      { label: "Home", href: "/" },
      { label: "Products", href: "#top" },
      { label: "About Us", href: "#our-story" },
      { label: "Benefits", href: "#benefits" },
    ]
    : [
      { label: "Home", href: "#home" },
      { label: "Products", href: "/products" },
      { label: "About Us", href: "#our-story" },
      { label: "Benefits", href: "#benefits" }
    ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-[400ms] ease-out ${scrolled ? "bg-cream/95 backdrop-blur shadow-[0_2px_24px_-12px_rgba(0,0,0,0.2)]" : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-semibold text-olive tracking-tight">
          Samarth <span className="italic">Makhana</span>
        </Link>
        <nav className="hidden lg:flex gap-10">
          {links.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink hover:text-olive transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink hover:text-olive transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>
        <div className="flex items-center gap-5">
          <button aria-label="Cart" className="text-ink hover:text-olive transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 4h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6" />
              <circle cx="10" cy="21" r="1.2" />
              <circle cx="18" cy="21" r="1.2" />
            </svg>
          </button>
          {isProductsPage ? (
            <a
              href="#top"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-olive text-cream text-xs font-semibold uppercase tracking-[0.15em] hover:bg-olive/90 hover:scale-[1.02] transition-all duration-200"
            >
              Browse
            </a>
          ) : (
            <a
              href="#products"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-olive text-cream text-xs font-semibold uppercase tracking-[0.15em] hover:bg-olive/90 hover:scale-[1.02] transition-all duration-200"
            >
              Shop Now
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[720px] w-full overflow-hidden"
    >      <div className="grid h-full grid-cols-1 lg:grid-cols-[55fr_45fr]">
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
  const [selectedWeight, setSelectedWeight] = useState<Record<string, string>>(
    {}
  );

  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay.current]
  );

  return (
    <section
      id="products"
      className="relative pt-0 pb-20 px-6 lg:px-10 overflow-hidden"
    >


      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
            Our Signature Range
          </p>

          <h2 className="mt-4 font-display text-5xl lg:text-[52px] font-semibold text-olive">
            Explore Our Flavours
          </h2>

          <p className="mt-4 italic text-gold text-lg">
            Every batch is small. Every flavour is intentional.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-16">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            className="
    absolute
    left-[-14px]
    top-1/2
    -translate-y-1/2
    z-20
    w-8
    h-8
    rounded-full
    bg-white
    shadow-lg
    border
    border-olive/30
    flex
    items-center
    justify-center
  "
          >
            <ChevronLeft size={14} />
          </button>

          <button
            type="button"
            onClick={() => emblaApi && emblaApi.scrollNext()}
            className="
    absolute
    right-[-14px]
    top-1/2
    -translate-y-1/2
    z-20
    w-8
    h-8
    rounded-full
    bg-olive
    text-white
    shadow-lg
    flex
    items-center
    justify-center
  "
          >
            <ChevronRight size={14} />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {PRODUCTS.map((p) => (
                <div
                  key={p.name}
                  className="
                  flex-[0_0_100%]
                  md:flex-[0_0_50%]
                  lg:flex-[0_0_33%]
                  px-4
                "
                >
                  <article
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
                    <div
                      className="
    relative
    h-[240px]
    mx-4
    mt-4
    rounded-3xl
    bg-cream/40
    flex
    items-center
    justify-center
    p-6
    overflow-hidden
  "
                    >
                      {/* Ticket Badge */}
                      <div
                        className={`
      absolute
      top-4
      left-4
      h-[36px]
      px-4
      flex
      items-center
      text-xs
      font-semibold
      text-white
      z-30
      ${p.tag === "Popular" ? "bg-gold" : "bg-olive"}
    `}
                        style={{
                          clipPath:
                            "polygon(12px 0%, 100% 0%, 100% 100%, 12px 100%, 0% 50%)",
                        }}
                      >
                        <span className="absolute left-[5px] w-[5px] h-[5px] rounded-full bg-white/80" />
                        {p.tag}
                      </div>

                      {/* Main Golden Glow */}
                      <div
                        className="
      absolute
      left-1/2
      top-[62%]
      w-56
      h-56
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#FFD45C]
      opacity-80
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
      w-[180px]
      h-[220px]
      -translate-x-1/2
      -translate-y-1/2
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
      w-32
      h-32
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-olive/20
      blur-3xl
      transition-all
      duration-700
      group-hover:scale-110
    "
                      />

                      {/* Floating Sparkles */}
                      <div className="absolute inset-0 pointer-events-none z-10">
                        <span className="absolute top-8 left-12 w-2 h-2 rounded-full bg-white/80 blur-sm animate-pulse" />
                        <span className="absolute top-14 right-10 w-1.5 h-1.5 rounded-full bg-[#FFD45C] blur-sm animate-ping" />
                        <span className="absolute bottom-12 left-10 w-2 h-2 rounded-full bg-white/60 blur-sm animate-pulse" />
                        <span className="absolute bottom-10 right-14 w-1.5 h-1.5 rounded-full bg-[#FFE79A] blur-sm animate-pulse" />
                      </div>

                      {/* Packet Image */}
                      <img
                        src={
                          p.images[
                          (selectedWeight[p.name] ||
                            Object.keys(p.images)[0]) as keyof typeof p.images
                          ]
                        }
                        alt={p.name}
                        className="
    absolute
    inset-0
    z-20
    w-full
    h-[230px]
    object-contain
    rounded-3xl
    transition-all
    duration-700
    ease-out
    drop-shadow-[0_18px_30px_rgba(255,190,60,0.35)]
    group-hover:opacity-0
    group-hover:scale-90
    group-hover:rotate-[-6deg]
  "
                      />

                      {/* Bowl Image */}
                      <img
                        src={
                          p.bowlImages[
                          (selectedWeight[p.name] ||
                            Object.keys(p.bowlImages)[0]) as keyof typeof p.bowlImages
                          ]
                        }
                        alt={`${p.name} Bowl`}
                        className="
    absolute
    inset-0
    z-20
    w-full
    h-[230px]
    object-contain
    rounded-3xl
    opacity-0
    scale-125
    transition-all
    duration-700
    ease-out
    drop-shadow-[0_22px_38px_rgba(255,190,60,0.45)]
    group-hover:opacity-100
    group-hover:scale-110
    group-hover:-translate-y-2
  "
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

                      {/* Sizes */}
                      <div className="mt-5">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 mb-3">
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
                              px-3
                              py-1.5
                              text-xs
                              rounded-full
                              border
                              transition-all
                              duration-300
                              ${(selectedWeight[p.name] ||
                                  Object.keys(p.images)[0]) === weight
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
                        mt-6
                        inline-flex
                        items-center
                        justify-center
                        w-full
                        rounded-full
                        bg-olive
                        text-cream
                        py-3
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        transition-all
                        duration-300
                        hover:bg-olive/90
                      "
                      >
                        Shop Now
                      </a>
                    </div>
                  </article>

                </div>
              ))}
            </div>
          </div>
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
            Samarth sources lotus seeds from family-run farms in Bihar, then slow-roasts them in small kitchens — the way grandmothers have for generations. No shortcuts, no fillers, just the patient craft of turning a humble seed into something irresistible.
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
  function NutritionCard({
    title,
    value,
    icon,
  }: {
    title: string;
    value: string;
    icon: string;
  }) {
    return (
      <div
        className="
        relative
        w-32
        h-36
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-3

        bg-[#FDF8EE]
        border
        border-[#E9DCC6]

        shadow-xl

        hover:scale-110
        hover:rotate-0
        transition-all
        duration-500
      "
        style={{
          borderRadius: "58% 42% 53% 47% / 44% 56% 42% 58%",
          transform: "rotate(-12deg)",
        }}
      >
        {/* Little brown dots */}
        <span className="absolute top-4 left-5 w-1 h-1 rounded-full bg-[#A56B42]" />
        <span className="absolute top-7 right-6 w-1.5 h-1.5 rounded-full bg-[#8D5A32]" />
        <span className="absolute bottom-5 left-8 w-1 h-1 rounded-full bg-[#9F6A3F]" />
        <span className="absolute bottom-8 right-7 w-1 h-1 rounded-full bg-[#A56B42]" />

        <div className="text-3xl">{icon}</div>

        <div className="mt-2 text-2xl font-bold text-olive">
          {value}
        </div>

        <div className="mt-1 text-xs font-semibold text-olive leading-tight">
          {title}
        </div>
      </div>
    );
  }
  const benefits = [
    "Protein Rich",
    "Naturally Gluten Free",
    "Light & Crunchy",
    "No Artificial Preservatives",
  ];

  return (
    <section
      id="benefits"
      className="bg-wheat py-24 px-6 lg:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[40px] bg-cream border border-olive/10 shadow-xl overflow-hidden">

          {/* Background Glow */}
          <div className="absolute right-0 top-0 h-full w-[40%] bg-olive/5 blur-3xl" />

          <div className="grid lg:grid-cols-2 items-center gap-12 p-8 md:p-14 lg:p-20">

            {/* LEFT CONTENT */}
            <div data-reveal className="reveal">
              <span className="text-sm uppercase tracking-[0.3em] text-olive/70">
                Why Choose Samarth
              </span>

              <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-tight text-olive font-semibold">
                Wholesome Nutrition
                <br />
                In Every Bite
              </h2>

              <p className="mt-6 text-ink/70 text-lg max-w-lg leading-relaxed">
                Crafted from premium lotus seeds and roasted to perfection,
                Samarth delivers the perfect balance of taste, crunch and
                nutrition.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-olive text-white text-sm">
                      ✓
                    </div>

                    <span className="text-ink font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-10 rounded-full bg-olive px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Explore Flavours
              </button>
            </div>

            {/* RIGHT INFOGRAPHIC */}
            <div
              data-reveal
              className="reveal relative flex items-center justify-center h-[520px]"
            >
              {/* Center Product */}
              <img
                src={makhanaInBowl}
                alt="Samarth Makhana"
                className="relative z-20 w-[280px] lg:w-[320px] drop-shadow-2xl animate-float"
              />

              {/* Protein */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <NutritionCard
                  title="Protein Rich"
                  value="11.25g+"
                  icon="💪"
                />
              </div>

              {/* Gluten */}
              <div className="absolute top-24 right-0">
                <NutritionCard
                  title="Gluten Free"
                  value="100%"
                  icon="🌾"
                />
              </div>

              {/* Calories */}
              <div className="absolute bottom-24 right-4">
                <NutritionCard
                  title="Cholestrol Free"
                  value="0%"
                  icon="🔥"
                />
              </div>

              {/* Fiber */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <NutritionCard
                  title="High Fiber"
                  value="Rich"
                  icon="🌿"
                />
              </div>

              {/* Natural */}
              <div className="absolute bottom-24 left-4">
                <NutritionCard
                  title="100% Natural"
                  value="Pure"
                  icon="🍃"
                />
              </div>

              {/* Cholesterol */}
              <div className="absolute top-24 left-0">
                <NutritionCard
                  title="0% Cholesterol"
                  value="Zero"
                  icon="❤️"
                />
              </div>

            </div>
          </div>


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
      if (!paused.current) {
        setI((v) => (v + 1) % TESTIMONIALS.length);
      }
    }, 5000);

    return () => clearInterval(t);
  }, []);
  return (
    < section
      id="products"
      className="relative bg-cream py-28 px-6 lg:px-10 overflow-hidden"
      onMouseEnter={() => (paused.current = true)
      }
      onMouseLeave={() => (paused.current = false)}
    >
      <img
        src={productBg}
        alt=""
        className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    opacity-[0.6]
    pointer-events-none
    select-none
  "
      />
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
              className={`h-2 rounded-full transition-all duration-300 ${idx === i ? "w-8 bg-gold" : "w-2 bg-gold/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section >
  );
}

function InfluencerReels() {
  const [i, setI] = useState(0);
  const paused = useRef(false);

  const REELS = [
    {
      name: "Fitness Creator",
      handle: "@creator1",
      video: null,
    },
    {
      name: "Food Blogger",
      handle: "@creator2",
      video: null,
    },
    {
      name: "Lifestyle Influencer",
      handle: "@creator3",
      video: null,
    },
    {
      name: "Nutrition Coach",
      handle: "@creator4",
      video: null,
    },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      if (!paused.current) {
        setI((v) => (v + 1) % REELS.length);
      }
    }, 5000);

    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="reels"
      className="relative bg-cream py-28 px-6 lg:px-10 overflow-hidden"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <img
        src={productBg}
        alt=""
        className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      opacity-[0.6]
      pointer-events-none
      select-none
    "
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <h2
          data-reveal
          className="reveal text-center font-display text-4xl lg:text-5xl font-semibold text-olive"
        >
          Loved By Influencers
        </h2>

        <p
          data-reveal
          data-delay="100"
          className="reveal mt-4 text-center text-ink/70 max-w-2xl mx-auto"
        >
          Real creators trying our Lotus Pops and sharing their reactions.
        </p>

        <div
          data-reveal
          data-delay="150"
          className="reveal mt-14 overflow-hidden"
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${i * (100 / 4)}%)`,
            }}
          >
            {[...REELS, ...REELS].map((reel, idx) => (
              <div
                key={idx}
                className="shrink-0 w-full sm:w-1/2 lg:w-1/4 px-4"
              >
                <div className="group">
                  {/* Reel Container */}
                  <div
                    className="
                      relative
                      aspect-[9/16]
                      rounded-[32px]
                      overflow-hidden
                      bg-wheat
                      border border-wheat/80
                      shadow-[0_12px_40px_-18px_rgba(0,0,0,0.2)]
                    "
                  >
                    {/* Replace this with video later */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mx-auto">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8 text-olive"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>

                        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-olive font-semibold">
                          Reel Placeholder
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Creator Info */}
                  <div className="mt-4 text-center">
                    <p className="font-semibold text-olive">
                      {reel.name}
                    </p>
                    <p className="text-sm text-ink/60">
                      {reel.handle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {REELS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === i
                ? "w-8 bg-gold"
                : "w-2 bg-gold/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Bestseller() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 2. Existing animations
  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [100, 0, 0, -30]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [0.9, 1, 1.05]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [3, -3]
  );

  // 3. THEN create cookie animations — smoother easing & premium pacing
  const cookieProgress = useTransform(
    scrollYProgress,
    [0.32, 0.78],
    [0, 1],
    { clamp: true }
  );

  // Slow, soft cross-fade
  const wholeOpacity = useTransform(cookieProgress, [0, 0.42, 0.55], [1, 1, 0]);
  const brokenOpacity = useTransform(cookieProgress, [0.45, 0.58, 1], [0, 1, 1]);

  // Gentle continuous transforms — no jump at the swap
  const cookieScale = useTransform(cookieProgress, [0, 0.5, 1], [1, 1.04, 1.08]);
  const cookieRotate = useTransform(cookieProgress, [0, 1], [0, -4]);
  const cookieY = useTransform(cookieProgress, [0, 1], [0, -8]);

  // Subtle "impact" shadow that deepens during the crack
  const shadowBlur = useTransform(cookieProgress, [0.4, 0.55, 0.7], [35, 55, 40]);
  const shadowOpacity = useTransform(cookieProgress, [0.4, 0.55, 0.7], [0.45, 0.6, 0.5]);
  const wholeFilter = useTransform(
    [shadowBlur, shadowOpacity] as never,
    ([b, o]: number[]) => `drop-shadow(0 ${Math.round(b * 0.7)}px ${b}px rgba(0,0,0,${o}))`
  );

  // Crumb particles — appear right at the crack moment
  const crumbProgress = useTransform(cookieProgress, [0.45, 0.65], [0, 1]);
  const crumbOpacity = useTransform(cookieProgress, [0.45, 0.55, 0.85], [0, 1, 0]);
  const CRUMBS = [
    { x: -120, y: 40, r: 6, dx: -40, dy: 80, rot: -25 },
    { x: 90, y: -20, r: 4, dx: 60, dy: 90, rot: 30 },
    { x: -40, y: 100, r: 5, dx: -20, dy: 110, rot: -10 },
    { x: 140, y: 60, r: 3, dx: 50, dy: 130, rot: 45 },
    { x: -90, y: -10, r: 3.5, dx: -60, dy: 70, rot: -40 },
    { x: 30, y: 130, r: 4.5, dx: 20, dy: 140, rot: 20 },
    { x: 70, y: -60, r: 2.5, dx: 30, dy: 60, rot: 15 },
    { x: -150, y: 110, r: 3, dx: -50, dy: 120, rot: -20 },
  ];

  return (
    <section ref={sectionRef} className="overflow-hidden">

      {/* TOP */}
      <div className="grid lg:grid-cols-[6fr_4fr] min-h-[650px]">

        {/* LEFT */}
        <div className="bg-olive flex items-center px-10 lg:px-20">
          <div className="max-w-xl">

            <p className="uppercase tracking-[0.3em] text-cream/60 text-sm">
              Bestseller
            </p>

            <h2 className="mt-4 font-display text-5xl lg:text-7xl text-cream leading-[1.05]">
              Craving Cookies?
              <br />
              We've Got The Crunch.
            </h2>

            <p className="mt-6 text-wheat/80 text-lg max-w-md leading-relaxed">
              Crafted with premium makhana and baked to perfection.
              Light, crunchy, and surprisingly wholesome.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#shop"
                className="px-8 py-4 rounded-full bg-cream text-olive font-semibold hover:scale-105 transition"
              >
                Shop Now
              </a>

              <a
                href="#products"
                className="px-8 py-4 rounded-full border border-cream/20 text-cream hover:bg-cream/10 transition"
              >
                Explore
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="relative bg-wheat flex items-center justify-center overflow-visible">

          <div
            className="
              absolute
              w-[400px]
              h-[400px]
              rounded-full
              bg-white/20
              blur-3xl
            "
          />

          <motion.img
            src={cookiePack}
            alt=""
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              x,
              scale,
              rotate,
              marginLeft: "-120px",
            }}
            className="
              w-[380px]
              lg:w-[550px]
              relative
              z-10
              drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]
            "
          />

          <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-180">
            <span
              className="
                text-[110px]
                lg:text-[140px]
                font-display
                text-gold/20
                [writing-mode:vertical-rl]
                select-none
              "
            >
              COOKIES
            </span>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="
    relative
    grid
    lg:grid-cols-2
    min-h-screen
    overflow-hidden
    bg-[#623512]
  "
      >
        {/* Pattern */}
        <img
          src={productBg}
          alt=""
          className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      opacity-[0.08]
      mix-blend-screen
      pointer-events-none
      select-none
    "
        />

        {/* Warm Glow */}
        <div
          className="
      absolute
      -top-24
      -left-20
      w-[520px]
      h-[520px]
      rounded-full
      bg-[#D6A66A]/20
      blur-[160px]
    "
        />

        {/* Right Glow */}
        <div
          className="
      absolute
      bottom-[-120px]
      right-[-120px]
      w-[620px]
      h-[620px]
      rounded-full
      bg-[#8C5A2D]/20
      blur-[170px]
    "
        />

        {/* LEFT */}
        <div className="relative flex items-center justify-center p-10 lg:p-20">

          <div
            className="
        absolute
        w-[460px]
        h-[460px]
        rounded-full
        bg-[#E7B96C]/20
        blur-[110px]
      "
          />

          <div className="relative w-[320px] lg:w-[560px] h-[560px]">

            {/* Whole Cookie */}

            <motion.img
              src={bestcookie}
              alt="Cookie"
              style={{
                opacity: wholeOpacity,
                scale: cookieScale,
                rotate: cookieRotate,
                y: cookieY,
              }}
              className="
          absolute
          inset-0
          z-20
          w-full
          h-full
          object-contain
          drop-shadow-[0_35px_70px_rgba(0,0,0,.45)]
        "
            />

            {/* Broken Cookie */}

            <motion.img
              src={bcookie}
              alt="Broken Cookie"
              style={{
                opacity: brokenOpacity,
                scale: cookieScale,
                rotate: cookieRotate,
                y: cookieY,
              }}
              className="
          absolute
          inset-0
          z-20
          w-full
          h-full
          object-contain
          drop-shadow-[0_35px_70px_rgba(0,0,0,.45)]
        "
            />

          </div>
        </div>

        {/* RIGHT */}

        <div className="relative flex items-center px-10 lg:px-20">

          <div className="relative z-20 max-w-xl">

            <p className="uppercase tracking-[0.35em] text-[#E8C27A] text-sm font-semibold">
              WHY PEOPLE LOVE THEM
            </p>

            <h3 className="mt-5 font-display text-5xl lg:text-7xl leading-none text-white">
              Baked With
              <br />
              <span className="italic text-[#E8C27A]">
                Makhana Magic.
              </span>
            </h3>

            <p className="mt-8 text-lg leading-8 text-white/75">
              Every bite delivers the perfect balance of roasted makhana,
              buttery richness and satisfying crunch. Premium ingredients,
              handcrafted baking and absolutely no compromises.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                { icon: "💪", title: "Protein Rich" },
                { icon: "🌾", title: "Gluten Free" },
                { icon: "🌿", title: "No Preservatives" },
                { icon: "✨", title: "Perfect Crunch" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
              rounded-3xl
              bg-white/5
              backdrop-blur-md
              border
              border-white/10
              p-5
              transition-all
              duration-300
              hover:bg-white/10
              hover:-translate-y-2
            "
                >
                  <div className="text-3xl">{item.icon}</div>

                  <p className="mt-3 font-semibold text-white">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/products"
              className="
          mt-10
          inline-flex
          items-center
          rounded-full
          bg-[#E8C27A]
          text-[#2B1B16]
          px-8
          py-4
          font-semibold
          tracking-wide
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_40px_rgba(232,194,122,.35)]
        "
            >
              Explore Cookies →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

function Instagram() {
  return (
    <section className="relative py-28 px-6 lg:px-10 overflow-hidden">
      <img
        src={productBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <h2 data-reveal className="reveal text-center font-display text-4xl lg:text-5xl font-semibold text-olive">
            Follow <span className="italic">@SamarthMakhana</span>
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
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-olive text-cream pt-20 pb-8 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-semibold">Samarth <span className="italic">Makhana</span></h3>
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
            {["Shop All", "About Us ", "Benefits", "Journal", "Stockists"].map((l) => (
              <li key={l}><a href="#" className="hover:text-cream transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-wheat">Support</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/85">
            <li>hello@samarthmakhana.in</li>
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
        <p className="text-xs text-wheat">© {new Date().getFullYear()} Samarth Makhana. All rights reserved.</p>
        <p className="text-xs text-wheat">Handcrafted in India 🌿</p>
      </div>
    </footer>
  );
}

function ShopBrands() {
  return (
    <section
      className="
  relative
  pt-20
pb-1
  overflow-hidden
  bg-[#FCF8F0]
"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${productBg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "1060px",
          opacity: 0.8,
        }}
      />
      <div className="relative z-10 text-center mb-8">
        <p className="uppercase tracking-[0.35em] text-[11px] text-gold font-semibold">
          Available On
        </p>

        <h2 className="mt-3 font-display text-3xl lg:text-4xl text-olive">
          Shop From Your Favourite Stores
        </h2>
      </div>

      <div className="relative z-10 overflow-hidden">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#FCF8F0] to-transparent" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#FCF8F0] to-transparent" />

        <div className="flex animate-brand-marquee w-max">
          {[...BRANDS, ...BRANDS].map((brand, index) => (
            <div
              key={index}
              className="
mx-7
w-[240px]
h-[120px]
flex
items-center
justify-center
transition-all
duration-300
"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="
    w-[140px]
    h-[60px]
    object-contain
    transition-all
    duration-300
    hover:scale-110
  "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}