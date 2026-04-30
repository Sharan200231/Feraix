"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/animations";

export default function ContactMap() {
  return (
    <section className="py-12 sm:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="relative w-full h-[300px] sm:h-[500px] rounded-[24px] sm:rounded-[40px] overflow-hidden border border-white/5"
        >
          {/* Stylized Map Placeholder */}
            {/* Background city/map image */}
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/DubaiFeraix.png"
                alt="Map Background"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          
          
        </motion.div>
      </div>
    </section>
  );
}
