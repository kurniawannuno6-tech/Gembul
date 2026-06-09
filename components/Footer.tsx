"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Outlet", href: "/outlet" },
  { label: "Partnership", href: "/partnership" },
  { label: "Career", href: "/career" },
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
          <Link
            href="/"
            className="block mb-5 transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src="/images/LogoGembulPutih.png"
              alt="Roti Gembul Logo"
              className="h-10 w-auto object-contain select-none pointer-events-none"
            />
          </Link>
          <p className="text-[0.73rem] leading-[1.95] max-w-[220px] font-bold" style={{ color: "var(--color-cream)", opacity: 0.85 }}>
            An epicurean blend of magnetic charisma, old world charm and relaxed
            elegance in Magelang.
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
                  className="text-[0.73rem] tracking-[0.04em] font-bold transition-opacity duration-300 hover:opacity-100"
                  style={{ color: "var(--color-cream)", opacity: 0.85 }}
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
          <address className="not-italic text-[0.73rem] leading-[2.1] font-bold" style={{ color: "var(--color-cream)", opacity: 0.85 }}>
            Roti Gembul<br />
            Jl. Soekarno Hatta, Drojogan 05/03<br />
            Bumirejo, Mungkid, Magelang<br />
            Jawa Tengah
          </address>
        </div>

        {/* Hours */}
        <div>
          <h5 className="text-[0.58rem] tracking-[0.3em] uppercase mb-5" style={{ color: "var(--color-gold)" }}>
            Operational Outlet
          </h5>
          <p className="text-[0.73rem] leading-[2.1] font-bold" style={{ color: "var(--color-cream)", opacity: 0.85 }}>
            Sunday - Monday<br />
            10.00 - 22.00
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
