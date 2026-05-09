"use client"

import { motion } from "framer-motion"
import { Instagram, MapPin } from "lucide-react"
import { LampContainer } from "@/components/ui/lamp"

const WHATSAPP_NUMBER = "972544409502"
const INSTAGRAM_HANDLE = "ocd_tattoo"

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hey! I'd like to book a tattoo session with OCD Tattoo. Here's my idea:"
)

function WhatsAppIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const glassBase: React.CSSProperties = {
  backdropFilter: "blur(28px) saturate(180%)",
  WebkitBackdropFilter: "blur(28px) saturate(180%)",
}

export default function BookingCard() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
  const instagramUrl = `https://instagram.com/${INSTAGRAM_HANDLE}`

  return (
    <section id="book" style={{ backgroundColor: "#07050a" }}>

      {/* Top ornamental rule — above the lamp */}
      <div className="mx-auto max-w-3xl px-6 pt-2">
        <div
          className="h-px"
          style={{
            background: "linear-gradient(to right, transparent, rgba(168,85,247,0.4), transparent)",
          }}
        />
      </div>

      {/* Lamp wraps the full CTA area */}
      <LampContainer className="rounded-none">
        <div className="w-full max-w-3xl px-4 sm:px-6 text-center">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="section-label mb-5"
            style={{ color: "rgba(192,132,252,0.7)" }}
          >
            Book Now
          </motion.p>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.08 }}
              className="headline-display"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#f0ebf8", fontStyle: "italic", fontWeight: 300, lineHeight: 0.9 }}
            >
              Ready to get
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
              className="headline-display"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#c084fc", fontStyle: "italic", fontWeight: 300, lineHeight: 0.9 }}
            >
              inked?
            </motion.h2>
          </div>

          {/* Ornamental divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.35 }}
            className="flex items-center justify-center gap-4 my-8 origin-center"
          >
            <span className="h-px w-12" style={{ background: "rgba(192,132,252,0.3)" }} />
            <span style={{ color: "rgba(192,132,252,0.45)", fontSize: "0.5rem", letterSpacing: "0.5em", fontFamily: "'EB Garamond', Georgia, serif" }}>
              ✦ OCD TATTOO ✦
            </span>
            <span className="h-px w-12" style={{ background: "rgba(192,132,252,0.3)" }} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.4 }}
            className="italic text-base md:text-lg leading-relaxed max-w-md mx-auto"
            style={{ color: "rgba(240,235,248,0.4)", fontFamily: "'EB Garamond', Georgia, serif" }}
          >
            Send your idea, reference images, and preferred placement.
            Every piece begins with a conversation.
          </motion.p>

          {/* ── Liquid glass CTA cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.52 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Instagram */}
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="group relative flex flex-col items-center gap-4 px-6 py-8 overflow-hidden transition-all duration-300"
              style={{
                ...glassBase,
                background: "rgba(168,85,247,0.08)",
                border: "1px solid rgba(168,85,247,0.22)",
                borderRadius: "1rem",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(0,0,0,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(168,85,247,0.15)"
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.48)"
                e.currentTarget.style.boxShadow = "0 12px 48px rgba(124,58,237,0.28), inset 0 1px 0 rgba(255,255,255,0.24), inset 0 -1px 0 rgba(0,0,0,0.1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(168,85,247,0.08)"
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.22)"
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(0,0,0,0.08)"
              }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 35%, transparent 60%)" }} />
              <div className="absolute top-0 inset-x-0 h-px pointer-events-none" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent)" }} />

              <div className="relative flex items-center justify-center w-14 h-14 transition-all duration-300"
                style={{ ...glassBase, background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.28)", borderRadius: "0.75rem", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.14)" }}>
                <Instagram className="w-6 h-6" style={{ color: "#c084fc" }} />
              </div>
              <div>
                <p className="text-sm tracking-[0.18em] uppercase font-semibold" style={{ color: "#f0ebf8", fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "normal" }}>
                  DM on Instagram
                </p>
                <p className="mt-1 section-label" style={{ color: "rgba(192,132,252,0.65)", fontSize: "0.62rem" }}>
                  @{INSTAGRAM_HANDLE}
                </p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="group relative flex flex-col items-center gap-4 px-6 py-8 overflow-hidden transition-all duration-300"
              style={{
                ...glassBase,
                background: "rgba(34,197,94,0.06)",
                border: "1px solid rgba(34,197,94,0.18)",
                borderRadius: "1rem",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(0,0,0,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(34,197,94,0.12)"
                e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)"
                e.currentTarget.style.boxShadow = "0 12px 48px rgba(22,163,74,0.2), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(34,197,94,0.06)"
                e.currentTarget.style.borderColor = "rgba(34,197,94,0.18)"
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(0,0,0,0.08)"
              }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 35%, transparent 60%)" }} />
              <div className="absolute top-0 inset-x-0 h-px pointer-events-none" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.28), transparent)" }} />

              <div className="relative flex items-center justify-center w-14 h-14 transition-all duration-300"
                style={{ ...glassBase, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.22)", borderRadius: "0.75rem", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)" }}>
                <WhatsAppIcon className="w-6 h-6" style={{ color: "#4ade80" } as React.CSSProperties} />
              </div>
              <div>
                <p className="text-sm tracking-[0.18em] uppercase font-semibold" style={{ color: "#f0ebf8", fontFamily: "'EB Garamond', Georgia, serif", fontStyle: "normal" }}>
                  Message on WhatsApp
                </p>
                <p className="mt-1 section-label" style={{ color: "rgba(74,222,128,0.6)", fontSize: "0.62rem" }}>
                  Reply within 24h
                </p>
              </div>
            </motion.a>
          </motion.div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex items-center justify-center gap-2"
          >
            <MapPin className="w-3 h-3 flex-shrink-0" style={{ color: "rgba(168,85,247,0.5)" }} />
            <p className="text-xs italic" style={{ color: "rgba(240,235,248,0.28)", fontFamily: "'EB Garamond', Georgia, serif", letterSpacing: "0.06em" }}>
              Kfar Saba, Israel · Sessions by appointment only
            </p>
          </motion.div>

        </div>
      </LampContainer>
    </section>
  )
}
