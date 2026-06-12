"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/animate-ui/components/buttons/button";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", date: "", guests: "", message: "", type: "dinner" });

  useEffect(() => {
    const heroItems = heroRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(heroItems, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.4 });

    const formItems = formRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(formItems, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: formRef.current, start: "top 80%", once: true } });

    const infoItems = infoRef.current?.querySelectorAll("[data-item]") ?? [];
    gsap.fromTo(infoItems, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: infoRef.current, start: "top 80%", once: true } });
  }, []);

  const handleSubmit = () => {
    gsap.to(formRef.current, { opacity: 0, y: -20, duration: 0.4, ease: "power2.in", onComplete: () => {
      setSubmitted(true);
      gsap.fromTo(formRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
    }});
  };

  const inputClass = "w-full bg-white/5 border rounded-lg px-4 py-3.5 text-[0.82rem] outline-none transition-all duration-300 focus:border-[#b8965a] focus:bg-white/10 focus:ring-1 focus:ring-[#b8965a]/30";
  const inputStyle = { borderColor: "rgba(184,150,90,0.25)", color: "var(--color-cream)" };

  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          /* CONTACT HERO — /public/images/contact-hero.jpg — 1920×1080 px, restaurant interior or candlelit tables */
          style={{ backgroundImage: "url('/images/contact-hero.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,22,16,0.2) 0%, rgba(26,22,16,0.9) 100%)" }} />
        <div ref={heroRef} className="relative z-10 px-14 md:px-20 lg:px-32 pb-16">
          <p data-reveal className="text-[0.6rem] tracking-[0.45em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
            We&apos;d Love to See You
          </p>
          <h1 data-reveal className="text-[clamp(3rem,7vw,6rem)] font-light leading-[1]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            Contact &<br />Reservations
          </h1>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid md:grid-cols-[1fr_420px]" style={{ backgroundColor: "var(--color-dark)" }}>
        {/* Form */}
        <div ref={formRef} className="px-14 md:px-20 lg:px-28 py-24">
          {!submitted ? (
            <>
              <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-10" style={{ color: "var(--color-gold)" }}>
                Make a Reservation
              </p>

              {/* Meal type */}
              <div data-reveal className="flex gap-6 mb-10">
                {["lunch", "dinner", "private"].map((t) => (
                  <Button key={t} onClick={() => setForm({ ...form, type: t })}
                    variant={form.type === t ? "goldOutline" : "creamOutline"}
                    size="sm"
                    className={form.type === t ? "" : "opacity-40 hover:opacity-70"}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </Button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                <div data-reveal>
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Full Name</label>
                  <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className={inputClass} style={inputStyle} placeholder="Jean-Claude Dupont" />
                </div>
                <div data-reveal>
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Email Address</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className={inputClass} style={inputStyle} placeholder="you@example.com" />
                </div>
                <div data-reveal>
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Preferred Date</label>
                  <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
                    className={inputClass} style={inputStyle} />
                </div>
                <div data-reveal>
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Number of Guests</label>
                  <input type="number" min={1} max={20} value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}
                    className={inputClass} style={inputStyle} placeholder="2" />
                </div>
                <div data-reveal className="md:col-span-2">
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Special Requests</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4}
                    className={inputClass + " resize-none"} style={inputStyle}
                    placeholder="Dietary requirements, special occasions, preferences…" />
                </div>
              </div>

              <Button data-reveal onClick={handleSubmit}
                variant="gold"
                size="lg"
                className="mt-12">
                Request Reservation
              </Button>
               <p data-reveal className="mt-4 text-[0.63rem]" style={{ color: "var(--color-cream)", opacity: 0.35 }}>
                Or call us directly: <a href="tel:+6285222928866" className="hover:opacity-80" style={{ color: "var(--color-gold)" }}>+62 852-2292-8866</a>
              </p>
            </>
          ) : (
            <div className="py-16 text-center max-w-md">
              <span className="block text-4xl mb-8" style={{ color: "var(--color-gold)" }}>✦</span>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-light mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
                Thank You, {form.name || "Dear Guest"}
              </h2>
              <p className="text-[0.8rem] leading-[2]" style={{ color: "var(--color-cream)", opacity: 0.6 }}>
                Your reservation request has been received. Our team will confirm your booking within 24 hours.
                We look forward to welcoming you.
              </p>
            </div>
          )}
        </div>

        {/* Info panel */}
        <div ref={infoRef} className="py-24 px-10 border-l" style={{ backgroundColor: "var(--color-charcoal)", borderColor: "rgba(184,150,90,0.15)" }}>
          {[
            { title: "Location", lines: ["Roti Gembul", "Jl. Soekarno Hatta, Drojogan 05/03", "Bumirejo, Mungkid, Magelang", "Jawa Tengah"] },
            { title: "Opening Hours", lines: ["Sunday - Monday", "from 10:00 am to 10.00 pm"] },
            { title: "Contact", lines: ["gembonggembul.id@gmail.com", "+62 852-2292-8866"] },
            { title: "Delivery Partners", lines: ["GoFood, GrabFood", "ShopeeFood"] },
          ].map((block) => (
            <div key={block.title} data-item className="mb-12 pb-12 border-b last:border-0 last:mb-0 last:pb-0"
              style={{ borderColor: "rgba(184,150,90,0.12)" }}>
              <h4 className="text-[0.58rem] tracking-[0.35em] uppercase mb-5" style={{ color: "var(--color-gold)" }}>{block.title}</h4>
              {block.lines.map((line, i) => (
                <p key={i} className="text-[0.75rem] leading-[2]" style={{ color: "var(--color-cream)", opacity: 0.6 }}>
                  {line || <>&nbsp;</>}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
