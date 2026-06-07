"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const FAQS = [
  {
    q: "How much does a tattoo cost?",
    a: "Pricing depends on size, complexity, and placement. Small pieces start around ₪400–₪600. Larger or more detailed work is quoted per session after we discuss your design. Reach out and I'll give you an honest estimate with no obligation.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "I typically book 3–5 weeks out. Slots fill fast, especially for larger pieces — the sooner you reach out, the more flexibility we'll have on timing.",
  },
  {
    q: "Do you do walk-ins?",
    a: "No — every session is by appointment only. This lets me dedicate proper time to your design and ensure the studio is set up specifically for you.",
  },
  {
    q: "Can I bring my own reference images?",
    a: "Absolutely — references help us align on style, mood, and direction. Just know that I don't copy other artists' work. The final design will always be original.",
  },
  {
    q: "What should I bring to my session?",
    a: "Come hydrated, eat a proper meal beforehand, and wear clothing that gives easy access to the area being tattooed. Bring a snack for longer sessions. Leave numbing cream at home unless we've discussed it.",
  },
  {
    q: "Do you do touch-ups?",
    a: "Yes. One free touch-up is included for every piece, provided you follow aftercare instructions. Touch-ups are done once the tattoo is fully healed — usually 6–8 weeks after the session.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 md:py-32" style={{ backgroundColor: "#07050a" }}>
      <div className="mx-auto max-w-4xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-14"
        >
          <p className="section-label mb-4" style={{ color: "rgba(192,132,252,0.7)" }}>FAQ</p>
          <h2
            className="headline-display"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#f0ebf8", lineHeight: 0.88 }}
          >
            Questions,<br />
            <span style={{ color: "#c084fc" }}>answered.</span>
          </h2>
          <div
            className="mt-7 h-px"
            style={{ background: "linear-gradient(to right, rgba(168,85,247,0.5), rgba(168,85,247,0.1), transparent)" }}
          />
        </motion.div>

        <div className="space-y-2">
          {FAQS.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                delay: i * 0.06,
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left transition-all duration-300"
                style={{
                  backdropFilter: "blur(12px) saturate(180%)",
                  WebkitBackdropFilter: "blur(12px) saturate(180%)",
                  background: open === i ? "rgba(168,85,247,0.1)" : "rgba(168,85,247,0.04)",
                  border: "1px solid",
                  borderColor: open === i ? "rgba(168,85,247,0.3)" : "rgba(168,85,247,0.1)",
                }}
              >
                <span
                  style={{
                    color: open === i ? "#f0ebf8" : "rgba(240,235,248,0.6)",
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: "1rem",
                  }}
                >
                  {q}
                </span>
                <span className="flex-shrink-0" style={{ color: "rgba(192,132,252,0.7)" }}>
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="px-6 py-5 italic leading-relaxed"
                      style={{
                        color: "rgba(240,235,248,0.42)",
                        fontFamily: "'EB Garamond', Georgia, serif",
                        fontSize: "0.95rem",
                        background: "rgba(124,58,237,0.04)",
                        borderLeft: "1px solid rgba(168,85,247,0.14)",
                        borderRight: "1px solid rgba(168,85,247,0.14)",
                        borderBottom: "1px solid rgba(168,85,247,0.14)",
                      }}
                    >
                      {a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
