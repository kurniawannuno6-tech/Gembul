"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Fade the page in after transition curtain lifts
    gsap.fromTo(
      mainRef.current,
      { opacity: 0, y: 18 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.7, 
        ease: "power3.out", 
        delay: 0.55,
        onComplete: () => {
          ScrollTrigger.refresh();
        }
      }
    );

    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mql.matches) return;

    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tickHandler = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickHandler);
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickHandler);
    };
  }, []);

  return (
    <>
      <Cursor />
      <Nav visible={true} />
      <div ref={mainRef} style={{ opacity: 0 }}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
