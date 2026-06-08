"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Quote from "@/components/Quote";
import Menu from "@/components/Menu";
import Accolades from "@/components/Accolades";
import Gallery from "@/components/Gallery";
import InfoStrip from "@/components/InfoStrip";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  // Start at 1 — the Loader renders once on first mount with key=1.
  // Only incremented on subsequent visits (back-navigation) to force a remount.
  const [loaderKey, setLoaderKey] = useState(1);
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      // First open: the Loader is already rendered with key=1 — do nothing.
      isFirstMount.current = false;
      return;
    }
    // Back-navigation or logo click: bump key to remount & replay the loader.
    setLoaded(false);
    setLoaderKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => { lenis.destroy(); };
  }, []);

  // Stable callback so the Loader's useEffect doesn't re-fire on re-renders
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <Cursor />
      <Loader key={loaderKey} onComplete={handleComplete} />
      <Nav visible={loaded} />
      <main style={{ visibility: loaded ? "visible" : "hidden" }}>
        <Hero loaded={loaded} />
        <About />
        <Quote />
        <Menu />
        <Accolades />
        <Gallery />
        <InfoStrip />
        <Footer />
      </main>
    </>
  );
}