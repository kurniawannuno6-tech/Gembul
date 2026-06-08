"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// HOMEPAGE GALLERY STRIP — 4 images shown in a horizontal grid
//
// Place your images in /public/images/ and update the src paths below.
// Recommended size: 600 × 800 px each (portrait)
// Aspect ratio: displayed at h-48 (mobile) / h-80 (desktop) — fills the cell
// Tips: use a variety — kitchen, wine, plating, dining room
// ============================================================================
const images = [
  { src: "/images/gallery-kitchen.jpg",   label: "The Kitchen" },
  { src: "/images/gallery-wine.jpg",      label: "Fine Wines" },
  { src: "/images/gallery-dining.jpg",    label: "Dining Room" },
  { src: "/images/gallery-dish.jpg",      label: "Signature Dishes" },
];

export default function Gallery() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stagger each cell fading up when the strip enters the viewport
    const cells = stripRef.current?.querySelectorAll("[data-cell]") ?? [];
    gsap.fromTo(cells, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: stripRef.current, start: "top 85%", once: true },
    });
  }, []);

  // Hover: zoom + brighten image, reveal label
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const img   = e.currentTarget.querySelector("img");
    const label = e.currentTarget.querySelector("[data-label]");
    gsap.to(img,   { scale: 1.08, filter: "brightness(0.85) saturate(1.15)", duration: 0.5, ease: "power2.out" });
    gsap.to(label, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
  };

  // Hover leave: reset zoom and hide label
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const img   = e.currentTarget.querySelector("img");
    const label = e.currentTarget.querySelector("[data-label]");
    gsap.to(img,   { scale: 1, filter: "brightness(0.7) saturate(0.8)", duration: 0.5, ease: "power2.out" });
    gsap.to(label, { opacity: 0, y: 8, duration: 0.3 });
  };

  return (
    <div id="gallery" ref={stripRef} className="grid grid-cols-2 md:grid-cols-4">
      {images.map((img, i) => (
        <div
          key={i}
          data-cell
          className="relative overflow-hidden h-48 md:h-80 cursor-none"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <img
            src={img.src}
            alt={img.label}
            className="w-full h-full object-cover will-change-transform"
            style={{ filter: "brightness(0.7) saturate(0.8)" }}
          />
          {/* Label revealed on hover */}
          <div
            data-label
            className="absolute bottom-0 left-0 right-0 p-5 text-[0.62rem] tracking-[0.2em] uppercase"
            style={{
              color: "var(--color-cream)",
              background: "linear-gradient(transparent, rgba(26,22,16,0.75))",
              opacity: 0,
              transform: "translateY(8px)",
            }}
          >
            {img.label}
          </div>
        </div>
      ))}
    </div>
  );
}
