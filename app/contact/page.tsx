"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/animate-ui/components/buttons/button";

gsap.registerPlugin(ScrollTrigger);

const outletsList = [
  { value: "senopati", label: "Roti Gembul Senopati (Jakarta)" },
  { value: "dago", label: "Roti Gembul Dago (Bandung)" },
  { value: "malioboro", label: "Roti Gembul Malioboro (Yogyakarta)" },
  { value: "gubeng", label: "Roti Gembul Gubeng (Surabaya)" },
  { value: "medan", label: "Roti Gembul Medan Baru (Medan)" },
  { value: "other", label: "Other / General Inquiry" }
];

const categoriesList = [
  { value: "product", label: "Product Quality (Roti Taste/Texture)" },
  { value: "service", label: "Staff Service & Hospitality" },
  { value: "cleanliness", label: "Outlet Cleanliness & Hygiene" },
  { value: "speed", label: "Service Speed & Waiting Time" },
  { value: "website", label: "Website / Digital Experience" },
  { value: "other", label: "Other Issues" }
];

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [activeTab, setActiveTab] = useState<"order" | "complaint">("order");
  const [submitted, setSubmitted] = useState(false);

  // Order Form State
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    mode: "pickup", // pickup | delivery | catering
    outlet: "senopati",
    address: "",
    details: ""
  });

  // Complaint Form State
  const [complaintForm, setComplaintForm] = useState({
    name: "",
    email: "",
    phone: "",
    outlet: "senopati",
    category: "product",
    date: "",
    details: ""
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroItems = heroRef.current?.querySelectorAll("[data-reveal]") ?? [];
      gsap.fromTo(heroItems, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.4 });

      const formItems = formRef.current?.querySelectorAll("[data-reveal]") ?? [];
      gsap.fromTo(formItems, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 80%", once: true } });

      const infoItems = infoRef.current?.querySelectorAll("[data-item]") ?? [];
      gsap.fromTo(infoItems, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: infoRef.current, start: "top 80%", once: true } });
    });

    return () => ctx.revert();
  }, []);

  // Refresh ScrollTrigger whenever the dynamic form inputs resize
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [orderForm.mode, activeTab]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    gsap.to(formRef.current, { opacity: 0, y: -20, duration: 0.4, ease: "power2.in", onComplete: () => {
      setSubmitted(true);
      gsap.fromTo(formRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
    }});
  };

  const inputClass = "w-full bg-white/5 border rounded-lg px-4 py-3.5 text-[0.82rem] outline-none transition-all duration-300 focus:border-[#b8965a] focus:bg-white/10 focus:ring-1 focus:ring-[#b8965a]/30";
  const selectClass = "w-full bg-white/5 border rounded-lg pl-4 pr-10 py-3.5 text-[0.82rem] outline-none transition-all duration-300 focus:border-[#b8965a] focus:bg-white/10 focus:ring-1 focus:ring-[#b8965a]/30 appearance-none cursor-pointer";
  const inputStyle = { borderColor: "rgba(184,150,90,0.25)", color: "var(--color-cream)" };
  const selectStyle = { borderColor: "rgba(184,150,90,0.25)", color: "var(--color-cream)", background: "var(--color-dark)" };

  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/contact-hero.jpg')" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,22,16,0.2) 0%, rgba(26,22,16,0.9) 100%)" }} />
        <div ref={heroRef} className="relative z-10 px-14 md:px-20 lg:px-32 pb-16">
          <p data-reveal className="text-[0.6rem] tracking-[0.45em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
            Get In Touch
          </p>
          <h1 data-reveal className="text-[clamp(3rem,7vw,6rem)] font-light leading-[1]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            Contact &<br />Inquiries
          </h1>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid md:grid-cols-[1fr_420px]" style={{ backgroundColor: "var(--color-dark)" }}>
        
        {/* Form Container */}
        <div ref={formRef} className="px-14 md:px-20 lg:px-28 py-24">
          {!submitted ? (
            <>
              {/* Tab Toggles */}
              <div data-reveal className="flex gap-8 mb-10 border-b pb-4" style={{ borderColor: "rgba(184,150,90,0.15)" }}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("order");
                  }}
                  className={`pb-3 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative outline-none cursor-pointer ${
                    activeTab === "order" ? "text-[var(--color-gold)] font-bold" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  Orders & Catering
                  {activeTab === "order" && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-gold)] rounded-full" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("complaint");
                  }}
                  className={`pb-3 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative outline-none cursor-pointer ${
                    activeTab === "complaint" ? "text-[var(--color-gold)] font-bold" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  Complaints & Feedback
                  {activeTab === "complaint" && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-gold)] rounded-full" />
                  )}
                </button>
              </div>

              {/* -------------------- ORDERS FORM -------------------- */}
              {activeTab === "order" && (
                <form onSubmit={handleSubmit}>
                  <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-8" style={{ color: "var(--color-gold)" }}>
                    Order & Catering Inquiry Form
                  </p>

                  <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                    
                    {/* Full Name */}
                    <div data-reveal>
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={orderForm.name} 
                        onChange={e => setOrderForm({ ...orderForm, name: e.target.value })}
                        className={inputClass} 
                        style={inputStyle} 
                        placeholder="Jean-Claude Dupont" 
                      />
                    </div>

                    {/* Email Address */}
                    <div data-reveal>
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={orderForm.email} 
                        onChange={e => setOrderForm({ ...orderForm, email: e.target.value })}
                        className={inputClass} 
                        style={inputStyle} 
                        placeholder="you@example.com" 
                      />
                    </div>

                    {/* WhatsApp / Phone */}
                    <div data-reveal>
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>WhatsApp / Phone</label>
                      <input 
                        required
                        type="tel" 
                        value={orderForm.phone} 
                        onChange={e => setOrderForm({ ...orderForm, phone: e.target.value })}
                        className={inputClass} 
                        style={inputStyle} 
                        placeholder="0812-3456-7890" 
                      />
                    </div>

                    {/* Preferred Date */}
                    <div data-reveal>
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Date of Event / Pickup</label>
                      <input 
                        required
                        type="date" 
                        value={orderForm.date} 
                        onChange={e => setOrderForm({ ...orderForm, date: e.target.value })}
                        className={inputClass} 
                        style={inputStyle} 
                      />
                    </div>

                    {/* Order Mode selector */}
                    <div data-reveal className="md:col-span-2">
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-3" style={{ color: "var(--color-gold)" }}>Order Mode</label>
                      <div className="flex gap-4 flex-wrap">
                        {[
                          { value: "pickup", label: "Store Pickup" },
                          { value: "delivery", label: "Home Delivery" },
                          { value: "catering", label: "Catering / Event" }
                        ].map((m) => (
                          <Button
                            key={m.value}
                            type="button"
                            onClick={() => setOrderForm({ ...orderForm, mode: m.value })}
                            variant={orderForm.mode === m.value ? "goldOutline" : "creamOutline"}
                            size="sm"
                            className={orderForm.mode === m.value ? "" : "opacity-50 hover:opacity-80"}
                          >
                            {m.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Outlet Selection */}
                    <div data-reveal className="md:col-span-2">
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Select Preparing Outlet</label>
                      <div className="relative">
                        <select 
                          value={orderForm.outlet} 
                          onChange={e => setOrderForm({ ...orderForm, outlet: e.target.value })}
                          className={selectClass} 
                          style={selectStyle}
                        >
                          {outletsList.map(o => (
                            <option key={o.value} value={o.value} style={{ background: "var(--color-dark)" }}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[var(--color-gold)] text-[10px]">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Conditional Delivery Address */}
                    {orderForm.mode === "delivery" && (
                      <div data-reveal className="md:col-span-2">
                        <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Delivery Address</label>
                        <textarea 
                          required
                          value={orderForm.address} 
                          onChange={e => setOrderForm({ ...orderForm, address: e.target.value })} 
                          rows={3}
                          className={inputClass + " resize-none"} 
                          style={inputStyle}
                          placeholder="Please type your complete delivery address here..." 
                        />
                      </div>
                    )}

                    {/* Order Details / Remarks */}
                    <div data-reveal className="md:col-span-2">
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Order Details & Menu Selections</label>
                      <textarea 
                        required
                        value={orderForm.details} 
                        onChange={e => setOrderForm({ ...orderForm, details: e.target.value })} 
                        rows={5}
                        className={inputClass + " resize-none"} 
                        style={inputStyle}
                        placeholder="Roti variants, flavors, quantities, package types, or specific custom instructions..." 
                      />
                    </div>

                  </div>

                  <Button 
                    data-reveal 
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="mt-12 cursor-pointer"
                  >
                    Submit Order Request
                  </Button>
                </form>
              )}

              {/* -------------------- COMPLAINTS FORM -------------------- */}
              {activeTab === "complaint" && (
                <form onSubmit={handleSubmit}>
                  <p data-reveal className="text-[0.6rem] tracking-[0.4em] uppercase mb-8" style={{ color: "var(--color-gold)" }}>
                    Complaints & Feedback Form
                  </p>

                  <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                    
                    {/* Full Name */}
                    <div data-reveal>
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={complaintForm.name} 
                        onChange={e => setComplaintForm({ ...complaintForm, name: e.target.value })}
                        className={inputClass} 
                        style={inputStyle} 
                        placeholder="Jean-Claude Dupont" 
                      />
                    </div>

                    {/* Email Address */}
                    <div data-reveal>
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={complaintForm.email} 
                        onChange={e => setComplaintForm({ ...complaintForm, email: e.target.value })}
                        className={inputClass} 
                        style={inputStyle} 
                        placeholder="you@example.com" 
                      />
                    </div>

                    {/* WhatsApp / Phone */}
                    <div data-reveal>
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>WhatsApp / Phone</label>
                      <input 
                        required
                        type="tel" 
                        value={complaintForm.phone} 
                        onChange={e => setComplaintForm({ ...complaintForm, phone: e.target.value })}
                        className={inputClass} 
                        style={inputStyle} 
                        placeholder="0812-3456-7890" 
                      />
                    </div>

                    {/* Date of Visit */}
                    <div data-reveal>
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Date of Visit / Incident</label>
                      <input 
                        required
                        type="date" 
                        value={complaintForm.date} 
                        onChange={e => setComplaintForm({ ...complaintForm, date: e.target.value })}
                        className={inputClass} 
                        style={inputStyle} 
                      />
                    </div>

                    {/* Target Outlet */}
                    <div data-reveal className="md:col-span-2">
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Select Outlet</label>
                      <div className="relative">
                        <select 
                          value={complaintForm.outlet} 
                          onChange={e => setComplaintForm({ ...complaintForm, outlet: e.target.value })}
                          className={selectClass} 
                          style={selectStyle}
                        >
                          {outletsList.map(o => (
                            <option key={o.value} value={o.value} style={{ background: "var(--color-dark)" }}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[var(--color-gold)] text-[10px]">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Complaint/Feedback Category */}
                    <div data-reveal className="md:col-span-2">
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Feedback Category</label>
                      <div className="relative">
                        <select 
                          value={complaintForm.category} 
                          onChange={e => setComplaintForm({ ...complaintForm, category: e.target.value })}
                          className={selectClass} 
                          style={selectStyle}
                        >
                          {categoriesList.map(c => (
                            <option key={c.value} value={c.value} style={{ background: "var(--color-dark)" }}>
                              {c.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[var(--color-gold)] text-[10px]">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Message Details */}
                    <div data-reveal className="md:col-span-2">
                      <label className="block text-[0.58rem] tracking-[0.3em] uppercase mb-2" style={{ color: "var(--color-gold)" }}>Feedback & Suggestions Description</label>
                      <textarea 
                        required
                        value={complaintForm.details} 
                        onChange={e => setComplaintForm({ ...complaintForm, details: e.target.value })} 
                        rows={5}
                        className={inputClass + " resize-none"} 
                        style={inputStyle}
                        placeholder="Please describe your experience or suggestions in detail..." 
                      />
                    </div>

                  </div>

                  <Button 
                    data-reveal 
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="mt-12 cursor-pointer"
                  >
                    Submit Feedback
                  </Button>
                </form>
              )}
            </>
          ) : (
            /* -------------------- SUCCESS SCREEN -------------------- */
            <div className="py-16 text-center max-w-md mx-auto">
              <span className="block text-4xl mb-8 animate-pulse" style={{ color: "var(--color-gold)" }}>✦</span>
              {activeTab === "order" ? (
                <>
                  <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-light mb-6"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
                    Order Request Received!
                  </h2>
                  <p className="text-[0.8rem] leading-[2] mb-8" style={{ color: "var(--color-cream)", opacity: 0.7 }}>
                    Thank you, <strong className="text-white">{orderForm.name || "Gembudies"}</strong>. Your bulk order request has been received. 
                    Our representative will review your order details and contact you via WhatsApp/Email shortly to verify availability and coordinates.
                  </p>
                  <Button
                    variant="creamOutline"
                    onClick={() => {
                      setSubmitted(false);
                      setOrderForm({
                        name: "",
                        email: "",
                        phone: "",
                        date: "",
                        time: "",
                        mode: "pickup",
                        outlet: "senopati",
                        address: "",
                        details: ""
                      });
                    }}
                  >
                    Send Another Inquiry
                  </Button>
                </>
              ) : (
                <>
                  <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-light mb-6"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
                    Feedback Submitted
                  </h2>
                  <p className="text-[0.8rem] leading-[2] mb-8" style={{ color: "var(--color-cream)", opacity: 0.7 }}>
                    Thank you, <strong className="text-white">{complaintForm.name || "Gembudies"}</strong>. 
                    We sincerely value your thoughts. Your feedback has been forwarded to our management team for review and response. 
                    We strive to consistently improve Roti Gembul!
                  </p>
                  <Button
                    variant="creamOutline"
                    onClick={() => {
                      setSubmitted(false);
                      setComplaintForm({
                        name: "",
                        email: "",
                        phone: "",
                        outlet: "senopati",
                        category: "product",
                        date: "",
                        details: ""
                      });
                    }}
                  >
                    Submit New Feedback
                  </Button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Info panel */}
        <div ref={infoRef} className="py-24 px-10 border-l" style={{ backgroundColor: "#fbb71d", borderColor: "rgba(99,40,22,0.15)" }}>
          {[
            { title: "Location", lines: ["Roti Gembul", "Jl. Soekarno Hatta, Drojogan 05/03", "Bumirejo, Mungkid, Magelang", "Jawa Tengah"] },
            { title: "Opening Hours", lines: ["Sunday - Monday", "from 10:00 am to 10.00 pm"] },
            { title: "Contact", lines: ["gembonggembul.id@gmail.com", "+62 852-2292-8866"] },
            { title: "Delivery Partners", lines: ["GoFood, GrabFood", "ShopeeFood"] },
          ].map((block) => (
            <div key={block.title} data-item className="mb-12 pb-12 border-b last:border-0 last:mb-0 last:pb-0"
              style={{ borderColor: "rgba(99,40,22,0.12)" }}>
              <h4 className="text-[0.58rem] tracking-[0.35em] uppercase mb-5" style={{ color: "var(--color-charcoal)", opacity: 0.9 }}>{block.title}</h4>
              {block.lines.map((line, i) => (
                <p key={i} className="text-[0.75rem] leading-[2]" style={{ color: "var(--color-charcoal)", opacity: 0.85 }}>
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
