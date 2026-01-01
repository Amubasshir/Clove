"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  MousePointer2, 
  ClipboardCheck, 
  Wallet, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const STEPS = [
  {
    id: "01",
    title: "Sign Up & Verify",
    desc: "Create your free Cloveo account in seconds.",
    icon: UserPlus, // Component pass korchi
    color: "from-blue-400 to-blue-600",
    textColor: "text-blue-500"
  },
  {
    id: "02",
    title: "Choose a Task",
    desc: "Pick from social, design, or gaming tasks.",
    icon: MousePointer2,
    color: "from-teal-400 to-teal-600",
    textColor: "text-teal-500"
  },
  {
    id: "03",
    title: "Complete & Submit",
    desc: "Follow instructions and submit your proof.",
    icon: ClipboardCheck,
    color: "from-purple-400 to-purple-600",
    textColor: "text-purple-500"
  },
  {
    id: "04",
    title: "Get Paid Instantly",
    desc: "Receive your earnings right after approval.",
    icon: Wallet,
    color: "from-orange-400 to-red-500",
    textColor: "text-orange-500"
  }
];

const HowItWorks = ({ isDarkMode }) => {
  return (
    <section className={`relative w-full py-24 px-6 transition-colors duration-500 ${isDarkMode ? 'bg-[#05050A]' : 'bg-slate-50'}`}>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-extrabold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            How Cloveo Works
          </h2>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Start earning in four simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className={`
                relative h-full p-10 rounded-[45px] border transition-all duration-500 flex flex-col items-center text-center
                ${isDarkMode 
                  ? 'bg-[#0F1115] border-slate-800 hover:border-blue-500/40 shadow-2xl' 
                  : 'bg-white border-slate-100 hover:border-blue-200 hover:shadow-xl'}
              `}>
                
                {/* --- ICON WRAPPER (CENTERED) --- */}
                <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${step.color} blur-2xl opacity-10 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Icon Circle */}
                  <div className={`relative w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300
                    ${isDarkMode ? 'bg-slate-900/50 border-slate-800 group-hover:border-blue-500/50' : 'bg-slate-50 border-slate-100 group-hover:border-blue-100'}`}>
                    
                    {/* The Icon Fix: Rendered as a component with stroke color */}
                    <step.icon 
                      size={40} 
                      className={`transition-transform duration-300 group-hover:scale-110 ${isDarkMode ? 'text-white' : step.textColor}`} 
                    />
                  </div>

                  {/* Step Number Badge */}
                  <div className={`absolute top-0 right-0 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black border
                    ${isDarkMode ? 'bg-slate-800 text-blue-400 border-slate-700' : 'bg-blue-600 text-white border-white'}`}>
                    {step.id}
                  </div>
                </div>

                {/* --- CONTENT --- */}
                <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {step.desc}
                </p>

                <div className="mt-6">
                   <CheckCircle2 size={20} className={`${isDarkMode ? 'text-slate-700' : 'text-slate-200'} group-hover:text-green-500 transition-colors duration-300`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}

           {/* --- BOTTOM CTA --- */}
<div className="mt-20 flex justify-center">
  <motion.button 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative group bg-[#4B9CFF] hover:bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg overflow-hidden shadow-xl shadow-blue-500/30 transition-all duration-300 cursor-pointer"
  >
    <span className="relative z-10 flex items-center gap-3">
      Get Started Now <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
    </span>
    
    {/* Hover Shine Effect */}
    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
  </motion.button>
</div>
      

      </div>
    </section>
  );
};

export default HowItWorks;