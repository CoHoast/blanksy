import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Blanksy — Premium Art Prints & Digital Downloads",
  description: "Discover 10,000+ original art designs. Download instantly or order museum-quality prints delivered to your door.",
  keywords: ["art prints", "digital downloads", "wall art", "posters", "home decor"],
};

function ConditionalClerkProvider({ children }: { children: React.ReactNode }) {
  const hasClerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
                      !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder');
  
  if (hasClerkKey) {
    return <ClerkProvider>{children}</ClerkProvider>;
  }
  
  return <>{children}</>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConditionalClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-cream text-charcoal`}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ConditionalClerkProvider>
  );
}
