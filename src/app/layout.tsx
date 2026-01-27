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
  description: "Výroba kovových konštrukcií, brán, plotov, zábradlí a schodísk na mieru. Výroba plynových skriniek",
  keywords: "zábradlie nerezové, nerezové zabradlia, plynové skrinky, skrinky na plyn, oceľové konštrukcie, nerezové výrobky, nerezové zábradlie, nerezové brány, hliníkové brány, nerezové profily, nerezové plechy, nerezové zábradlia, nerezové zábradlie, nerezové, nerezové ploty, kovovýroba, zváranie co2, zváranie argónom, zváranie nereze, výroba nerezových zábradlí, výroba kovových zábradlí, výroba kovových konštrukcií, ploty, brány, mreže, markízy, prístrešky, schodiská, drobné kovové konštrukcie, výrobky z plechu, zváranie nerezovej ocele, zváranie hliníka, plynové skrinky, skrinky na plyn, skrinky na plynomer, kovovýroba, zváranie hliníka, výroba nerezových zábradlí, zábradlia, kovové konštrukcie, schodištia, prístrešky",
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
