import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { useState } from "react";

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
    <footer className="bg-olive text-cream pt-20 pb-8 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-semibold">
            Samarth <span className="italic">Makhana</span>
          </h3>
          <p className="mt-4 text-cream/80 text-sm leading-relaxed">
            Rooted in Nature. Made for You. Handcrafted lotus seed snacks from India.
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
            <li><Link to="/about" className="hover:text-cream transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-cream transition-colors">Journal</Link></li>
            <li><Link to="/contact" className="hover:text-cream transition-colors">Contact</Link></li>
            <li><Link to="/cart" className="hover:text-cream transition-colors">Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-wheat">Support</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/85">
            <li>
              <a href="mailto:hello@samarthmakhana.in" className="hover:text-cream transition-colors">
                hello@samarthmakhana.in
              </a>
            </li>
            <li>+91 98765 43210</li>
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
        </div>
      </div>
      <div className="mt-16 pt-6 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-wheat">© {new Date().getFullYear()} Samarth Makhana. All rights reserved.</p>
        <p className="text-xs text-wheat">Handcrafted in India 🌿</p>
      </div>
    </footer>
  );
}
