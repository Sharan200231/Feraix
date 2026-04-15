"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/constants/animations";

export default function AboutHero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/assets/project-hero.png"
          alt="About Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-4xl"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
        >
          About <span className="text-primary">Feraix</span>
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Pioneering the future of digital innovation and technology solutions for modern enterprises globally.
        </motion.p>
      </motion.div>
      
      {/* Decorative Blur */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"
      ></motion.div>
    </section>
  );
}
