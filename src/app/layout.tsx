import type { Metadata } from "next";
import { Noto_Sans, Cormorant_Garamond, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tamil Escorts | Premium Tamil Profiles",
  description:
    "Tamil Escorts — premium Tamil profiles: regular, artists, celebrity, models, housewife, college girls, actress. South Indian theme, trusted and discreet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSans.variable} ${cormorant.variable} ${playfair.variable} ${dancingScript.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Navigation />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
