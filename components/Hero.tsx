"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero({ loaded }: { loaded: boolean }) {
  const bgRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock everything hidden before loader finishes — prevents flash
  useEffect(() => {
    gsap.set([eyebrowRef.current, line1Ref.current, line2Ref.current, subRef.current, ctaRef.current, scrollRef.current], { opacity: 0 });
    gsap.set([line1Ref.current, line2Ref.current], { y: 60 });
    gsap.set([eyebrowRef.current, subRef.current, ctaRef.current, scrollRef.current], { y: 20 });
    gsap.set(bgRef.current, { scale: 1.12 });
    gsap.set(overlayRef.current, { opacity: 0.95 });
  }, []);

  // Animate in only after loader calls onComplete
  useEffect(() => {
    if (!loaded) return;
    const tl = gsap.timeline({ delay: 0.1 });
    gsap.to(bgRef.current, { scale: 1, duration: 2.4, ease: "power3.out" });
    gsap.to(overlayRef.current, { opacity: 0.55, duration: 2, ease: "power2.out" });
    tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .to(line1Ref.current,  { opacity: 1, y: 0, duration: 1,   ease: "power3.out" }, "-=0.4")
      .to(line2Ref.current,  { opacity: 1, y: 0, duration: 1,   ease: "power3.out" }, "-=0.75")
      .to(subRef.current,    { opacity: 0.7, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .to(ctaRef.current,    { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .to(scrollRef.current, { opacity: 1, duration: 0.6 }, "-=0.2");
  }, [loaded]);

  // Subtle parallax on scroll
  useEffect(() => {
    const onScroll = () => gsap.set(bgRef.current, { y: window.scrollY * 0.35 });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

      {/* =====================================================================
          HERO BACKGROUND IMAGE
          - Place your image in: /public/images/hero-bg.jpg
          - Recommended size: 1920 × 1080 px minimum (full-screen landscape)
          - Aspect ratio: 16:9 or wider
          - File format: JPG (compressed) for fast load
          - Tips: use a dark, moody food/restaurant photo so text stays readable
          ===================================================================== */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      />

      {/* Dark gradient overlay — adjust rgba opacity if your photo is lighter/darker */}
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(26,22,16,0.6) 0%, rgba(26,22,16,0.3) 50%, rgba(26,22,16,0.75) 100%)" }}
      />

      {/* Hero text content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Small eyebrow label above the headline */}
        <p
          ref={eyebrowRef}
          className="text-[0.62rem] tracking-[0.45em] uppercase mb-8"
          style={{ color: "var(--color-gold)" }}
        >
          Est. 2018 · Fine Dining · Valletta
        </p>

        {/* Headline line 1 — "Hello," */}
        <div className="overflow-hidden mb-2">
          <div
            ref={line1Ref}
            className="text-[clamp(4rem,9vw,8rem)] font-bold leading-[0.9] tracking-wide"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}
          >
            Hello,
          </div>
        </div>

        {/* Headline line 2 — italic gold "Darling" */}
        <div className="overflow-hidden mb-8">
          <div
            ref={line2Ref}
            className="text-[clamp(4rem,9vw,8rem)] font-bold leading-[0.9] italic"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-gold-light)" }}
          >
            Gembudies,
          </div>
        </div>

        {/* Tagline / subtitle */}
        <p
          ref={subRef}
          className="text-[0.8rem] tracking-[0.1em] leading-[2] max-w-md mx-auto mb-12"
          style={{ color: "var(--color-cream)" }}
        >
          An epicurean blend of magnetic charisma, old-world charm, and relaxed elegance awaits you.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="flex gap-5 justify-center flex-wrap">
          <a
            href="/contact#reservations"
            className="text-[0.65rem] tracking-[0.22em] uppercase px-10 py-4 font-medium transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: "var(--color-gold)", color: "var(--color-dark)" }}
          >
            Reserve a Table
          </a>
          <a
            href="/about"
            className="text-[0.65rem] tracking-[0.22em] uppercase px-10 py-4 border transition-all duration-300 hover:border-[#b8965a] hover:text-[#b8965a]"
            style={{ borderColor: "rgba(245,240,232,0.35)", color: "var(--color-cream)" }}
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Animated scroll indicator at bottom */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[0.55rem] tracking-[0.35em] uppercase" style={{ color: "var(--color-gold)", opacity: 0.65 }}>
          Scroll
        </span>
        <div
          className="w-px h-14 origin-top"
          style={{ background: "linear-gradient(to bottom, var(--color-gold), transparent)", animation: "scrollPulse 2s ease-in-out infinite" }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%,100%{ opacity:0.2; transform: scaleY(0.4); }
          50%{ opacity:0.7; transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
