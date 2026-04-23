"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Rocket, Headphones, Calendar, ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer, fadeIn } from "@/constants/animations";
import { ParallaxImage } from "./ParallaxSection";

export default function WhyUs() {
  const listItems = [
    { text: "Tailored Solutions for Every Business", icon: ShieldCheck },
    { text: "Expert Team with Proven Experience", icon: Users },
    { text: "Agile & Scalable Development Process", icon: Rocket },
    { text: "24/7 Support & Long-term Partnership", icon: Headphones },
  ];

  const statCards = [
    { label: "Expert Developers", value: "50+", icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ), color: "bg-[#1a365d]/40" },
    { label: "Average ROI Increase", value: "200%", icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ), color: "bg-[#2d3748]/40" },
    { label: "Support Available", value: "24/7", icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ), color: "bg-[#285e61]/40" },
    { label: "Awards Won", value: "100+", icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ), color: "bg-[#2c5282]/40" },
  ];

  return (
    <section id="why-us" className=" bg-transparent relative overflow-hidden">
      <div className="mx-auto">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="relative w-full  mx-auto overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.15)]"
        >
          {/* Background Image (boosted parallax depth) */}
          <ParallaxImage offset={130} className="absolute inset-0 z-0">
            <Image
              src="/whyus.png"
              alt="Why Choose Feraix"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-80" />
          </ParallaxImage>

          <div className="relative z-10 px-4 sm:px-8 md:px-16 py-12 md:py-24 flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            {/* Left Content */}
            <div className="flex-1">
              <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold mb-6 tracking-widest uppercase">
                Why Choose Feraix
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
                Why Businesses <br className="hidden sm:block" />
                <span className="text-primary italic">Choose Us</span>
              </motion.h2>

              <motion.div variants={staggerContainer} className="space-y-4 mb-12">
                {listItems.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group backdrop-blur-md cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-200 font-medium text-sm sm:text-base md:text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <Link href="/services#our-services">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-10 py-3.5 sm:py-4 bg-primary text-background font-bold rounded-full transition-all shadow-[0_0_30px_rgba(251,221,8,0.3)] flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto"
                  >
                    START FREE TRIAL
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/contact#schedule">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-10 py-3.5 sm:py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md text-base sm:text-lg w-full sm:w-auto"
                  >
                    <Calendar className="w-5 h-5 opacity-70" />
                    Schedule Demo
                    <ChevronRight className="w-5 h-5 opacity-50" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Right Stat Grid - Two Column on Mobile */}
            <motion.div variants={staggerContainer} className="flex-1 grid grid-cols-2 gap-3 sm:gap-6 w-full">
              {statCards.map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className={`p-4 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 ${stat.color} backdrop-blur-xl flex flex-col items-center text-center group transition-all duration-500 shadow-xl`}
                >
                  <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center mb-4 sm:mb-6 shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-500 text-background">
                    <div className="scale-75 sm:scale-100">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-5xl font-black text-white mb-1 sm:mb-2 tracking-tight">{stat.value}</h3>
                  <p className="text-[10px] sm:text-sm font-bold uppercase tracking-widest opacity-80 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
