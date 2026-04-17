"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/constants/animations";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ScheduleSection() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setIsBooked(true);
    }
  };

  // Simplified calendar for demo purposes
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section id="schedule" className="py-12 sm:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.p variants={fadeInUp} className="text-primary font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-3 sm:mb-4">
              Booking System
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-5xl font-black text-white mb-4 sm:mb-6">
              Schedule Your <span className="text-primary italic">Consultation</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Pick a date and time that suits your schedule. Our experts will reach out to confirm your inquiry and prepare a tailored presentation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
            {/* Calendar Card */}
            <motion.div variants={fadeInUp} className="lg:col-span-7 bg-[#0B0F1A] border border-white/5 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <CalendarIcon size={120} className="text-primary" />
               </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 sm:mb-10">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-3">
                    <CalendarIcon className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                    Select Date
                  </h3>
                  <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                      <ChevronLeft size={20} />
                    </button>
                    <span className="text-white font-bold text-sm sm:text-base">May 2026</span>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-2 sm:gap-4 text-center mb-6 sm:mb-8">
                  {days.map(day => (
                    <div key={day} className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest">{day}</div>
                  ))}
                  {/* Empty slots for first week offset if needed */}
                  {dates.map(date => {
                    const isSelected = selectedDate === date;
                    const isToday = date === new Date().getDate();
                    return (
                      <motion.button
                        key={date}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedDate(date)}
                        className={`aspect-square flex items-center justify-center rounded-xl sm:rounded-2xl text-xs sm:text-base font-bold transition-all relative
                          ${isSelected ? "bg-primary text-black" : "bg-white/5 text-white hover:bg-white/10"}
                          ${isToday && !isSelected ? "border border-primary/40" : ""}
                        `}
                      >
                        {date}
                        {isToday && !isSelected && <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Time Slots & Summary Card */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="bg-[#0B0F1A] border border-white/5 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Clock size={120} className="text-primary" />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-8 sm:mb-10 flex items-center gap-3">
                    <Clock className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                    Select Time
                  </h3>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
                    {timeSlots.map(time => {
                      const isSelected = selectedTime === time;
                      return (
                        <motion.button
                          key={time}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 sm:py-4 px-3 sm:px-4 rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-bold transition-all border
                            ${isSelected 
                              ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(251,221,8,0.3)]" 
                              : "bg-white/5 text-gray-400 border-white/5 hover:border-white/20 hover:text-white"}
                          `}
                        >
                          {time}
                        </motion.button>
                      );
                    })}
                  </div>

                  <div className="mt-auto space-y-6 sm:space-y-8">
                    <div className="p-4 sm:p-6 rounded-2xl sm:rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-md">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest text-left">Summary</span>
                        <div className="px-2 py-1 rounded bg-primary/20 text-primary text-[8px] sm:text-[10px] font-bold uppercase">30 Min Session</div>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-3">
                          <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary opacity-60" />
                          <span className="text-white text-sm sm:text-base font-bold">
                            {selectedDate ? `May ${selectedDate}, 2026` : "Select a date"}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary opacity-60" />
                          <span className="text-white text-sm sm:text-base font-bold">
                            {selectedTime ? selectedTime : "Select a time"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleBooking}
                      disabled={!selectedDate || !selectedTime || isBooked}
                      className={`w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base tracking-widest uppercase transition-all flex items-center justify-center gap-3 shadow-2xl
                        ${!selectedDate || !selectedTime || isBooked
                          ? "bg-white/5 text-gray-600 cursor-not-allowed border border-white/5 shadow-none"
                          : "bg-primary text-black hover:shadow-[0_0_30px_rgba(251,221,8,0.4)]"
                        }
                      `}
                    >
                      {isBooked ? (
                        <>
                          <CheckCircle2 size={24} />
                          Confirmed
                        </>
                      ) : (
                        "Confirm Appointment"
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {isBooked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#0B0F1A] border border-white/10 p-8 sm:p-12 rounded-[32px] sm:rounded-[48px] max-w-lg w-full text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 sm:mb-10 text-primary border border-primary/20">
                <CheckCircle2 size={48} className="sm:size-56" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white mb-4 sm:mb-6">Booking Confirmed!</h3>
              <p className="text-gray-400 text-sm sm:text-lg mb-8 sm:mb-12 leading-relaxed">
                Thank you for scheduling a consultation. We&apos;ve sent a confirmation email to you. Our team is excited to discuss your project!
              </p>
              <button
                onClick={() => setIsBooked(false)}
                className="w-full py-4 sm:py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-sm sm:text-base"
              >
                Close Window
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
