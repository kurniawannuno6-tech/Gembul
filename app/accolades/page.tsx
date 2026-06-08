"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { year: "2024", name: "Michelin Star", body: "Michelin Guide", desc: "Awarded our first Michelin star in recognition of exceptional cuisine and consistent excellence across every service." },
  { year: "2023", name: "Best Fine Dining", body: "Malta Restaurant Awards", desc: "Voted the finest dining establishment in Malta for the second consecutive year by an independent judging panel." },
  { year: "2022", name: "Chef of the Year", body: "European Culinary Federation", desc: "Chef Isabelle Moreau recognised as one of Europe's most innovative culinary talents." },
  { year: "2022", name: "Wine List of the Year", body: "Wine Spectator", desc: "Our cellar of over 600 labels earned a Grand Award — the highest distinction in wine hospitality." },
  { year: "2021", name: "Top 50 Restaurants", body: "The World's 50 Best", desc: "Roti Gembul entered the prestigious World's 50 Best list at number 43 in our region." },
  { year: "2019", name: "Rising Star", body: "Condé Nast Traveller", desc: "Named a Rising Star restaurant to watch just one year after opening our doors in Valletta." },
];

const press = [
  { outlet: "The Financial Times", quote: "A dining experience of profound beauty — where every course tells a story and every sip deepens it." },
  { outlet: "Condé Nast Traveller", quote: "Malta's most compelling table. Roti Gembul is the kind of restaurant that justifies a trip across continents." },
  { outlet: "Food & Wine Magazine", quote: "Chef Moreau's cooking is both daring and deeply comforting — a rare combination that only the truly gifted achieve." },
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
      <div className="py-20 px-14 md:px-20 lg:px-32 max-w-3xl" style={{ backgroundColor: "var(--color-charcoal)" }}>
        <p className="text-[0.9rem] leading-[2.2] font-light" style={{ color: "var(--color-cream)", opacity: 0.7 }}>
          Year after year, prestigious institutions and seasoned critics affirm what our guests already know — that
          Roti Gembul represents the apex of fine dining in Malta and beyond. We are humbled and honoured by each
          recognition, and they deepen our resolve to pursue perfection in every detail.
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
      <section ref={pressRef} className="py-24 px-14 md:px-20 lg:px-32" style={{ backgroundColor: "var(--color-charcoal)" }}>
        <p className="text-[0.6rem] tracking-[0.45em] uppercase mb-16" style={{ color: "var(--color-gold)" }}>In the Press</p>
        <div className="grid md:grid-cols-3 gap-10">
          {press.map((p) => (
            <div key={p.outlet} data-press className="border-t pt-8" style={{ borderColor: "rgba(184,150,90,0.25)" }}>
              <p className="text-[1rem] leading-[1.9] font-light mb-6 italic"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)", opacity: 0.85 }}>
                &ldquo;{p.quote}&rdquo;
              </p>
              <span className="text-[0.6rem] tracking-[0.3em] uppercase" style={{ color: "var(--color-gold)" }}>
                — {p.outlet}
              </span>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
