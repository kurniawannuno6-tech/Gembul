"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/PageLayout";

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// TEAM MEMBERS — update name, role, bio and image for each person
//
// Images go in: /public/images/
// Recommended size: 600 × 800 px (portrait, 3:4 ratio)
// Tips: professional headshots or candid kitchen/service shots
// ============================================================================
const team = [
  {
    name: "Chef Isabelle Moreau",
    role: "Executive Chef",
    img: "/images/team-chef.jpg",         // 600 × 800 px portrait
    bio: "Trained in Paris and Tokyo, Isabelle brings 20 years of mastery to every plate — balancing classical technique with daring innovation.",
  },
  {
    name: "Marco Vella",
    role: "Head Sommelier",
    img: "/images/team-sommelier.jpg",     // 600 × 800 px portrait
    bio: "With a cellar spanning four continents, Marco curates pairings that elevate each dish into an unforgettable sensory narrative.",
  },
  {
    name: "Sophia D'Angelo",
    role: "Pastry Chef",
    img: "/images/team-pastry.jpg",        // 600 × 800 px portrait
    bio: "A disciple of precision and beauty, Sophia's desserts are edible sculptures — stories told in chocolate, caramel, and spun sugar.",
  },
];

export default function AboutPage() {
  const heroRef   = useRef<HTMLDivElement>(null);
  const storyRef  = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero text fades up on load
    const heroItems = heroRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(heroItems, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.4 });

    // Story section: image clips in, text slides in
    const storyEl = storyRef.current;
    if (storyEl) {
      const img = storyEl.querySelector("img");
      if (img) {
        gsap.fromTo(img,
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "power4.inOut",
            scrollTrigger: { trigger: storyEl, start: "top 75%", once: true } }
        );
      }
    }
    const storyItems = storyRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(storyItems, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: storyRef.current, start: "top 75%", once: true } });

    // Philosophy pillars fade up
    const valItems = valuesRef.current?.querySelectorAll("[data-item]") ?? [];
    gsap.fromTo(valItems, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: valuesRef.current, start: "top 80%", once: true } });

    // Team cards stagger up
    const teamCards = teamRef.current?.querySelectorAll("[data-card]") ?? [];
    gsap.fromTo(teamCards, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: teamRef.current, start: "top 80%", once: true } });
  }, []);

  return (
    <PageLayout>

      {/* =====================================================================
          ABOUT PAGE HERO BANNER
          - Place your image in: /public/images/about-hero.jpg
          - Recommended size: 1920 × 1080 px landscape
          - Tips: wide interior shot, candlelit ambience, or a table setting
          ===================================================================== */}
      <div className="relative h-[60vh] min-h-[440px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,22,16,0.25) 0%, rgba(26,22,16,0.88) 100%)" }} />
        <div ref={heroRef} className="relative z-10 px-14 md:px-20 lg:px-32 pb-16">
          <p data-reveal className="text-[0.6rem] tracking-[0.45em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
            Our Story
          </p>
          <h1 data-reveal className="text-[clamp(3rem,7vw,6rem)] font-light leading-[1]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            About Roti Gembul
          </h1>
        </div>
      </div>

      {/* Story section — image left, text right */}
      <section ref={storyRef} className="grid md:grid-cols-2 min-h-[80vh]">

        {/* ===================================================================
            ABOUT STORY IMAGE
            - Place your image in: /public/images/about-story.jpg
            - Recommended size: 900 × 1100 px portrait
            - Tips: interior detail — table candles, decor, architectural shot
            =================================================================== */}
        <div className="relative overflow-hidden min-h-[400px] md:min-h-0">
          <img src="/images/about-story.jpg" alt="Roti Gembul Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-5 border pointer-events-none" style={{ borderColor: "rgba(184,150,90,0.25)" }} />
        </div>

        {/* Story text panel */}
        <div className="flex flex-col justify-center px-10 md:px-20 py-24" style={{ backgroundColor: "var(--color-charcoal)" }}>
          <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-6" style={{ color: "var(--color-gold)" }}>
            Est. 2018 · Valletta, Malta
          </p>
          <h2 data-reveal className="text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15] mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            A Portal to<br />Culinary Excellence
          </h2>
          <p data-reveal className="text-[0.8rem] leading-[2.1] mb-5" style={{ color: "var(--color-cream)", opacity: 0.65 }}>
            Located in the heart of Valletta alongside the majestic Grandmaster&apos;s Palace, Roti Gembul is your
            gateway to international dining crafted with intention, passion, and artistry.
          </p>
          <p data-reveal className="text-[0.8rem] leading-[2.1] mb-5" style={{ color: "var(--color-cream)", opacity: 0.65 }}>
            Our journey began in 2018 when Executive Chef Isabelle Moreau chose Valletta as the canvas for
            her most ambitious project — a restaurant that would honour the island&apos;s storied past while
            pushing the boundaries of contemporary fine dining.
          </p>
          <p data-reveal className="text-[0.8rem] leading-[2.1]" style={{ color: "var(--color-cream)", opacity: 0.65 }}>
            Every detail — from the architecture of a dish to the warmth of candlelight — is curated to
            transport you to a world where time moves slowly and pleasure reigns supreme.
          </p>
        </div>
      </section>

      {/* Philosophy pillars */}
      <section ref={valuesRef} className="py-28 px-14 md:px-20 lg:px-32" style={{ backgroundColor: "var(--color-dark)" }}>
        <div className="text-center mb-20">
          <p className="text-[0.6rem] tracking-[0.45em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>What Drives Us</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-light" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            Our Philosophy
          </h2>
        </div>
        {/* Add/remove pillars here as needed */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            { title: "Seasonal Ingredients", icon: "✦", text: "We source the finest seasonal produce from local farmers and trusted international suppliers, letting nature dictate our menu." },
            { title: "Artisan Craft",         icon: "✦", text: "Every technique applied in our kitchen — from classical French methods to contemporary innovation — honours the craft of cooking." },
            { title: "Gracious Hospitality",  icon: "✦", text: "Our team anticipates every need with warmth and discretion, ensuring each visit feels like a private celebration." },
          ].map((v) => (
            <div key={v.title} data-item className="text-center">
              <span className="block text-2xl mb-6" style={{ color: "var(--color-gold)" }}>{v.icon}</span>
              <h3 className="text-[1.1rem] font-light mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>{v.title}</h3>
              <p className="text-[0.75rem] leading-[2]" style={{ color: "var(--color-cream)", opacity: 0.55 }}>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team section */}
      <section ref={teamRef} className="py-28 px-14 md:px-20 lg:px-32" style={{ backgroundColor: "var(--color-charcoal)" }}>
        <div className="text-center mb-20">
          <p className="text-[0.6rem] tracking-[0.45em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>The People Behind the Magic</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-light" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            Meet the Team
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {team.map((member) => (
            <div key={member.name} data-card className="group">
              {/* Team member photo — see image sizes in the team array above */}
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <img src={member.img} alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(26,22,16,0.7) 100%)" }} />
              </div>
              <p className="text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>{member.role}</p>
              <h3 className="text-[1.3rem] font-light mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>{member.name}</h3>
              <p className="text-[0.73rem] leading-[1.9]" style={{ color: "var(--color-cream)", opacity: 0.55 }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
