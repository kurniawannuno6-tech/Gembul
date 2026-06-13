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
    name: "Juniar Jais Subiyatto (Yuyun)",
    role: "Founder & President",
    img: "/images/team-chef.jpg",
    bio: "Formulator utama resep Roti Gembong Gembul yang memiliki dedikasi penuh terhadap inovasi kuliner tradisional Indonesia.",
  },
  {
    name: "Nadya Nafisa Fathin",
    role: "Co-Founder & Vice President",
    img: "/images/team-sommelier.jpg",
    bio: "Mengembangkan standar operasional dan konsep open kitchen, menjamin konsistensi rasa dan kebersihan di 200+ gerai seluruh Indonesia.",
  },
];

export default function AboutPage() {
  const heroRef   = useRef<HTMLDivElement>(null);
  const storyRef  = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text fades up on load
      const heroItems = heroRef.current?.querySelectorAll("[data-reveal]") ?? [];
      gsap.fromTo(heroItems, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.4 });

      // Story section: text fades up on scroll
      const storyItems = storyRef.current?.querySelectorAll("[data-reveal]") ?? [];
      gsap.fromTo(storyItems, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: storyRef.current, start: "top 75%", once: true } });

      // Philosophy pillars fade up
      const valItems = valuesRef.current?.querySelectorAll("[data-item]") ?? [];
      gsap.fromTo(valItems, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: valuesRef.current, start: "top 80%", once: true } });

      // Team cards stagger up
      const teamCards = teamRef.current?.querySelectorAll("[data-card]") ?? [];
      gsap.fromTo(teamCards, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: teamRef.current, start: "top 80%", once: true } });
    });

    return () => ctx.revert();
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

      <section
        ref={storyRef}
        className="relative min-h-[80vh] flex items-center py-24 overflow-hidden"
        style={{
          paddingLeft: "clamp(4rem, 20vw, 24rem)",
          paddingRight: "clamp(2rem, 5vw, 6rem)"
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-story.png')" }}
        />

        {/* Dark gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(26,22,16,0.85) 0%, rgba(26,22,16,0.6) 50%, rgba(26,22,16,0.85) 100%)",
          }}
        />

        {/* Story text panel */}
        <div className="relative z-10 max-w-xl w-full">
          <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-6" style={{ color: "var(--color-gold)", opacity: 0.9 }}>
            Est. 2021
          </p>
          <h2 data-reveal className="text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15] mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            Kisah Kehangatan<br />Roti Gembul
          </h2>
          <p data-reveal className="text-[0.8rem] leading-[2.1] mb-5" style={{ color: "var(--color-cream)", opacity: 0.85 }}>
            Berawal di Magelang, Jawa Tengah, Roti Gembong Gembul lahir untuk menyajikan rasa roti gembong tradisional dengan tekstur super lembut dan variasi rasa modern yang lezat.
          </p>
          <p data-reveal className="text-[0.8rem] leading-[2.1] mb-5" style={{ color: "var(--color-cream)", opacity: 0.85 }}>
            Didirikan oleh sepasang suami istri, Yuyun dan Nadya, kami berkomitmen pada kualitas roti fresh-baked setiap hari. Konsep Show Kitchen kami memungkinkan pelanggan melihat proses pengolahan roti secara langsung dan higienis.
          </p>
          <p data-reveal className="text-[0.8rem] leading-[2.1]" style={{ color: "var(--color-cream)", opacity: 0.85 }}>
            Kini, kelembutan Roti Gembul telah menjangkau hati jutaan masyarakat Indonesia melalui lebih dari 200 gerai yang beroperasi aktif dengan kehangatan rasa sejati.
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
            { title: "Premium Ingredients", icon: "✦", text: "Kami menggunakan bahan-bahan berkualitas tinggi pilihan untuk menghasilkan adonan roti gembong yang selalu empuk dan gurih." },
            { title: "Freshly Baked",        icon: "✦", text: "Setiap roti dipanggang segar setiap hari langsung di dapur terbuka gerai kami untuk menjamin cita rasa terbaik." },
            { title: "Warm Hospitality",     icon: "✦", text: "Kami menyambut setiap Gembudies dengan senyuman dan pelayanan yang ramah, menghadirkan kebahagiaan di setiap kunjungan." },
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
      <section ref={teamRef} className="py-28 px-14 md:px-20 lg:px-32" style={{ backgroundColor: "#fbb71d" }}>
        <div className="text-center mb-20">
          <p className="text-[0.6rem] tracking-[0.45em] uppercase mb-4" style={{ color: "var(--color-charcoal)", opacity: 0.9 }}>The People Behind the Magic</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-light" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
            Meet the Team
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {team.map((member) => (
            <div key={member.name} data-card className="group">
              {/* Team member photo — see image sizes in the team array above */}
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <img src={member.img} alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(26,22,16,0.7) 100%)" }} />
              </div>
              <p className="text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-charcoal)", opacity: 0.9 }}>{member.role}</p>
              <h3 className="text-[1.3rem] font-light mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>{member.name}</h3>
              <p className="text-[0.73rem] leading-[1.9]" style={{ color: "var(--color-charcoal)", opacity: 0.85 }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
