"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Book", href: "#book" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "bg-transparent py-5"
      }`}
      style={scrolled ? {
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        background: "rgba(168,85,247,0.06)",
        borderBottom: "1px solid rgba(168,85,247,0.15)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2), inset 0 -1px 0 rgba(168,85,247,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
      } : undefined}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <span
            className="font-display italic leading-none"
            style={{ fontSize: "1.55rem", color: "#f0ebf8", letterSpacing: "0.04em", fontWeight: 500 }}
          >
            OCD
          </span>
          <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:bg-purple-400 transition-colors duration-300" />
          <span
            className="font-display italic leading-none transition-colors duration-300"
            style={{ fontSize: "1.55rem", color: "#c084fc", letterSpacing: "0.04em", fontWeight: 500 }}
          >
            Tattoo
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[0.7rem] tracking-[0.25em] uppercase font-semibold text-white/40 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <motion.a
            href="#book"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2.5 text-white text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-all duration-300"
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              background: "rgba(124,58,237,0.35)",
              border: "1px solid rgba(168,85,247,0.45)",
              borderRadius: "0.375rem",
              boxShadow: "0 2px 16px rgba(124,58,237,0.28), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(124,58,237,0.52)"
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.26)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(124,58,237,0.35)"
              e.currentTarget.style.boxShadow = "0 2px 16px rgba(124,58,237,0.28), inset 0 1px 0 rgba(255,255,255,0.2)"
            }}
          >
            Book Now
          </motion.a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden text-white/60 hover:text-white transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              background: "rgba(168,85,247,0.07)",
              borderTop: "1px solid rgba(168,85,247,0.14)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-white/60 hover:text-white transition-colors tracking-wide"
                >
                  {label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-1 py-3.5 bg-purple-600 hover:bg-purple-500 text-white text-[0.7rem] font-bold tracking-[0.2em] uppercase text-center transition-colors duration-200"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
