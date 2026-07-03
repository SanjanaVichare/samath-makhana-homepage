import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/samarthlogo.png";

const LINKS = [
  { label: "Home", to: "/" as const },
  { label: "Shop", to: "/shop" as const },
  { label: "Our Story", to: "/about" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export default function Navbar({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !transparentOnTop || scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-[400ms] ease-out ${solid
        ? "bg-cream/95 backdrop-blur shadow-[0_2px_24px_-12px_rgba(0,0,0,0.18)]"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Samarth Makhana"
            className="h-12 w-auto object-contain transition-all duration-300"
          />
        </Link>

        <nav className="hidden lg:flex gap-9" aria-label="Primary">
          {LINKS.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors hover:text-[#122300] ${active ? "text-[#122300]" : "text-ink"
                  }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#122300] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            aria-label={`Cart, ${count} items`}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:text-[#122300] transition-colors"
          >
            <ShoppingBag size={20} strokeWidth={1.6} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-gold text-cream text-[10px] font-bold">
                {count}
              </span>
            )}
          </Link>
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-[#122300] text-cream text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#122300]/90 hover:scale-[1.02] transition-all duration-200"
          >
            Shop Now
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-[#122300]"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-wheat px-6 py-6">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-ink hover:text-[#122300]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
