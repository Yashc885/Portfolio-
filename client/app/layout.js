'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          src="https://cdn.tailwindcss.com"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
