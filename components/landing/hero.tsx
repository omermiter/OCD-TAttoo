"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { ArrowDown, MapPin } from "lucide-react"

// ssr: false — Warp shader uses WebGL which has no server-side context
const WarpShaderBackground = dynamic(() => import("@/components/ui/wrap-shader"), {
  ssr: false,
})

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[100svh] flex flex-col overflow-hidden"
      style={{ backgroundColor: "#07050a" }}
    >
      {/* ── Warp shader background ── */}
      <WarpShaderBackground />

      {/* Dark overlay — keeps text readable over the vivid shader */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(7,5,10,0.42)" }}
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #07050a, transparent)" }}
      />

      {/* ════════════════════════════════════
          CONTENT
      ════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pt-28 pb-24 mx-auto w-full max-w-4xl">

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex items-center justify-center gap-2.5 mb-10"
        >
          <MapPin className="w-3 h-3 flex-shrink-0" style={{ color: "#c084fc" }} />
          <span className="section-label" style={{ color: "rgba(192,132,252,0.75)" }}>
            Kfar Saba · Israel
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
            className="headline-display"
            style={{
              fontSize: "clamp(4rem, 11vw, 10rem)",
              color: "#f0ebf8",
              textShadow: "0 4px 48px rgba(7,5,10,0.85)",
            }}
          >
            Permanent
          </motion.h1>
        </div>
        <div className="overflow-hidden -mt-1">
          <motion.h1
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.24 }}
            className="headline-display"
            style={{
              fontSize: "clamp(4rem, 11vw, 10rem)",
              color: "#c084fc",
              textShadow: "0 4px 48px rgba(7,5,10,0.85)",
            }}
          >
            Art.
          </motion.h1>
        </div>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.52 }}
          className="flex items-center gap-4 my-8 origin-center"
        >
          <span className="h-px w-16" style={{ background: "rgba(192,132,252,0.3)" }} />
          <span style={{
            color: "rgba(192,132,252,0.5)",
            fontSize: "0.52rem",
            letterSpacing: "0.48em",
            fontFamily: "'EB Garamond', Georgia, serif",
          }}>
            ✦ OCD TATTOO ✦
          </span>
          <span className="h-px w-16" style={{ background: "rgba(192,132,252,0.3)" }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.58 }}
          className="italic text-base md:text-lg leading-relaxed max-w-sm md:max-w-md"
          style={{
            color: "rgba(240,235,248,0.5)",
            fontFamily: "'EB Garamond', Georgia, serif",
            textShadow: "0 1px 16px rgba(7,5,10,0.95)",
          }}
        >
          Custom tattoos by an independent artist obsessed with precision.
          Every piece designed from scratch — no flash, no shortcuts.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.72 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <motion.a
            href="#book"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center px-9 py-3.5 text-white text-sm tracking-[0.2em] uppercase transition-all duration-300"
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              background: "rgba(124,58,237,0.32)",
              border: "1px solid rgba(168,85,247,0.48)",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 32px rgba(124,58,237,0.32), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.1)",
              fontFamily: "'EB Garamond', Georgia, serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(124,58,237,0.48)"
              e.currentTarget.style.borderColor = "rgba(168,85,247,0.7)"
              e.currentTarget.style.boxShadow = "0 6px 40px rgba(124,58,237,0.45), inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(124,58,237,0.32)"
              e.currentTarget.style.borderColor = "rgba(168,85,247,0.48)"
              e.currentTarget.style.boxShadow = "0 4px 32px rgba(124,58,237,0.32), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.1)"
            }}
          >
            Book a Session
          </motion.a>
          <motion.a
            href="#work"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center gap-2 px-9 py-3.5 text-sm tracking-[0.14em] uppercase transition-all duration-300"
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "0.5rem",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.16), 0 4px 16px rgba(0,0,0,0.15)",
              color: "rgba(240,235,248,0.62)",
              fontFamily: "'EB Garamond', Georgia, serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.09)"
              e.currentTarget.style.borderColor = "rgba(192,132,252,0.45)"
              e.currentTarget.style.color = "#f0ebf8"
              e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.22), 0 4px 24px rgba(0,0,0,0.2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)"
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"
              e.currentTarget.style.color = "rgba(240,235,248,0.62)"
              e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.16), 0 4px 16px rgba(0,0,0,0.15)"
            }}
          >
            View Work
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="flex gap-12 md:gap-20 mt-14 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { value: "500+", label: "Pieces" },
            { value: "8+",   label: "Years"  },
            { value: "100%", label: "Custom" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <span
                className="headline-display"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                  color: "rgba(240,235,248,0.9)",
                  fontStyle: "normal",
                  fontWeight: 500,
                  textShadow: "0 2px 24px rgba(7,5,10,0.9)",
                }}
              >
                {value}
              </span>
              <span className="section-label" style={{ color: "rgba(192,132,252,0.55)", fontSize: "0.58rem" }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span style={{
          fontSize: "0.58rem",
          letterSpacing: "0.38em",
          textTransform: "uppercase",
          color: "rgba(192,132,252,0.4)",
          fontFamily: "'EB Garamond', Georgia, serif",
          fontStyle: "italic",
        }}>
          Scroll
        </span>
        <div
          className="relative overflow-hidden"
          style={{
            width: "1px",
            height: "46px",
            background: "linear-gradient(to bottom, rgba(192,132,252,0.25), transparent)",
          }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0"
            style={{ height: "13px", background: "rgba(192,132,252,0.65)" }}
            animate={{ y: ["-100%", "460%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
