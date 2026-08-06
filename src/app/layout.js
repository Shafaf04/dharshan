import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "DharshanSkyline Contracting | Premium Luxury Construction & Design",
  description: "DharshanSkyline Contracting delivers reliable residential, commercial, and industrial construction solutions with precision, quality, and long-term value.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <div className="bg-grid-overlay"></div>
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
