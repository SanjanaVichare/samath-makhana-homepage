import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { useState } from "react";
import PageShell from "@/components/layout/PageShell";
import { ARTICLES, getArticle, type Article } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogDetail,
  loader: ({ params }) => {
    const a = getArticle(params.slug);
    if (!a) throw notFound();
    return { article: a };
  },
});

function BlogDetail() {
  const { article } = Route.useLoaderData() as { article: Article };
  const idx = ARTICLES.findIndex((a) => a.slug === article.slug);
  const prev = ARTICLES[idx - 1];
  const next = ARTICLES[idx + 1];
  const related = ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  return (
    <PageShell>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={article.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive/95 via-olive/40 to-transparent" />
        <div className="relative h-full flex items-end px-6 lg:px-10 pb-12">
          <div className="mx-auto max-w-3xl w-full text-cream">
            <span className="text-[11px] uppercase tracking-[0.25em] text-wheat font-semibold">{article.category}</span>
            <h1 className="mt-4 font-display text-4xl lg:text-6xl font-semibold leading-[1.1]">{article.title}</h1>
            <div className="mt-6 text-xs text-cream/85 flex items-center gap-3">
              <span>{article.author}</span><span>·</span><span>{article.date}</span><span>·</span>
              <span className="inline-flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="px-6 lg:px-10 py-16">
        <div className="mx-auto max-w-2xl space-y-6">
          {article.content.map((b, i) => {
            if (b.type === "h2") return <h2 key={i} className="font-display text-3xl text-olive mt-10">{b.text}</h2>;
            if (b.type === "quote") return (
              <blockquote key={i} className="border-l-4 border-gold pl-6 py-2 font-display italic text-2xl text-olive">
                "{b.text}"
              </blockquote>
            );
            if (b.type === "img") return <img key={i} src={b.src} alt="" className="rounded-3xl my-8 w-full aspect-[16/9] object-cover" />;
            return <p key={i} className="text-ink/80 leading-[1.8]">{b.text}</p>;
          })}

          <div className="pt-10 border-t border-wheat flex items-center gap-3 text-xs text-ink/60">
            <Share2 size={14} /> Share:
            {["Twitter", "Facebook", "WhatsApp"].map((s) => (
              <a key={s} href="#" className="hover:text-olive">{s}</a>
            ))}
          </div>
        </div>
      </article>

      {/* Prev/Next */}
      <section className="px-6 lg:px-10 pb-16">
        <div className="mx-auto max-w-3xl grid sm:grid-cols-2 gap-4">
          {prev ? (
            <Link to="/blog/$slug" params={{ slug: prev.slug }} className="group bg-white rounded-2xl p-5 border border-wheat/60 hover:border-olive transition-colors">
              <span className="text-[11px] uppercase tracking-[0.2em] text-ink/50 inline-flex items-center gap-1"><ArrowLeft size={12} /> Previous</span>
              <p className="mt-2 font-display text-lg text-olive group-hover:underline">{prev.title}</p>
            </Link>
          ) : <div />}
          {next ? (
            <Link to="/blog/$slug" params={{ slug: next.slug }} className="group bg-white rounded-2xl p-5 border border-wheat/60 hover:border-olive transition-colors text-right">
              <span className="text-[11px] uppercase tracking-[0.2em] text-ink/50 inline-flex items-center gap-1">Next <ArrowRight size={12} /></span>
              <p className="mt-2 font-display text-lg text-olive group-hover:underline">{next.title}</p>
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 lg:px-10 py-16 bg-wheat/30">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl text-olive">Related stories</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((a) => (
                <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="group bg-white rounded-2xl overflow-hidden border border-wheat/60 hover:shadow-xl transition-all">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={a.cover} alt={a.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">{a.category}</span>
                    <h3 className="mt-2 font-display text-lg text-olive">{a.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="px-6 lg:px-10 py-20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setOk(true); setEmail(""); setTimeout(() => setOk(false), 4000); }
          }}
          className="mx-auto max-w-2xl bg-olive text-cream rounded-[28px] p-10 text-center"
        >
          <h3 className="font-display text-3xl">Get the next one in your inbox</h3>
          <p className="mt-3 text-cream/80 text-sm">One thoughtful read a month. No spam.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="blog-news-email" className="sr-only">Email</label>
            <input
              id="blog-news-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full bg-cream/10 border border-cream/30 px-5 py-3 text-sm outline-none focus:border-cream"
            />
            <button className="rounded-full bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-gold/90">Subscribe</button>
          </div>
          {ok && <p className="mt-4 text-xs text-wheat">Subscribed — see you soon 🌿</p>}
        </form>
      </section>
    </PageShell>
  );
}
