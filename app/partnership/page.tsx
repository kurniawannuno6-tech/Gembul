"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/animate-ui/components/buttons/button";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: "📈",
    title: "High ROI & Quick Payback",
    desc: "With a highly efficient business model and high customer demand, partners typically reach full ROI payback within 6 to 12 months.",
  },
  {
    icon: "🎓",
    title: "Operational Excellence",
    desc: "Complete pre-opening and operational training, standardized SOP manuals, and ongoing operational audits to guarantee success.",
  },
  {
    icon: "📢",
    title: "Branding & Marketing Push",
    desc: "Benefit from Roti Gembul's viral social media presence, regular national campaigns, local store promotion templates, and influencer support.",
  },
  {
    icon: "🍞",
    title: "Centralized Supply Chain",
    desc: "Strictly standardized raw ingredients delivered directly from our central kitchen to ensure consistent premium taste across all outlets.",
  },
];

const tiers = [
  {
    name: "Express Kiosk",
    investment: "Rp 120 Million",
    space: "Requires 12 - 20 m²",
    desc: "Perfect for mall kiosks, transit stations, and compact retail spaces. High efficiency, low overhead, and quick setup.",
    features: ["Standard Kitchen Equipments", "Point-of-Sales System", "Initial Raw Materials supply", "Staff uniform and training", "Local store marketing starter kit"],
  },
  {
    name: "Standard Café",
    investment: "Rp 180 Million",
    space: "Requires 40 - 60 m²",
    desc: "Ideal for shop-houses, busy street corners, and dine-in spaces. Includes coffee beverage bar setup for maximized ticket size.",
    features: ["Full Kitchen & Espresso Bar", "Complete Dine-in Furniture", "SOP training for staff & managers", "Pre-opening support team (3 days)", "Premium store design blueprint"],
  },
];

export default function PartnershipPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const tiersRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", package: "Express Kiosk", city: "", budget: "", message: "" });

  useEffect(() => {
    const heroItems = heroRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(heroItems, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.4 });

    const benefitCards = benefitsRef.current?.querySelectorAll("[data-card]") ?? [];
    gsap.fromTo(benefitCards, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: benefitsRef.current, start: "top 80%", once: true },
    });

    const tierCards = tiersRef.current?.querySelectorAll("[data-card]") ?? [];
    gsap.fromTo(tierCards, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: tiersRef.current, start: "top 80%", once: true },
    });

    const formItems = formRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(formItems, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: formRef.current, start: "top 80%", once: true },
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          style={{ backgroundImage: "url('/images/accolades-hero.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,22,16,0.2) 0%, rgba(26,22,16,0.9) 100%)" }} />
        <div ref={heroRef} className="relative z-10 px-14 md:px-20 lg:px-32 pb-16">
          <p data-reveal className="text-[0.6rem] tracking-[0.45em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
            Grow With Us
          </p>
          <h1 data-reveal className="text-[clamp(3rem,7vw,6rem)] font-light leading-[1]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            Partnership<br />Opportunities
          </h1>
        </div>
      </div>

      {/* Section 1: Benefits */}
      <section ref={benefitsRef} className="py-24 px-6 md:px-16" style={{ backgroundColor: "var(--color-cream)", color: "var(--color-dark)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.6rem] tracking-[0.4em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>Why Partner With Roti Gembul?</p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "var(--font-display)" }}>Partnership Benefits</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} data-card className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: "rgba(26,22,16,0.06)", backgroundColor: "#FFFFFF" }}>
                <span className="block text-3xl mb-4">{b.icon}</span>
                <h4 className="text-[1.1rem] font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>{b.title}</h4>
                <p className="text-[0.75rem] leading-[1.8] text-warm-gray">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Pricing/Tiers */}
      <section ref={tiersRef} className="py-24 px-6 md:px-16" style={{ backgroundColor: "var(--color-charcoal)", color: "var(--color-cream)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.6rem] tracking-[0.4em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>Franchise Packages</p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "var(--font-display)" }}>Investment Tier Packages</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {tiers.map((t) => (
              <div key={t.name} data-card className="p-10 border rounded-xl flex flex-col justify-between" style={{ borderColor: "rgba(184,150,90,0.25)", backgroundColor: "var(--color-dark)" }}>
                <div>
                  <span className="block text-[0.58rem] tracking-[0.25em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>{t.space}</span>
                  <h3 className="text-2xl font-light mb-4" style={{ fontFamily: "var(--font-display)" }}>{t.name}</h3>
                  <p className="text-[0.8rem] leading-[1.8] opacity-80 mb-6">{t.desc}</p>
                  <ul className="space-y-2 mb-8 text-[0.75rem]">
                    {t.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span style={{ color: "var(--color-gold)" }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-6" style={{ borderColor: "rgba(184,150,90,0.12)" }}>
                  <p className="text-xs opacity-50 uppercase tracking-wide">Investment Value</p>
                  <h4 className="text-2xl font-semibold mt-1" style={{ color: "var(--color-gold)" }}>{t.investment}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Inquiry Form */}
      <section ref={formRef} className="py-24 px-6 md:px-16" style={{ backgroundColor: "var(--color-dark)", color: "var(--color-cream)" }}>
        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="text-center mb-12">
                <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>Franchise Registration</p>
                <h2 data-reveal className="text-3xl font-light" style={{ fontFamily: "var(--font-display)" }}>Submit Partnership Inquiry</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div data-reveal>
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Full Name</label>
                  <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className={inputClass} style={inputStyle} placeholder="Full Name" />
                </div>
                <div data-reveal>
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Phone Number</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    className={inputClass} style={inputStyle} placeholder="+62 812-3456-7890" />
                </div>
                <div data-reveal>
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Email Address</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className={inputClass} style={inputStyle} placeholder="email@example.com" />
                </div>
                <div data-reveal>
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Investment Tier</label>
                  <select required value={form.package} onChange={e => setForm({ ...form, package: e.target.value })}
                    className={inputClass} style={{ ...inputStyle, backgroundColor: "var(--color-dark)" }}>
                    <option value="Express Kiosk">Express Kiosk (Rp 120M)</option>
                    <option value="Standard Café">Standard Café (Rp 180M)</option>
                  </select>
                </div>
                <div data-reveal>
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Target City Location</label>
                  <input required type="text" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}
                    className={inputClass} style={inputStyle} placeholder="e.g. Jakarta Barat" />
                </div>
                <div data-reveal>
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Available Capital Budget</label>
                  <input required type="text" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}
                    className={inputClass} style={inputStyle} placeholder="e.g. Rp 150 Million" />
                </div>
                <div data-reveal className="md:col-span-2">
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Additional Message</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4}
                    className={inputClass + " resize-none"} style={inputStyle}
                    placeholder="Briefly describe your proposed retail location or target market..." />
                </div>
              </div>

              <Button data-reveal type="submit"
                variant="gold"
                size="lg"
                className="w-full mt-6">
                Send Partnership Request
              </Button>
            </form>
          ) : (
            <div className="py-16 text-center max-w-md mx-auto">
              <span className="block text-4xl mb-8" style={{ color: "var(--color-gold)" }}>✦</span>
              <h2 className="text-3xl font-light mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
                Proposal Received!
              </h2>
              <p className="text-[0.8rem] leading-[2] opacity-80">
                Thank you, {form.name}. Our Partnership Relations Team will contact you at <strong>{form.phone}</strong> or <strong>{form.email}</strong> within 3 business days to discuss your proposed location in <strong>{form.city}</strong>.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
