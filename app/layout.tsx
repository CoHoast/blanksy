import type { Metadata } from "next";
import { Inter, Bebas_Neue, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Blanksy — Art for Real Walls, Real People",
  description: "Discover 10,000+ original art designs. Download instantly or order museum-quality prints. Gallery-worthy art, priced for everyone.",
  keywords: ["art prints", "digital downloads", "wall art", "posters", "home decor", "affordable art"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable} ${instrumentSerif.variable} font-sans antialiased bg-paper text-ink`}>
        <div className="h-1 bg-pop" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div className="h-1 bg-pop" />
      </body>
    </html>
  );
}
