"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/constants/animations";

const categories = [
  "All",
  "Technology",
  "AI & Innovation",
  "Cloud Solutions",
  "Software Dev",
];

const articles = [
  {
    title: "Building Resilient Multi-Cloud Architectures",
    category: "Cloud Solutions",
    description: "Strategies for ensuring high availability and disaster recovery across multiple cloud providers without vendor lock-in.",
    image: "/Cloud Architecture.png",
    date: "Apr 18, 2026",
  },
  {
    title: "Micro-Frontends: Scaling Web Applications",
    category: "Software Dev",
    description: "Breaking down large monolithic frontends into smaller, manageable pieces to improve team velocity and deployment cycles.",
    image: "/Software Dev.png",
    date: "Apr 15, 2026",
  },
  {
    title: "Securing IoT Networks in Enterprise Environments",
    category: "Technology",
    description: "Best practices for implementing zero-trust architectures for IoT devices within complex business network ecosystems.",
    image: "/IoT Tech.png",
    date: "Apr 11, 2026",
  },
];

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Filters */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-20"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 sm:px-8 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-primary border-primary text-black shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {category.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mb-16 sm:mb-32"
        >
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-[#0B0F1A] border border-white/5 rounded-[24px] sm:rounded-[40px] overflow-hidden hover:border-primary/20 transition-all duration-500 max-w-6xl mx-auto flex flex-col lg:flex-row"
          >
            {/* Image Area */}
            <div className="relative lg:w-1/2 h-[250px] sm:h-[400px] lg:h-auto overflow-hidden">
              <Image
                src="/AI Technology.png"
                alt="Featured Post"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A]/20 to-transparent hidden lg:block"></div>
            </div>

            {/* Content Area */}
            <div className="lg:w-1/2 p-6 sm:p-8 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary tracking-widest uppercase">
                  AI & Innovation
                </span>
                <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold tracking-widest uppercase">
                  <Clock className="w-3 h-3" />
                  5 MIN READ
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 group-hover:text-primary transition-colors leading-tight">
                The Future of Enterprise AI: Transforming Business Operations in 2026
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-10 max-w-md">
                Discover how artificial intelligence is moving beyond generative text to fully autonomous business operations, predictive analytics, and dynamic resource allocation.
              </p>

              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                    <Image
                      src="/Author.png"
                      alt="David Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">David Chen</p>
                    <p className="text-gray-500 text-[10px] uppercase font-bold">Mar 12, 2026</p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest group/link"
                >
                  READ ARTICLE
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Latest Articles */}
        <div className="mb-16 sm:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Latest Articles</h2>
            <Link href="#" className="text-gray-500 hover:text-white text-sm flex items-center gap-2 group">
              View all posts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {articles.map((article, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 border border-white/5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                      {article.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-3">{article.date}</p>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {article.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-white group-hover:text-primary text-[10px] font-bold tracking-widest transition-colors uppercase"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto py-12 sm:py-20 px-6 sm:px-8 rounded-[24px] sm:rounded-[40px] bg-gradient-to-b from-primary/5 to-transparent border border-white/5 text-center relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <motion.div variants={staggerContainer} className="relative z-10">
            <motion.div variants={fadeInUp} className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
              <Mail className="w-8 h-8 text-primary" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Stay Updated With Feraix</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-xl mx-auto">
              Join our newsletter to receive the latest technology insights, industry trends, and company updates directly in your inbox.
            </motion.p>
            
            <motion.form variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-black font-bold rounded-full px-10 py-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                Subscribe
              </motion.button>
            </motion.form>
            <motion.p variants={fadeInUp} className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                No spam, we promise. Only high-quality content.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
