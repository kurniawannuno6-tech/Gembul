"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menus = {
  fruit: {
    label: "Fruit Taste",
    items: [
      { name: "Gembul Durian", price: "Rp 17k", desc: "Fresh strawberry jam with smooth cream cheese filling inside our signature soft bread.", image: "/images/menu-fruit.png" },
      { name: "Gembul Nanas", price: "Rp 18k", desc: "Sweet tropical mango custard, light whipped cream, topped with powdered sugar.", image: "/images/menu-fruit-2.png" },
      { name: "Gembul Strawberry", price: "Rp 18k", desc: "Rich, authentic durian paste filling wrapped in our pillows of freshly baked gembul bread.", image: "/images/menu-fruit.png" },
      { name: "Gembul Durian Montong", price: "Rp 24k", desc: "Luscious blueberry compote balanced with rich vanilla pastry cream.", image: "/images/menu-fruit-2.png" },
      { name: "Gembul Srikaya", price: "Rp 18k", desc: "Caramelized pineapple chunks with a sweet coconut cream glaze.", image: "/images/menu-fruit.png" },
      { name: "Gembul Blueberry", price: "Rp 18k", desc: "Tart lemon curd filling topped with toasted sweet meringue swirls.", image: "/images/menu-fruit-2.png" },
      { name: "Gembul Pisang Cokelat", price: "Rp 18k", desc: "Juicy peach slices and raspberry coulis filling inside our pillow-soft bun.", image: "/images/menu-fruit.png" },
      { name: "Gembul Srikaya Pandan", price: "Rp 18k", desc: "Spiced apple compote filling with a light cinnamon oat crumble.", image: "/images/menu-fruit-2.png" },
    ],
  },
  sweet: {
    label: "Sweet Taste",
    items: [
      { name: "Gembul Choqueen", price: "Rp 24k", desc: "Warm, flowing Belgian dark chocolate filling inside a perfectly baked cocoa-dusted bun.", image: "/images/menu-sweet.png" },
      { name: "Gembul Messes Cokelat", price: "Rp 16k", desc: "Coffee-soaked soft bun with a rich mascarpone cream filling, dusted with cocoa powder.", image: "/images/menu-sweet-2.png" },
      { name: "Gembul Vanilla", price: "Rp 20k", desc: "Premium Japanese Uji matcha cream filling with a delicate white chocolate drizzle.", image: "/images/menu-sweet.png" },
      { name: "Gembul Messes Warna", price: "Rp 16k", desc: "Sweet and salty caramel glaze topped with crushed Lotus Biscoff cookies.", image: "/images/menu-sweet-2.png" },
      { name: "Gembul Choco", price: "Rp 20k", desc: "Velvety cocoa bun filled with rich sweet cream cheese frosting and red velvet crumbles.", image: "/images/menu-sweet.png" },
      { name: "Gembul Butter Cream", price: "Rp 17k", desc: "Fluffy bread bun glazed with smooth Madagascar vanilla bean frosting.", image: "/images/menu-sweet-2.png" },
      { name: "Gembul Susu Keju", price: "Rp 18k", desc: "Generously filled with creamy Nutella spread and roasted hazelnut chunks.", image: "/images/menu-sweet.png" },
      { name: "Gembul Matcha", price: "Rp 19k", desc: "Warm cinnamon filling swirled with thick sweet cream cheese frosting.", image: "/images/menu-sweet-2.png" },
      { name: "Gembul Cappucino", price: "Rp 19k", desc: "Rich sweetened milk custard filling, perfect for vanilla lovers.", image: "/images/menu-sweet.png" },
      { name: "Gembul Taro", price: "Rp 20k", desc: "Decadent double-chocolate dough with a dark chocolate fudge filling.", image: "/images/menu-sweet-2.png" },
      { name: "Gembul Hazelnut", price: "Rp 23k", desc: "Sweet banana slices cooked in brown sugar, rolled in soft sweet dough.", image: "/images/menu-sweet.png" },
      { name: "Gembul Tiramisu", price: "Rp 19k", desc: "Crushed Oreo cookie crumbs mixed with sweet vanilla cream filling.", image: "/images/menu-sweet-2.png" },
      { name: "Gembul Kopi Susu", price: "Rp 18k", desc: "Soft espresso-infused bun with rich mocha cream and sweet crunchy peanut nougat.", image: "/images/menu-sweet.png" },
    ],
  },
  salty: {
    label: "Salty Taste",
    items: [
      { name: "Cheese Floss Gembul", price: "Rp 19k", desc: "Savory chicken floss combined with signature sweet mayo and melted cheddar cheese.", image: "/images/menu-salty.png" },
      { name: "Smoked Beef & Mozzarella", price: "Rp 21k", desc: "Premium smoked beef slices, rich mozzarella cheese, and Italian herb seasoning.", image: "/images/menu-salty-2.png" },
      { name: "Garlic Butter Parmesan", price: "Rp 18k", desc: "Soft bread brushed with house-made roasted garlic butter, topped with freshly grated parmesan.", image: "/images/menu-salty.png" },
      { name: "Savory Tuna Mayo", price: "Rp 20k", desc: "Creamy flaked tuna salad filling with sweet corn and a light black pepper finish.", image: "/images/menu-salty-2.png" },
      { name: "Chicken Black Pepper", price: "Rp 21k", desc: "Shredded chicken cooked in aromatic black pepper sauce inside a savory herb bun.", image: "/images/menu-salty.png" },
      { name: "Salted Egg Lava", price: "Rp 22k", desc: "Creamy, flowing salted egg yolk filling inside a soft savory golden bun.", image: "/images/menu-salty-2.png" },
      { name: "Triple Cheese Supreme", price: "Rp 20k", desc: "A blend of cheddar, mozzarella, and parmesan baked inside and outside the bun.", image: "/images/menu-salty.png" },
      { name: "Spicy Beef Bolognese", price: "Rp 21k", desc: "Rich minced beef bolognese sauce with a kick of chili, topped with parsley.", image: "/images/menu-salty-2.png" },
    ],
  },
  crunchy: {
    label: "Super Crunchy",
    items: [
      { name: "Gembul Almond", price: "Rp 21k", desc: "Sweet butter cream filling topped with a thick, crispy layer of toasted sliced almonds.", image: "/images/menu-crunchy.png" },
      { name: "Gembul Cheeseball", price: "Rp 23k", desc: "House-made caramel sauce topped with crushed roasted peanuts and crispy wafer flakes.", image: "/images/menu-crunchy-2.png" },
      { name: "Gembul Kwitkwet", price: "Rp 23k", desc: "Drizzled chocolate glaze topped with crispy chocolate cereal pearls for a delightful bite.", image: "/images/menu-crunchy.png" },
      { name: "Gembul Cokelat Kacang", price: "Rp 21k", desc: "Warm cinnamon sugar filling with a crispy crumble topping baked to a perfect golden brown.", image: "/images/menu-crunchy-2.png" },
      { name: "Gembul Beng-Beng", price: "Rp 20k", desc: "Crispy toasted macadamia nuts on top of a sweet white chocolate glaze.", image: "/images/menu-crunchy.png" },
      { name: "Gembul Ovomalt", price: "Rp 20k", desc: "Sweet honey glaze coated with crispy crushed cornflakes for a satisfying crunch.", image: "/images/menu-crunchy-2.png" },
      { name: "Gembul Cheesemalt", price: "Rp 23k", desc: "Filled with crunchy Ovaltine chocolate spread, topped with chocolate malt cookie soil.", image: "/images/menu-crunchy.png" },
      { name: "Gembul Cookies", price: "Rp 19k", desc: "Sweet caramelized palm sugar glaze topped with crunchy roasted cashew nut pieces.", image: "/images/menu-crunchy-2.png" },
      { name: "Gembul Red Velvet", price: "Rp 19k", desc: "Sweet caramelized palm sugar glaze topped with crunchy roasted cashew nut pieces.", image: "/images/menu-crunchy-2.png" },
    ],
  },
  drinks: {
    label: "Drinks",
    items: [
      { name: "Gembul Signature Iced Coffee", price: "Rp 16k", desc: "Our house special brew! A perfectly balanced blend of premium espresso, fresh milk, and signature brown sugar syrup, topped with rich cold foam.", image: "/images/menu-drinks.png" },
    ],
  },
};

type MenuKey = keyof typeof menus;

export default function Menu() {
  const [active, setActive] = useState<MenuKey>("fruit");
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
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
        {(Object.keys(menus) as MenuKey[]).map((key) => (
          <button
            key={key}
            onClick={() => switchTab(key)}
            className={`inline-flex items-center justify-center text-[0.78rem] md:text-[0.85rem] font-semibold tracking-[0.12em] uppercase px-6 md:px-8 py-4 rounded-full border transition-all duration-300 ${
              active === key
                ? "shadow-md hover:opacity-95"
                : "hover:bg-[rgba(26,22,16,0.04)]"
            }`}
            style={{
              color: active === key ? "#FFFFFF" : "var(--color-dark)",
              backgroundColor: active === key ? "var(--color-dark)" : "transparent",
              borderColor: active === key ? "var(--color-dark)" : "rgba(26,22,16,0.22)",
              cursor: "pointer",
              paddingTop: "14px",
              paddingBottom: "14px",
              lineHeight: "1",
            }}
          >
            {menus[key].label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div ref={panelRef}>
        {active === "drinks" ? (
          /* Special Showcase Layout for single Drink item */
          <div className="max-w-4xl mx-auto border rounded-xl overflow-hidden shadow-xl" style={{ borderColor: "rgba(184,150,90,0.25)", backgroundColor: "var(--color-cream)" }}>
            <div className="grid md:grid-cols-12 items-stretch">
              {/* Drink Image */}
              <div className="md:col-span-5 relative overflow-hidden min-h-[300px]">
                <img
                  src={current.items[0].image}
                  alt={current.items[0].name}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-4 border pointer-events-none" style={{ borderColor: "rgba(26,22,16,0.15)" }} />
              </div>
              {/* Drink Details */}
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block text-[0.58rem] tracking-[0.35em] uppercase px-3 py-1.5 border rounded-full self-start mb-6" style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}>
                  ✦ House Signature Drink ✦
                </span>
                <h3 className="text-3xl font-light mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}>
                  {current.items[0].name}
                </h3>
                <p className="text-sm leading-[1.8] mb-6" style={{ color: "var(--color-warm-gray)", opacity: 0.9 }}>
                  {current.items[0].desc}
                </p>
                <div className="flex items-center justify-between border-t pt-6" style={{ borderColor: "rgba(26,22,16,0.1)" }}>
                  <span className="text-2xl font-semibold animate-pulse" style={{ color: "var(--color-gold)" }}>
                    {current.items[0].price}
                  </span>
                  <span className="text-xs tracking-[0.1em] uppercase text-warm-gray opacity-60">
                    Includes Sweet Cold Foam
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Card Grid Layout for multiple items */
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {current.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col border rounded-xl overflow-hidden shadow-md group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "rgba(26,22,16,0.06)", backgroundColor: "var(--color-cream)" }}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-3 border pointer-events-none" style={{ borderColor: "rgba(26,22,16,0.05)" }} />
                </div>
                {/* Content */}
                <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline gap-2 mb-2">
                      <h4
                        className="text-[1rem] font-semibold transition-colors duration-300 group-hover:text-[var(--color-gold)] leading-snug"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-dark)" }}
                      >
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-[0.73rem] leading-[1.6] text-warm-gray opacity-85 mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center" style={{ borderColor: "rgba(26,22,16,0.06)" }}>
                    <span className="text-sm font-semibold" style={{ color: "var(--color-gold)" }}>
                      {item.price}
                    </span>
                    <span className="text-[0.58rem] tracking-[0.15em] uppercase opacity-40">
                      Freshly Baked
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
