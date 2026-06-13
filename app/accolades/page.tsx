"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { year: "2024", name: "Roti Gembong Terfavorit", body: "Indonesia Culinary Award", desc: "Dinobatkan sebagai brand roti gembong dengan cita rasa terfavorit pilihan konsumen di Indonesia." },
  { year: "2023", name: "Pelopor Roti Gembong No. 1", body: "Jawa Tengah Culinary Award", desc: "Penghargaan atas dedikasi mempopulerkan kembali kuliner tradisional roti gembong dengan kualitas modern." },
  { year: "2023", name: "Merchant Paling Populer", body: "GrabFood & GoFood Awards", desc: "Terpilih sebagai salah satu merchant roti & kue dengan pesanan terbanyak di platform pesan antar online." },
  { year: "2022", name: "Rising Star Franchise", body: "Indonesia Franchise Opportunity", desc: "Penghargaan atas pertumbuhan kemitraan tercepat dengan membuka lebih dari 100 gerai baru dalam setahun." },
  { year: "2021", name: "UMKM Kuliner Kreatif", body: "Kemenparekraf RI", desc: "Diakui sebagai salah satu UMKM kuliner kreatif yang sukses mengangkat jajanan lokal ke tingkat nasional." },
  { year: "2021", name: "Best New Bakery Concept", body: "Magelang Culinary Festival", desc: "Penghargaan atas inovasi konsep dapur terbuka (Open Kitchen Show Bakery) pertama di Magelang." },
];

const press = [
  { outlet: "Tribun News", quote: "Inovasi rasa Roti Gembul sukses membawa roti gembong tradisional naik kelas menjadi camilan kekinian terfavorit." },
  { outlet: "Detik Food", quote: "Konsep open kitchen dan roti yang dipanggang segar setiap hari membuat Roti Gembul memiliki daya tarik tersendiri dengan kelembutan tiada tara." },
  { outlet: "Kompas Culinary", quote: "Lebih dari sekadar roti, Roti Gembul menghadirkan nostalgia roti gembong dengan tekstur modern yang sangat lembut dan isian melimpah." },
];

export default function AccoladesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const pressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroItems = heroRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(heroItems, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.4 });

    const awardCards = awardsRef.current?.querySelectorAll("[data-card]") ?? [];
    gsap.fromTo(awardCards, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: awardsRef.current, start: "top 80%", once: true } });

    const pressItems = pressRef.current?.querySelectorAll("[data-press]") ?? [];
    gsap.fromTo(pressItems, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: pressRef.current, start: "top 80%", once: true } });
  }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[440px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          /* ACCOLADES HERO — /public/images/accolades-hero.jpg — 1920×1080 px, elegant dining room or award ceremony */
          style={{ backgroundImage: "url('/images/accolades-hero.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,22,16,0.2) 0%, rgba(26,22,16,0.9) 100%)" }} />
        <div ref={heroRef} className="relative z-10 px-14 md:px-20 lg:px-32 pb-16">
          <p data-reveal className="text-[0.6rem] tracking-[0.45em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
            Recognition
          </p>
          <h1 data-reveal className="text-[clamp(3rem,7vw,6rem)] font-light leading-[1]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            Our Accolades
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="py-20 px-14 md:px-20 lg:px-32 max-w-3xl" style={{ backgroundColor: "#fbb71d" }}>
        <p className="text-[0.9rem] leading-[2.2] font-light" style={{ color: "var(--color-charcoal)", opacity: 0.85 }}>
          Dari tahun ke tahun, kepuasan para Gembudies dan apresiasi dari berbagai pihak menjadi bukti komitmen kami.
          Roti Gembul terus berupaya menghadirkan kelembutan roti gembong terbaik dengan standar higienis tinggi di setiap gerai.
          Apresiasi ini menjadi motivasi bagi kami untuk terus berinovasi tanpa mengurangi cita rasa tradisional.
        </p>
      </div>

      {/* Awards grid */}
      <section ref={awardsRef} className="py-24 px-14 md:px-20 lg:px-32" style={{ backgroundColor: "var(--color-dark)" }}>
        <p className="text-[0.6rem] tracking-[0.45em] uppercase mb-16" style={{ color: "var(--color-gold)" }}>Awards & Honours</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(184,150,90,0.12)" }}>
          {awards.map((a) => (
            <div key={a.name + a.year} data-card
              className="p-10 transition-colors duration-300 hover:bg-[rgba(184,150,90,0.04)]"
              style={{ backgroundColor: "var(--color-dark)" }}>
              <span className="block text-[0.58rem] tracking-[0.35em] uppercase mb-3" style={{ color: "var(--color-gold)" }}>
                {a.year} · {a.body}
              </span>
              <h3 className="text-[1.6rem] font-light mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
                {a.name}
              </h3>
              <p className="text-[0.73rem] leading-[1.9]" style={{ color: "var(--color-cream)", opacity: 0.5 }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Press */}
      <section ref={pressRef} className="py-24 px-14 md:px-20 lg:px-32" style={{ backgroundColor: "#fbb71d" }}>
        <p className="text-[0.6rem] tracking-[0.45em] uppercase mb-16" style={{ color: "var(--color-charcoal)", opacity: 0.9 }}>In the Press</p>
        <div className="grid md:grid-cols-3 gap-10">
          {press.map((p) => (
            <div key={p.outlet} data-press className="border-t pt-8" style={{ borderColor: "rgba(99,40,22,0.2)" }}>
              <p className="text-[1rem] leading-[1.9] font-light mb-6 italic"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)", opacity: 0.85 }}>
                &ldquo;{p.quote}&rdquo;
              </p>
              <span className="text-[0.6rem] tracking-[0.3em] uppercase" style={{ color: "var(--color-charcoal)", opacity: 0.9 }}>
                — {p.outlet}
              </span>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
