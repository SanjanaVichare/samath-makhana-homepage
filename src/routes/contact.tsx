import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ChevronDown, ArrowUpRight } from "lucide-react";
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

const CONTACT_POINTS = [
  { Icon: Mail, label: "Email", value: "hello@PRAMmakhana.in", href: "mailto:hello@PRAMmakhana.in" },
  { Icon: Phone, label: "Phone", value: "+91 7900091250", href: "tel:+919876543210" },
  { Icon: MapPin, label: "Studio", value: "Dadar, Mumbai", href: "#map" },
];

const HOURS = [
  { day: "Mon — Fri", time: "9am – 6pm" },
  { day: "Saturday", time: "10am – 4pm" },
  { day: "Sunday", time: "Closed" },
];

const SOCIALS = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
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
      {/* Hero */}
      <section className="relative px-6 lg:px-10 pt-20 pb-16 bg-gradient-to-b from-wheat/40 to-cream overflow-hidden">
        <div className="mx-auto max-w-4xl text-center">
        
          <h1 className="mt-4 font-display text-5xl lg:text-7xl text-olive font-semibold leading-[1.05]">
            We answer every note.
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-ink/70">
            Wholesale, gifting, recipes, or simply to say hello,we're always happy to connect.
          </p>
        </div>

        {/* Quick contact strip */}
        <div className="mx-auto max-w-5xl mt-12 grid sm:grid-cols-3 gap-3">
          {CONTACT_POINTS.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-4 rounded-2xl bg-white/80 backdrop-blur border border-olive/15 px-5 py-4 hover:border-olive hover:bg-white transition-colors"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-olive/10 text-olive group-hover:bg-olive group-hover:text-cream transition-colors">
                <Icon size={17} strokeWidth={1.6} />
              </span>
              <div className="text-left min-w-0">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">{label}</p>
                <p className="text-sm text-ink truncate">{value}</p>
              </div>
              <ArrowUpRight size={14} className="ml-auto text-ink/30 group-hover:text-olive transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="px-6 lg:px-10 py-16">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[3fr_2fr] gap-6">
          {/* Message form */}
          <form onSubmit={submit} noValidate className="bg-white rounded-[32px] p-8 lg:p-10 border border-wheat/60">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-3xl text-olive">Send a message</h2>
              <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-olive/10 border border-olive/20 px-3.5 py-1.5 text-[11px] text-olive font-semibold uppercase tracking-[0.14em] shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-olive animate-pulse" /> Reply under 24h
              </span>
            </div>

            {sent && (
              <p className="mt-4 text-sm text-olive bg-olive/10 border border-olive/30 rounded-2xl p-4">
                Thanks {form.name || "friend"} — we'll be in touch within 24 hours.
              </p>
            )}

            <div className="mt-7 grid sm:grid-cols-2 gap-5">
              <Field id="name" label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} error={errors.name} />
              <Field id="email" label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} error={errors.email} />
            </div>

            <div className="mt-5">
              <Field id="subject" label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-[11px] uppercase tracking-[0.2em] text-ink/60 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`mt-2 w-full rounded-2xl bg-cream/60 border px-4 py-3 text-sm outline-none focus:border-olive transition-colors ${
                  errors.message ? "border-red-400" : "border-wheat"
                }`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="mt-7 rounded-full bg-olive text-cream px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive/90 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            <div className="bg-white rounded-[28px] p-7 border border-wheat/60">
              <h3 className="font-display text-xl text-olive">Hours</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {HOURS.map(({ day, time }) => (
                  <li key={day} className="flex justify-between border-b border-wheat/50 last:border-0 pb-2 last:pb-0">
                    <span>{day}</span>
                    <span className="text-ink font-medium">{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="map" className="relative flex-1 min-h-[220px] rounded-[28px] overflow-hidden bg-gradient-to-br from-olive/20 via-wheat/40 to-gold/20 border border-wheat/60 flex items-center justify-center">
              <div className="text-center text-olive">
                <MapPin size={32} strokeWidth={1.5} className="mx-auto" />
                <p className="mt-2 font-display text-xl">Dadar, Mumbai</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 mt-1">Map view</p>
              </div>
            </div>

            <div className="bg-white rounded-[28px] p-7 border border-wheat/60">
              <h3 className="font-display text-xl text-olive">Follow along</h3>
              <div className="mt-4 flex gap-3">
                {SOCIALS.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-wheat hover:bg-olive hover:text-cream transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-10 py-20 bg-wheat/30">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">Good to know</p>
          <h2 className="mt-3 font-display text-4xl text-olive text-center">Frequently asked</h2>
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
                    <ChevronDown size={18} className={`shrink-0 ml-4 transition-transform ${open ? "rotate-180" : ""}`} />
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