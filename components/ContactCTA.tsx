"use client";

import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/constants/animations";

export default function ContactCTA() {
  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[300px] bg-primary/10 rounded-full blur-[120px] -z-10"
      ></motion.div>

      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="container mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div 
          variants={fadeInUp}
          className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary/20"
        >
          <Calendar className="w-8 h-8 text-primary" />
        </motion.div>
        
        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Prefer to talk it out?</motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Schedule a direct 30-minute discovery call with our technical experts to discuss your specific requirements.
        </motion.p>
        
        <motion.button 
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-white text-background font-bold rounded-full hover:bg-gray-100 transition-all flex items-center gap-3 mx-auto shadow-xl"
        >
          <Calendar className="w-5 h-5 text-background" />
          Book a Consultation
        </motion.button>
      </motion.div>
    </section>
  );
}
