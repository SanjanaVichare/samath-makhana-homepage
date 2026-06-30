import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ChevronDown } from "lucide-react";
import PageShell from "@/components/layout/PageShell";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const FAQS = [
  { q: "How long does shipping take?", a: "Most orders ship within 24 hours and arrive in 3–5 business days across India." },
  { q: "Are your products certified?", a: "Yes — every batch is FSSAI certified and lab tested for purity." },
  { q: "Do you ship internationally?", a: "Not yet. We're working on it. Sign up to the newsletter to be first to know." },
  { q: "What is your return policy?", a: "We replace any unopened pack within 7 days of delivery, no questions asked." },
  { q: "Do you offer wholesale?", a: "Absolutely. Send us a note via the form and our team will reach out within 48 hours." },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) next.email = "Valid email required";
    if (!form.message.trim()) next.message = "Tell us how we can help";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    }
  };

  return (
    <PageShell>
      <section className="py-20 px-6 lg:px-10 bg-gradient-to-b from-wheat/40 to-cream text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">Get in Touch</p>
        <h1 className="mt-4 font-display text-5xl lg:text-7xl text-olive font-semibold">We answer every note.</h1>
        <p className="mt-5 max-w-xl mx-auto text-ink/70">Wholesale, recipes, or just to say hi — we'd love to hear from you.</p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-olive/10 border border-olive/20 px-4 py-2 text-xs text-olive font-semibold uppercase tracking-[0.18em]">
          <span className="h-2 w-2 rounded-full bg-olive animate-pulse" /> Avg. response under 24 hours
        </div>
      </section>

      {/* Quick contact tiles */}
      <section className="px-6 lg:px-10 -mt-6">
        <div className="mx-auto max-w-6xl grid sm:grid-cols-3 gap-4">
          {[
            { Icon: Mail, label: "Email us", value: "hello@samarthmakhana.in", href: "mailto:hello@samarthmakhana.in" },
            { Icon: Phone, label: "Call us", value: "+91 98765 43210", href: "tel:+919876543210" },
            { Icon: MapPin, label: "Visit", value: "Darbhanga, Bihar", href: "#map" },
          ].map((q) => (
            <a
              key={q.label}
              href={q.href}
              className="group bg-white border border-wheat/60 rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-olive transition-colors"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-olive/10 text-olive group-hover:bg-olive group-hover:text-cream transition-colors">
                <q.Icon size={18} strokeWidth={1.6} />
              </span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">{q.label}</p>
                <p className="text-sm text-ink mt-0.5">{q.value}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 py-10">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <form onSubmit={submit} noValidate className="bg-white rounded-[32px] p-8 lg:p-10 border border-wheat/60">
            <h2 className="font-display text-3xl text-olive">Send a message</h2>
            {sent && <p className="mt-4 text-sm text-olive bg-olive/10 border border-olive/30 rounded-2xl p-4">Thanks {form.name || "friend"} — we'll be in touch within 24 hours.</p>}
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              <Field id="name" label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} error={errors.name} />
              <Field id="email" label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} error={errors.email} />
            </div>
            <div className="mt-5">
              <Field id="subject" label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-[11px] uppercase tracking-[0.2em] text-ink/60 font-semibold">Message</label>
              <textarea
                id="message" rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`mt-2 w-full rounded-2xl bg-cream/60 border px-4 py-3 text-sm outline-none focus:border-olive transition-colors ${errors.message ? "border-red-400" : "border-wheat"}`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>
            <button type="submit" className="mt-6 rounded-full bg-olive text-cream px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive/90 transition-colors">
              Send Message
            </button>
          </form>

          <aside className="space-y-6">
            <InfoCard Icon={Mail} title="Email">
              <a href="mailto:hello@samarthmakhana.in" className="hover:text-olive">hello@samarthmakhana.in</a>
            </InfoCard>
            <InfoCard Icon={Phone} title="Phone">+91 98765 43210</InfoCard>
            <InfoCard Icon={MapPin} title="Visit">
              42 Lotus Lane, Darbhanga,<br />Bihar 846004, India
            </InfoCard>
            <div className="bg-white rounded-3xl p-6 border border-wheat/60">
              <h3 className="font-display text-xl text-olive">Hours</h3>
              <ul className="mt-3 space-y-1 text-sm text-ink/70">
                <li className="flex justify-between"><span>Mon — Fri</span><span>9am – 6pm</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>10am – 4pm</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-wheat/60">
              <h3 className="font-display text-xl text-olive">Follow along</h3>
              <div className="mt-4 flex gap-3">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" },
                ].map(({ Icon, label }) => (
                  <a key={label} href="#" aria-label={label} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-wheat hover:bg-olive hover:text-cream transition-colors">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="px-6 lg:px-10 pb-16">
        <div className="mx-auto max-w-6xl relative aspect-[16/6] rounded-[32px] overflow-hidden bg-gradient-to-br from-olive/20 via-wheat/40 to-gold/20 border border-wheat/60 flex items-center justify-center">
          <div className="text-center text-olive">
            <MapPin size={40} strokeWidth={1.5} className="mx-auto" />
            <p className="mt-3 font-display text-2xl">Darbhanga, Bihar</p>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50 mt-1">Map view</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-10 py-20 bg-wheat/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl text-olive text-center">Frequently asked</h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="bg-white rounded-2xl border border-wheat/60 overflow-hidden">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between text-left px-6 py-5"
                  >
                    <span className="font-semibold text-olive">{f.q}</span>
                    <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && <div className="px-6 pb-5 text-sm text-ink/70 leading-relaxed">{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  id, label, value, onChange, type = "text", error,
}: { id: string; label: string; value: string; onChange: (v: string) => void; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-[11px] uppercase tracking-[0.2em] text-ink/60 font-semibold">{label}</label>
      <input
        id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className={`mt-2 w-full rounded-full bg-cream/60 border px-4 py-3 text-sm outline-none focus:border-olive transition-colors ${error ? "border-red-400" : "border-wheat"}`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function InfoCard({ Icon, title, children }: { Icon: typeof Mail; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-wheat/60 flex gap-4">
      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-olive/10 text-olive">
        <Icon size={20} strokeWidth={1.6} />
      </div>
      <div>
        <h3 className="font-display text-xl text-olive">{title}</h3>
        <p className="mt-1 text-sm text-ink/70 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
