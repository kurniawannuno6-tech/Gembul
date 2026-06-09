"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface PromoItem {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  price: string;
  oldPrice?: string;
  time: string;
  image: string;
  code: string;
  terms: string[];
}

const promos: PromoItem[] = [
  {
    id: "morning",
    tag: "Morning Special",
    tagColor: "var(--color-gold)",
    title: "Gembul Signature Coffee Combo",
    desc: "Start your day right. Pair any premium Fruit or Sweet bun of your choice with our ice-cold Gembul Signature Coffee for a perfect morning boost.",
    price: "Rp 29k",
    oldPrice: "Rp 35k",
    time: "Daily 7:00 AM – 11:00 AM",
    image: "/images/menu-drinks.png",
    code: "GEMBULCOFFEE",
    terms: [
      "Valid for dine-in and takeaway",
      "Applicable for any Sweet or Fruit bun variant",
      "Cannot be combined with other ongoing promotions"
    ]
  },
  {
    id: "afternoon",
    tag: "Buy 3 Get 1 Free",
    tagColor: "var(--color-dark)",
    title: "Tea Time Sweet Delights",
    desc: "Make your afternoon break sweeter. Purchase any three sweet or fruit buns, and receive a classic, pillow-soft Vanilla Glaze bun absolutely free.",
    price: "Buy 3 Get 1",
    time: "Daily 2:00 PM – 5:00 PM",
    image: "/images/menu-sweet-2.png",
    code: "GEMBULTEATIME",
    terms: [
      "Free item is fixed to the Classic Vanilla Glaze bun",
      "Valid at all Gembul outlets",
      "Available for in-store purchases only"
    ]
  },
  {
    id: "weekend",
    tag: "Weekend Special",
    tagColor: "var(--color-charcoal)",
    title: "Family Sharing Box of 6",
    desc: "Weekend gatherings made perfect. Curate your custom selection of six of your favorite fluffy buns and get a premium signature sharing box.",
    price: "Rp 99k",
    oldPrice: "Rp 114k",
    time: "Friday – Sunday (All Day)",
    image: "/images/menu-crunchy.png",
    code: "GEMBULSHARING",
    terms: [
      "Choose any combination of six buns (excluding premium savory specials)",
      "Includes Gembul signature reusable gift box",
      "Available for delivery, takeaway, and dine-in"
    ]
  }
];

export default function Promo() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedPromo, setSelectedPromo] = useState<PromoItem | null>(null);

  useEffect(() => {
    // Reveal header
    const headerItems = headerRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(
      headerItems,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    // Reveal cards
    const cards = cardsRef.current?.querySelectorAll("[data-card]") ?? [];
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedPromo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPromo]);

  return (
    <section
      id="promo"
      className="relative py-28 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: "var(--color-cream)", color: "var(--color-dark)" }}
    >
      {/* Decorative Background Elements */}
      <div
        className="absolute top-10 left-10 w-72 h-72 rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(251,183,29,0.15), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(235,92,39,0.1), transparent 70%)",
        }}
      />

      <div ref={headerRef} className="text-center mb-16 max-w-2xl mx-auto">
        <p
          data-reveal
          className="text-[0.6rem] tracking-[0.4em] uppercase mb-4"
          style={{ color: "var(--color-gold)" }}
        >
          Special Campaigns
        </p>
        <h2
          data-reveal
          className="text-[clamp(2.5rem,5vw,4rem)] font-light mb-6 leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}
        >
          Limited-Time Promos
        </h2>
        <p
          data-reveal
          className="text-xs md:text-sm tracking-[0.05em] leading-[1.8] opacity-80"
          style={{ color: "var(--color-warm-gray)" }}
        >
          Carefully curated combinations and delightful treats created exclusively for our 
          cherished <strong className="font-semibold text-[var(--color-dark)]">Gembudies</strong>. Grab yours before they fly away!
        </p>
      </div>

      {/* Promos Grid */}
      <div
        ref={cardsRef}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10"
      >
        {promos.map((promo) => (
          <div
            key={promo.id}
            data-card
            className="flex flex-col border rounded-2xl overflow-hidden shadow-md bg-[var(--color-cream)] group transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            style={{ borderColor: "rgba(99,40,22,0.08)" }}
          >
            {/* Promo Image */}
            <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div
                className="absolute inset-4 border pointer-events-none transition-all duration-500 group-hover:inset-3"
                style={{ borderColor: "rgba(245,240,232,0.25)" }}
              />

              {/* Tag Badge */}
              <span
                className="absolute top-4 left-4 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full text-white shadow-sm"
                style={{ backgroundColor: promo.tagColor }}
              >
                {promo.tag}
              </span>
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3
                  className="text-xl font-medium mb-3 group-hover:text-[var(--color-dark)] transition-colors duration-300 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {promo.title}
                </h3>
                <p className="text-xs md:text-[0.78rem] leading-[1.7] opacity-80 mb-6" style={{ color: "var(--color-warm-gray)" }}>
                  {promo.desc}
                </p>
              </div>

              <div>
                {/* Meta details / Price / Time */}
                <div className="flex items-center justify-between border-t border-[rgba(99,40,22,0.08)] pt-4 mb-5">
                  <div className="flex flex-col">
                    <span className="text-[0.55rem] tracking-[0.1em] uppercase opacity-55">Offer Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold" style={{ color: "var(--color-dark)" }}>{promo.price}</span>
                      {promo.oldPrice && (
                        <span className="text-xs line-through opacity-40 font-normal">{promo.oldPrice}</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[0.55rem] tracking-[0.1em] uppercase opacity-55 block">Availability</span>
                    <span className="text-[0.68rem] font-medium opacity-80">{promo.time}</span>
                  </div>
                </div>

                {/* Claim Button */}
                <button
                  onClick={() => setSelectedPromo(promo)}
                  className="w-full inline-flex items-center justify-center text-[0.72rem] tracking-[0.15em] font-semibold uppercase py-3.5 px-6 rounded-full border transition-all duration-300 bg-[var(--color-dark)] text-white hover:bg-transparent hover:text-[var(--color-dark)]"
                  style={{
                    borderColor: "var(--color-dark)",
                    cursor: "pointer",
                    lineHeight: "1"
                  }}
                >
                  Claim Promo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Menu Call to Action */}
      <div className="text-center mt-20 relative z-10">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 group text-xs md:text-sm font-semibold tracking-[0.18em] uppercase transition-colors duration-300 hover:text-[var(--color-dark)]"
          style={{ color: "var(--color-charcoal)", cursor: "pointer" }}
        >
          <span>Craving something else? View Our Full Menu</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </Link>
      </div>

      {/* Interactive Details Modal */}
      {selectedPromo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedPromo(null)}
          />

          {/* Modal Container */}
          <div
            className="relative w-full max-w-lg bg-[var(--color-cream)] rounded-3xl overflow-hidden shadow-2xl z-10 border border-[rgba(184,150,90,0.3)] flex flex-col max-h-[90vh] animate-[fadeIn_0.3s_ease-out]"
            style={{ color: "var(--color-dark)" }}
          >
            {/* Header / Banner */}
            <div className="relative h-44 bg-gray-100 flex-shrink-0">
              <img
                src={selectedPromo.image}
                alt={selectedPromo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedPromo(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center border border-white/20 transition-colors duration-200"
                style={{ cursor: "pointer" }}
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span
                  className="text-[0.55rem] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full text-white inline-block mb-2 shadow-sm"
                  style={{ backgroundColor: selectedPromo.tagColor }}
                >
                  {selectedPromo.tag}
                </span>
                <h4
                  className="text-2xl font-light text-white leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {selectedPromo.title}
                </h4>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1">
              <p className="text-xs md:text-sm leading-[1.8] opacity-80 mb-6" style={{ color: "var(--color-warm-gray)" }}>
                {selectedPromo.desc}
              </p>

              {/* Promo Code Box */}
              <div
                className="border border-dashed rounded-xl p-4 text-center mb-6"
                style={{ borderColor: "var(--color-gold)", backgroundColor: "rgba(251,183,29,0.06)" }}
              >
                <span className="text-[0.6rem] tracking-[0.2em] uppercase opacity-60 block mb-1">
                  Mention this code to our cashier
                </span>
                <span
                  className="text-2xl font-mono font-bold tracking-wider select-all cursor-pointer"
                  style={{ color: "var(--color-dark)" }}
                >
                  {selectedPromo.code}
                </span>
                <span className="block text-[0.55rem] opacity-40 mt-1">
                  Click to copy or screenshot
                </span>
              </div>

              {/* Offer Details */}
              <div className="mb-6">
                <h5 className="text-[0.62rem] tracking-[0.25em] uppercase font-bold mb-3" style={{ color: "var(--color-gold)" }}>
                  Terms & Conditions
                </h5>
                <ul className="space-y-2.5">
                  {selectedPromo.terms.map((term, index) => (
                    <li key={index} className="flex gap-2.5 text-[0.72rem] leading-[1.6]" style={{ color: "var(--color-warm-gray)" }}>
                      <span className="text-sm select-none leading-none" style={{ color: "var(--color-gold)" }}>✦</span>
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability Strip */}
              <div className="flex justify-between items-center text-[0.7rem] bg-[rgba(99,40,22,0.04)] rounded-lg p-3 border border-[rgba(99,40,22,0.05)]">
                <span className="opacity-60">Validity Period</span>
                <span className="font-semibold">{selectedPromo.time}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 md:p-6 border-t border-[rgba(99,40,22,0.08)] text-center flex-shrink-0">
              <button
                onClick={() => setSelectedPromo(null)}
                className="w-full inline-flex items-center justify-center text-[0.72rem] tracking-[0.15em] font-semibold uppercase py-3.5 px-6 rounded-full border transition-all duration-300 hover:bg-[var(--color-dark)] hover:text-white"
                style={{
                  color: "var(--color-dark)",
                  borderColor: "var(--color-dark)",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  lineHeight: "1"
                }}
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Simple Inline Keyframe styles for modal fadeIn */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </section>
  );
}
