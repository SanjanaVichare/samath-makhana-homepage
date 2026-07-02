import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ChevronRight, ArrowLeft } from "lucide-react";

type FAQ = { q: string; a: string };
type Category = { id: string; label: string; emoji: string; faqs: FAQ[] };

const CATEGORIES: Category[] = [
  {
    id: "about",
    label: "About Samarth",
    emoji: "🌿",
    faqs: [
      { q: "Who are we?", a: "Samarth Makhana is a premium Indian D2C food brand crafting roasted makhana snacks and makhana cookies. Rooted in tradition, made for the mindful generation." },
      { q: "Where are you located?", a: "Dadar" },
      { q: "Are your products made in India?", a: "Yes. Every product is proudly handcrafted in India, from sourcing to packing." },
      { q: "Why choose Samarth?", a: "Honest ingredients, traditional roasting, small-batch quality, and recyclable packaging. Nothing artificial, ever." },
    ],
  },
  {
    id: "makhana",
    label: "Makhana",
    emoji: "🪷",
    faqs: [
      { q: "What is Makhana?", a: "Makhana (fox nuts / lotus seeds) is an ancient Indian superfood — light, crunchy, and naturally rich in protein." },
      { q: "Is it healthy?", a: "Very. It's low in calories, high in protein and fiber, and free of cholesterol or trans fats." },
      { q: "Is it gluten free?", a: "Yes — naturally gluten free and suitable for most dietary preferences." },
      { q: "Is it roasted or fried?", a: "Always roasted, never fried. Slow-roasted in iron pans for a clean, satisfying crunch." },
      { q: "Is it vegetarian?", a: "100% vegetarian. All our products carry the green-dot vegetarian mark." },
    ],
  },
  {
    id: "cookies",
    label: "Cookies",
    emoji: "🍪",
    faqs: [
      { q: "What makes your cookies different?", a: "They're baked with real roasted makhana flour — high protein, light, and surprisingly wholesome. No maida." },
      { q: "What ingredients are used?", a: "Whole wheat, roasted makhana, jaggery or natural sweeteners, cold-pressed oils, and pure spices. That's it." },
      { q: "Are they vegetarian?", a: "Yes — fully vegetarian, with no eggs." },
    ],
  },
  {
    id: "orders",
    label: "Orders",
    emoji: "📦",
    faqs: [
      { q: "Shipping information", a: "We ship pan-India via reputed courier partners. Free shipping on orders above ₹499." },
      { q: "Delivery time", a: "Most orders ship within 24 hours and arrive in 3–5 business days." },
      { q: "Return policy", a: "We replace any unopened pack within 7 days of delivery — no questions asked." },
      { q: "Payment methods", a: "UPI, all major credit/debit cards, net banking, and popular wallets." },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    emoji: "✉️",
    faqs: [
      { q: "Email", a: "hello@samarthmakhana.in — we reply within 24 hours." },
      { q: "Phone number", a: "+91 7900091250 — Mon to Sat, 9am–6pm IST." },
      { q: "Location", a: "Dadar East, India." },
    ],
  },
];

type Msg = { from: "bot" | "user"; text: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [activeCat, setActiveCat] = useState<Category | null>(null);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Namaste 🌿  I'm Saathi, your Samarth assistant. Pick a topic below and I'll help right away." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, activeCat, open]);

  const askFaq = (faq: FAQ) => {
    setMessages((m) => [...m, { from: "user", text: faq.q }, { from: "bot", text: faq.a }]);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        type="button"
        aria-label={open ? "Close chat" : "Open chat with Saathi"}
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 left-6 z-[998] inline-flex h-14 w-14 items-center justify-center rounded-full bg-olive text-cream shadow-[0_14px_38px_-10px_rgba(77,98,44,0.55)] ring-1 ring-cream/30"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 left-6 z-[999] w-[min(92vw,380px)] h-[min(72vh,560px)] flex flex-col rounded-[28px] bg-cream border border-wheat/70 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] overflow-hidden"
            role="dialog"
            aria-label="Samarth FAQ assistant"
          >
            {/* Header */}
            <div className="relative bg-olive text-cream px-5 py-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gold/90 flex items-center justify-center text-lg">🌿</div>
              <div className="leading-tight">
                <p className="font-display text-lg">Saathi</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-wheat/90">Samarth Help · Online</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5 space-y-3 bg-[#FBF7EA]">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] text-sm leading-relaxed px-4 py-2.5 rounded-2xl ${m.from === "user"
                      ? "bg-olive text-cream rounded-br-sm"
                      : "bg-white border border-wheat/70 text-ink rounded-bl-sm"
                      }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick replies */}
            <div className="border-t border-wheat/60 bg-cream px-4 py-3">
              {activeCat ? (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveCat(null)}
                    className="mb-2 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-olive font-semibold"
                  >
                    <ArrowLeft size={12} /> Topics
                  </button>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {activeCat.faqs.map((f) => (
                      <button
                        key={f.q}
                        type="button"
                        onClick={() => askFaq(f)}
                        className="px-3 py-1.5 rounded-full bg-white border border-wheat hover:border-olive hover:bg-olive hover:text-cream transition-colors text-xs text-ink"
                      >
                        {f.q}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-ink/55 font-semibold mb-2">
                    Choose a topic
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setActiveCat(c)}
                        className="group flex items-center justify-between gap-2 px-3 py-2 rounded-2xl bg-white border border-wheat hover:border-olive hover:bg-olive hover:text-cream transition-colors"
                      >
                        <span className="flex items-center gap-2 text-xs font-medium">
                          <span>{c.emoji}</span> {c.label}
                        </span>
                        <ChevronRight size={14} className="opacity-50 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
