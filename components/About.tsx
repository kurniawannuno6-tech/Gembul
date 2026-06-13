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
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="grid md:grid-cols-[30%_70%] min-h-[90vh]">

      {/* =====================================================================
          ABOUT SECTION — LEFT SIDE IMAGE
          - Place your image in: /public/images/about-interior.jpg
          - Recommended size: 900 × 1100 px (portrait orientation)
          - Aspect ratio: 3:4 (portrait)
          - Tips: interior shot of the restaurant — warm lighting, tables set
          ===================================================================== */}
      <div ref={imgRef} className="relative overflow-hidden min-h-[500px] md:min-h-0">
        <img
          src="/images/about-interior.webp"
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
        className="flex flex-col justify-center py-24"
        style={{
          backgroundColor: "#fbb71d",
          paddingLeft: "clamp(2rem, 6vw, 7rem)",
          paddingRight: "clamp(2rem, 5vw, 6rem)"
        }}
      >
        <div className="max-w-xl w-full">
          {/* Section label */}
          <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-6" style={{ color: "var(--color-charcoal)", opacity: 0.9 }}>
            Our Story
          </p>

          {/* Main heading */}
          <h2
            data-reveal
            className="text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
          >
            Roti<br />Gembul
          </h2>

          {/* Body paragraphs — edit the text to match your restaurant's story */}
          <p data-reveal className="text-[0.8rem] leading-[2.1] mb-5" style={{ color: "var(--color-charcoal)", opacity: 0.85 }}>
            Roti Gembong Gembul merpukan salah satu produk camilan lokal indonesia yang menyajikan kualitas rasa yang berbeda dengan brand roti gembong yang lain, karakteristik Roti Gembong Gembul yang sangat lembut dan variasi rasanya yang sangat banyak, menjadikan Roti Gembong Gembul salah satu makanan favorit bagi masyarakat Indonesia.
            Gerai Roti Gembong Gembul mengusung konsep Open Kitchen atau Show Bakery Kitchen yang memungkinkan para pelanggan setia Roti Gembong Gembul dapat melihat proses pembuatan Roti secara langsung.
          </p>
          <p data-reveal className="text-[0.8rem] leading-[2.1] mb-5" style={{ color: "var(--color-charcoal)", opacity: 0.85 }}>
            Juniar Jais Subiyatto atau lebih terkenal dengan panggilan Yuyun bersama istrinya yaitu Nadya Nafisa Fathin atau akrab dipanggil Nadya adalah sepasang suami istri yang membuat resep Roti Gembong Gembul ini. Mereka saat ini telah berhasil membuka Lebih 200 gerai roti gembong gembul di seluruh Indonesia.
          </p>

          {/* Stat row */}
          <div data-reveal className="flex gap-10 mt-6 pt-6 border-t" style={{ borderColor: "rgba(99,40,22,0.18)" }}>
            {[["2021", "Est."], ["200+", "Outlets"]].map(([num, label]) => (
              <div key={label}>
                <p className="text-2xl font-light mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>{num}</p>
                <p className="text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: "var(--color-charcoal)", opacity: 0.7 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
