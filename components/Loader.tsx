"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!loaderRef.current || !logoRef.current || !lineRef.current || !countRef.current) return;

    // Kill any lingering tweens
    gsap.killTweensOf([loaderRef.current, logoRef.current, lineRef.current, countRef.current]);

    // Ensure loader is fully visible from the start
    gsap.set(loaderRef.current, { yPercent: 0, opacity: 1 });
    // Hide logo so GSAP can animate it in
    gsap.set(logoRef.current, { opacity: 0, scale: 0.85, y: 20 });
    gsap.set(lineRef.current, { width: 0 });
    if (countRef.current) countRef.current.innerHTML = "0";

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    tl.to(logoRef.current, { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: "power4.out" })
      .to(lineRef.current, { width: "160px", duration: 1.4, ease: "power3.inOut" }, "-=0.5")
      .to(countRef.current, {
        innerHTML: 100,
        snap: { innerHTML: 1 },
        duration: 1.4,
        ease: "power3.inOut",
      }, "<")
      .to({}, { duration: 0.4 });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9990] flex flex-col items-center justify-center"
      style={{ backgroundColor: "#eb5c27" }}
    >
      <div className="text-center flex flex-col items-center px-6">
        {/* Logo Image */}
        <img
          ref={logoRef}
          src="/images/LogoGembulPutih.png"
          alt="Roti Gembul Logo"
          className="w-40 md:w-56 h-auto object-contain mb-8 select-none pointer-events-none"
        />
        
        {/* Loading Progress */}
        <div className="flex items-center gap-4 justify-center">
          <div
            ref={lineRef}
            className="h-[2px]"
            style={{ backgroundColor: "#FFFFFF", opacity: 0.5 }}
          />
          <span
            ref={countRef}
            className="text-sm font-medium tabular-nums"
            style={{ color: "#FFFFFF", opacity: 0.8 }}
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
}
