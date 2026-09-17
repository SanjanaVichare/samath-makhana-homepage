import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

import PageShell from "@/components/layout/PageShell";
import productBg from "@/assets/bg-doodle.png";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const ADDRESS =
  "5/246, Kohinoor Compound, Jyotiba Phule Road, Opp. Swastik Jewellers, Naigaon, Dadar(E), Mumbai - 400014";

const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

const FAQS = [
  {
    q: "How long does shipping take?",
    a: "Most orders ship within 24 hours and arrive in 3–5 business days across India.",
  },
  {
    q: "Are your products certified?",
    a: "Yes — every batch is FSSAI certified and lab tested for purity.",
  },
  {
    q: "Do you ship internationally?",
    a: "Not yet. We're working on it. Sign up to the newsletter to be first to know.",
  },
  {
    q: "What is your return policy?",
    a: "We replace any unopened pack within 7 days of delivery, no questions asked.",
  },
  {
    q: "Do you offer wholesale?",
    a: "Absolutely. Send us a note via the form and our team will reach out within 48 hours.",
  },
];

const CONTACT_POINTS = [
  {
    Icon: Mail,
    label: "Email",
    value: "hello@pramfoods.in",
    href: "mailto:hello@pramfoods.in",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 7900091250",
    href: "tel:+917900091250",
  },
  {
    Icon: MapPin,
    label: "Studio",
    value: "Dadar, Mumbai",
    href: "#map",
  },
];

const SOCIALS = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const next: Record<string, string> = {};

    if (!form.name.trim()) {
      next.name = "Please enter your name";
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      next.email = "Valid email required";
    }

    if (!form.message.trim()) {
      next.message = "Tell us how we can help";
    }

    setErrors(next);

    if (Object.keys(next).length === 0) {
      setSent(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSent(false), 6000);
    }
  };

  return (
    <PageShell>
      {/* =========================================================
          PAGE BACKGROUND
          ========================================================= */}
      <div
        className="min-h-screen bg-[#FFF8E6]"
        style={{
          backgroundImage: `url(${productBg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "420px",
          backgroundPosition: "top center",
        }}
      >
        {/* =====================================================
            HERO
            ===================================================== */}
        <section className="px-6 lg:px-10 pt-14 lg:pt-16 pb-10 bg-transparent">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[12px] uppercase tracking-[0.3em] text-gold font-bold">
              Contact
            </p>

            <h1 className="mt-3 font-display text-5xl lg:text-6xl text-olive font-semibold leading-[1.05]">
              We answer every note.
            </h1>

            <p className="mt-4 max-w-xl mx-auto text-sm lg:text-base text-ink/70 leading-relaxed">
              Wholesale, gifting, recipes, or simply to say hello, we're
              always happy to connect.
            </p>
          </div>

          {/* Quick contact strip */}
          <div className="mx-auto max-w-5xl mt-8 grid sm:grid-cols-3 gap-3">
            {CONTACT_POINTS.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 rounded-2xl bg-white border border-olive/15 px-5 py-3.5 hover:border-olive transition-colors"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-olive/10 text-olive group-hover:bg-olive group-hover:text-cream transition-colors">
                  <Icon size={17} strokeWidth={1.6} />
                </span>

                <div className="text-left min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                    {label}
                  </p>

                  <p className="text-sm text-ink truncate">
                    {value}
                  </p>
                </div>

                <ArrowUpRight
                  size={14}
                  className="ml-auto text-ink/30 group-hover:text-olive transition-colors shrink-0"
                />
              </a>
            ))}
          </div>
        </section>

        {/* =====================================================
            FORM + SIDEBAR
            ===================================================== */}
        <section className="px-6 lg:px-10 py-10 bg-transparent">
          <div className="mx-auto max-w-6xl grid lg:grid-cols-[3fr_2fr] gap-5">
            {/* =================================================
                MESSAGE FORM
                ================================================= */}
            <form
              onSubmit={submit}
              noValidate
              className="bg-white rounded-[28px] p-7 lg:p-9 border border-wheat/60"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-display text-3xl text-olive">
                  Send a message
                </h2>

                <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-olive/10 border border-olive/20 px-3 py-1.5 text-[10px] text-olive font-semibold uppercase tracking-[0.14em] shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive animate-pulse" />
                  Reply under 24h
                </span>
              </div>

              {sent && (
                <p className="mt-4 text-sm text-olive bg-olive/10 border border-olive/30 rounded-2xl p-4">
                  Thanks — we'll be in touch within 24 hours.
                </p>
              )}

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field
                  id="name"
                  label="Name"
                  value={form.name}
                  onChange={(v) =>
                    setForm({ ...form, name: v })
                  }
                  error={errors.name}
                />

                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) =>
                    setForm({ ...form, email: v })
                  }
                  error={errors.email}
                />
              </div>

              <div className="mt-4">
                <Field
                  id="subject"
                  label="Subject"
                  value={form.subject}
                  onChange={(v) =>
                    setForm({ ...form, subject: v })
                  }
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="text-[11px] uppercase tracking-[0.2em] text-ink/60 font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  className={`mt-2 w-full rounded-2xl bg-cream/60 border px-4 py-3 text-sm outline-none focus:border-olive transition-colors ${errors.message
                    ? "border-red-400"
                    : "border-wheat"
                    }`}
                />

                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 rounded-full bg-olive text-cream px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-olive/90 transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* =================================================
                SIDEBAR
                ================================================= */}
            <aside className="flex flex-col gap-5">
              {/* =================================================
                  REAL GOOGLE MAP
                  ================================================= */}
              <div
                id="map"
                className="relative h-[300px] lg:h-[320px] rounded-[26px] overflow-hidden bg-wheat/40 border border-wheat/60"
              >
                <iframe
                  src={MAP_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PRAM Foods location"
                  className="w-full h-full"
                />

                {/* Address overlay */}
                <div className="absolute left-4 right-4 bottom-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-wheat/60 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="h-9 w-9 shrink-0 rounded-xl bg-olive/10 text-olive flex items-center justify-center">
                      <MapPin size={17} />
                    </span>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                        Visit us
                      </p>

                      <p className="mt-1 text-xs text-ink/75 leading-relaxed">
                        {ADDRESS}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  SOCIALS
                  ================================================= */}
              <div className="bg-olive rounded-[26px] p-6 text-cream">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
                  Stay connected
                </p>

                <h3 className="mt-2 font-display text-2xl leading-tight">
                  Come hang out
                  with us.
                </h3>

                <p className="mt-2 text-sm text-cream/70 leading-relaxed max-w-xs">
                  Follow our kitchen, discover new flavours, and see what
                  we're cooking up next.
                </p>

                <div className="mt-5 flex gap-3">
                  {SOCIALS.map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-olive hover:bg-gold hover:text-cream hover:-translate-y-1 transition-all duration-300"
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  ))}
                </div>


              </div>
            </aside>
          </div>
        </section>

        {/* =====================================================
            FAQ
            ===================================================== */}
        <section className="px-6 lg:px-10 py-12 lg:py-16 bg-transparent">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">
              Good to know
            </p>

            <h2 className="mt-2 font-display text-4xl text-olive text-center">
              Frequently asked
            </h2>

            <div className="mt-7 space-y-2.5">
              {FAQS.map((f, i) => {
                const open = openFaq === i;

                return (
                  <div
                    key={f.q}
                    className="bg-white rounded-2xl border border-wheat/60 overflow-hidden"
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() =>
                        setOpenFaq(open ? null : i)
                      }
                      className="w-full flex items-center justify-between text-left px-6 py-4"
                    >
                      <span className="font-semibold text-sm text-olive">
                        {f.q}
                      </span>

                      <ChevronDown
                        size={17}
                        className={`shrink-0 ml-4 transition-transform ${open ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {open && (
                      <div className="px-6 pb-4 text-sm text-ink/70 leading-relaxed">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[11px] uppercase tracking-[0.2em] text-ink/60 font-semibold"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 w-full rounded-full bg-cream/60 border px-4 py-3 text-sm outline-none focus:border-olive transition-colors ${error ? "border-red-400" : "border-wheat"
          }`}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}