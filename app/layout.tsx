import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feraix",
  description: "Next-gen technology solutions for web, mobile, and cloud.",
};

import GalaxyBackground from "@/components/three/GalaxyBackground";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-transparent text-foreground">
        {/* Global animated background for all pages */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <GalaxyBackground />
        </div>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
