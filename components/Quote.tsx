"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const authorRef = useRef<HTMLParagraphElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
    });

    tl.from(glowRef.current, { opacity: 0, scale: 0.5, duration: 1.5, ease: "power3.out" })
      .from(quoteRef.current, { opacity: 0, y: 40, duration: 1.1, ease: "power3.out" }, "-=1")
      .from(authorRef.current, { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.5");
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 px-6 text-center overflow-hidden"
      style={{ backgroundColor: "var(--color-dark)" }}
    >
      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(184,150,90,0.07), transparent 70%)",
        }}
      />

      {/* Large decorative quote mark */}
      <span
        className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none leading-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "18rem",
          color: "var(--color-gold)",
          opacity: 0.05,
          lineHeight: 0.8,
        }}
      >
        &ldquo;
      </span>

      <blockquote
        ref={quoteRef}
        className="relative max-w-2xl mx-auto text-[clamp(1.4rem,3vw,2.3rem)] font-light italic leading-[1.55] mb-10"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)", opacity: 0.92 }}
      >
        One cannot think well, love well, sleep well, if one has not dined well.
      </blockquote>

      <div
        className="w-10 h-px mx-auto mb-6"
        style={{ backgroundColor: "var(--color-gold)", opacity: 0.5 }}
      />

      <p
        ref={authorRef}
        className="text-[0.62rem] tracking-[0.35em] uppercase"
        style={{ color: "var(--color-gold)" }}
      >
        Virginia Woolf
      </p>
    </section>
  );
}
