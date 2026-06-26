import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  weight: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string, weight: string) => void;
  setQty: (id: string, weight: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "samarth_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const value = useMemo<CartCtx>(() => {
    const key = (i: { id: string; weight: string }) => `${i.id}__${i.weight}`;
    return {
      items,
      add: (item, qty = 1) => {
        setItems((prev) => {
          const k = key(item);
          const idx = prev.findIndex((p) => key(p) === k);
          if (idx >= 0) {
            const copy = [...prev];
            copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
            return copy;
          }
          return [...prev, { ...item, qty }];
        });
      },
      remove: (id, weight) =>
        setItems((prev) => prev.filter((p) => !(p.id === id && p.weight === weight))),
      setQty: (id, weight, qty) =>
        setItems((prev) =>
          prev
            .map((p) => (p.id === id && p.weight === weight ? { ...p, qty: Math.max(1, qty) } : p))
            .filter((p) => p.qty > 0),
        ),
      clear: () => setItems([]),
      count: items.reduce((s, i) => s + i.qty, 0),
      subtotal: items.reduce((s, i) => s + i.qty * i.price, 0),
    };
  }, [items]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
