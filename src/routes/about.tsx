import { createFileRoute, Link } from "@tanstack/react-router";
import PageShell from "@/components/layout/PageShell";
import storyImg from "@/assets/story-lotus.jpg";
import hero from "@/assets/hero-makhana.jpg";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import productBg from "@/assets/bg-doodle.png";
import StorySlideshow from "@/components/sections/StorySlideshow";
import { Award, Leaf, HandHeart, Sparkles, BadgeCheck, ShieldCheck, Wheat, Flag, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const TRUST = [
  { Icon: BadgeCheck, label: "FSSAI Certified" },
  { Icon: ShieldCheck, label: "ISO 22000" },
  { Icon: Wheat, label: "Gluten Free" },
  { Icon: Leaf, label: "Vegetarian" },
  { Icon: Flag, label: "Made in India" },
];


const VALUES = [
  { Icon: Leaf, title: "Earth First", text: "We pay farms fair prices and use compostable packaging wherever possible." },
  { Icon: HandHeart, title: "Hand-Crafted", text: "Roasted and packed in small batches by people we know by name." },
  { Icon: Sparkles, title: "Honest Recipes", text: "If we can't pronounce it, we don't use it. Short ingredient lists, always." },
  { Icon: Award, title: "Certified Quality", text: "FSSAI certified, lab tested for purity in every single batch." },
];

const PROCESS = [
  { step: "Harvest", text: "Lotus pods are hand-gathered from partner ponds at first light, when the seeds are at their peak." },
  { step: "Sun Dry", text: "Seeds cure naturally in open air for days, losing moisture the slow way — no forced heat." },
  { step: "Slow Roast", text: "Each batch is roasted in iron pans over a low flame until it puffs light and crisp." },
  { step: "Hand Pack", text: "Cooled, seasoned, and sealed by hand the same day, so nothing but flavour is packed in." },
];

const TEAM = [
  { name: "Piyush Gupta", role: "Founder", img: ig1 },
  { name: "Mayur Rane", role: "Head of Sourcing", img: ig2 },
  { name: "Akshay Kirtane", role: "Recipe & Flavour", img: ig3 },
];

const TIMELINE = [
  { year: "2021", title: "Quiet Beginnings", text: "Three friends, one kitchen, and a stubborn idea that snacks could be better." },
  { year: "2022", title: "First Farm Partnership", text: "We signed with our first family-run lotus farm." },
  { year: "2024", title: "10,000 Pantries", text: "Crossed our 10,000th order — still hand-packed, still slow-roasted." },
  { year: "2026", title: "The Cookie Drop", text: "Launched our long-promised makhana cookie line. It sold out in 9 days." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">{children}</p>;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-olive/10 border border-olive/25 px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-olive font-semibold">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </span>
  );
}

function AboutPage() {
  return (
    <PageShell>
      <div
        className="min-h-screen bg-[#FFF8E6]"
        style={{
          backgroundImage: `url(${productBg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "420px",
          backgroundPosition: "top center",
        }}
      >
        {/* Hero */}
        <section className="relative h-[64vh] min-h-[460px] overflow-hidden">
          <img
            src={hero}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-olive/90 via-olive/40 to-transparent" />

          <div className="relative h-full flex items-end px-6 lg:px-10 pb-16">
            <div className="mx-auto max-w-6xl w-full text-cream">
              <p className="text-[11px] uppercase tracking-[0.3em] text-wheat font-semibold">
                Our Story
              </p>

              <h1 className="mt-4 font-display text-5xl lg:text-7xl font-semibold leading-[1.05]">
                Rooted in Nature.
                <br />
                Made for you.
              </h1>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-24 px-6 lg:px-10 relative">
          <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <img
                src={storyImg}
                alt="Lotus pond"
                loading="lazy"
                className="rounded-[40px] aspect-[4/5] object-cover shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)]"
              />
            </div>

            <div className="lg:col-span-7 lg:pl-6">
              <Eyebrow>Our Story</Eyebrow>

              <h2 className="mt-4 font-display text-4xl lg:text-5xl text-olive font-semibold leading-[1.05]">
                A snack drawer{" "}
                <span className="italic">worth opening.</span>
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-relaxed text-olive/80">
                PRAM began with a simple frustration — every "healthy" snack
                we tried felt like a compromise. So we went back to a snack
                our grandmothers knew well: the lotus seed. Light, ancient,
                and quietly powerful.
              </p>

              <p className="mt-4 max-w-lg text-lg leading-relaxed text-olive/80">
                We partner directly with family farms, slow-roast in iron
                pans, and season in small batches. No shortcuts. No
                preservatives. Just makhana the way it was always meant to be.
              </p>

              {/* Trust strip */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {TRUST.map(({ Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-olive/15 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-olive font-semibold"
                  >
                    <Icon
                      size={13}
                      strokeWidth={1.8}
                      className="text-gold"
                    />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="py-1 px-1 lg:px-10 bg-transparent relative overflow-hidden">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Purpose</Eyebrow>

              <h2 className="mt-4 font-display text-4xl lg:text-5xl text-olive font-semibold">
                What drives us
              </h2>

              <p className="mt-4 text-ink/65 leading-relaxed">
                Good food starts with good intentions.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  number: "01",
                  title: "Our Mission",
                  text: "To make wholesome snacking effortless — and to put more value back into the farms that make it possible.",
                },
                {
                  number: "02",
                  title: "Our Vision",
                  text: "A pantry where every label is honest, every bite is intentional, and nothing good goes to waste.",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="group relative bg-white rounded-[32px] p-8 lg:p-10 border border-wheat/60 shadow-[0_15px_45px_-30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-5xl text-gold/30 font-semibold">
                      {b.number}
                    </span>

                    <span className="h-10 w-10 rounded-full border border-olive/20 flex items-center justify-center text-olive group-hover:bg-olive group-hover:text-cream transition-colors duration-300">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-3xl lg:text-4xl text-olive">
                    {b.title}
                  </h3>

                  <div className="mt-4 h-px w-12 bg-gold/50" />

                  <p className="mt-5 text-ink/65 leading-relaxed max-w-lg">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-24 px-6 lg:px-10 bg-transparent">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
              <div className="max-w-2xl">
                <Eyebrow>Farm to Table</Eyebrow>

                <h2 className="mt-4 font-display text-4xl lg:text-5xl text-olive font-semibold">
                  How it gets made.
                </h2>
              </div>

              <p className="max-w-md text-sm lg:text-base text-ink/60 leading-relaxed lg:text-right">
                Simple ingredients, careful roasting and a whole lot of
                attention go into every pack.
              </p>
            </div>

            <ol className="mt-12 grid gap-5 md:grid-cols-4">
              {PROCESS.map(({ step, text }, i) => (
                <li
                  key={step}
                  className="group relative bg-white rounded-[28px] p-7 border border-wheat/60 hover:border-olive/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl text-gold font-semibold">
                      0{i + 1}
                    </span>

                    <span className="h-8 w-8 rounded-full bg-olive/5 text-olive flex items-center justify-center text-sm group-hover:bg-olive group-hover:text-cream transition-colors">
                      →
                    </span>
                  </div>

                  <h4 className="mt-7 font-display text-xl text-olive">
                    {step}
                  </h4>

                  <p className="mt-3 text-sm text-ink/60 leading-relaxed">
                    {text}
                  </p>

                  {i < PROCESS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-5 w-5 border-t border-olive/15 z-10" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Values */}
        <section className="py-2 px-2 lg:px-1 bg-transparent">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Our Standards</Eyebrow>

              <h2 className="mt-4 font-display text-4xl lg:text-5xl text-olive font-semibold">
                What we believe
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map(({ Icon, title, text }, i) => (
                <div
                  key={title}
                  className="group bg-white rounded-[28px] p-7 border border-wheat/60 hover:-translate-y-1 hover:border-olive/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-olive/10 text-olive group-hover:bg-olive group-hover:text-cream transition-colors duration-300">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>

                    <span className="font-display text-xl text-gold/40">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl text-olive">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm text-ink/65 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-10 px-6 lg:px-10 bg-transparent">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
              <div>
                <Eyebrow>The People</Eyebrow>

                <h2 className="mt-4 font-display text-4xl lg:text-5xl text-olive font-semibold">
                  Meet the people behind it
                </h2>
              </div>

              <p className="max-w-sm text-sm text-ink/60 leading-relaxed lg:text-right">
                A small team with a big love for good food, honest ingredients
                and better snacking.
              </p>
            </div>

            <div className="mt-12 grid gap-7 sm:grid-cols-3">
              {TEAM.map((m, i) => (
                <div key={m.name} className="group">
                  <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-wheat/30">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />

                    <div className="absolute inset-x-0 bottom-0 p-5 bg-white/90">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h3 className="font-display text-2xl text-olive">
                            {m.name}
                          </h3>

                          <p className="text-xs uppercase tracking-[0.18em] text-gold mt-1">
                            {m.role}
                          </p>
                        </div>

                        <span className="h-9 w-9 rounded-full bg-olive text-cream flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
    MILESTONES
========================= */}
        <section className="relative overflow-hidden bg-transparent py-16 sm:py-1 lg:py-2">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="mb-12 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Eyebrow>Our journey</Eyebrow>

                <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[0.95] text-olive sm:text-5xl lg:text-6xl">
                  Small steps.
                  <br />
                  <span className="text-gold">Big milestones.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-olive/65 sm:text-base">
                From one kitchen and a simple idea to thousands of homes, every
                milestone has been built around better ingredients, better craft,
                and people who believe in what we do.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[17px] top-0 hidden h-full w-px bg-olive/15 md:block" />

              <div className="space-y-5">
                {TIMELINE.map((item, index) => (
                  <div
                    key={item.year}
                    className="group relative grid gap-5 md:grid-cols-[110px_1fr] lg:grid-cols-[140px_1fr]"
                  >
                    {/* Year */}
                    <div className="relative flex items-center md:items-start">
                      <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-olive/20 bg-[#FFF8E6] md:flex">
                        <span className="h-2.5 w-2.5 rounded-full bg-gold transition-transform duration-300 group-hover:scale-150" />
                      </div>

                      <span className="ml-0 font-display text-3xl text-olive md:absolute md:left-14 md:top-0 lg:left-16 lg:text-4xl">
                        {item.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className="
                relative overflow-hidden rounded-[28px]
                border border-olive/10
                bg-white/75
                px-6 py-7
                backdrop-blur-[2px]
                transition-all duration-300
                group-hover:-translate-y-1
                group-hover:border-gold/50
                group-hover:shadow-[0_18px_45px_rgba(10,51,35,0.08)]
                sm:px-8 sm:py-8
                lg:px-10 lg:py-9
              "
                    >
                      {/* Decorative number */}
                      <span className="pointer-events-none absolute -right-2 -top-8 font-display text-[110px] leading-none text-olive/[0.035]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-olive">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                            Milestone {String(index + 1).padStart(2, "0")}
                          </div>

                          <h3 className="font-display text-2xl text-olive sm:text-3xl">
                            {item.title}
                          </h3>

                          <p className="mt-2 max-w-xl text-sm leading-7 text-olive/60 sm:text-base">
                            {item.text}
                          </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-olive/10 bg-[#FFF8E6] text-olive transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-cream">
                          <ArrowRight
                            size={17}
                            strokeWidth={1.8}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom statement — fills the section instead of leaving empty space */}
            <div className="mt-8 overflow-hidden rounded-[28px] bg-olive px-6 py-8 text-cream sm:px-8 lg:px-10 lg:py-9">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                    Still growing
                  </p>

                  <h3 className="mt-2 font-display text-2xl leading-tight sm:text-3xl">
                    The journey is far from over.
                  </h3>
                </div>

                <p className="max-w-lg text-sm leading-6 text-cream/65">
                  More flavours, more farms, more kitchens, and more reasons to make
                  better snacking part of everyday life.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageShell>
  );
}