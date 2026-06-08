"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const jobs = [
  {
    title: "Outlet Store Manager",
    type: "Full-Time",
    location: "Jakarta & Yogyakarta",
    desc: "Lead store operations, manage local service teams, handle daily cash controls, and ensure customer service quality meets Roti Gembul standards.",
  },
  {
    title: "Senior Bread Baker",
    type: "Full-Time",
    location: "Jakarta, Bandung, & Surabaya",
    desc: "Oversee raw bread dough fermentation, baking processes, oven settings, and maintain strict consistency in texture and golden crust quality.",
  },
  {
    title: "Service & Cashier Staff",
    type: "Part-Time / Full-Time",
    location: "All Outlets",
    desc: "Greet guests, handle order transactions, explain menu selections, slice bread, and maintain clean counter presentation.",
  },
  {
    title: "Central Kitchen Crew",
    type: "Full-Time",
    location: "Bandung (Central Kitchen)",
    desc: "Prepare bulk raw material formulations, weigh ingredients accurately, and handle distribution logistics for regional store delivery.",
  },
];

export default function CareerPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "Outlet Store Manager", exp: "1-2 Years", message: "" });
  const [cvName, setCvName] = useState("");

  useEffect(() => {
    const heroItems = heroRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(heroItems, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.4 });

    const jobCards = jobsRef.current?.querySelectorAll("[data-card]") ?? [];
    gsap.fromTo(jobCards, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: jobsRef.current, start: "top 80%", once: true },
    });

    const formItems = formRef.current?.querySelectorAll("[data-reveal]") ?? [];
    gsap.fromTo(formItems, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: formRef.current, start: "top 80%", once: true },
    });
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvName(e.target.files[0].name);
    }
  };

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
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,22,16,0.2) 0%, rgba(26,22,16,0.9) 100%)" }} />
        <div ref={heroRef} className="relative z-10 px-14 md:px-20 lg:px-32 pb-16">
          <p data-reveal className="text-[0.6rem] tracking-[0.45em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
            Join Our Team
          </p>
          <h1 data-reveal className="text-[clamp(3rem,7vw,6rem)] font-light leading-[1]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            Careers &<br />Vacancies
          </h1>
        </div>
      </div>

      {/* Section 1: Job List */}
      <section ref={jobsRef} className="py-24 px-6 md:px-16" style={{ backgroundColor: "var(--color-cream)", color: "var(--color-dark)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.6rem] tracking-[0.4em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>Active Job Openings</p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "var(--font-display)" }}>Current Vacancies</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((j) => (
              <div key={j.title} data-card className="p-8 border rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: "rgba(26,22,16,0.06)", backgroundColor: "#FFFFFF" }}>
                <div>
                  <div className="flex justify-between items-baseline gap-4 mb-3">
                    <h3 className="text-xl font-medium" style={{ fontFamily: "var(--font-display)" }}>{j.title}</h3>
                    <span className="text-[0.58rem] tracking-[0.15em] uppercase opacity-60 font-semibold">{j.type}</span>
                  </div>
                  <p className="text-[0.75rem] leading-[1.8] text-warm-gray mb-6">{j.desc}</p>
                </div>
                <div className="border-t pt-4 flex justify-between items-center" style={{ borderColor: "rgba(26,22,16,0.06)" }}>
                  <span className="text-[0.65rem] font-medium text-warm-gray/70">📍 {j.location}</span>
                  <a href="#apply" className="text-[0.63rem] tracking-[0.1em] uppercase font-semibold hover:text-[var(--color-gold)] transition-colors duration-300">
                    Apply Now ➔
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Application Form */}
      <section id="apply" ref={formRef} className="py-24 px-6 md:px-16" style={{ backgroundColor: "var(--color-dark)", color: "var(--color-cream)" }}>
        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="text-center mb-12">
                <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>Apply Today</p>
                <h2 data-reveal className="text-3xl font-light" style={{ fontFamily: "var(--font-display)" }}>Job Application Form</h2>
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
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Target Role Position</label>
                  <select required value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}
                    className={inputClass} style={{ ...inputStyle, backgroundColor: "var(--color-dark)" }}>
                    {jobs.map((j) => (
                      <option key={j.title} value={j.title}>{j.title}</option>
                    ))}
                  </select>
                </div>
                <div data-reveal>
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Professional Experience</label>
                  <select required value={form.exp} onChange={e => setForm({ ...form, exp: e.target.value })}
                    className={inputClass} style={{ ...inputStyle, backgroundColor: "var(--color-dark)" }}>
                    <option value="No Experience">No Experience (Fresh Graduate)</option>
                    <option value="1-2 Years">1 - 2 Years</option>
                    <option value="3+ Years">3+ Years</option>
                  </select>
                </div>

                {/* Styled CV Upload Field */}
                <div data-reveal className="flex flex-col justify-end">
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Upload CV / Resume</label>
                  <div className="relative border border-dashed rounded-lg px-4 py-3.5 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/5" style={{ borderColor: "rgba(184,150,90,0.3)" }}>
                    <input required type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <span className="text-[0.72rem] opacity-70 truncate max-w-[200px]">
                      {cvName ? `📄 ${cvName}` : "📁 Choose PDF or DOC"}
                    </span>
                  </div>
                </div>

                <div data-reveal className="md:col-span-2">
                  <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Short Cover Letter</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4}
                    className={inputClass + " resize-none"} style={inputStyle}
                    placeholder="Tell us briefly why you want to join Roti Gembul..." />
                </div>
              </div>

              <button data-reveal type="submit"
                className="w-full mt-6 text-[0.68rem] tracking-[0.25em] uppercase px-12 py-4 transition-all duration-300 hover:opacity-85"
                style={{ backgroundColor: "var(--color-gold)", color: "var(--color-dark)", cursor: "pointer" }}>
                Submit Application
              </button>
            </form>
          ) : (
            <div className="py-16 text-center max-w-md mx-auto">
              <span className="block text-4xl mb-8" style={{ color: "var(--color-gold)" }}>✦</span>
              <h2 className="text-3xl font-light mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
                Application Submitted!
              </h2>
              <p className="text-[0.8rem] leading-[2] opacity-80">
                Thank you for applying, {form.name}. We have received your application for the <strong>{form.role}</strong> vacancy. Our recruitment team will review your CV (<strong>{cvName}</strong>) and get back to you within 5 business days.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
