"use client"

import React from "react"
import { Instagram, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"

const INSTAGRAM = "ocd_tattoo"
const WHATSAPP_NUMBER = "972544409502"

function WhatsAppIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const studioLinks = [
  { text: "The Work", href: "#work" },
  { text: "Book a Session", href: "#book" },
]

const styleLinks = [
  { text: "Fine Line" },
  { text: "Blackwork" },
  { text: "Ornamental" },
  { text: "Custom Design" },
]

const contactItems = [
  {
    icon: <Instagram className="size-4 shrink-0" style={{ color: "#c084fc" }} />,
    label: `@${INSTAGRAM}`,
    href: `https://instagram.com/${INSTAGRAM}`,
  },
  {
    icon: <WhatsAppIcon className="size-4 shrink-0" style={{ color: "#4ade80" } as React.CSSProperties} />,
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: <MapPin className="size-4 shrink-0 mt-0.5" style={{ color: "#c084fc" }} />,
    label: "Kfar Saba, Israel",
    href: null,
    isAddress: true,
  },
]

export default function FooterColumn() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#07050a" }}
    >
      {/* Glow blobs */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div
          className="absolute -top-24 left-1/4 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "rgba(124,58,237,0.12)" }}
        />
        <div
          className="absolute right-1/4 -bottom-20 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "rgba(124,58,237,0.1)" }}
        />
      </div>

      {/* Top rule */}
      <div
        className="mx-auto max-w-7xl px-6 lg:px-10"
      >
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(168,85,247,0.35), transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

          {/* ── Brand column ── */}
          <div>
            <Link href="/" className="flex items-center gap-2 justify-center sm:justify-start group">
              <span
                className="font-display italic leading-none transition-colors duration-300"
                style={{ fontSize: "1.55rem", color: "#f0ebf8", fontWeight: 400 }}
              >
                OCD
              </span>
              <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:bg-purple-400 transition-colors duration-300" />
              <span
                className="font-display italic leading-none transition-colors duration-300"
                style={{ fontSize: "1.55rem", color: "#c084fc", fontWeight: 400 }}
              >
                Tattoo
              </span>
            </Link>

            <p
              className="mt-5 max-w-xs text-center text-sm leading-relaxed sm:text-left italic"
              style={{
                color: "rgba(240,235,248,0.35)",
                fontFamily: "'EB Garamond', Georgia, serif",
              }}
            >
              Independent tattoo artist based in Kfar Saba, Israel.
              Custom designs from scratch — every piece built for your skin,
              your story.
            </p>

            <ul className="mt-7 flex justify-center gap-5 sm:justify-start">
              <li>
                <Link
                  href={`https://instagram.com/${INSTAGRAM}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="size-5" style={{ color: "#c084fc" }} />
                </Link>
              </li>
              <li>
                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  <span className="sr-only">WhatsApp</span>
                  <WhatsAppIcon className="size-5" style={{ color: "#4ade80" } as React.CSSProperties} />
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Link columns ── */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">

            {/* Studio */}
            <div className="text-center sm:text-left">
              <p
                className="section-label"
                style={{ color: "rgba(192,132,252,0.65)", fontSize: "0.6rem" }}
              >
                Studio
              </p>
              <ul className="mt-6 space-y-3">
                {studioLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className="text-sm italic transition-opacity hover:opacity-80"
                      style={{
                        color: "rgba(240,235,248,0.42)",
                        fontFamily: "'EB Garamond', Georgia, serif",
                      }}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Styles */}
            <div className="text-center sm:text-left">
              <p
                className="section-label"
                style={{ color: "rgba(192,132,252,0.65)", fontSize: "0.6rem" }}
              >
                Styles
              </p>
              <ul className="mt-6 space-y-3">
                {styleLinks.map(({ text }) => (
                  <li key={text}>
                    <a
                      href="#work"
                      className="text-sm italic transition-opacity hover:opacity-80"
                      style={{
                        color: "rgba(240,235,248,0.42)",
                        fontFamily: "'EB Garamond', Georgia, serif",
                      }}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left col-span-2 sm:col-span-1">
              <p
                className="section-label"
                style={{ color: "rgba(192,132,252,0.65)", fontSize: "0.6rem" }}
              >
                Contact
              </p>
              <ul className="mt-6 space-y-4">
                {contactItems.map(({ icon, label, href, isAddress }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2.5 sm:justify-start transition-opacity hover:opacity-75"
                      >
                        {icon}
                        <span
                          className="text-sm italic"
                          style={{
                            color: "rgba(240,235,248,0.42)",
                            fontFamily: "'EB Garamond', Georgia, serif",
                          }}
                        >
                          {label}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-start justify-center gap-2.5 sm:justify-start">
                        {icon}
                        {isAddress ? (
                          <address
                            className="text-sm not-italic italic"
                            style={{
                              color: "rgba(240,235,248,0.42)",
                              fontFamily: "'EB Garamond', Georgia, serif",
                            }}
                          >
                            {label}
                          </address>
                        ) : (
                          <span
                            className="text-sm italic"
                            style={{
                              color: "rgba(240,235,248,0.42)",
                              fontFamily: "'EB Garamond', Georgia, serif",
                            }}
                          >
                            {label}
                          </span>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-14 pt-6"
          style={{ borderTop: "1px solid rgba(168,85,247,0.08)" }}
        >
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <p
              className="text-xs italic"
              style={{
                color: "rgba(240,235,248,0.18)",
                fontFamily: "'EB Garamond', Georgia, serif",
              }}
            >
              All rights reserved.
            </p>
            <p
              className="text-xs italic"
              style={{
                color: "rgba(240,235,248,0.18)",
                fontFamily: "'EB Garamond', Georgia, serif",
              }}
            >
              © {year} OCD Tattoo · Independent Artist · Kfar Saba, Israel
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
