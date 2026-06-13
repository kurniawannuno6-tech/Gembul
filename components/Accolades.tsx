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
  const imgRef    = useRef<HTMLDivElement>(null);
  const textRef   = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image wipes in from right
      gsap.fromTo(imgRef.current, { clipPath: "inset(0 100% 0 0)" }, {
        clipPath: "inset(0 0% 0 0)", duration: 1.6, ease: "power4.inOut",
        scrollTrigger: { trigger: imgRef.current, start: "top 80%", once: true },
      });
      // Text items slide in from left
      const items = textRef.current?.querySelectorAll("[data-reveal]") ?? [];
      gsap.fromTo(items, { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 1, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: textRef.current, start: "top 75%", once: true },
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
    <section id="accolades" className="grid md:grid-cols-2 min-h-[70vh]">

      {/* Text panel — left */}
      <div
        ref={textRef}
        className="flex flex-col justify-center px-12 md:px-24 py-24 order-2 md:order-1"
        style={{ backgroundColor: "#fbb71d" }}
      >
        <div className="max-w-xl w-full">
          <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-6" style={{ color: "var(--color-charcoal)", opacity: 0.9 }}>
            Recognition
          </p>
          <h2
            data-reveal
            className="text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.2] mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
          >
            Our Accolades
          </h2>
          <p data-reveal className="text-[0.8rem] leading-[2.1] mb-5" style={{ color: "var(--color-charcoal)", opacity: 0.85 }}>
            Formulasi resep istimewa oleh pendiri kami menghasilkan roti gembong dengan kelembutan tiada tara dan cita rasa khas yang dicintai keluarga Indonesia.
          </p>
          <p data-reveal className="text-[0.8rem] leading-[2.1] mb-12" style={{ color: "var(--color-charcoal)", opacity: 0.85 }}>
            Berbagai apresiasi dan perkembangan gerai yang pesat di seluruh Indonesia menegaskan komitmen kami dalam menyajikan produk bakery berkualitas terbaik setiap hari.
          </p>

        {/* Award badge row */}
        <div ref={badgesRef} className="flex gap-5 flex-wrap">
          {awards.map((a) => (
            <div
              key={a.year}
              data-badge
              className="text-center border px-6 py-5 min-w-[100px] transition-all duration-300 hover:border-[#632816]"
              style={{ borderColor: "rgba(99,40,22,0.22)", color: "var(--color-charcoal)" }}
            >
              <span className="block text-[0.58rem] tracking-[0.25em] uppercase mb-1" style={{ color: "var(--color-charcoal)", opacity: 0.8 }}>
                {a.year}
              </span>
              <span className="text-[0.95rem] font-normal leading-[1.3] whitespace-pre-line" style={{ fontFamily: "var(--font-display)" }}>
                {a.name}
              </span>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* =====================================================================
          ACCOLADES SECTION — RIGHT SIDE IMAGE
          - Place your image in: /public/images/accolades-chef.jpg
          - Recommended size: 900 × 1100 px (portrait)
          - Aspect ratio: 3:4 (portrait)
          - Tips: chef at work, plating a dish, or a dramatic kitchen shot
          ===================================================================== */}
      <div ref={imgRef} className="relative overflow-hidden min-h-[400px] md:min-h-0 order-1 md:order-2">
        <img
          src="/images/accolades-chef.jpg"
          alt="Chef at work"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(44,40,32,0.3), transparent)" }} />
      </div>
    </section>
  );
}
