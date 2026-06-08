"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const menus = {
  fruit: {
    label: "Fruit Taste",
    items: [
      { name: "Strawberry Blossom Gembul", price: "Rp 18k", desc: "Fresh strawberry jam with smooth cream cheese filling inside our signature soft bread.", image: "/images/menu-fruit.png" },
      { name: "Mango Cream Delight", price: "Rp 19k", desc: "Sweet tropical mango custard, light whipped cream, topped with powdered sugar.", image: "/images/menu-fruit-2.png" },
      { name: "Durian Custard Bun", price: "Rp 22k", desc: "Rich, authentic durian paste filling wrapped in our pillows of freshly baked gembul bread.", image: "/images/menu-fruit.png" },
      { name: "Blueberry Cream Crown", price: "Rp 18k", desc: "Luscious blueberry compote balanced with rich vanilla pastry cream.", image: "/images/menu-fruit-2.png" },
      { name: "Tropical Pineapple Glaze", price: "Rp 17k", desc: "Caramelized pineapple chunks with a sweet coconut cream glaze.", image: "/images/menu-fruit.png" },
      { name: "Lemon Zest Meringue", price: "Rp 19k", desc: "Tart lemon curd filling topped with toasted sweet meringue swirls.", image: "/images/menu-fruit-2.png" },
      { name: "Sweet Peach Melba", price: "Rp 18k", desc: "Juicy peach slices and raspberry coulis filling inside our pillow-soft bun.", image: "/images/menu-fruit.png" },
      { name: "Apple Cinnamon Crisp", price: "Rp 19k", desc: "Spiced apple compote filling with a light cinnamon oat crumble.", image: "/images/menu-fruit-2.png" },
    ],
  },
  sweet: {
    label: "Sweet Taste",
    items: [
      { name: "Choco Lava Gembul", price: "Rp 17k", desc: "Warm, flowing Belgian dark chocolate filling inside a perfectly baked cocoa-dusted bun.", image: "/images/menu-sweet.png" },
      { name: "Tiramisu Luxury", price: "Rp 19k", desc: "Coffee-soaked soft bun with a rich mascarpone cream filling, dusted with cocoa powder.", image: "/images/menu-sweet-2.png" },
      { name: "Matcha Green Tea Custard", price: "Rp 18k", desc: "Premium Japanese Uji matcha cream filling with a delicate white chocolate drizzle.", image: "/images/menu-sweet.png" },
      { name: "Salted Caramel Biscoff", price: "Rp 20k", desc: "Sweet and salty caramel glaze topped with crushed Lotus Biscoff cookies.", image: "/images/menu-sweet-2.png" },
      { name: "Red Velvet Cheese", price: "Rp 19k", desc: "Velvety cocoa bun filled with rich sweet cream cheese frosting and red velvet crumbles.", image: "/images/menu-sweet.png" },
      { name: "Classic Vanilla Glaze", price: "Rp 16k", desc: "Fluffy bread bun glazed with smooth Madagascar vanilla bean frosting.", image: "/images/menu-sweet-2.png" },
      { name: "Nutella Hazelnut Dream", price: "Rp 21k", desc: "Generously filled with creamy Nutella spread and roasted hazelnut chunks.", image: "/images/menu-sweet.png" },
      { name: "Cinnamon Cream Swirl", price: "Rp 18k", desc: "Warm cinnamon filling swirled with thick sweet cream cheese frosting.", image: "/images/menu-sweet-2.png" },
      { name: "Milky Way Custard", price: "Rp 17k", desc: "Rich sweetened milk custard filling, perfect for vanilla lovers.", image: "/images/menu-sweet.png" },
      { name: "Double Dark Choco", price: "Rp 18k", desc: "Decadent double-chocolate dough with a dark chocolate fudge filling.", image: "/images/menu-sweet-2.png" },
      { name: "Caramelized Banana Roll", price: "Rp 19k", desc: "Sweet banana slices cooked in brown sugar, rolled in soft sweet dough.", image: "/images/menu-sweet.png" },
      { name: "Oreo Cookies & Cream", price: "Rp 18k", desc: "Crushed Oreo cookie crumbs mixed with sweet vanilla cream filling.", image: "/images/menu-sweet-2.png" },
      { name: "Mocha Nougat Premium", price: "Rp 20k", desc: "Soft espresso-infused bun with rich mocha cream and sweet crunchy peanut nougat.", image: "/images/menu-sweet.png" },
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
      { name: "Crunchy Almond Butter", price: "Rp 20k", desc: "Sweet butter cream filling topped with a thick, crispy layer of toasted sliced almonds.", image: "/images/menu-crunchy.png" },
      { name: "Caramel Peanut Crunch", price: "Rp 19k", desc: "House-made caramel sauce topped with crushed roasted peanuts and crispy wafer flakes.", image: "/images/menu-crunchy-2.png" },
      { name: "Choco Crispy Nest", price: "Rp 18k", desc: "Drizzled chocolate glaze topped with crispy chocolate cereal pearls for a delightful bite.", image: "/images/menu-crunchy.png" },
      { name: "Cinnamon Sugar Crumble", price: "Rp 17k", desc: "Warm cinnamon sugar filling with a crispy crumble topping baked to a perfect golden brown.", image: "/images/menu-crunchy-2.png" },
      { name: "Macadamia White Choco", price: "Rp 21k", desc: "Crispy toasted macadamia nuts on top of a sweet white chocolate glaze.", image: "/images/menu-crunchy.png" },
      { name: "Golden Cornflake Honey", price: "Rp 18k", desc: "Sweet honey glaze coated with crispy crushed cornflakes for a satisfying crunch.", image: "/images/menu-crunchy-2.png" },
      { name: "Ovaltine Crunchy Cream", price: "Rp 20k", desc: "Filled with crunchy Ovaltine chocolate spread, topped with chocolate malt cookie soil.", image: "/images/menu-crunchy.png" },
      { name: "Coconut Sugar Cashew", price: "Rp 19k", desc: "Sweet caramelized palm sugar glaze topped with crunchy roasted cashew nut pieces.", image: "/images/menu-crunchy-2.png" },
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

export default function MenuPage() {
  const [active, setActive] = useState<MenuKey>("fruit");
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
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-14 mb-8">
          {(Object.keys(menus) as MenuKey[]).map((key) => (
            <button
              key={key}
              onClick={() => switchTab(key)}
              className={`text-[0.78rem] md:text-[0.85rem] font-semibold tracking-[0.12em] uppercase px-6 md:px-8 py-3 rounded-full border transition-all duration-300 ${
                active === key
                  ? "shadow-md hover:opacity-95"
                  : "hover:bg-[rgba(26,22,16,0.04)]"
              }`}
              style={{
                color: active === key ? "#FFFFFF" : "var(--color-dark)",
                backgroundColor: active === key ? "var(--color-dark)" : "transparent",
                borderColor: active === key ? "var(--color-dark)" : "rgba(26,22,16,0.22)",
                cursor: "pointer",
              }}
            >
              {menus[key].label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div ref={panelRef} className="max-w-6xl mx-auto px-6 md:px-10 py-20">
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
                  <div className="p-5 flex-1 flex flex-col justify-between">
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

        {/* Allergen note */}
        <p className="text-center text-[0.65rem] tracking-[0.08em] pb-16" style={{ color: "var(--color-warm-gray)", opacity: 0.7 }}>
          Please inform our server of any dietary requirements or allergies. All prices include VAT.
        </p>
      </div>
    </PageLayout>
  );
}
