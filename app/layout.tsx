import type { Metadata } from "next";
import "./globals.css";
import TransitionCurtain from "@/components/TransitionCurtain";

export const metadata: Metadata = {
  title: "Roti Gembul",
  description: "Pelopor Roti Gembong Kekinian No.1 di Indonesia. Kelembutan roti gembul panggang segar dengan aneka isian rasa lezat di Magelang.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        <TransitionCurtain />
        {children}
      </body>
    </html>
  );
}
