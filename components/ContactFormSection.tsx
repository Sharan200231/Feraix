"use client";

import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/constants/animations";

export default function ContactFormSection() {
  return (
    <section className="py-12 sm:py-24 bg-background selection:bg-primary selection:text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16"
        >
          
          {/* Contact Information */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 h-full">
            <div className="p-6 sm:p-10 rounded-[24px] sm:rounded-[40px] bg-[#0B0F1A] border border-white/5 space-y-8 sm:space-y-10 h-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-10">Contact Information</h2>
              
              <motion.div variants={staggerContainer} className="space-y-8">
                {[
                  { icon: MapPin, title: "Office Location", content: "Feraix Technology HQ, Building 4, Dubai Internet City, PO Box 12345, Dubai, UAE" },
                  { icon: Mail, title: "Email Us", content: "General: hello@feraix.com Support: support@feraix.com" },
                  { icon: Phone, title: "Call Us", content: "Main: +971 4 123 4567 Sales: +971 4 123 4568" },
                  { icon: Clock, title: "Business Hours", content: "Monday - Friday: 9:00 AM - 6:00 PM (GST) Saturday - Sunday: Closed" }
                ].map((item, index) => (
                  <motion.div key={index} variants={fadeInUp} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0 group-hover:bg-primary transition-colors duration-500">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line max-w-xs">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="pt-10 border-t border-white/5">
                <h3 className="text-white font-bold mb-6">Connect With Us</h3>
                <motion.div variants={staggerContainer} className="flex items-center gap-4">
                  {[
                    { sr: "LinkedIn", svg: "M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" },
                    { sr: "X", svg: "M18.244 2H21.5l-7.5 8.57L22 22h-6.828l-5.35-6.91L3.5 22H.243l8.02-9.16L2 2h6.828l4.84 6.29L18.244 2zm-2.4 18h1.9L8.16 4h-2l9.684 16z" },
                    { sr: "GitHub", svg: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" }
                  ].map((social, idx) => (
                    <motion.div key={idx} variants={fadeInUp}>
                      <Link
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
                      >
                        <span className="sr-only">{social.sr}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                          <path d={social.svg}/>
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <div className="p-6 sm:p-10 lg:p-12 rounded-[24px] sm:rounded-[40px] bg-[#0B0F1A] border border-white/5 h-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Send a Message</h2>
              <p className="text-gray-500 text-sm mb-10">Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6">
                <motion.div variants={staggerContainer} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">First Name *</label>
                      <input type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Last Name *</label>
                      <input type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Work Email *</label>
                      <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Company Name</label>
                      <input type="text" placeholder="Your Company" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                    </motion.div>
                  </div>

                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Service of Interest *</label>
                    <select className="w-full bg-[#0B0F1A] border border-white/10 rounded-2xl px-6 py-4 text-gray-400 text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                      <option>Select a service...</option>
                      <option>Web Development</option>
                      <option>Mobile Apps</option>
                      <option>AI Solutions</option>
                      <option>Cloud Infrastructure</option>
                    </select>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Your Message *</label>
                    <textarea rows={4} placeholder="Tell us about your project or inquiry..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"></textarea>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-center gap-3">
                    <input type="checkbox" id="privacy" className="w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary/50" />
                    <label htmlFor="privacy" className="text-xs text-gray-500">I agree to the <Link href="#" className="text-primary hover:underline transition-all">Privacy Policy</Link> and consent to Feraix processing my personal data.</label>
                  </motion.div>

                  <motion.button 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit" 
                    className="w-fit flex items-center gap-3 bg-primary text-white font-bold rounded-full px-10 py-4 shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
