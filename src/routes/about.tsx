import { createFileRoute, Link } from "@tanstack/react-router";
import PageShell from "@/components/layout/PageShell";
import storyImg from "@/assets/story-lotus.jpg";
import hero from "@/assets/hero-makhana.jpg";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
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
      {/* Hero */}
      <section className="relative h-[64vh] min-h-[460px] overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive/90 via-olive/40 to-transparent" />
        <div className="relative h-full flex items-end px-6 lg:px-10 pb-16">
          <div className="mx-auto max-w-6xl w-full text-cream">
            <p className="text-[11px] uppercase tracking-[0.3em] text-wheat font-semibold">Our Story</p>
            <h1 className="mt-4 font-display text-5xl lg:text-7xl font-semibold leading-[1.05]">
              Rooted in Nature.
              <br />
              Made for you.
            </h1>
          </div>
        </div>
      </section>

      {/* Story — asymmetric, organic */}
      <section className="py-24 px-6 lg:px-10 relative">
        <div className="absolute -top-10 right-10 w-40 h-40 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <img
              src={storyImg}
              alt="Lotus pond"
              loading="lazy"
              className="rounded-[40px] aspect-[4/5] object-cover shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)]"
            />
          </div>
          <div className="lg:col-span-7 lg:pl-6">
            
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-olive font-semibold leading-[1.05]">
              A snack drawer <span className="italic">worth opening.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg font-semibold leading-relaxed text-ink/80">
              PRAM began with a simple frustration — every "healthy" snack we tried felt
              like a compromise. So we went back to a snack our grandmothers knew well: the
              lotus seed. Light, ancient, and quietly powerful.
            </p>
            <p className="mt-4 max-w-lg text-lg font-semibold leading-relaxed text-ink/80">
              We partner directly with family farms, slow-roast in iron pans, and season in
              small batches. No shortcuts. No preservatives. Just makhana the way it was
              always meant to be.
            </p>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {TRUST.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-olive/5 border border-olive/15 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-olive font-semibold"
                >
                  <Icon size={13} strokeWidth={1.8} className="text-gold" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision — softer, slight rotation */}
      <section className="py-20 px-6 lg:px-10 bg-wheat/30 relative overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Purpose</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-olive font-semibold">What drives us</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {[
              { title: "Our Mission", text: "To make wholesome snacking effortless — and to put more money in the pockets of the farms that make it possible.", rot: "rotate-[-1deg]" },
              { title: "Our Vision", text: "A pantry where every label is honest, every bite is intentional, and nothing is wasted.", rot: "rotate-[1deg]" },
            ].map((b) => (
              <div
                key={b.title}
                className={`bg-white rounded-[36px] p-10 border border-wheat/60 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.2)] ${b.rot} hover:rotate-0 transition-transform duration-500`}
              >
                <h3 className="font-display text-3xl text-olive">{b.title}</h3>
                <p className="mt-4 text-ink/70 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — looser asymmetric */}
      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow>Farm to Table</Eyebrow>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-olive font-semibold">How it gets made.</h2>
          </div>
          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {PROCESS.map(({ step, text }, i) => (
              <li
                key={step}
                className={`bg-white rounded-[28px] p-6 border border-wheat/60 ${i % 2 === 0 ? "md:translate-y-4" : ""}`}
              >
                <span className="text-gold font-display text-3xl">0{i + 1}</span>
                <h4 className="mt-3 font-display text-xl text-olive">{step}</h4>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-10 bg-cream">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Our Standards</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-olive font-semibold">What we believe</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ Icon, title, text }) => (
              <div key={title} className="bg-white rounded-3xl p-7 border border-wheat/60 hover:border-olive/40 transition-colors">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-olive/10 text-olive">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-xl text-olive">{title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>The People</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-olive font-semibold">Meet the people behind it</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.name} className="text-center group">
                <div className="aspect-square rounded-[32px] overflow-hidden bg-wheat/30">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl text-olive">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 lg:px-10 bg-wheat/30">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Badge>Since 2021</Badge>
            <h2 className="mt-5 font-display text-4xl text-olive font-semibold">Milestones</h2>
          </div>
          <ol className="mt-14 relative border-l-2 border-olive/30 pl-8 space-y-6">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative bg-white rounded-3xl border border-wheat/60 p-6 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.25)]">
                <span className="absolute -left-[41px] top-8 h-4 w-4 rounded-full bg-olive ring-4 ring-wheat/30" />
                <p className="font-display text-2xl text-gold font-bold">{t.year}</p>
                <h3 className="mt-1 font-display text-xl text-olive font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-ink/80 font-semibold leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 lg:px-10 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-wheat/25 via-transparent to-wheat/25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="relative">
          
          <h2 className="mt-6 font-display text-4xl lg:text-6xl text-olive font-semibold leading-[1.05]">
            Taste the difference.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-olive text-cream text-xs font-semibold uppercase tracking-[0.18em] shadow-[0_20px_40px_-20px_rgba(74,84,42,0.6)] hover:bg-olive/90 hover:-translate-y-0.5 transition-all"
            >
              Shop the Range <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-9 py-4 rounded-full border-2 border-olive text-olive text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive hover:text-cream transition-colors"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}