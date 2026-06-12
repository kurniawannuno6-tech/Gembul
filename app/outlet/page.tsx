"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/animate-ui/components/buttons/button";

const outlets = [
  {
    id: "jakarta",
    city: "Jakarta Selatan",
    name: "Roti Gembul Senopati",
    address: "Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan 12190",
    phone: "+62 21-555-0192",
    hours: "08:00 AM - 10:00 PM",
    query: "Roti Gembul Senopati Jakarta",
  },
  {
    id: "bandung",
    city: "Bandung",
    name: "Roti Gembul Dago",
    address: "Jl. Ir. H. Juanda No. 102, Dago, Bandung 40132",
    phone: "+62 22-444-0283",
    hours: "08:00 AM - 10:00 PM",
    query: "Roti Gembul Dago Bandung",
  },
  {
    id: "yogyakarta",
    city: "Yogyakarta",
    name: "Roti Gembul Malioboro",
    address: "Jl. Malioboro No. 67, Sosromenduran, Yogyakarta 55271",
    phone: "+62 274-333-0199",
    hours: "07:00 AM - 11:00 PM",
    query: "Roti Gembul Malioboro Yogyakarta",
  },
  {
    id: "surabaya",
    city: "Surabaya",
    name: "Roti Gembul Gubeng",
    address: "Jl. Raya Gubeng No. 12, Gubeng, Surabaya 60281",
    phone: "+62 31-777-0238",
    hours: "08:00 AM - 10:00 PM",
    query: "Roti Gembul Gubeng Surabaya",
  },
  {
    id: "medan",
    city: "Medan",
    name: "Roti Gembul Medan Baru",
    address: "Jl. Dr. Mansyur No. 88, Medan Baru, Medan 20154",
    phone: "+62 61-999-0128",
    hours: "08:00 AM - 10:00 PM",
    query: "Roti Gembul Medan Baru",
  },
];

export default function OutletPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(outlets[0]);

  useEffect(() => {
    const heroItems = heroRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(heroItems, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.4 });

    const contentItems = contentRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(contentItems, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.6 });
  }, []);

  const selectOutlet = (outlet: typeof outlets[0]) => {
    if (outlet.id === active.id) return;
    setActive(outlet);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,22,16,0.2) 0%, rgba(26,22,16,0.9) 100%)" }} />
        <div ref={heroRef} className="relative z-10 px-14 md:px-20 lg:px-32 pb-16">
          <p data-reveal className="text-[0.6rem] tracking-[0.45em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
            Find Us Nearby
          </p>
          <h1 data-reveal className="text-[clamp(3rem,7vw,6rem)] font-light leading-[1]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            Our Outlets
          </h1>
        </div>
      </div>

      {/* Content Grid */}
      <div ref={contentRef} style={{ backgroundColor: "var(--color-dark)", color: "var(--color-cream)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid lg:grid-cols-12 gap-12">
          
          {/* Left: Outlet List Selector */}
          <div data-reveal className="lg:col-span-5 space-y-4">
            <p className="text-[0.6rem] tracking-[0.4em] uppercase mb-6" style={{ color: "var(--color-gold)" }}>
              Select Location
            </p>
            <div className="space-y-3">
              {outlets.map((o) => (
                <Button
                  key={o.id}
                  onClick={() => selectOutlet(o)}
                  variant="ghost"
                  hoverScale={1.01}
                  tapScale={0.98}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 block h-auto justify-start font-normal tracking-normal uppercase-none select-text ${
                    active.id === o.id
                      ? "shadow-lg"
                      : "hover:bg-[rgba(255,255,255,0.03)]"
                  }`}
                  style={{
                    backgroundColor: active.id === o.id ? "var(--color-charcoal)" : "transparent",
                    borderColor: active.id === o.id ? "var(--color-gold)" : "rgba(184,150,90,0.15)",
                  }}
                >
                  <span className="block text-[0.58rem] tracking-[0.25em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>
                    {o.city}
                  </span>
                  <h4 className="text-[1.1rem] font-medium mb-3" style={{ fontFamily: "var(--font-display)" }}>
                    {o.name}
                  </h4>
                  {active.id === o.id && (
                    <div className="text-[0.75rem] leading-[1.8] space-y-2 text-white/75 border-t pt-3" style={{ borderColor: "rgba(184,150,90,0.15)" }}>
                      <p>📍 {o.address}</p>
                      <p>📞 {o.phone}</p>
                      <p>🕒 {o.hours}</p>
                    </div>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Right: Map Embed */}
          <div data-reveal className="lg:col-span-7 flex flex-col h-[500px] lg:h-full min-h-[450px]">
            <p className="text-[0.6rem] tracking-[0.4em] uppercase mb-6" style={{ color: "var(--color-gold)" }}>
              Outlet Map
            </p>
            <div className="flex-1 w-full border rounded-xl overflow-hidden shadow-xl relative" style={{ borderColor: "rgba(184,150,90,0.25)" }}>
              <iframe
                key={active.id}
                title={active.name}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(active.query)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              />
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
