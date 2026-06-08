"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Kill any lingering tweens
    gsap.killTweensOf([loaderRef.current, textRef.current, lineRef.current, countRef.current, subtitleRef.current]);

    // Ensure loader is fully visible from the start
    gsap.set(loaderRef.current, { yPercent: 0, opacity: 1 });
    // Hide text elements so GSAP can animate them in
    gsap.set([textRef.current, subtitleRef.current], { opacity: 0, y: 30 });
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

    tl.to(textRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" })
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
      .to(lineRef.current, { width: "200px", duration: 1.4, ease: "power3.inOut" }, "-=0.3")
      .to(countRef.current, {
        innerHTML: 100,
        snap: { innerHTML: 1 },
        duration: 1.4,
        ease: "power3.inOut",
      }, "<")
      .to({}, { duration: 0.5 });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9990] flex flex-col items-center justify-center"
      style={{ backgroundColor: "#0f0d09" }}
    >
      <div className="text-center">
        <p
          ref={textRef}
          className="text-5xl md:text-7xl font-light tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: "var(--font-display)", color: "#b8965a" }}
        >
          Roti Gembul
        </p>
        <p
          ref={subtitleRef}
          className="text-xs tracking-[0.4em] uppercase mb-10"
          style={{ color: "#8a8278" }}
        >
          Fine Dining · Valletta
        </p>
        <div className="flex items-center gap-4 justify-center">
          <div
            ref={lineRef}
            className="h-px"
            style={{ backgroundColor: "#b8965a", opacity: 0.5 }}
          />
          <span
            ref={countRef}
            className="text-xs tabular-nums"
            style={{ color: "#b8965a", opacity: 0.7 }}
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
}
