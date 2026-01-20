import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lugesa plus, s.r.o. - Kovovýroba a kovové konštrukcie",
  description: "Výroba kovových konštrukcií, brán, plotov, zábradlí a schodísk na mieru. Kvalitná kovovýroba od roku 2011.",
  icons: {
    icon: "/web/logo a favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll>
          <Navigation />
          {children}
          <Footer />
          <CookieBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
