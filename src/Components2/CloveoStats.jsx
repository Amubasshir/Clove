"use client"
import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Layers } from 'lucide-react';

// --- 1. ANIMATED COUNTER ENGINE (Unchanged) ---
const AnimatedCounter = ({ value, duration = 2.5, decimals = 0 }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 55,
    duration: duration * 1000,
  });
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals).toLocaleString();
      }
    });
  }, [springValue, decimals]);

  return <span ref={ref} />;
};

// --- 2. MODERN STAT CARD (Fixed for Light/Dark Mode) ---
const StatCard = ({ data, index, isDarkMode }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group"
    >
      {/* Glow Effect on Hover */}
      <div 
        className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-lg"
        style={{ backgroundColor: data.color || '#4B9CFF' }}
      ></div>

      {/* Card Content */}
      <div className={`relative h-full border rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-500 cursor-pointer
        ${isDarkMode 
          ? 'bg-[#0F1115] border-white/10' 
          : 'bg-white border-gray-100 shadow-xl shadow-blue-900/5'
        }`}
      >
        
        {/* Subtle Background Mesh inside card */}
        <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none transition-colors duration-500
          ${isDarkMode ? 'bg-white/5' : 'bg-blue-500/5'}`} 
        />

        {/* Icon (Animated) */}
        {data.icon && (
          <div 
            className={`mb-4 p-3 rounded-xl transition-all duration-300 shadow-inner group-hover:scale-110
             `}
            // style={{ color: isDarkMode ? (data.color || 'white') : (data.color || '#4B9CFF') }}
          >
           <img src={data.icon} alt="" className='h-18' />
          </div>
        )}

        {/* Number */}
        <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 flex items-baseline tracking-tight transition-colors duration-500
          ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          {data.prefix && <span className="text-2xl md:text-3xl text-gray-400 mr-1 font-medium">{data.prefix}</span>}
          <AnimatedCounter value={data.value} decimals={data.decimals} />
          {data.suffix && <span className={`text-2xl md:text-3xl ml-1 font-medium ${data.highlightSuffix ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400' : 'text-gray-400'}`}>{data.suffix}</span>}
        </div>

        {/* Label */}
        <p className={`font-medium text-sm md:text-base uppercase tracking-wider transition-colors duration-500 group-hover:text-blue-500
           ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
        >
          {data.label}
        </p>
      </div>
    </motion.div>
  );
};

// --- 3. MAIN COMPONENT ---
const CloveoStats = ({ 
  stats, 
  isDarkMode = true, // Receives state from Parent
  className = "" 
}) => {
  
  // Default Data Example
  const defaultStats = [
    { 
      id: 1, 
      value: 98, 
      suffix: "%", 
      label: "Approval Rate", 
      icon: "./interest-rate.png", 
      color: "#10B981" 
    },
    { 
      id: 2, 
      value: 50, 
      suffix: "K+", 
      label: "Active Earners", 
      icon: "./finance.png", 
      color: "#4B9CFF" 
    },
    { 
      id: 3, 
      value: 2.4, 
      decimals: 1,
      prefix: "$", 
      suffix: "M+", 
      label: "Total Payouts", 
      icon: "./mobile.png", 
      highlightSuffix: true,
      color: "#F59E0B" 
    },
    { 
      id: 4, 
      value: 30, 
      suffix: "+", 
      label: "Categories", 
      icon: "./priority-list.png", 
      color: "#8B5CF6" 
    },
  ];

  const renderData = stats || defaultStats;

  return (
    <section className={`w-full py-20 md:py-32 relative overflow-hidden font-outfit transition-colors duration-500 ${isDarkMode ? 'bg-[#05050A]' : 'bg-gray-50'} ${className}`}>
      
      {/* Background Animated Blobs (Adjusted for Light Mode) */}
      <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse transition-opacity duration-500 
        ${isDarkMode ? 'bg-blue-500/10 opacity-100' : 'bg-blue-300/20 opacity-60'}`} 
      />
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse delay-1000 transition-opacity duration-500
        ${isDarkMode ? 'bg-purple-500/10 opacity-100' : 'bg-purple-300/20 opacity-60'}`} 
      />

      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap'); .font-outfit { font-family: 'Outfit', sans-serif; }`}
      </style>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Milestones</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`max-w-2xl mx-auto text-lg transition-colors duration-500 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}
          >
            From 30+ task categories to $2,000,000+ paid out, we’ve built an ecosystem where your time translates directly into income.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } } 
          }}
        >
          {renderData.map((item, index) => (
            <StatCard key={item.id || index} data={item} index={index} isDarkMode={isDarkMode} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CloveoStats;