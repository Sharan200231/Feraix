"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-morphism py-4 px-6 md:px-8 rounded-full border border-white/10 w-[min(90%,1200px)] transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/assets/logo.jpeg" 
              alt="Feraix Logo" 
              width={120} 
              height={40} 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-primary" : "text-gray-400 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2 bg-transparent border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-black transition-all duration-300 text-sm">
              Get Started
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Compact Side Drawer */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" 
          onClick={() => setMobileOpen(false)}
        />
        
        {/* Drawer content - Compact Floating Card */}
        <div 
          className={`absolute right-4 top-4 w-[280px] h-fit bg-[#0B0F1A]/95 backdrop-blur-xl border border-white/10 rounded-[32px] transition-all duration-500 flex flex-col p-8 ${
            mobileOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-between mb-12">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image 
                src="/assets/logo.jpeg" 
                alt="Feraix Logo" 
                width={100} 
                height={32} 
                className="h-6 sm:h-8 w-auto"
              />
            </Link>
            <button 
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6 text-primary" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-lg font-bold tracking-tight transition-all duration-300 ${
                  pathname === link.href ? "text-primary translate-x-1" : "text-gray-400 hover:text-primary"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <button className="w-full px-6 py-3 bg-primary text-black font-bold rounded-2xl hover:bg-primary/90 transition-all text-base shadow-[0_0_20px_rgba(251,221,8,0.2)]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
