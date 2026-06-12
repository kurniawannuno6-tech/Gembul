"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InfoStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = stripRef.current?.querySelectorAll("[data-item]") ?? [];
    gsap.fromTo(items, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: stripRef.current, start: "top 85%", once: true },
    });
  }, []);

  return (
    <div
      ref={stripRef}
      id="reservations"
      className="grid md:grid-cols-3"
      style={{ backgroundColor: "var(--color-gold)" }}
    >
      {[
        {
          title: "Opening Hours",
          content: (
            <>
              Daily: Mon – Sun<br />
              10.00 AM – 10.00 PM<br /><br />
              Freshly baked every day.
            </>
          ),
        },
        {
          title: "Find Us",
          content: (
            <>
              Roti Gembul<br />
              Jl. Soekarno Hatta, Drojogan 05/03<br />
              Bumirejo, Mungkid, Magelang<br />
              Jawa Tengah
            </>
          ),
        },
        {
          title: "Get In Touch",
          content: (
            <>
              gembonggembul.id@gmail.com<br />
              +62 852-2292-8866<br /><br />
              Order online or visit us.<br />Delivery partners available.
            </>
          ),
        },
      ].map((item, i) => (
        <div
          key={i}
          data-item
          className="px-12 py-16 border-b md:border-b-0 md:border-r last:border-0"
          style={{ borderColor: "rgba(26,22,16,0.12)", color: "var(--color-dark)" }}
        >
          <h4
            className="text-[1.5rem] font-normal mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {item.title}
          </h4>
          <p className="text-[0.75rem] leading-[2]" style={{ opacity: 0.7 }}>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
}
