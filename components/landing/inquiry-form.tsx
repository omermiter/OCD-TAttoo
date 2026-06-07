"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

const PLACEMENTS = [
  "Arm / Forearm",
  "Upper Arm / Bicep",
  "Shoulder",
  "Chest",
  "Back",
  "Rib",
  "Leg / Thigh",
  "Ankle / Foot",
  "Neck",
  "Hand / Wrist",
  "Other",
]

const SIZES = [
  { label: "Small", sub: "Under 5cm" },
  { label: "Medium", sub: "5–10cm" },
  { label: "Large", sub: "10–20cm" },
  { label: "Sleeve", sub: "20cm+" },
]

type Fields = {
  name: string
  contact: string
  idea: string
  placement: string
  size: string
}

const fieldStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(168,85,247,0.05)",
  border: "1px solid rgba(168,85,247,0.18)",
  color: "#f0ebf8",
  fontFamily: "'EB Garamond', Georgia, serif",
  fontSize: "1rem",
  padding: "0.75rem 1rem",
  outline: "none",
  transition: "border-color 0.2s",
  appearance: "none" as const,
}

export default function InquiryForm() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    contact: "",
    idea: "",
    placement: "",
    size: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function set(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError("Something went wrong — please try again or reach out directly via WhatsApp.")
    } finally {
      setLoading(false)
    }
  }

  const ready = !loading && fields.name && fields.contact && fields.idea && fields.placement && fields.size

  return (
    <section id="book" className="py-24 md:py-32" style={{ backgroundColor: "#07050a" }}>
      <div className="mx-auto max-w-3xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-12"
        >
          <p className="section-label mb-4" style={{ color: "rgba(192,132,252,0.7)" }}>Book a Session</p>
          <h2
            className="headline-display"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#f0ebf8", lineHeight: 0.88 }}
          >
            Tell me<br />
            <span style={{ color: "#c084fc" }}>your idea.</span>
          </h2>
          <div
            className="mt-7 h-px"
            style={{ background: "linear-gradient(to right, rgba(168,85,247,0.5), rgba(168,85,247,0.1), transparent)" }}
          />
          <p
            className="mt-6 italic"
            style={{
              color: "rgba(240,235,248,0.38)",
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: "1.05rem",
            }}
          >
            Fill in the details below and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="flex flex-col items-center gap-6 py-16 text-center"
              style={{
                backdropFilter: "blur(12px) saturate(180%)",
                WebkitBackdropFilter: "blur(12px) saturate(180%)",
                background: "rgba(168,85,247,0.07)",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10" style={{ background: "rgba(192,132,252,0.3)" }} />
                <span style={{ color: "rgba(192,132,252,0.5)", fontSize: "0.5rem", letterSpacing: "0.5em", fontFamily: "'EB Garamond', Georgia, serif" }}>
                  ✦ RECEIVED ✦
                </span>
                <span className="h-px w-10" style={{ background: "rgba(192,132,252,0.3)" }} />
              </div>
              <h3
                className="headline-display"
                style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#f0ebf8", lineHeight: 0.92 }}
              >
                Your idea is<br />
                <span style={{ color: "#c084fc" }}>on its way.</span>
              </h3>
              <p
                className="italic max-w-sm"
                style={{ color: "rgba(240,235,248,0.4)", fontFamily: "'EB Garamond', Georgia, serif", fontSize: "1rem" }}
              >
                I'll be in touch within 24 hours. Keep an eye on {fields.contact}.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name + contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="section-label" style={{ color: "rgba(192,132,252,0.6)", fontSize: "0.58rem" }}>
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={fields.name}
                    onChange={set}
                    placeholder="First name"
                    required
                    className="placeholder:text-white/20"
                    style={fieldStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.45)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.18)")}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="section-label" style={{ color: "rgba(192,132,252,0.6)", fontSize: "0.58rem" }}>
                    Phone or Email
                  </label>
                  <input
                    name="contact"
                    value={fields.contact}
                    onChange={set}
                    placeholder="How to reach you"
                    required
                    className="placeholder:text-white/20"
                    style={fieldStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.45)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.18)")}
                  />
                </div>
              </div>

              {/* Idea */}
              <div className="flex flex-col gap-1.5">
                <label className="section-label" style={{ color: "rgba(192,132,252,0.6)", fontSize: "0.58rem" }}>
                  Your Idea
                </label>
                <textarea
                  name="idea"
                  value={fields.idea}
                  onChange={set}
                  placeholder="Describe your tattoo — style, subject, mood, any references..."
                  required
                  rows={4}
                  className="placeholder:text-white/20"
                  style={{ ...fieldStyle, resize: "vertical" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.45)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.18)")}
                />
              </div>

              {/* Placement */}
              <div className="flex flex-col gap-1.5">
                <label className="section-label" style={{ color: "rgba(192,132,252,0.6)", fontSize: "0.58rem" }}>
                  Placement
                </label>
                <div className="relative">
                  <select
                    name="placement"
                    value={fields.placement}
                    onChange={set}
                    required
                    style={{ ...fieldStyle, cursor: "pointer" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.45)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.18)")}
                  >
                    <option value="" disabled style={{ background: "#07050a" }}>
                      Select placement
                    </option>
                    {PLACEMENTS.map(p => (
                      <option key={p} value={p} style={{ background: "#07050a" }}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5"
                    style={{ color: "rgba(192,132,252,0.5)" }}
                  />
                </div>
              </div>

              {/* Size */}
              <div className="flex flex-col gap-2">
                <label className="section-label" style={{ color: "rgba(192,132,252,0.6)", fontSize: "0.58rem" }}>
                  Approximate Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SIZES.map(({ label, sub }) => {
                    const selected = fields.size === label
                    return (
                      <button
                        type="button"
                        key={label}
                        onClick={() => setFields(f => ({ ...f, size: label }))}
                        className="flex flex-col items-center gap-1 py-4 px-3 transition-all duration-200"
                        style={{
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                          background: selected ? "rgba(168,85,247,0.18)" : "rgba(168,85,247,0.05)",
                          border: `1px solid ${selected ? "rgba(168,85,247,0.55)" : "rgba(168,85,247,0.13)"}`,
                          boxShadow: selected
                            ? "0 0 20px rgba(124,58,237,0.15), inset 0 1px 0 rgba(255,255,255,0.1)"
                            : "none",
                        }}
                      >
                        <span
                          style={{
                            color: selected ? "#f0ebf8" : "rgba(240,235,248,0.5)",
                            fontFamily: "'EB Garamond', Georgia, serif",
                            fontSize: "0.9rem",
                          }}
                        >
                          {label}
                        </span>
                        <span
                          style={{
                            color: selected ? "rgba(192,132,252,0.8)" : "rgba(192,132,252,0.35)",
                            fontSize: "0.58rem",
                            fontFamily: "'EB Garamond', Georgia, serif",
                            fontStyle: "italic",
                            letterSpacing: "0.1em",
                          }}
                        >
                          {sub}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Error */}
              {error && (
                <p
                  className="italic"
                  style={{ color: "rgba(248,113,113,0.8)", fontFamily: "'EB Garamond', Georgia, serif", fontSize: "0.9rem" }}
                >
                  {error}
                </p>
              )}

              {/* Submit */}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={!ready}
                  whileHover={ready ? { scale: 1.02 } : {}}
                  whileTap={ready ? { scale: 0.98 } : {}}
                  className="w-full flex items-center justify-center gap-3 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300"
                  style={{
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    background: ready ? "rgba(124,58,237,0.5)" : "rgba(124,58,237,0.15)",
                    border: `1px solid ${ready ? "rgba(168,85,247,0.65)" : "rgba(168,85,247,0.18)"}`,
                    boxShadow: ready
                      ? "0 4px 32px rgba(124,58,237,0.35), inset 0 1px 0 rgba(255,255,255,0.18)"
                      : "none",
                    color: ready ? "#fff" : "rgba(240,235,248,0.28)",
                    fontFamily: "'EB Garamond', Georgia, serif",
                    cursor: ready ? "pointer" : "not-allowed",
                  }}
                >
                  {loading ? (
                    <span style={{ letterSpacing: "0.3em", opacity: 0.7 }}>Sending…</span>
                  ) : (
                    <>
                      <ArrowRight className="w-3.5 h-3.5" />
                      Send My Idea
                    </>
                  )}
                </motion.button>
                <p
                  className="mt-3 text-center italic"
                  style={{
                    color: "rgba(240,235,248,0.2)",
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: "0.78rem",
                  }}
                >
                  I reply to every inquiry within 24 hours
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
