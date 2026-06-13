"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/animate-ui/components/buttons/button";

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// GALLERY PAGE — full filterable grid
//
// All images go in /public/images/  •  Recommended size: 800 × 1000 px each
// The "large" size items span 2 columns on desktop (use 1600 × 900 px for those)
// Hero banner: /public/images/gallery-hero.jpg  •  1920 × 1080 px landscape
// ============================================================================
const categories = ["All", "Outlets", "Kitchen", "Buns", "Events"];

const images = [
  { src: "/images/gallery-dish-hero.jpg", cat: "Buns", label: "Signature Buns", size: "large" },
  { src: "/images/gallery-dining.jpg", cat: "Outlets", label: "Dine-in Corner", size: "normal" },
  { src: "/images/gallery-kitchen.jpg", cat: "Kitchen", label: "Bakery Kitchen", size: "normal" },
  { src: "/images/gallery-prep.jpg", cat: "Kitchen", label: "Dough Prep", size: "normal" },
  { src: "/images/gallery-interior.jpg", cat: "Outlets", label: "Outlet Interior", size: "large" },
  { src: "/images/gallery-plating.jpg", cat: "Buns", label: "Adding Toppings", size: "normal" },
  { src: "/images/gallery-events.jpg", cat: "Events", label: "Outlet Launching", size: "normal" },
  { src: "/images/gallery-craft.jpg", cat: "Buns", label: "Artisan Baking", size: "normal" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === "All" ? images : images.filter((img) => img.cat === activeFilter);

  useEffect(() => {
    const heroItems = heroRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(heroItems, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.4 });
  }, []);

  useEffect(() => {
    const cells = gridRef.current?.querySelectorAll("[data-cell]") ?? [];
    gsap.fromTo(cells, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out" });
  }, [filtered.length, activeFilter]);

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget.querySelector("img"), { scale: 1.07, filter: "brightness(0.8)", duration: 0.5, ease: "power2.out" });
    gsap.to(e.currentTarget.querySelector("[data-label]"), { opacity: 1, y: 0, duration: 0.35 });
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget.querySelector("img"), { scale: 1, filter: "brightness(0.65)", duration: 0.5, ease: "power2.out" });
    gsap.to(e.currentTarget.querySelector("[data-label]"), { opacity: 0, y: 8, duration: 0.3 });
  };

  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gallery-hero.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,22,16,0.2) 0%, rgba(26,22,16,0.88) 100%)" }} />
        <div ref={heroRef} className="relative z-10 px-14 md:px-20 lg:px-32 pb-16">
          <p data-reveal className="text-[0.6rem] tracking-[0.45em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
            Visual Stories
          </p>
          <h1 data-reveal className="text-[clamp(3rem,7vw,6rem)] font-light leading-[1]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            Gallery
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-8 py-10 border-b px-6" style={{ backgroundColor: "var(--color-dark)", borderColor: "rgba(184,150,90,0.15)" }}>
        {categories.map((cat) => (
          <Button key={cat} onClick={() => setActiveFilter(cat)}
            variant="link"
            className={`text-[0.65rem] tracking-[0.25em] uppercase pb-1 rounded-none border-b ${
              activeFilter === cat ? "border-[#b8965a] opacity-100" : "border-transparent opacity-40 hover:opacity-70"
            }`}
            style={{ color: "var(--color-cream)", backgroundColor: "transparent" }}>
            {cat}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-1 p-1" style={{ backgroundColor: "var(--color-dark)" }}>
        {filtered.map((img, i) => (
          <div key={img.src + i} data-cell
            className={`relative overflow-hidden cursor-none ${img.size === "large" ? "md:col-span-2" : ""}`}
            style={{ aspectRatio: img.size === "large" ? "16/9" : "4/3" }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}>
            <img src={img.src} alt={img.label}
              className="w-full h-full object-cover will-change-transform"
              style={{ filter: "brightness(0.65)" }} />
            <div data-label className="absolute bottom-0 left-0 right-0 p-6"
              style={{ background: "linear-gradient(transparent, rgba(26,22,16,0.8))", opacity: 0, transform: "translateY(8px)" }}>
              <span className="text-[0.6rem] tracking-[0.25em] uppercase" style={{ color: "var(--color-cream)" }}>{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
