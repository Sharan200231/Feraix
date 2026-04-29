"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, } from "@/constants/animations";
import { ParallaxImage } from "./ParallaxSection";

export default function Footer() {
  return (
    <footer className="relative pt-12 sm:pt-20 pb-8 sm:pb-10 overflow-hidden">
      {/* Background Image (boosted parallax depth) */}
      <ParallaxImage offset={120} className="absolute inset-0 z-0">
        <Image
          src="/footer-bg.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </ParallaxImage>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image 
                src="/TransLogo.png" 
                alt="Feraix Logo" 
                width={150} 
                height={50} 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white leading-relaxed text-sm">
              Empowering businesses through cutting-edge technology and intelligent digital solutions. We transform visions into reality with precision and expertise.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://x.com/Feraix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
              >
                <span className="sr-only">X</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.244 2H21.5l-7.5 8.57L22 22h-6.828l-5.35-6.91L3.5 22H.243l8.02-9.16L2 2h6.828l4.84 6.29L18.244 2zm-2.4 18h1.9L8.16 4h-2l9.684 16z"/>
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/feraix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
              >
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="#0A66C2">
                  <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.66H9.37V9h3.41v1.56h.05c.47-.89 1.61-1.85 3.31-1.85 3.54 0 4.2 2.33 4.2 5.36v6.38zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM6.92 20.45H3.75V9h3.17v11.45z"/>
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/feraix_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
              >
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Projects", href: "/projects" },
                { name: "Careers", href: "#" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white hover:text-primary transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {["Web Development", "Software Development", "IT Consulting", "Cloud Solutions"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-white hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold">Dubai</span>
                  <span className="text-white">2703, Damac Park Tower DIFC, UAE</span>
                </div>
              </li>
              <li className="flex gap-4 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold">Sri Lanka</span>
                  <span className="text-white">No. 44, Varveset Place, Wellawatte, Colombo 06</span>
                </div>
              </li>
              <li className="flex gap-4 text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white">contact@feraix.tech</span>
              </li>
              <li className="flex gap-4 text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5">
                  <span className="text-white">+971 55 212 4675 (Dubai)</span>
                  <span className="text-white">+94 77 740 0036 (Sri Lanka)</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 sm:pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6"
        >
          <p className="text-white text-xs">
            © 2026 Feraix Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8">
            <Link href="/privacy-policy" className="text-white hover:text-primary transition-colors text-xs">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-white hover:text-primary transition-colors text-xs">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
