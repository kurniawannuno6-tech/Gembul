"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { year: "2024", name: "Roti Gembong\nTerfavorit" },
  { year: "2023", name: "Pelopor No. 1\nIndonesia" },
  { year: "2022", name: "Rising Star\nFranchise" },
];

export default function Accolades() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text items slide in
      const items = contentRef.current?.querySelectorAll("[data-reveal]") ?? [];
      gsap.fromTo(items, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });
      // Award badges pop in with a slight bounce
      const badges = badgesRef.current?.querySelectorAll("[data-badge]") ?? [];
      gsap.fromTo(badges, { opacity: 0, scale: 0.85, y: 20 }, {
        opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "back.out(1.6)",
        scrollTrigger: { trigger: badgesRef.current, start: "top 85%", once: true },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="accolades"
      ref={sectionRef}
      className="relative min-h-[75vh] flex items-center justify-center py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/accolades-bg.png')" }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(26, 22, 16, 0.7)",
        }}
      />

      {/* Text panel */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-xl w-full mx-auto"
      >
        <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-6" style={{ color: "var(--color-gold)", opacity: 0.9 }}>
          Recognition
        </p>
        <h2
          data-reveal
          className="text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] mb-8"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}
        >
          Our Accolades
        </h2>
        <p data-reveal className="text-[0.8rem] leading-[2.1] mb-5" style={{ color: "var(--color-cream)", opacity: 0.85 }}>
          Formulasi resep istimewa oleh pendiri kami menghasilkan roti gembong dengan kelembutan tiada tara dan cita rasa khas yang dicintai keluarga Indonesia.
        </p>
        <p data-reveal className="text-[0.8rem] leading-[2.1] mb-12" style={{ color: "var(--color-cream)", opacity: 0.85 }}>
          Berbagai apresiasi dan perkembangan gerai yang pesat di seluruh Indonesia menegaskan komitmen kami dalam menyajikan produk bakery berkualitas terbaik setiap hari.
        </p>

        {/* Award badge row */}
        <div ref={badgesRef} className="flex gap-5 flex-wrap">
          {awards.map((a) => (
            <div
              key={a.year}
              data-badge
              className="text-center border px-6 py-5 min-w-[100px] transition-all duration-300 hover:border-[var(--color-gold)]"
              style={{ borderColor: "rgba(184,150,90,0.3)", color: "var(--color-cream)" }}
            >
              <span className="block text-[0.58rem] tracking-[0.25em] uppercase mb-1" style={{ color: "var(--color-gold)", opacity: 0.8 }}>
                {a.year}
              </span>
              <span className="text-[0.95rem] font-normal leading-[1.3] whitespace-pre-line" style={{ fontFamily: "var(--font-display)" }}>
                {a.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
