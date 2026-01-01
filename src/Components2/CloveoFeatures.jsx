"use client"
import React, { useRef, useState } from 'react';
import { Timer, Globe, BadgeDollarSign, ArrowRight, Zap, Layers, Sparkles } from 'lucide-react';
import { motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion';

// --- 1. Default Data ---
const defaultFeaturesData = {
  header: {
    tag: "Why Cloveo?",
    title: "Earn without limits.",
    description: "We've removed the friction from online earning. No complex approvals, no delayed payments. Just pure, transparent tasks.",
    cta: "Start Your Journey"
  },
  features: [
    {
      id: 1,
      title: "Instant Velocity",
      desc: "Tasks complete in under 2 minutes. Get in, get paid, get out.",
      icon: <Timer className="w-6 h-6" />,
      colSpan: 1
    },
    {
      id: 2,
      title: "Global Grid",
      desc: "Access opportunities from 180+ countries instantly.",
      icon: <Globe className="w-6 h-6" />,
      colSpan: 1
    },
    {
      id: 3,
      title: "Crystal Clear Payouts",
      desc: "See the exact dollar amount before you click start. No hidden fees, no guessing games.",
      icon: <BadgeDollarSign className="w-6 h-6" />,
      colSpan: 2
    }
  ]
};

// --- 2. Spotlight Card Component (The Magic) ---
const SpotlightCard = ({ children, className = "", isDarkMode }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border rounded-3xl overflow-hidden ${className} ${
        isDarkMode ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Gradient Background */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${isDarkMode ? 'rgba(75, 156, 255, 0.15)' : 'rgba(75, 156, 255, 0.1)'},
              transparent 80%
            )
          `,
        }}
      />
      {/* Content */}
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- 3. Main Component ---
const CloveoFeatures = ({ data = defaultFeaturesData, isDarkMode = true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className={`w-full py-24 md:py-32 font-outfit relative overflow-hidden transition-colors duration-500 
      ${isDarkMode ? 'bg-[#05050A]' : 'bg-white'}`}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
          .font-outfit { font-family: 'Outfit', sans-serif; }
          .bg-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E"); }
        `}
      </style>

      {/* Noise Texture Overlay */}
      <div className={`absolute inset-0 bg-noise pointer-events-none opacity-40 mix-blend-overlay`} />

      {/* Glowing Orbs */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none ${!isDarkMode && 'opacity-30'}`} />
      <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none ${!isDarkMode && 'opacity-30'}`} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT: Spotlight Grid --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {data.features.map((feature, idx) => (
              <SpotlightCard 
                key={feature.id} 
                isDarkMode={isDarkMode}
                className={`flex flex-col justify-between p-8 min-h-[220px] ${feature.colSpan === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className={`mb-6 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300
                  ${isDarkMode ? 'bg-white/10 text-white' : 'bg-blue-50 text-[#4B9CFF]'}`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {feature.desc}
                  </p>
                </div>
                
                {/* Decorative Icon Watermark */}
                <div className="absolute -bottom-6 -right-6 opacity-5 scale-[2.5] pointer-events-none">
                   {feature.icon}
                </div>
              </SpotlightCard>
            ))}
          </motion.div>

          {/* --- RIGHT: Content --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-[#4B9CFF] animate-pulse"></span>
                <span className="text-[#4B9CFF] font-bold uppercase tracking-widest text-xs">{data.header.tag}</span>
            </div>

            <h2 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {data.header.title.split(" ")[0]} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B9CFF] via-blue-400 to-purple-500">
                {data.header.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>

            <p className={`text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {data.header.description}
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-[#4B9CFF] hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg overflow-hidden shadow-lg shadow-blue-500/30 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                {data.header.cta} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>

            {/* Trust Indicator */}
            <div className={`mt-10 pt-8 border-t w-full flex gap-8 ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                <div>
                    <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>99.9%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Uptime</div>
                </div>
                <div>
                    <div className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>&lt; 24h</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Payout Time</div>
                </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CloveoFeatures;