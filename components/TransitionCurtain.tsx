"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function TransitionCurtain() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    // Skip the very first load — homepage has its own Loader
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    const curtain = curtainRef.current;
    if (!curtain) return;

    // Wipe in from bottom, then wipe out upward
    gsap.timeline()
      .set(curtain, { yPercent: 100, display: "flex" })
      .to(curtain, { yPercent: 0, duration: 0.55, ease: "power4.inOut" })
      .to(curtain, { yPercent: -100, duration: 0.65, ease: "power4.inOut", delay: 0.15 })
      .set(curtain, { display: "none" });
  }, [pathname]);

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-[9980] flex items-center justify-center pointer-events-none"
      style={{ display: "none", backgroundColor: "#eb5c27" }}
    >
      <img
        src="/images/LogoGembulPutih.png"
        alt="Roti Gembul Logo"
        className="w-24 md:w-32 h-auto object-contain opacity-85 select-none pointer-events-none"
      />
    </div>
  );
}
