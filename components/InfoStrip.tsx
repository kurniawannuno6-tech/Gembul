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
              Lunch: Mon – Sun<br />from 12:30 pm<br /><br />
              Dinner: Mon – Sun<br />from 6:30 pm
            </>
          ),
        },
        {
          title: "Find Us",
          content: (
            <>
              Roti Gembul<br />
              St. Georges Square<br />
              Valletta, VLT 1190<br />
              Malta
            </>
          ),
        },
        {
          title: "Get In Touch",
          content: (
            <>
              info@rotigembul.com<br />
              +356 79 264 613<br /><br />
              Reservations recommended.<br />Smart casual dress code.
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
