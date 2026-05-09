"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const LINKS = [
  { label: "Work", href: "#gallery" },
  { label: "About", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com/ocdtattoo",
    icon: Instagram,
  },
  {
    label: "Email",
    href: "mailto:ocdtattoo@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* CTA band */}
      <div className="relative border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="section-label mb-3">Ready to commit?</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] text-foreground">
              LET'S INK
              <br />
              <span className="text-primary">YOUR STORY</span>
            </h2>
          </div>
          <motion.a
            href="mailto:ocdtattoo@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 inline-flex items-center px-10 py-5 bg-primary text-primary-foreground text-sm font-semibold tracking-[0.2em] uppercase hover:bg-purple-500 transition-colors"
          >
            Start a Conversation
          </motion.a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <a href="#" className="flex items-baseline gap-1.5">
            <span className="font-display text-3xl tracking-wider text-primary">OCD</span>
            <span className="font-display text-3xl tracking-[0.15em] text-foreground/40">TATTOO</span>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Independent tattoo artist based in Kfar Saba, Israel. Specialising in custom designs, fine line work, and permanent artistry.
          </p>
          <div className="flex gap-4 mt-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                aria-label={label}
                className="size-9 flex items-center justify-center border border-white/[0.08] text-foreground/40 hover:border-primary/30 hover:text-primary transition-colors duration-200"
              >
                <Icon className="size-4" strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">
            Navigate
          </p>
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-foreground/50 hover:text-foreground transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">
            Contact
          </p>
          <a
            href="mailto:ocdtattoo@gmail.com"
            className="flex items-center gap-2.5 text-sm text-foreground/50 hover:text-foreground transition-colors"
          >
            <Mail className="size-3.5 text-primary flex-shrink-0" />
            ocdtattoo@gmail.com
          </a>
          <a
            href="tel:+972501234567"
            className="flex items-center gap-2.5 text-sm text-foreground/50 hover:text-foreground transition-colors"
          >
            <Phone className="size-3.5 text-primary flex-shrink-0" />
            +972 50 123 4567
          </a>
          <span className="flex items-start gap-2.5 text-sm text-foreground/50">
            <MapPin className="size-3.5 text-primary flex-shrink-0 mt-0.5" />
            Kfar Saba, Israel
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04] mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} OCD Tattoo. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/30 tracking-wider">
          Kfar Saba · Israel
        </p>
      </div>
    </footer>
  );
}
