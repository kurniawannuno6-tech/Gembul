"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const menus = {
  alacarte: {
    label: "À La Carte",
    sections: [
      {
        heading: "Starters",
        items: [
          { name: "Burrata & Heirloom Tomato", price: "€18", desc: "Aged balsamic, Sicilian olive oil, fresh basil, sea salt" },
          { name: "Seared Tuna Carpaccio", price: "€24", desc: "Yuzu dressing, micro herbs, pickled cucumber, sesame" },
          { name: "Lobster Bisque", price: "€32", desc: "Cognac cream, tarragon oil, sourdough croutons" },
        ],
      },
      {
        heading: "Mains",
        items: [
          { name: "Pan-Seared Seabass", price: "€42", desc: "Saffron velouté, fennel confit, caperberries, dill" },
          { name: "Wagyu Beef Tenderloin", price: "€68", desc: "Truffle jus, pommes soufflées, seasonal greens" },
          { name: "Roasted Duck Breast", price: "€52", desc: "Cherry reduction, celeriac purée, wilted spinach" },
          { name: "Truffle Risotto", price: "€38", desc: "Carnaroli rice, aged parmesan, black truffle, chives" },
        ],
      },
      {
        heading: "Desserts",
        items: [
          { name: "Dark Chocolate Fondant", price: "€16", desc: "Salted caramel, Tahitian vanilla, hazelnut praline" },
          { name: "Crème Brûlée", price: "€14", desc: "Madagascar vanilla, caramelised sugar crust, seasonal berries" },
          { name: "Cheese Selection", price: "€22", desc: "Curated artisan cheeses, walnut bread, fig jam, honey" },
        ],
      },
    ],
  },
  tasting: {
    label: "Tasting Menu",
    sections: [
      {
        heading: "Seven Courses · €120 per person",
        items: [
          { name: "Amuse-Bouche", price: "", desc: "Chef's daily creation" },
          { name: "Sea Urchin & Caviar", price: "", desc: "Champagne foam, brioche toast, lemon gel" },
          { name: "Seared Scallop", price: "", desc: "Cauliflower velouté, hazelnut brown butter, micro cress" },
          { name: "Duck Foie Gras", price: "", desc: "Brioche, spiced quince, port reduction" },
          { name: "Wagyu Beef Tenderloin", price: "", desc: "Truffle jus, pommes soufflées, asparagus" },
          { name: "Pre-Dessert", price: "", desc: "Lemon sorbet, prosecco granita" },
          { name: "Valrhona Chocolate", price: "", desc: "Salted caramel, gold leaf, mignardises" },
        ],
      },
    ],
  },
  wine: {
    label: "Wine",
    sections: [
      {
        heading: "Red Wines",
        items: [
          { name: "Château Margaux 2015", price: "€340", desc: "Bordeaux, France — Full-bodied, blackcurrant, cedar" },
          { name: "Barolo Riserva 2016", price: "€180", desc: "Piedmont, Italy — Garnet, cherry, rose, tar finish" },
          { name: "Penfolds Grange 2017", price: "€260", desc: "Barossa Valley, Australia — Shiraz, plum, leather, spice" },
        ],
      },
      {
        heading: "White Wines",
        items: [
          { name: "Sancerre Blanc 2022", price: "€90", desc: "Loire Valley — Crisp sauvignon blanc, citrus, mineral" },
          { name: "Puligny-Montrachet 2020", price: "€150", desc: "Burgundy, France — Chardonnay, stone fruit, toasted oak" },
          { name: "Riesling Auslese 2019", price: "€80", desc: "Mosel, Germany — Delicate sweetness, apricot, petrol note" },
        ],
      },
      {
        heading: "Champagne & Sparkling",
        items: [
          { name: "Dom Pérignon 2013", price: "€290", desc: "Champagne — Brioche, white peach, impeccable balance" },
          { name: "Krug Grande Cuvée", price: "€220", desc: "Multi-vintage — Honey, biscuit, toasted hazelnut" },
        ],
      },
    ],
  },
  cocktails: {
    label: "Cocktails",
    sections: [
      {
        heading: "Signature Cocktails",
        items: [
          { name: "Golden Republic", price: "€18", desc: "Aged rum, turmeric honey, ginger, lime, bitters" },
          { name: "Midnight Garden", price: "€16", desc: "Gin, elderflower, cucumber, basil, tonic water" },
          { name: "The Velvet Negroni", price: "€17", desc: "Campari, sweet vermouth, barrel-aged gin, orange peel" },
          { name: "Rose of Valletta", price: "€15", desc: "Aperol, prosecco, raspberry, lychee, rose water" },
        ],
      },
      {
        heading: "Non-Alcoholic",
        items: [
          { name: "Garden Elixir", price: "€12", desc: "Cucumber, mint, lemon, ginger, soda" },
          { name: "Crimson Sunset", price: "€12", desc: "Pomegranate, hibiscus, orange blossom, sparkling water" },
        ],
      },
    ],
  },
};

type MenuKey = keyof typeof menus;

export default function MenuPage() {
  const [active, setActive] = useState<MenuKey>("alacarte");
  const headerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = headerRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(items,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.4 }
    );
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
    <PageLayout>
      {/* Hero Banner */}
      <div className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          /* MENU PAGE HERO — /public/images/menu-hero.jpg — 1920×1080 px landscape, food spread or table setting */
          style={{ backgroundImage: "url('/images/menu-hero.jpg')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,22,16,0.3) 0%, rgba(26,22,16,0.85) 100%)" }} />
        <div ref={headerRef} className="relative z-10 px-14 md:px-20 lg:px-32 pb-16 w-full">
          <p data-reveal className="text-[0.6rem] tracking-[0.45em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
            Culinary Journey
          </p>
          <h1
            data-reveal
            className="text-[clamp(3rem,7vw,6rem)] font-light leading-[1]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}
          >
            Our Menus
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ backgroundColor: "var(--color-cream)", color: "var(--color-dark)" }}>
        {/* Tabs */}
        <div className="flex justify-center border-b pt-14" style={{ borderColor: "rgba(26,22,16,0.12)" }}>
          {(Object.keys(menus) as MenuKey[]).map((key) => (
            <button
              key={key}
              onClick={() => switchTab(key)}
              className={`relative text-[0.68rem] tracking-[0.22em] uppercase px-8 md:px-12 py-5 transition-all duration-300 ${
                active === key ? "" : "opacity-35 hover:opacity-60"
              }`}
              style={{ color: "var(--color-dark)", backgroundColor: "transparent", border: "none", cursor: "none" }}
            >
              {menus[key].label}
              {active === key && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px]" style={{ backgroundColor: "var(--color-gold)" }} />
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div ref={panelRef} className="max-w-5xl mx-auto px-6 md:px-10 py-20">
          {current.sections.map((section) => (
            <div key={section.heading} className="mb-16">
              <h3
                className="text-[0.6rem] tracking-[0.4em] uppercase mb-10 pb-4 border-b"
                style={{ color: "var(--color-gold)", borderColor: "rgba(26,22,16,0.1)" }}
              >
                {section.heading}
              </h3>
              <div className="grid md:grid-cols-2 gap-x-20 gap-y-8">
                {section.items.map((item) => (
                  <div key={item.name} className="pb-6 border-b" style={{ borderColor: "rgba(26,22,16,0.07)" }}>
                    <div className="flex justify-between items-baseline mb-2 gap-4">
                      <span className="text-[1.1rem] font-normal" style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}>
                        {item.name}
                      </span>
                      {item.price && (
                        <span className="text-[0.82rem] font-normal shrink-0" style={{ color: "var(--color-gold)" }}>
                          {item.price}
                        </span>
                      )}
                    </div>
                    <p className="text-[0.73rem] leading-[1.8]" style={{ color: "var(--color-warm-gray)" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* Allergen note */}
          <p className="text-center text-[0.65rem] tracking-[0.08em] mt-8" style={{ color: "var(--color-warm-gray)", opacity: 0.7 }}>
            Please inform your server of any dietary requirements or allergies. All prices include VAT.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
