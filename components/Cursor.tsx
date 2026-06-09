"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on devices that support hover and fine pointers (desktops)
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mql.matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const onMove = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" });
    };

    const onEnter = () => gsap.to(ring, { scale: 1.5, opacity: 0.4, duration: 0.3 });
    const onLeave = () => gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3 });

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor cursor-dot fixed top-0 left-0 z-[9999] pointer-events-none" style={{ willChange: "transform" }} />
      <div ref={ringRef} className="cursor cursor-ring fixed top-0 left-0 z-[9999] pointer-events-none" style={{ willChange: "transform" }} />
    </>
  );
}
