"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Coins, 
  Wallet 
} from 'lucide-react';

// --- ANIMATION VARIANTS ---
const floatingVariant = {
  animate: {
    y: [-15, 15, -15],
    rotate: [0, 2, -2, 0], // Reduced rotation for more stability
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const spinVariant = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const TurnTimeIntoIncome = ({ isDarkMode }) => {
  return (
    <section className={`relative w-full py-20 md:py-32 px-6 font-outfit overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#05050A]' : 'bg-white'}`}>
      
      {/* Import Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800&display=swap');
          .font-outfit { font-family: 'Outfit', sans-serif; }`}
      </style>

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}`} />
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 ${isDarkMode ? 'bg-purple-900' : 'bg-purple-100'}`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* --- LEFT SIDE: 3D VISUALS --- */}
          <div className="relative flex justify-center items-center h-[400px] md:h-[550px] order-1 lg:order-1 perspective-1000">
            
            {/* 1. Rotating Tech Rings (Behind) */}
            <motion.div 
              variants={spinVariant}
              animate="animate"
              className={`absolute w-[300px] md:w-[450px] h-[300px] md:h-[450px] border-[2px] border-dashed rounded-full z-0 
                ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className={`absolute w-[220px] md:w-[350px] h-[220px] md:h-[350px] border-[2px] border-dotted rounded-full z-0 
                ${isDarkMode ? 'border-slate-700' : 'border-blue-100'}`}
            />

            {/* 2. Main Character Image */}
            <motion.img
              src="https://i.ibb.co/DHnRkVss/trun.png" 
              alt="3D Character"
              variants={floatingVariant}
              animate="animate"
              className="relative z-10 object-contain h-full w-auto drop-shadow-2xl" 
            />

            {/* 3. Floating Elements (Icons) */}
            {/* Coin Icon */}
            <motion.div 
              animate={{ y: [10, -20, 10] }} 
              transition={{ duration: 4, repeat: Infinity }}
              className={`absolute top-[10%] right-[10%] p-4 rounded-2xl shadow-xl backdrop-blur-md border z-20
                ${isDarkMode ? 'bg-[#1E293B]/80 border-slate-700' : 'bg-white/80 border-slate-100'}`}
            >
              <Coins className="w-8 h-8 text-yellow-500" />
            </motion.div>

            {/* Wallet Icon */}
            <motion.div 
              animate={{ y: [-10, 20, -10] }} 
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className={`absolute bottom-[15%] left-[5%] p-3 rounded-2xl shadow-xl backdrop-blur-md border z-20
                ${isDarkMode ? 'bg-[#1E293B]/80 border-slate-700' : 'bg-white/80 border-slate-100'}`}
            >
              <Wallet className="w-6 h-6 text-[#4B9CFF]" />
            </motion.div>

            {/* 
                ============================================
                🔥🔥 BLUE OVERLAY GLOW UNDER IMAGE 🔥🔥
                ============================================
            */}
            {/* Outer Soft Glow */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[80%] h-[60px] bg-[#4B9CFF] blur-[70px] opacity-50 rounded-full z-0 pointer-events-none" />
            
            {/* Inner Intense Core Glow */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[50%] h-[20px] bg-blue-400 blur-[30px] opacity-80 rounded-full z-0 pointer-events-none mix-blend-screen" />

          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-2">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B9CFF]/10 border border-[#4B9CFF]/20 mb-6"
            >
              <Zap size={14} className="text-[#4B9CFF]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#4B9CFF]">Master Your Time.</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.1] font-extrabold mb-6 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
            >
               Build Your Income. <br />
              into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B9CFF] to-purple-500">Real Income.</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-lg md:text-xl leading-relaxed mb-8 max-w-lg font-light ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
            >
              Join a global network of 50,000+ earners on a platform that has delivered over $2,000,000 in total payouts. We’ve removed the friction, so you can focus on earning.
            </motion.p>

            {/* Modern Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4 w-full max-w-md mb-10"
            >
              <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-[#1E293B]/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <Clock size={16} className="text-[#4B9CFF]" />
                  <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Avg. Time</span>
                </div>
                <div className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>~2 Mins</div>
              </div>
              
              <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-[#1E293B]/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck size={16} className="text-green-500" />
                  <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Payouts</span>
                </div>
                <div className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Instant</div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <button className="group relative bg-[#4B9CFF] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-500/30 overflow-hidden transition-all hover:scale-105 active:scale-95 cursor-pointer">
                <span className="relative z-10 flex items-center gap-2">
                  Start Earning Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TurnTimeIntoIncome;