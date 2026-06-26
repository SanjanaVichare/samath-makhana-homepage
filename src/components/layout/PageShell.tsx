import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({
  children,
  pad = true,
}: {
  children: ReactNode;
  pad?: boolean;
}) {
  return (
    <div className="min-h-dvh bg-cream text-ink">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={pad ? "pt-20" : ""}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
