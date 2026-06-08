"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef  = useRef<HTMLElement>(null);
  const imgRef      = useRef<HTMLDivElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Image wipes in from bottom on scroll
    gsap.fromTo(imgRef.current,
      { clipPath: "inset(100% 0 0 0)" },
      { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "power4.inOut",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true } }
    );
    // Text content fades up on scroll
    const items = contentRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(items,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true } }
    );
  }, []);

  return (
    <section ref={sectionRef} className="grid md:grid-cols-2 min-h-[90vh]">

      {/* =====================================================================
          ABOUT SECTION — LEFT SIDE IMAGE
          - Place your image in: /public/images/about-interior.jpg
          - Recommended size: 900 × 1100 px (portrait orientation)
          - Aspect ratio: 3:4 (portrait)
          - Tips: interior shot of the restaurant — warm lighting, tables set
          ===================================================================== */}
      <div ref={imgRef} className="relative overflow-hidden min-h-[500px] md:min-h-0">
        <img
          src="/images/about-interior.jpg"
          alt="Roti Gembul interior"
          className="w-full h-full object-cover"
        />
        {/* Subtle gold border inset over the photo */}
        <div
          className="absolute inset-5 border pointer-events-none"
          style={{ borderColor: "rgba(184,150,90,0.3)" }}
        />
      </div>

      {/* Text panel — right side */}
      <div
        ref={contentRef}
        className="flex flex-col justify-center px-10 md:px-20 py-24"
        style={{ backgroundColor: "var(--color-charcoal)" }}
      >
        {/* Section label */}
        <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-6" style={{ color: "var(--color-gold)" }}>
          Our Story
        </p>

        {/* Main heading */}
        <h2
          data-reveal
          className="text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] mb-8"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}
        >
          A Portal to<br />Culinary Excellence
        </h2>

        {/* Body paragraphs — edit the text to match your restaurant's story */}
        <p data-reveal className="text-[0.8rem] leading-[2.1] mb-5" style={{ color: "var(--color-cream)", opacity: 0.65 }}>
          Located in the heart of Valletta alongside the majestic Grandmaster&apos;s Palace,
          Roti Gembul is your gateway to international dining crafted with intention, passion,
          and artistry.
        </p>
        <p data-reveal className="text-[0.8rem] leading-[2.1] mb-5" style={{ color: "var(--color-cream)", opacity: 0.65 }}>
          Our journey began in 2018 when Executive Chef Isabelle Moreau chose Valletta as
          the canvas for her most ambitious project — a restaurant that would honour the
          island&apos;s storied past while pushing the boundaries of contemporary fine dining.
        </p>

        {/* Stat row */}
        <div data-reveal className="flex gap-10 mt-6 pt-6 border-t" style={{ borderColor: "rgba(184,150,90,0.2)" }}>
          {[["2018", "Est."], ["3", "Michelin Stars"], ["600+", "Wine Labels"]].map(([num, label]) => (
            <div key={label}>
              <p className="text-2xl font-light mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}>{num}</p>
              <p className="text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: "var(--color-cream)", opacity: 0.5 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
