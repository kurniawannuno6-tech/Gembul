"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef  = useRef<HTMLElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text content fades up on scroll
      const items = contentRef.current?.querySelectorAll("[data-reveal]") ?? [];
      gsap.fromTo(items,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-interior-bg.png')" }}
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
        {/* Section label */}
        <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-6" style={{ color: "var(--color-gold)", opacity: 0.9 }}>
          Our Story
        </p>

        {/* Main heading */}
        <h2
          data-reveal
          className="text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] mb-8"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}
        >
          Roti<br />Gembul
        </h2>

        {/* Body paragraphs */}
        <p data-reveal className="text-[0.8rem] leading-[2.1] mb-5" style={{ color: "var(--color-cream)", opacity: 0.85 }}>
          Roti Gembong Gembul merpukan salah satu produk camilan lokal indonesia yang menyajikan kualitas rasa yang berbeda dengan brand roti gembong yang lain, karakteristik Roti Gembong Gembul yang sangat lembut dan variasi rasanya yang sangat banyak, menjadikan Roti Gembong Gembul salah satu makanan favorit bagi masyarakat Indonesia.
          Gerai Roti Gembong Gembul mengusung konsep Open Kitchen atau Show Bakery Kitchen yang memungkinkan para pelanggan setia Roti Gembong Gembul dapat melihat proses pembuatan Roti secara langsung.
        </p>
        <p data-reveal className="text-[0.8rem] leading-[2.1] mb-5" style={{ color: "var(--color-cream)", opacity: 0.85 }}>
          Juniar Jais Subiyatto atau lebih terkenal dengan panggilan Yuyun bersama istrinya yaitu Nadya Nafisa Fathin atau akrab dipanggil Nadya adalah sepasang suami istri yang membuat resep Roti Gembong Gembul ini. Mereka saat ini telah berhasil membuka Lebih 200 gerai roti gembong gembul di seluruh Indonesia.
        </p>

        {/* Stat row */}
        <div data-reveal className="flex gap-10 mt-6 pt-6 border-t" style={{ borderColor: "rgba(184,150,90,0.2)" }}>
          {[["2021", "Est."], ["200+", "Outlets"]].map(([num, label]) => (
            <div key={label}>
              <p className="text-2xl font-light mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>{num}</p>
              <p className="text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: "var(--color-gold)", opacity: 0.8 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
