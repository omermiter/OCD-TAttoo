"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, ExternalLink } from "lucide-react"

const WORKS = [
  { id: 1, style: "Fine Line",        image: "/images/work-1.jpg", span: "row-span-2" },
  { id: 2, style: "Blackwork",        image: "/images/work-2.jpg", span: "" },
  { id: 3, style: "Ornamental",       image: "/images/work-3.jpg", span: "" },
  { id: 4, style: "Geometric",        image: "/images/work-4.jpg", span: "" },
  { id: 5, style: "Neo-Traditional",  image: "/images/work-5.jpg", span: "row-span-2" },
  { id: 6, style: "Realism",          image: "/images/work-6.jpg", span: "" },
  { id: 7, style: "Script",           image: "/images/work-7.png", span: "" },
  { id: 8, style: "Custom",           image: "/images/work-8.jpg", span: "" },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32" style={{ backgroundColor: "#07050a" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16 md:mb-20"
        >
          <p className="section-label mb-4">Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2
              className="headline-display"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#f0ebf8", fontStyle: "italic", fontWeight: 300, lineHeight: 0.88 }}
            >
              The Work
            </h2>
            <p
              className="max-w-xs text-sm md:text-base leading-relaxed italic"
              style={{ color: "rgba(240,235,248,0.38)", fontFamily: "'EB Garamond', Georgia, serif" }}
            >
              Each piece is a collaboration — designed specifically
              for the person who will wear it forever.
            </p>
          </div>
          <div className="mt-7 h-px" style={{
            background: "linear-gradient(to right, rgba(168,85,247,0.5), rgba(168,85,247,0.1), transparent)",
          }} />
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          style={{ gridAutoRows: "240px" }}
        >
          {WORKS.map(({ id, style, image, span }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              className={`group relative overflow-hidden cursor-pointer ${span}`}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              style={{ backgroundColor: "#1a0533" }}
            >
              {/* Actual tattoo photo */}
              <Image
                src={image}
                alt={`${style} tattoo`}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Dark tint — lifts on hover to reveal photo */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: "rgba(7,5,10,0.45)" }}
              />

              {/* Purple vignette */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-500 group-hover:opacity-20"
                style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(88,28,135,0.5) 0%, transparent 70%)" }}
              />

              {/* Bottom gradient fade */}
              <div
                className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(7,5,10,0.8), transparent)" }}
              />

              {/* Style label — slides up on hover */}
              <div className="absolute bottom-0 inset-x-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <p className="section-label" style={{ color: "rgba(192,132,252,0.9)", fontSize: "0.6rem" }}>
                  {style}
                </p>
              </div>

              {/* Inset purple border on hover */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: "inset 0 0 0 1px rgba(168,85,247,0.45)" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Instagram CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="https://instagram.com/ocd_tattoo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 px-8 py-3.5 text-sm tracking-[0.18em] uppercase transition-all duration-300"
            style={{
              border: "1px solid rgba(168,85,247,0.35)",
              color: "rgba(240,235,248,0.6)",
              fontFamily: "'EB Garamond', Georgia, serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(168,85,247,0.75)"
              e.currentTarget.style.color = "#f0ebf8"
              e.currentTarget.style.background = "rgba(124,58,237,0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(168,85,247,0.35)"
              e.currentTarget.style.color = "rgba(240,235,248,0.6)"
              e.currentTarget.style.background = "transparent"
            }}
          >
            <Instagram className="w-4 h-4" />
            View full portfolio on Instagram
            <ExternalLink className="w-3 h-3 opacity-50" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}
