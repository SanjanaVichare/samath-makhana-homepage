import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Clock, ArrowRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { ARTICLES } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

const CATS = ["All", "Wellness", "Recipes", "Story", "Lifestyle"] as const;
const PAGE_SIZE = 4;

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [page, setPage] = useState(1);

  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);

  const filtered = useMemo(() => rest.filter((a) => {
    if (cat !== "All" && a.category !== cat) return false;
    if (q && !`${a.title} ${a.excerpt}`.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  }), [q, cat, rest]);

  const visible = filtered.slice(0, page * PAGE_SIZE);

  return (
    <PageShell>
      <section className="py-20 px-6 lg:px-10 bg-gradient-to-b from-wheat/40 to-cream text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">Journal</p>
        <h1 className="mt-4 font-display text-5xl lg:text-7xl font-semibold text-olive">Stories from the kitchen</h1>
        <p className="mt-5 max-w-xl mx-auto text-ink/70">Recipes, research, and the people behind every batch.</p>
      </section>

      {/* Featured */}
      <section className="px-6 lg:px-10">
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center bg-white rounded-[32px] overflow-hidden border border-wheat/60 hover:shadow-2xl transition-all"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img src={featured.cover} alt={featured.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="p-10">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">Featured · {featured.category}</span>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl text-olive">{featured.title}</h2>
            <p className="mt-4 text-ink/70 leading-relaxed">{featured.excerpt}</p>
            <div className="mt-6 text-xs text-ink/60 flex items-center gap-3">
              <span>{featured.author}</span><span>·</span><span>{featured.date}</span><span>·</span>
              <span className="inline-flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-olive text-xs uppercase tracking-[0.2em] font-semibold">
              Read article <ArrowRight size={14} />
            </span>
          </div>
        </Link>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-10 mt-16">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-5 md:items-center justify-between">
          <div className="relative md:w-80">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              type="search"
              value={q}
              onChange={(e) => { setQ(e.target.value); setPage(1); }}
              placeholder="Search articles"
              aria-label="Search articles"
              className="w-full rounded-full bg-white border border-wheat pl-11 pr-4 py-3 text-sm outline-none focus:border-olive"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => { setCat(c); setPage(1); }}
                className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.15em] font-semibold transition-all ${cat === c ? "bg-olive text-cream" : "bg-white text-ink hover:bg-wheat/60"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid + Sidebar */}
      <section className="pt-10 pb-20 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_300px] gap-10">
          <div>
            {visible.length === 0 ? (
              <p className="text-center text-ink/60 py-16">No articles match your search.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {visible.map((a) => (
                  <Link
                    key={a.slug}
                    to="/blog/$slug"
                    params={{ slug: a.slug }}
                    className="group bg-white rounded-[24px] overflow-hidden border border-wheat/60 transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={a.cover} alt={a.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-6">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">{a.category}</span>
                      <h3 className="mt-2 font-display text-xl text-olive leading-snug">{a.title}</h3>
                      <p className="mt-2 text-sm text-ink/65 line-clamp-2">{a.excerpt}</p>
                      <div className="mt-4 text-xs text-ink/50 flex gap-3">
                        <span>{a.author}</span><span>·</span>
                        <span className="inline-flex items-center gap-1"><Clock size={11} /> {a.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {visible.length < filtered.length && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setPage((n) => n + 1)}
                  className="px-8 py-4 rounded-full border-2 border-olive text-olive text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive hover:text-cream transition-all"
                >
                  Load More
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="bg-olive text-cream rounded-3xl p-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-wheat font-semibold">From the kitchen</p>
              <h3 className="mt-3 font-display text-2xl leading-snug">Get monthly recipes & restocks.</h3>
              <p className="mt-2 text-sm text-cream/80">Slow emails, small joys. Once a month, never more.</p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center px-5 py-2.5 rounded-full bg-gold text-cream text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-gold/90 transition-colors"
              >
                Subscribe
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-wheat/60">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">Popular</p>
              <ul className="mt-4 space-y-4">
                {rest.slice(0, 4).map((a) => (
                  <li key={a.slug}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: a.slug }}
                      className="group flex gap-3 items-start"
                    >
                      <img src={a.cover} alt="" loading="lazy" className="h-14 w-14 rounded-xl object-cover" />
                      <div>
                        <p className="text-sm font-semibold text-olive leading-snug group-hover:underline line-clamp-2">{a.title}</p>
                        <p className="mt-1 text-[11px] text-ink/50">{a.readTime}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-wheat/40 rounded-3xl p-6 border border-wheat/60">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">Topics</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {CATS.slice(1).map((c) => (
                  <button
                    key={c}
                    onClick={() => { setCat(c); setPage(1); }}
                    className="px-3 py-1.5 rounded-full bg-white text-xs text-ink border border-wheat hover:bg-olive hover:text-cream hover:border-olive transition-colors"
                  >
                    #{c}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
