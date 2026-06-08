"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];
const navLinksRight = [
  { label: "Outlet", href: "/outlet" },
  { label: "Partnership", href: "/partnership" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Nav({ visible }: { visible: boolean }) {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }
  }, [visible]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "text-[0.75rem] tracking-[0.2em] uppercase transition-all duration-300 relative group"
  ;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] h-20 grid items-center transition-all duration-500 ${
          scrolled ? "backdrop-blur-md border-b" : ""
        }`}
        style={{
          gridTemplateColumns: "1fr auto 1fr",
          padding: "0 clamp(2.5rem, 6vw, 6rem)",
          backgroundColor: scrolled ? "rgba(26,22,16,0.92)" : "transparent",
          borderColor: "rgba(184,150,90,0.2)",
          opacity: 0,
        }}
      >
        {/* Left links */}
        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className={linkClass} style={{ color: "var(--color-cream)", opacity: 0.8 }}>
                {l.label}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: "var(--color-gold)" }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <Link
          href="/"
          className="transition-opacity duration-300 hover:opacity-70 mx-12 flex items-center justify-center"
        >
          <img
            src="/images/LogoGembulPutih.png"
            alt="Roti Gembul Logo"
            className="h-10 md:h-12 w-auto object-contain select-none pointer-events-none"
          />
        </Link>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-10 justify-end">
          <ul className="flex gap-10 list-none">
            {navLinksRight.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={linkClass} style={{ color: "var(--color-cream)", opacity: 0.8 }}>
                  {l.label}
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ backgroundColor: "var(--color-gold)" }}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact#reservations"
            className="text-[0.75rem] tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-300 hover:text-[#1a1610] hover:bg-[#b8965a]"
            style={{
              borderColor: "var(--color-gold)",
              color: "var(--color-gold)",
            }}
          >
            Reserve
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 justify-self-end col-start-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            style={{ backgroundColor: "var(--color-gold)" }}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: "var(--color-gold)" }}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            style={{ backgroundColor: "var(--color-gold)" }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[99] flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(15,13,9,0.97)" }}
      >
        {[...navLinks, ...navLinksRight].map((l) => (
          <Link
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-light tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact#reservations"
          onClick={() => setMenuOpen(false)}
          className="mt-4 text-sm tracking-[0.25em] uppercase px-10 py-4 border"
          style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
        >
          Reserve a Table
        </Link>
      </div>
    </>
  );
}
