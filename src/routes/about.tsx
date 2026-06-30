import { createFileRoute, Link } from "@tanstack/react-router";
import PageShell from "@/components/layout/PageShell";
import storyImg from "@/assets/story-lotus.jpg";
import hero from "@/assets/hero-makhana.jpg";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import StorySlideshow from "@/components/sections/StorySlideshow";
import { Award, Leaf, HandHeart, Sparkles, BadgeCheck, ShieldCheck, Wheat, Flag } from "lucide-react";

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

const PROMISES = [
  "100% Vegetarian",
  "Roasted, never fried",
  "Real ingredients",
  "Recyclable packaging",
  "Crafted with care",
];

const VALUES = [
  { Icon: Leaf, title: "Earth First", text: "We pay farms fair prices and use compostable packaging wherever possible." },
  { Icon: HandHeart, title: "Hand-Crafted", text: "Roasted and packed in small batches by people we know by name." },
  { Icon: Sparkles, title: "Honest Recipes", text: "If we can't pronounce it, we don't use it. Short ingredient lists, always." },
  { Icon: Award, title: "Certified Quality", text: "FSSAI certified, lab tested for purity in every single batch." },
];

const TEAM = [
  { name: "Piyush Gupta", role: "Founder", img: ig1 },
  { name: "Mayur Rane", role: "Head of Sourcing", img: ig2 },
  { name: "Akshay K", role: "Recipe & Flavour", img: ig3 },
];

const TIMELINE = [
  { year: "2021", title: "Quiet Beginnings", text: "Three friends, one kitchen, and a stubborn idea that snacks could be better." },
  { year: "2022", title: "First Farm Partnership", text: "We signed with our first family-run lotus farm in Darbhanga." },
  { year: "2024", title: "10,000 Pantries", text: "Crossed our 10,000th order — still hand-packed, still slow-roasted." },
  { year: "2026", title: "The Cookie Drop", text: "Launched our long-promised makhana cookie line. It sold out in 9 days." },
];

function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive/90 via-olive/40 to-transparent" />
        <div className="relative h-full flex items-end px-6 lg:px-10 pb-16">
          <div className="mx-auto max-w-6xl w-full text-cream">
            <p className="text-[11px] uppercase tracking-[0.3em] text-wheat font-semibold">Our Story</p>
            <h1 className="mt-4 font-display text-5xl lg:text-7xl font-semibold leading-[1.05]">
              Rooted in <span className="italic">nature.</span><br />
              Made for you.
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
          <img src={storyImg} alt="Lotus pond" className="rounded-[32px] aspect-[4/5] object-cover" />
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">Why we started</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-olive font-semibold">A snack drawer worth opening.</h2>
            <p className="mt-6 text-ink/75 leading-relaxed">
              Samarth began with a simple frustration — every "healthy" snack we tried felt like a compromise. So we went back to a snack our grandmothers knew well: the lotus seed. Light, ancient, and quietly powerful.
            </p>
            <p className="mt-4 text-ink/75 leading-relaxed">
              We partner directly with family farms in Bihar, slow-roast in iron pans, and season in small batches. No shortcuts. No preservatives. Just makhana the way it was always meant to be.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 px-6 lg:px-10 bg-wheat/30">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          {[
            { title: "Our Mission", text: "To make wholesome snacking effortless — and to put more money in the pockets of the farms that make it possible." },
            { title: "Our Vision", text: "A pantry where every label is honest, every bite is intentional, and nothing is wasted." },
          ].map((b) => (
            <div key={b.title} className="bg-white rounded-3xl p-10 border border-wheat/60">
              <h3 className="font-display text-3xl text-olive">{b.title}</h3>
              <p className="mt-4 text-ink/70 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">Farm to Table</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-olive font-semibold">How it gets made.</h2>
          </div>
          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {["Harvest", "Sun Dry", "Slow Roast", "Hand Pack"].map((step, i) => (
              <li key={step} className="bg-white rounded-3xl p-6 border border-wheat/60">
                <span className="text-gold font-display text-3xl">0{i + 1}</span>
                <h4 className="mt-3 font-display text-xl text-olive">{step}</h4>
                <p className="mt-2 text-sm text-ink/65">Every batch passes through these four steps. Nothing skipped.</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-10 bg-cream">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl text-olive text-center font-semibold">What we believe</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ Icon, title, text }) => (
              <div key={title} className="bg-white rounded-3xl p-7 border border-wheat/60">
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
          <h2 className="font-display text-4xl text-olive text-center font-semibold">Meet the people behind it</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.name} className="text-center">
                <div className="aspect-square rounded-[32px] overflow-hidden bg-wheat/30">
                  <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-olive">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 lg:px-10 bg-wheat/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl text-olive text-center font-semibold">Milestones</h2>
          <ol className="mt-12 relative border-l-2 border-olive/30 pl-8 space-y-10">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-olive ring-4 ring-wheat/30" />
                <p className="font-display text-2xl text-gold">{t.year}</p>
                <h3 className="mt-1 font-display text-xl text-olive">{t.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10 text-center">
        <h2 className="font-display text-4xl lg:text-5xl text-olive">Taste the difference.</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/shop" className="inline-flex items-center px-8 py-4 rounded-full bg-olive text-cream text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive/90">Shop the Range</Link>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-full border-2 border-olive text-olive text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive hover:text-cream transition-colors">Talk to Us</Link>
        </div>
      </section>
    </PageShell>
  );
}
