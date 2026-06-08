"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menus = {
  alacarte: {
    label: "À La Carte",
    items: [
      { name: "Burrata & Heirloom Tomato", price: "€18", desc: "Aged balsamic, Sicilian olive oil, fresh basil, sea salt" },
      { name: "Seared Tuna Carpaccio", price: "€24", desc: "Yuzu dressing, micro herbs, pickled cucumber, sesame" },
      { name: "Lobster Bisque", price: "€32", desc: "Cognac cream, tarragon oil, sourdough croutons" },
      { name: "Pan-Seared Seabass", price: "€42", desc: "Saffron velouté, fennel confit, caperberries, dill" },
      { name: "Wagyu Beef Tenderloin", price: "€68", desc: "Truffle jus, pommes soufflées, seasonal greens" },
      { name: "Dark Chocolate Fondant", price: "€16", desc: "Salted caramel, Tahitian vanilla, hazelnut praline" },
    ],
  },
  wine: {
    label: "Wine",
    items: [
      { name: "Château Margaux 2015", price: "€340", desc: "Bordeaux, France — Full-bodied, blackcurrant, cedar" },
      { name: "Barolo Riserva 2016", price: "€180", desc: "Piedmont, Italy — Garnet, cherry, rose, tar finish" },
      { name: "Sancerre Blanc 2022", price: "€90", desc: "Loire Valley — Crisp sauvignon blanc, citrus, mineral" },
      { name: "Dom Pérignon 2013", price: "€290", desc: "Champagne — Brioche, white peach, impeccable balance" },
    ],
  },
  drinks: {
    label: "Cocktails",
    items: [
      { name: "Golden Republic", price: "€18", desc: "Aged rum, turmeric honey, ginger, lime, bitters" },
      { name: "Midnight Garden", price: "€16", desc: "Gin, elderflower, cucumber, basil, tonic water" },
      { name: "The Velvet Negroni", price: "€17", desc: "Campari, sweet vermouth, barrel-aged gin, orange peel" },
      { name: "Rose of Valletta", price: "€15", desc: "Aperol, prosecco, raspberry, lychee, rose water" },
    ],
  },
};

type MenuKey = keyof typeof menus;

export default function Menu() {
  const [active, setActive] = useState<MenuKey>("alacarte");
  const headerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = headerRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(items, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: headerRef.current, start: "top 80%", once: true },
    });
  }, []);

  const switchTab = (key: MenuKey) => {
    if (key === active) return;
    gsap.to(panelRef.current, {
      opacity: 0, y: 16, duration: 0.25, ease: "power2.in",
      onComplete: () => {
        setActive(key);
        gsap.fromTo(panelRef.current, { opacity: 0, y: 16 }, {
          opacity: 1, y: 0, duration: 0.4, ease: "power2.out",
        });
      },
    });
  };

  const current = menus[active];

  return (
    <section
      id="menu"
      className="py-28 px-6 md:px-16"
      style={{ backgroundColor: "var(--color-cream)", color: "var(--color-dark)" }}
    >
      <div ref={headerRef} className="text-center mb-16">
        <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
          Culinary Journey
        </p>
        <h2
          data-reveal
          className="text-[clamp(2.5rem,5vw,4rem)] font-light"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}
        >
          Our Menus
        </h2>
      </div>

      {/* Tabs */}
      <div
        className="flex justify-center mb-16 border-b"
        style={{ borderColor: "rgba(26,22,16,0.12)" }}
      >
        {(Object.keys(menus) as MenuKey[]).map((key) => (
          <button
            key={key}
            onClick={() => switchTab(key)}
            className={`relative text-[0.62rem] tracking-[0.22em] uppercase px-8 md:px-10 py-4 transition-colors duration-300 ${
              active === key ? "" : "opacity-40 hover:opacity-70"
            }`}
            style={{
              color: "var(--color-dark)",
              backgroundColor: "transparent",
              border: "none",
              cursor: "none",
            }}
          >
            {menus[key].label}
            {active === key && (
              <span
                className="absolute bottom-[-1px] left-0 right-0 h-[2px]"
                style={{ backgroundColor: "var(--color-gold)" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div ref={panelRef} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-20 gap-y-10">
        {current.items.map((item) => (
          <div
            key={item.name}
            className="pb-6 border-b"
            style={{ borderColor: "rgba(26,22,16,0.08)" }}
          >
            <div className="flex justify-between items-baseline mb-2 gap-4">
              <span
                className="text-[1.1rem] font-normal"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}
              >
                {item.name}
              </span>
              <span
                className="text-[0.82rem] font-normal shrink-0"
                style={{ color: "var(--color-gold)" }}
              >
                {item.price}
              </span>
            </div>
            <p className="text-[0.73rem] leading-[1.75]" style={{ color: "var(--color-warm-gray)" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
