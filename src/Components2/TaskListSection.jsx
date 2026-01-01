"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Twitter, 
  Youtube, 
  Gamepad2, 
  PenTool,
  FileText,
  CreditCard,
  Zap,
  Sun,
  Moon
} from 'lucide-react';

// --- DATA CONFIGURATION ---
const CATEGORIES = ["All", "Social", "Design", "Gaming"];

const TASKS_DATA = [
  {
    id: 1,
    category: "Social",
    title: "Retweet Pinned Post",
    shortDesc: "Like & RT the pinned post on @CloveoApp",
    fullDesc: "Go to our official Twitter account. Find the pinned tweet about the 'Winter Airdrop'. Like the tweet, Retweet it, and tag 2 friends in the comments.",
    price: 1.50,
    time: "30s",
    icon: <Twitter className="w-6 h-6" />,
    color: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-500/10",
    paymentMethods: ["USDT", "PayPal"],
    processingTime: "Instant"
  },
  {
    id: 2,
    category: "Design",
    title: "Create Viral Meme",
    shortDesc: "Submit a meme for r/cryptocurrency",
    fullDesc: "Create a high-quality, original meme related to Web3. No watermarks allowed. Image must be at least 1080x1080px.",
    price: 25.00,
    time: "15m",
    icon: <PenTool className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-500/10",
    paymentMethods: ["USDT", "BTC"],
    processingTime: "24h Review"
  },
  {
    id: 3,
    category: "Gaming",
    title: "Beta Test RPG Level",
    shortDesc: "Complete level 1-3 & submit bug report",
    fullDesc: "Download the beta client. Play through Level 1. Record any bugs or glitches encountered. Submit a 100-word feedback summary.",
    price: 45.00,
    time: "40m",
    icon: <Gamepad2 className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-500/10",
    paymentMethods: ["PayPal", "Bank Transfer"],
    processingTime: "48h Review"
  },
  {
    id: 4,
    category: "Social",
    title: "YouTube Video Review",
    shortDesc: "Watch and leave a constructive comment",
    fullDesc: "Watch the latest Cloveo tutorial video for at least 3 minutes. Leave a comment about which feature you find most useful. No bot-like responses.",
    price: 3.00,
    time: "5m",
    icon: <Youtube className="w-6 h-6" />,
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-500/10",
    paymentMethods: ["USDT"],
    processingTime: "12h Review"
  },
  {
    id: 5,
    category: "Design",
    title: "Logo Sketch Concept",
    shortDesc: "Draw 3 rough logo ideas for 'NeoPay'",
    fullDesc: "Submit three hand-drawn or digital sketches for a new fintech brand called NeoPay. Focus on 'Modern' and 'Speed' themes. Rough drafts only.",
    price: 15.00,
    time: "20m",
    icon: <PenTool className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-500/10",
    paymentMethods: ["PayPal", "BTC"],
    processingTime: "24h Review"
  },
  {
    id: 6,
    category: "Gaming",
    title: "Speedrun Tutorial",
    shortDesc: "Finish the game tutorial under 2 mins",
    fullDesc: "Launch the 'Astro-Dash' mobile app. Record your screen while completing the basic tutorial. You must finish in under 120 seconds to qualify.",
    price: 8.50,
    time: "10m",
    icon: <Zap className="w-6 h-6" />,
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-500/10",
    paymentMethods: ["USDT", "Bank Transfer"],
    processingTime: "Instant"
  },
  {
    id: 7,
    category: "Design",
    title: "UI Icon Pack Set",
    shortDesc: "Design 5 custom line-art icons",
    fullDesc: "Create 5 unique icons for a weather app (Sun, Rain, Cloud, Storm, Wind). Must be SVG format with a consistent 2px stroke width.",
    price: 35.00,
    time: "45m",
    icon: <PenTool className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    paymentMethods: ["USDT", "PayPal"],
    processingTime: "48h Review"
  },
  {
    id: 8,
    category: "Social",
    title: "Discord Community Join",
    shortDesc: "Join and reach Level 2 in chat",
    fullDesc: "Join the Cloveo Discord server. Introduce yourself in the #general channel and engage with others until the MEE6 bot ranks you to Level 2.",
    price: 5.00,
    time: "15m",
    icon: <Clock className="w-6 h-6" />,
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    paymentMethods: ["USDT"],
    processingTime: "Instant"
  }
];

const TaskListSection = ({ isDarkMode, toggleTheme }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("Task"); 
  const [hoveredId, setHoveredId] = useState(null);

  const filteredTasks = activeCategory === "All" 
    ? TASKS_DATA 
    : TASKS_DATA.filter(t => t.category === activeCategory);

  const renderCardContent = (task, isActive) => {
    // --- DESCRIPTION VIEW ---
    if (activeTab === "Description") {
      return (
        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2 mb-1">
            <FileText size={16} className={isActive ? "text-white" : "text-[#4B9CFF]"} />
            <h4 className={`font-bold uppercase text-[10px] tracking-widest ${isActive ? 'text-blue-100' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Task Details</h4>
          </div>
          <p className={`text-sm leading-relaxed ${isActive ? 'text-white' : isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {task.fullDesc}
          </p>
        </motion.div>
      );
    } 
    
    // --- PAYMENT VIEW ---
    if (activeTab === "Payment") {
      return (
        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
           <div className="flex flex-col">
             <div className="flex items-center gap-2 mb-2">
                <CreditCard size={16} className={isActive ? "text-white" : "text-[#4B9CFF]"} />
                <h4 className={`font-bold uppercase text-[10px] tracking-widest ${isActive ? 'text-blue-100' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Payout Method</h4>
             </div>
             <div className="flex gap-2">
                {task.paymentMethods.map((m, i) => (
                  <span key={i} className={`px-3 py-1 rounded-md text-[10px] font-bold border ${
                    isActive 
                      ? 'bg-white/20 border-white/30 text-white' 
                      : isDarkMode ? 'bg-slate-700 border-slate-600 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-600'
                  }`}>
                    {m}
                  </span>
                ))}
             </div>
           </div>
           <div className="text-right">
              <div className={`text-2xl font-bold ${isActive ? 'text-white' : isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                ${task.price.toFixed(2)}
              </div>
              <div className={`flex items-center justify-end gap-1 text-[10px] mt-1 ${isActive ? 'text-blue-100' : 'text-green-500'}`}>
                 <Zap size={10} fill="currentColor" /> {task.processingTime}
              </div>
           </div>
        </motion.div>
      );
    }

    // --- DEFAULT TASK VIEW ---
    return (
      <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-8">
        <div className="flex items-center gap-5 w-full md:w-[45%]">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300
            ${isActive ? 'bg-white/20 text-white rotate-6 scale-110' : isDarkMode ? 'bg-white/10 text-white' : `${task.bg} ${task.color}`}`}>
            {task.icon}
          </div>
          <div>
            <h3 className={`text-lg md:text-xl font-bold transition-colors ${isActive ? 'text-white' : isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {task.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                isActive ? 'bg-white/20 text-white' : isDarkMode ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-500'
              }`}>
                {task.category}
              </span>
              <span className={`text-[10px] flex items-center gap-1 ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                <Clock size={10} /> {task.time}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-[35%]">
          <p className={`text-sm font-medium ${isActive ? 'text-blue-50' : isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {task.shortDesc}
          </p>
        </div>

        <div className="w-full md:w-[20%] text-right">
          <div className={`text-2xl font-bold ${isActive ? 'text-white' : isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            ${task.price.toFixed(2)}
          </div>
          <div className={`text-[10px] ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>per completion</div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className={`relative w-full py-24 px-6 font-outfit overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#05050A]' : 'bg-slate-50'}`}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap'); .font-outfit { font-family: 'Outfit', sans-serif; }`}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="flex flex-col gap-4">
             <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
               Start with These<br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B9CFF] to-blue-400">Simple Tasks</span>
            </h2>

            {toggleTheme && (
               <button onClick={toggleTheme} className={`flex items-center gap-2 px-4 py-2 rounded-full w-fit border transition-all hover:brightness-110 ${isDarkMode ? 'bg-white/10 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                  {isDarkMode ? <Sun size={14} className="text-yellow-400" /> : <Moon size={14} className="text-slate-600" />}
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-white' : 'text-slate-600'}`}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                  </span>
               </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className="relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 isolate cursor-pointer">
                {activeCategory === cat && (
                  <motion.div layoutId="activeCategoryPill" className="absolute inset-0 bg-[#4B9CFF] rounded-full z-[-1] shadow-lg shadow-blue-500/30" />
                )}
                <span className={`relative z-10 ${activeCategory === cat ? 'text-white' : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-[#4B9CFF]'}`}>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* --- MAIN CARD CONTAINER --- */}
        <div className="relative mt-12">
          {/* TABS */}
          <div className="flex justify-between px-4 md:px-10 mb-[-1px] relative z-20 max-w-5xl mx-auto gap-1">
            {['Task', 'Description', 'Payment'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:flex-none font-bold tracking-widest uppercase text-[10px] py-3 px-8 rounded-t-2xl transition-all duration-300 cursor-pointer 
                  ${activeTab === tab ? 'bg-[#4B9CFF] text-white' : isDarkMode ? 'bg-slate-800 text-slate-500 border-slate-700' : 'bg-white text-slate-400 border-slate-200 border-b-0'} border border-b-0`}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className={`relative z-10 border-t-[4px] border-t-[#4B9CFF] rounded-b-[40px] rounded-tr-[40px] rounded-tl-[40px] md:rounded-tl-none p-4 md:p-8 shadow-2xl transition-all duration-500
               ${isDarkMode ? 'bg-[#0F1115]/90 backdrop-blur-xl border-x-slate-800 border-b-slate-800' : 'bg-white border-x-slate-200 border-b-slate-200'}
            `}
          >
            <div className="flex flex-col gap-3">
              <AnimatePresence mode="popLayout">
                {filteredTasks.map((task) => (
                  <motion.div
                    layout
                    key={task.id}
                    onMouseEnter={() => setHoveredId(task.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`relative rounded-[24px] p-6 md:p-7 cursor-pointer transition-all duration-200 overflow-hidden border
                      ${hoveredId === task.id ? 'border-transparent translate-y-[-2px]' : isDarkMode ? 'border-slate-800/50 bg-slate-800/20' : 'border-slate-100 bg-white hover:border-blue-100'}
                    `}
                  >
                    {/* The fix: Animated Hover Background Layer */}
                    <AnimatePresence>
                      {hoveredId === task.id && (
                        <motion.div 
                          layoutId="activeHoverBg" 
                          className="absolute inset-0 bg-[#4B9CFF] z-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Content Layer: Must be z-10 to stay above the blue bg */}
                    <div className="relative z-10 pointer-events-none">
                       {renderCardContent(task, hoveredId === task.id)}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TaskListSection;