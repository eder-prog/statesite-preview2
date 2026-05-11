import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "State Roofing & Carpentry — Trusted MA Roofing & General Contracting",
  description:
    "Family-operated Massachusetts roofing & general contractor since 2006. Licensed, insured. Roofing, siding, decking, remodeling, framing. 24/7 emergency response.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-charcoal">{children}</body>
    </html>
  );
}
