"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-32 overflow-hidden bg-transparent">
      {/* Background Pattern - Mesh style */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[#020617]"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]"></div>
      </motion.div>
{/* 
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="relative z-10 container mx-auto px-4 sm:px-6 text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Inspired by our work?
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
          Let&apos;s collaborate to build a similarly impactful digital solution for your business.
        </motion.p>
        
        <motion.button 
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 sm:px-10 py-3 sm:py-4 bg-primary text-black font-bold rounded-full transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] text-sm sm:text-base"
        >
          Discuss Your Project
        </motion.button>
      </motion.div> */}
      

      {/* Decorative Blur */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10"
      ></motion.div>
    </section>
  );
}
