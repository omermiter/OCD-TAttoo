"use client"

import { motion } from "framer-motion"

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ backgroundColor: "#07050a" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div
          className="mb-20 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(168,85,247,0.35), transparent)" }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="section-label mb-5" style={{ color: "rgba(192,132,252,0.7)" }}>The Artist</p>

            <h2
              className="headline-display mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#f0ebf8" }}
            >
              Art is my<br />
              <span style={{ color: "#c084fc" }}>obsession.</span>
            </h2>

            <div
              className="space-y-5"
              style={{
                color: "rgba(240,235,248,0.5)",
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                maxWidth: "38ch",
              }}
            >
              <p>
                Independent artist based in Kfar Saba, with a background in illustration and a fixation
                on getting every detail right — hence the name.
              </p>
              <p>
                Every piece I make starts from scratch. No flash sheets, no copy-paste designs. Just a
                conversation about what you want to carry on your skin forever, and then the work of
                making it exactly right.
              </p>
              <p>
                My style sits at the intersection of fine line and ornamental work — precise, intentional,
                and built to last.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-10">
              {[
                { value: "6+", label: "Years tattooing" },
                { value: "400+", label: "Pieces created" },
                { value: "100%", label: "Custom designs" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p
                    className="headline-display"
                    style={{ fontSize: "2.2rem", color: "#c084fc", lineHeight: 1 }}
                  >
                    {value}
                  </p>
                  <p
                    className="section-label mt-2"
                    style={{ color: "rgba(192,132,252,0.5)", fontSize: "0.58rem" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Photo frame ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.12 }}
            className="relative"
          >
            <div
              className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden"
              style={{ border: "1px solid rgba(168,85,247,0.2)", backgroundColor: "#1a0533" }}
            >
              {/* Replace src with your own photo: /images/artist.jpg */}
              <img
                src={`${BASE}/images/work-1.jpg`}
                alt="Artist at work"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ filter: "brightness(0.85) saturate(0.9)" }}
              />

              {/* Subtle purple tint */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(7,5,10,0.5) 0%, rgba(124,58,237,0.08) 60%, transparent 100%)" }}
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-7 h-7" style={{ borderTop: "1.5px solid rgba(192,132,252,0.65)", borderLeft: "1.5px solid rgba(192,132,252,0.65)" }} />
              <div className="absolute top-0 right-0 w-7 h-7" style={{ borderTop: "1.5px solid rgba(192,132,252,0.65)", borderRight: "1.5px solid rgba(192,132,252,0.65)" }} />
              <div className="absolute bottom-0 left-0 w-7 h-7" style={{ borderBottom: "1.5px solid rgba(192,132,252,0.65)", borderLeft: "1.5px solid rgba(192,132,252,0.65)" }} />
              <div className="absolute bottom-0 right-0 w-7 h-7" style={{ borderBottom: "1.5px solid rgba(192,132,252,0.65)", borderRight: "1.5px solid rgba(192,132,252,0.65)" }} />
            </div>

            {/* Glow behind frame */}
            <div
              className="absolute -inset-6 -z-10 rounded-full blur-3xl"
              style={{ background: "rgba(124,58,237,0.09)" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
