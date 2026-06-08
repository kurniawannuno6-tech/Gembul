"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "Menus", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Accolades", href: "/accolades" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reservations", href: "/contact#reservations" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(footerRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: footerRef.current, start: "top 90%", once: true },
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="px-10 md:px-20 pt-20 pb-10 border-t"
      style={{ backgroundColor: "var(--color-ink)", borderColor: "rgba(184,150,90,0.18)" }}
    >
      <div className="grid md:grid-cols-4 gap-14 mb-16">
        {/* Brand */}
        <div className="md:col-span-1">
          <span
            className="block text-2xl font-light tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
          >
            Roti Gembul
          </span>
          <p className="text-[0.73rem] leading-[1.95] max-w-[220px]" style={{ color: "var(--color-cream)", opacity: 0.45 }}>
            An epicurean blend of magnetic charisma, old world charm and relaxed
            elegance in the heart of Valletta.
          </p>
          <div className="flex gap-3 mt-7">
            {["Fb", "Ig", "Ta"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 border flex items-center justify-center text-[0.6rem] tracking-wide transition-all duration-300 hover:border-[#b8965a] hover:text-[#b8965a]"
                style={{ borderColor: "rgba(184,150,90,0.25)", color: "var(--color-warm-gray)" }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="text-[0.58rem] tracking-[0.3em] uppercase mb-5" style={{ color: "var(--color-gold)" }}>
            Navigate
          </h5>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[0.73rem] tracking-[0.04em] transition-opacity duration-300 hover:opacity-100"
                  style={{ color: "var(--color-cream)", opacity: 0.45 }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div>
          <h5 className="text-[0.58rem] tracking-[0.3em] uppercase mb-5" style={{ color: "var(--color-gold)" }}>
            Location
          </h5>
          <address className="not-italic text-[0.73rem] leading-[2.1]" style={{ color: "var(--color-cream)", opacity: 0.45 }}>
            Roti Gembul<br />
            St. Georges Square<br />
            Valletta, VLT 1190<br />
            Malta
          </address>
        </div>

        {/* Hours */}
        <div>
          <h5 className="text-[0.58rem] tracking-[0.3em] uppercase mb-5" style={{ color: "var(--color-gold)" }}>
            Hours
          </h5>
          <p className="text-[0.73rem] leading-[2.1]" style={{ color: "var(--color-cream)", opacity: 0.45 }}>
            Lunch<br />
            Mon – Sun, 12:30 pm<br /><br />
            Dinner<br />
            Mon – Sun, 6:30 pm
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t"
        style={{ borderColor: "rgba(184,150,90,0.15)" }}
      >
        <p className="text-[0.63rem] tracking-[0.07em]" style={{ color: "var(--color-cream)", opacity: 0.3 }}>
          © 2024 Roti Gembul. All rights reserved.
        </p>
        <a
          href="#"
          className="text-[0.63rem] tracking-[0.07em] transition-opacity duration-300 hover:opacity-80"
          style={{ color: "var(--color-cream)", opacity: 0.3 }}
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
