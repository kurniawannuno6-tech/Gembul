import type { Metadata } from "next";
import "./globals.css";
import TransitionCurtain from "@/components/TransitionCurtain";

export const metadata: Metadata = {
  title: "Roti Gembul",
  description: "An epicurean blend of magnetic charisma, old world charm and relaxed elegance in the heart of Valletta.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap"
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
