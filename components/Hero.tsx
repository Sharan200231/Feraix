"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn, slideInLeft, slideInRight } from "@/constants/animations";
import { ParallaxImage, ParallaxGlow } from "./ParallaxSection";

const phrases = [
  "SMART DIGITAL SOLUTIONS",
  "FUTURE-READY WEB APPS",
  "SCALABLE CLOUD DESIGN",
  "EXPERT SOFTWARE DEV"
];

function AnimatedPhrase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-wrap"
      >
        {phrases[index].split("").map((char, i) => (
          <motion.span
            key={`${index}-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start md:items-center py-20 lg:py-0 overflow-hidden bg-transparent">
      {/* Background Image - Mobile (increased parallax for depth) */}
      <ParallaxImage offset={120} direction="up" className="absolute inset-0 z-0 block md:hidden">
        <Image
          src="/assets/MobileHeroV2.png"
          alt="Hero Background"
          fill
          className="object-cover object-right"
          priority
        />
      </ParallaxImage>

      {/* Background Image - Tablet & Desktop (composited multi-layer system with targeted entrance) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <ParallaxImage offset={120} direction="up" className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/assets/hero1.png"
              alt="Hero Base layer"
              fill
              className="object-cover object-center"
              priority
            />
            <motion.div 
              variants={slideInRight}
              initial="initial"
              animate="animate"
              className="absolute right-0 bottom-0 w-[70%] h-[70%] opacity-90"
            >
              <Image
                src="/assets/hero2r.png"
                alt="Hero Detail layer"
                fill
                className="object-contain object-right-bottom"
                priority
              />
            </motion.div>
          </div>
        </ParallaxImage>
      </div>

      {/* Background Glows – increased speeds for more sensible layered depth */}
      <ParallaxGlow offset={180} direction="down" className="absolute top-1/4 -left-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-blue/10 blur-[120px] rounded-full z-[1]" />
      <ParallaxGlow offset={120} direction="up" className="absolute bottom-1/4 -right-20 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-accent-purple/10 blur-[120px] rounded-full z-[1]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl pt-10 md:pt-0"
        >
          <div className="text-left">
            {/* Top Badge */}
            <motion.div
              variants={slideInLeft}
              className="inline-flex items-center gap-2 px-3  rounded-full bg-white/5 border border-white/10 text-primary text-[10px] sm:text-xs font-bold  mt-4 sm:mt-32"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
              INNOVATIVE SOLUTIONS TODAY
            </motion.div>
 
            {/* Main Heading with Rotating Typewriter Animation */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl sm:text-4xl md:text-7xl font-black text-white mb-2 leading-[1.1] sm:leading-[1.1]"
            >
              Empowering Your Business with <br className="hidden md:block" />
              <div className="block mt-2">
                <span className="text-primary inline-flex">
                  <AnimatedPhrase />
                </span>
              </div>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={slideInLeft}
              className="text-gray-300 text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl leading-relaxed"
            >
              We design and build scalable web, mobile, and cloud solutions that
              help businesses grow faster, operate smarter, and achieve
              measurable results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={slideInLeft}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background font-bold rounded-xl shadow-[0_0_30px_rgba(251,221,8,0.3)] group flex items-center justify-center gap-2 text-xs sm:text-base"
              >
                START FREE TRIAL
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-xs sm:text-base"
              >
                <span className="w-2 h-2 rounded-full bg-white/20" />
                Schedule Demo
              </motion.button>
            </motion.div>

            {/* Stats Section with nested stagger */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-3 gap-2 sm:gap-8 max-w-lg mt-4  pt-4 sm:pt-3 border-t border-white/5"
             >
              {[
                { label: "Projects Delivered", value: "150+" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Years Experience", value: "5+" },
              ].map((stat, i) => (
                <motion.div key={i} variants={slideInLeft}>
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
