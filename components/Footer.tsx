"use client";
import Link from "next/link";

const merchants = [
  {
    name: "GoFood",
    color: "#EE2737",
    href: "https://gofood.link/",
    image: "/images/GoFood Logo.png"
  },
  {
    name: "GrabFood",
    color: "#00B14F",
    href: "https://food.grab.com/",
    image: "/images/GrabFood Logo.png"
  },
  {
    name: "ShopeeFood",
    color: "#EE4D2D",
    href: "https://shopee.co.id/m/shopeefood",
    image: "/images/ShoopeFood Logo.png"
  }
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="px-10 md:px-20 pt-20 pb-10 border-t"
      style={{ backgroundColor: "var(--color-gold)", borderColor: "rgba(99,40,22,0.18)" }}
    >
      <div className="grid md:grid-cols-4 gap-14 mb-16">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link
            href="/"
            className="block mb-5 transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src="/images/LogoGembulPutih.png"
              alt="Roti Gembul Logo"
              className="h-10 w-auto object-contain select-none pointer-events-none"
            />
          </Link>
          <div className="flex gap-3 mt-7">
            <a
              href="https://www.instagram.com/rotigembonggembul.id?igsh=MWluMzBlOXc5Y2hpbg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border rounded-full flex items-center justify-center transition-all duration-300 group hover:-translate-y-0.5 hover:border-[var(--color-charcoal)]"
              style={{ borderColor: "rgba(99,40,22,0.25)", cursor: "pointer" }}
            >
              <img
                src="/images/instagram-logo.png"
                alt="Instagram"
                className="h-4.5 w-4.5 object-contain transition-all duration-300 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </a>
            <a
              href="https://www.tiktok.com/@rotigembonggembul.id?_r=1&_t=ZS-973prLYndJa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border rounded-full flex items-center justify-center transition-all duration-300 group hover:-translate-y-0.5 hover:border-[var(--color-charcoal)]"
              style={{ borderColor: "rgba(99,40,22,0.25)", cursor: "pointer" }}
            >
              <img
                src="/images/tiktok-logo.png"
                alt="TikTok"
                className="h-4.5 w-4.5 object-contain transition-all duration-300 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </a>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h5 className="text-[0.58rem] tracking-[0.3em] uppercase mb-5" style={{ color: "var(--color-charcoal)" }}>
            Contact Us
          </h5>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:gembonggembul.id@gmail.com"
                className="text-[0.73rem] tracking-[0.04em] font-bold transition-opacity duration-300 hover:opacity-100 block"
                style={{ color: "var(--color-charcoal)", opacity: 0.85, cursor: "pointer" }}
              >
                gembonggembul.id@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+6285222928866"
                className="text-[0.73rem] tracking-[0.04em] font-bold transition-opacity duration-300 hover:opacity-100 block"
                style={{ color: "var(--color-charcoal)", opacity: 0.85, cursor: "pointer" }}
              >
                +62 852-2292-8866
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h5 className="text-[0.58rem] tracking-[0.3em] uppercase mb-5" style={{ color: "var(--color-charcoal)" }}>
            Location
          </h5>
          <address className="not-italic text-[0.73rem] leading-[2.1] font-bold" style={{ color: "var(--color-charcoal)", opacity: 0.85 }}>
            Roti Gembul<br />
            Jl. Soekarno Hatta, Drojogan 05/03<br />
            Bumirejo, Mungkid, Magelang<br />
            Jawa Tengah
          </address>
        </div>

        {/* Hours */}
        <div>
          <h5 className="text-[0.58rem] tracking-[0.3em] uppercase mb-5" style={{ color: "var(--color-charcoal)" }}>
            Operational Outlet
          </h5>
          <p className="text-[0.73rem] leading-[2.1] font-bold mb-6" style={{ color: "var(--color-charcoal)", opacity: 0.85 }}>
            Sunday - Monday<br />
            10.00 - 22.00
          </p>
          <div>
            <h6 className="text-[0.52rem] tracking-[0.2em] uppercase font-bold mb-3.5" style={{ color: "var(--color-charcoal)", opacity: 0.9 }}>
              Delivery Partners
            </h6>
            <div className="flex flex-wrap gap-4 items-center">
              {merchants.map((m) => (
                <a
                  key={m.name}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-10 w-auto object-contain transition-all duration-300 grayscale opacity-80 hover:grayscale-0 hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t"
        style={{ borderColor: "rgba(99,40,22,0.15)" }}
      >
        <p className="text-[0.63rem] tracking-[0.07em]" style={{ color: "var(--color-charcoal)", opacity: 0.65 }}>
          © 2024 Roti Gembul. All rights reserved.
        </p>
        <a
          href="#"
          className="text-[0.63rem] tracking-[0.07em] transition-opacity duration-300 hover:opacity-80"
          style={{ color: "var(--color-charcoal)", opacity: 0.65 }}
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
