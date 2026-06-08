"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useReveal(options?: {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-reveal]");
    const all = targets.length > 0 ? targets : [el];

    gsap.fromTo(
      all,
      { opacity: 0, y: options?.y ?? 50 },
      {
        opacity: 1,
        y: 0,
        duration: options?.duration ?? 1,
        ease: "power3.out",
        stagger: options?.stagger ?? 0.12,
        delay: options?.delay ?? 0,
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          once: true,
        },
      }
    );
  }, []);

  return ref;
}
