"use client"

import { motion } from "framer-motion"

const STEPS = [
  {
    number: "01",
    title: "Share Your Idea",
    body: "Fill in the form below with your concept, references, placement, and size. The more detail, the better the design.",
  },
  {
    number: "02",
    title: "Free Consultation",
    body: "We talk through the design, sizing, and placement — over WhatsApp or in person — until we're fully aligned.",
  },
  {
    number: "03",
    title: "Custom Design",
    body: "I create your piece from scratch and share it for your approval before we schedule anything.",
  },
  {
    number: "04",
    title: "Your Session",
    body: "We make it permanent. Sessions by appointment only, in a private studio in Kfar Saba.",
  },
]

export default function Process() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#07050a" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16 md:mb-20"
        >
          <p className="section-label mb-4" style={{ color: "rgba(192,132,252,0.7)" }}>Process</p>
          <h2
            className="headline-display"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#f0ebf8", lineHeight: 0.88 }}
          >
            From idea<br />
            <span style={{ color: "#c084fc" }}>to skin.</span>
          </h2>
          <div
            className="mt-7 h-px"
            style={{ background: "linear-gradient(to right, rgba(168,85,247,0.5), rgba(168,85,247,0.1), transparent)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map(({ number, title, body }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                delay: i * 0.1,
              }}
              className="relative flex flex-col gap-5 p-6"
              style={{
                backdropFilter: "blur(12px) saturate(180%)",
                WebkitBackdropFilter: "blur(12px) saturate(180%)",
                background: "rgba(168,85,247,0.05)",
                border: "1px solid rgba(168,85,247,0.13)",
              }}
            >
              {/* Top highlight */}
              <div
                className="absolute top-0 inset-x-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }}
              />

              <span
                className="headline-display"
                style={{ fontSize: "3.5rem", color: "rgba(192,132,252,0.13)", lineHeight: 1 }}
              >
                {number}
              </span>

              <div>
                <p
                  className="mb-2 text-sm font-semibold tracking-wide"
                  style={{ color: "#f0ebf8", fontFamily: "'EB Garamond', Georgia, serif" }}
                >
                  {title}
                </p>
                <p
                  className="text-sm italic leading-relaxed"
                  style={{ color: "rgba(240,235,248,0.4)", fontFamily: "'EB Garamond', Georgia, serif" }}
                >
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
