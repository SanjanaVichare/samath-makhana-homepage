import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail, Leaf, ShieldCheck, Wheat, Flag, BadgeCheck } from "lucide-react";
import { useState } from "react";

const TRUST = [
  { Icon: BadgeCheck, label: "FSSAI Certified" },
  { Icon: ShieldCheck, label: "ISO 22000" },
  { Icon: Wheat, label: "Gluten Free" },
  { Icon: Leaf, label: "100% Vegetarian" },
  { Icon: Flag, label: "Made in India" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!ok) return setStatus("err");
    setStatus("ok");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3500);
  };

  return (
    <footer className="bg-[#122300] text-cream pt-8 pb-8 px-6 lg:px-10">

      {/* Top Info Strip */}
      <div className="border-y border-cream/10 bg-[#122300]">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[12px] uppercase tracking-[0.22em] text-white font-bold">            <div className="flex items-center gap-2">
            <span>100% Vegetarian</span>
          </div>

            <span className="text-wheat/70">·</span>

            <span className="flex items-center gap-2">
              <span>Made in India</span>

              <svg
                width="22"
                height="15"
                viewBox="0 0 22 15"
                className="inline-block shrink-0"
                aria-label="India flag"
                role="img"
              >
                <rect width="22" height="5" fill="#FF9933" />
                <rect y="5" width="22" height="5" fill="#FFFFFF" />
                <rect y="10" width="22" height="5" fill="#138808" />

                <circle
                  cx="11"
                  cy="7.5"
                  r="2"
                  fill="none"
                  stroke="#000080"
                  strokeWidth="0.5"
                />

                <circle
                  cx="11"
                  cy="7.5"
                  r="0.35"
                  fill="#000080"
                />

                <g
                  stroke="#000080"
                  strokeWidth="0.25"
                >
                  <line x1="11" y1="5.5" x2="11" y2="9.5" />
                  <line x1="9" y1="7.5" x2="13" y2="7.5" />
                  <line x1="9.6" y1="6.1" x2="12.4" y2="8.9" />
                  <line x1="12.4" y1="6.1" x2="9.6" y2="8.9" />
                </g>
              </svg>
            </span>

            <span className="text-wheat/70">·</span>

            <span>Crafted with care</span>

          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl pt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-semibold">
            PRAM FOODS
          </h3>
          <p className="mt-4 text-cream/80 text-sm leading-relaxed">
            5/246, Kohinoor Compound, Jyotiba Phule Road, Opp. Swastik Jewellers, Naigaon, Dadar(E), Mumbai - 400014.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-wheat hover:bg-cream hover:text-olive transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-wheat">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/85">
            <li><Link to="/shop" className="hover:text-cream transition-colors">Shop All</Link></li>
            <li><Link to="/about" className="hover:text-cream transition-colors">Our Story</Link></li>
            <li><Link to="/blog" className="hover:text-cream transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-cream transition-colors">Contact</Link></li>
            <li><Link to="/cart" className="hover:text-cream transition-colors">Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-wheat">Support</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/85">
            <li>
              <a href="mailto:hello@PRAMmakhana.in" className="hover:text-cream transition-colors">
                hello@pramfoods.in
              </a>
            </li>
            <li>+91 79000 91250</li>
            <li><Link to="/contact" className="hover:text-cream transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/contact" className="hover:text-cream transition-colors">FAQs</Link></li>
            <li><a href="#" className="hover:text-cream transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cream transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-wheat">Newsletter</h4>
          <p className="mt-5 text-sm text-cream/80">Small batch drops. Quiet emails.</p>
          <form className="mt-5 flex gap-2" onSubmit={submit} noValidate>
            <label htmlFor="footer-email" className="sr-only">Email</label>
            <div className="flex-1 relative">
              <Mail size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-cream/60" />
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-cream/40 focus:border-cream outline-none py-2 pl-6 text-sm text-cream placeholder:text-cream/50"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-full bg-gold text-cream text-[11px] font-semibold uppercase tracking-[0.18em] hover:bg-gold/90 transition-colors"
            >
              Join
            </button>
          </form>
          {status === "ok" && <p className="mt-3 text-xs text-wheat">Thanks — you're on the list.</p>}
          {status === "err" && <p className="mt-3 text-xs text-wheat">Please enter a valid email.</p>}

          <div className="mt-7 space-y-2 text-[11px] text-cream/70 leading-relaxed">
            <p>
              <span className="uppercase tracking-[0.18em] text-wheat font-semibold">FSSAI:</span>{" "}
              12345678901234
            </p>
            <p>
              <span className="uppercase tracking-[0.18em] text-wheat font-semibold">GSTIN:</span>{" "}
              27DNLPR6551N1Z2
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-wheat">© {new Date().getFullYear()} PRAM Foods. All rights reserved.</p>
        <p className="text-xs text-wheat">Made in India · Crafted with care 🌿</p>
      </div>
    </footer>
  );
}
