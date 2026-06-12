"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/animate-ui/components/buttons/button";

gsap.registerPlugin(ScrollTrigger);

const menus = {
  fruit: {
    label: "Fruit Taste",
    items: [
      { name: "Gembul Durian", price: "Rp 17k", desc: "Fresh strawberry jam with smooth cream cheese filling inside our signature soft bread.", image: "/images/menu-durian.jpg" },
      { name: "Gembul Nanas", price: "Rp 18k", desc: "Sweet tropical mango custard, light whipped cream, topped with powdered sugar.", image: "/images/menu-nanas.jpg" },
      { name: "Gembul Strawberry", price: "Rp 18k", desc: "Rich, authentic durian paste filling wrapped in our pillows of freshly baked gembul bread.", image: "/images/menu-strawberry.jpg" },
      { name: "Gembul Durian Montong", price: "Rp 24k", desc: "Luscious blueberry compote balanced with rich vanilla pastry cream.", image: "/images/menu-durian.jpg" },
      { name: "Gembul Srikaya", price: "Rp 18k", desc: "Caramelized pineapple chunks with a sweet coconut cream glaze.", image: "/images/menu-srikaya.jpg" },
      { name: "Gembul Blueberry", price: "Rp 18k", desc: "Tart lemon curd filling topped with toasted sweet meringue swirls.", image: "/images/menu-blueberry.png" },
      { name: "Gembul Pisang Cokelat", price: "Rp 18k", desc: "Juicy peach slices and raspberry coulis filling inside our pillow-soft bun.", image: "/images/menu-pisangcokelat.png" },
      { name: "Gembul Srikaya Pandan", price: "Rp 18k", desc: "Spiced apple compote filling with a light cinnamon oat crumble.", image: "/images/menu-srikayapandan.jpg" },
    ],
  },
  sweet: {
    label: "Sweet Taste",
    items: [
      { name: "Gembul Choqueen", price: "Rp 24k", desc: "Warm, flowing Belgian dark chocolate filling inside a perfectly baked cocoa-dusted bun.", image: "/images/menu-chocoqueen.jpg" },
      { name: "Gembul Messes Cokelat", price: "Rp 16k", desc: "Coffee-soaked soft bun with a rich mascarpone cream filling, dusted with cocoa powder.", image: "/images/menu-mesescokelat.jpg" },
      { name: "Gembul Vanilla", price: "Rp 20k", desc: "Premium Japanese Uji matcha cream filling with a delicate white chocolate drizzle.", image: "/images/menu-vanilla.jpg" },
      { name: "Gembul Messes Warna", price: "Rp 16k", desc: "Sweet and salty caramel glaze topped with crushed Lotus Biscoff cookies.", image: "/images/menu-meseswarna.jpg" },
      { name: "Gembul Choco", price: "Rp 20k", desc: "Velvety cocoa bun filled with rich sweet cream cheese frosting and red velvet crumbles.", image: "/images/menu-choco.jpg" },
      { name: "Gembul Butter Cream", price: "Rp 17k", desc: "Fluffy bread bun glazed with smooth Madagascar vanilla bean frosting.", image: "/images/menu-buttercream.jpg" },
      { name: "Gembul Susu Keju", price: "Rp 18k", desc: "Generously filled with creamy Nutella spread and roasted hazelnut chunks.", image: "/images/menu-susukeju.jpg" },
      { name: "Gembul Matcha", price: "Rp 19k", desc: "Warm cinnamon filling swirled with thick sweet cream cheese frosting.", image: "/images/menu-matcha.jpg" },
      { name: "Gembul Cappucino", price: "Rp 19k", desc: "Rich sweetened milk custard filling, perfect for vanilla lovers.", image: "/images/menu-cappuccino.jpg" },
      { name: "Gembul Taro", price: "Rp 20k", desc: "Decadent double-chocolate dough with a dark chocolate fudge filling.", image: "/images/menu-taro.jpg" },
      { name: "Gembul Hazelnut", price: "Rp 23k", desc: "Sweet banana slices cooked in brown sugar, rolled in soft sweet dough.", image: "/images/menu-hazelnut.jpg" },
      { name: "Gembul Tiramisu", price: "Rp 19k", desc: "Crushed Oreo cookie crumbs mixed with sweet vanilla cream filling.", image: "/images/menu-tiramisu.jpg" },
      { name: "Gembul Kopi Susu", price: "Rp 18k", desc: "Soft espresso-infused bun with rich mocha cream and sweet crunchy peanut nougat.", image: "/images/menu-kopisusu.jpg" },
    ],
  },
  salty: {
    label: "Salty Taste",
    items: [
      { name: "Gembul Abon Cabe", price: "Rp 30k", desc: "Savory chicken floss combined with signature sweet mayo and melted cheddar cheese.", image: "/images/menu-aboncabe.jpg" },
      { name: "Gembul Pizza", price: "Rp 25k", desc: "Premium smoked beef slices, rich mozzarella cheese, and Italian herb seasoning.", image: "/images/menu-pizza-2.jpg" },
      { name: "Gembul Abon Spicy Mayo", price: "Rp 20k", desc: "Soft bread brushed with house-made roasted garlic butter, topped with freshly grated parmesan.", image: "/images/menu-abonspicymayo.jpg" },
      { name: "Gembul Butter Keju", price: "Rp 20k", desc: "Creamy flaked tuna salad filling with sweet corn and a light black pepper finish.", image: "/images/menu-butterkeju.jpg" },
      { name: "Gembul Abon Mayo", price: "Rp 20k", desc: "Shredded chicken cooked in aromatic black pepper sauce inside a savory herb bun.", image: "/images/menu-abonmayo.jpg" },
      { name: "Gembul Cheddar Savour Beef", price: "Rp 24k", desc: "Creamy, flowing salted egg yolk filling inside a soft savory golden bun.", image: "/images/menu-cheddarsavourbeef.jpg" },
      { name: "Gembul Truffle", price: "Rp 24k", desc: "A blend of cheddar, mozzarella, and parmesan baked inside and outside the bun.", image: "/images/menu-truffle.jpg" },
      { name: "Gembul Nachos Savour Beef", price: "Rp 24k", desc: "Rich minced beef bolognese sauce with a kick of chili, topped with parsley.", image: "/images/menu-nachossavourbeef.jpg" },
    ],
  },
  crunchy: {
    label: "Super Crunchy",
    items: [
      { name: "Gembul Almond", price: "Rp 21k", desc: "Sweet butter cream filling topped with a thick, crispy layer of toasted sliced almonds.", image: "/images/menu-almond.jpg" },
      { name: "Gembul Cheeseball", price: "Rp 23k", desc: "House-made caramel sauce topped with crushed roasted peanuts and crispy wafer flakes.", image: "/images/menu-cheeseball.jpg" },
      { name: "Gembul Kwitkwet", price: "Rp 23k", desc: "Drizzled chocolate glaze topped with crispy chocolate cereal pearls for a delightful bite.", image: "/images/menu-kwitkwet.jpg" },
      { name: "Gembul Cokelat Kacang", price: "Rp 21k", desc: "Warm cinnamon sugar filling with a crispy crumble topping baked to a perfect golden brown.", image: "/images/menu-cokelatkacang.jpg" },
      { name: "Gembul Beng-Beng", price: "Rp 20k", desc: "Crispy toasted macadamia nuts on top of a sweet white chocolate glaze.", image: "/images/menu-beng-beng.jpg" },
      { name: "Gembul Ovomalt", price: "Rp 20k", desc: "Sweet honey glaze coated with crispy crushed cornflakes for a satisfying crunch.", image: "/images/menu-ovomalt.jpg" },
      { name: "Gembul Cheesemalt", price: "Rp 23k", desc: "Filled with crunchy Ovaltine chocolate spread, topped with chocolate malt cookie soil.", image: "/images/menu-cheesemalt.jpg" },
      { name: "Gembul Cookies", price: "Rp 19k", desc: "Sweet caramelized palm sugar glaze topped with crunchy roasted cashew nut pieces.", image: "/images/menu-cookies.jpg" },
      { name: "Gembul Red Velvet", price: "Rp 19k", desc: "Sweet caramelized palm sugar glaze topped with crunchy roasted cashew nut pieces.", image: "/images/menu-redvelvet.jpg" },
    ],
  },
  drinks: {
    label: "Drinks",
    items: [
      { name: "Es Ijab Kabul", price: "Rp 8k", desc: "Our house special brew! A perfectly balanced blend of premium espresso, fresh milk, and signature brown sugar syrup, topped with rich cold foam.", image: "/images/menu-ijabkabul.png" },
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
            <Button
              key={key}
              onClick={() => switchTab(key)}
              variant={active === key ? "default" : "secondary"}
              size="lg"
              className={active === key ? "shadow-md hover:opacity-95" : ""}
            >
              {menus[key].label}
            </Button>
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

        {/* Allergen note */}
        <p className="text-center text-[0.65rem] tracking-[0.08em] pb-16" style={{ color: "var(--color-warm-gray)", opacity: 0.7 }}>
          Please inform our server of any dietary requirements or allergies. All prices include VAT.
        </p>
      </div>
    </PageLayout>
  );
}
