import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const LINKS = [
  { label: "Home", to: "/" as const },
  { label: "Shop", to: "/shop" as const },
  { label: "About Us", to: "/about" as const },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-[400ms] ease-out ${
        solid
          ? "bg-cream/95 backdrop-blur shadow-[0_2px_24px_-12px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-semibold text-olive tracking-tight">
          Samarth <span className="italic">Makhana</span>
        </Link>

        <nav className="hidden lg:flex gap-9" aria-label="Primary">
          {LINKS.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors hover:text-olive ${
                  active ? "text-olive" : "text-ink"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-olive transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">




          <Link
            to="/login"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full border border-[#122300] text-[#122300] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#122300] hover:text-cream transition-all duration-200"
          >
            Login
          </Link>

          {/* Sign Up */}
          
          <Link
            to="/signup"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#122300] text-cream text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#122300]/90 transition-all duration-200"
          >
            Sign Up
          </Link>

          <Link
            to="/cart"
            aria-label={`Cart, ${count} items`}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:text-olive transition-colors"
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
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-olive text-cream text-xs font-semibold uppercase tracking-[0.15em] hover:bg-olive/90 hover:scale-[1.02] transition-all duration-200"
          >
            Shop Now
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-olive"
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
                className="text-sm font-semibold uppercase tracking-[0.2em] text-ink hover:text-olive"
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
