"use client";

import Image from "next/image";
import { Users, BarChart3, Clock, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/constants/animations";

const stats = [
  {
    label: "Expert Developers",
    value: "50+",
    icon: Users,
  },
  {
    label: "Average ROI increase",
    value: "200%",
    icon: BarChart3,
  },
  {
    label: "Support Available",
    value: "24/7",
    icon: Clock,
  },
  {
    label: "Awards Won",
    value: "100+",
    icon: Trophy,
  },
];

export default function WhyChooseServices() {
  return (
    <section className="relative py-16 sm:py-32 overflow-hidden bg-[#020617]">
      {/* Rocky Background */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/serviceBg2.jpg"
          alt="Rocky Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="text-gray-400 font-bold tracking-[0.2em] text-xs uppercase mb-4">Why Choose Feraix</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
              Why Choose <span className="text-primary">Feraix?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg">
              Get a free consultation with our experts today and start your journey towards digital transformation and business success.
            </motion.p>
            <motion.button 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-primary text-black font-bold rounded-full transition-all shadow-[0_0_15px_rgba(251,221,8,0.4)] flex items-center gap-2 text-sm sm:text-base"
            >
              Get Your Free Consultation
              <span className="text-xl">→</span>
            </motion.button>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, borderColor: "rgba(251,221,8,0.3)" }}
                className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center text-center group transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary transition-colors duration-500">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.value}</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
