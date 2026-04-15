"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/constants/animations";

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[65vh] flex items-center justify-center pt-28 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/assets/project-hero.png"
          alt="Contact Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      </motion.div>

      <motion.div 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-4xl"
      >
        <motion.p variants={fadeInUp} className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-6">Get In Touch</motion.p>
        <motion.h1 
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight"
        >
          Let&apos;s Build The <span className="text-primary italic">Future</span> Together
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12"
        >
          Ready to transform your business with innovative digital solutions? Our team of experts is here to help you navigate the digital landscape.
        </motion.p>

        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-primary text-white font-bold rounded-full transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] text-sm sm:text-base"
          >
            Send a Message
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, border: "1px solid rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent border border-white/20 text-white font-bold rounded-full transition-all text-sm sm:text-base"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
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
