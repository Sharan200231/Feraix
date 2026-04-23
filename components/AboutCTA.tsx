"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/constants/animations";

export default function AboutCTA() {
  return (
    <section className="relative py-16 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/Dubai city lights at night, futuristic architecture, professional wide angle photography.png"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <motion.div
           initial="initial"
           whileInView="animate"
           viewport={{ once: true, amount: 0.3 }}
           variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hands with Feraix to build scalable, secure, and futuristic digital solutions.
          </motion.p>
          
          <Link href="/contact#contact-form">
            <motion.button 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-4 sm:py-5 bg-primary text-black font-bold rounded-full transition-all text-sm sm:text-base w-full sm:w-auto"
            >
              Start Your Digital Journey →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
