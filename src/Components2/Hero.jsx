"use client"
import React, { useState } from 'react';
import { User, ChevronDown, PenTool, MessageSquare, Menu, X, ArrowRight, Zap, Shield, Activity, TrendingUp, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Default Data Configuration ---
const defaultHeroData = {
  hero: {
    badge: "Live Tasks Available Now",
    headlinePrefix: "Turn",
    headlineItalic: "Pixels",
    headlineMiddle: "Into",
    headlineGradient: "Paychecks.",
    description: "The premium ecosystem for micro-tasks. Join elite freelancers earning crypto by validating AI, designing memes, and moderating content.",
    ctaPrimary: "Start Earning",
    ctaSecondary: "12k+ Users",
    ctaSecondarySub: "Online now",
    bgImage: "https://i.ibb.co.com/KgT6rjt/Hero-Img.jpg"
  },
  categories: [
    { title: "Meme Design", subtitle: "Viral content", color: "blue", icon: <PenTool size={18} /> },
    { title: "Reddit Posting", subtitle: "Community", color: "purple", icon: <MessageSquare size={18} /> },
    { title: "Moderation", subtitle: "Management", color: "green", icon: <Shield size={18} /> }
  ],
  navLinks: [
    { label: "Home", href: "#" },
    { label: "All Tasks", href: "#" },
    { label: "How It Works", href: "#" },
  ]
};

const CloveoHero = ({ data = defaultHeroData, isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // --- Animations ---
  const menuContainerVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren" } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren" } }
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0, rotateX: -15 },
    visible: { x: 0, opacity: 1, rotateX: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { x: -20, opacity: 0, transition: { duration: 0.2 } }
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  // --- Smooth Background Animation ---
  const smoothBlueGlow = {
    animate: {
      y: [0, -50, 0],
      scale: [0.9, 1.2, 0.9],
      opacity: [0.2, 0.6, 0.2],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
          .font-outfit { font-family: 'Outfit', sans-serif; }
          
          /* Dynamic Glass Nav */
          .glass-nav { 
            backdrop-filter: blur(20px); 
            transition: all 0.5s ease;
          }
          .glass-nav.dark {
            background: rgba(15, 17, 21, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          }
          .glass-nav.light {
            background: rgba(255, 255, 255, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
          }
          
          .glow-mesh { background: radial-gradient(circle at center, rgba(75, 156, 255, 0.3) 0%, transparent 70%); }
          
          /* Hide Scrollbar but keep functionality */
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(156, 163, 175, 0.5);
            border-radius: 20px;
          }
        `}
      </style>

      {/* Outer Wrapper */}
      <div className={`min-h-screen w-full flex items-center justify-center p-2 sm:p-4 md:p-6 font-outfit transition-colors duration-500 ${isDarkMode ? 'bg-[#050505]' : 'bg-gray-50'}`}>
        
        {/* Hero Card Container */}
        {/* 'relative' parent is crucial for 'absolute' navbar to work correctly */}
        <div className={`relative w-full max-w-[1600px] min-h-screen lg:min-h-[850px] lg:h-[90vh] rounded-[24px] md:rounded-[50px] shadow-2xl flex flex-col overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#0F1115]' : 'bg-white'}`}>
          
          {/* --- Dynamic Background --- */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
             <div 
                className={`absolute inset-0 grayscale transition-all duration-500 
                ${isDarkMode ? 'opacity-40 mix-blend-overlay' : 'opacity-40 mix-blend-multiply'}`}
                style={{
                  backgroundImage: `url('${data.hero.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
             />
             <div className={`absolute inset-0 bg-gradient-to-r transition-colors duration-500 
               ${isDarkMode ? 'from-[#0F1115] via-[#0F1115]/80' : 'from-white via-white/50'} to-transparent`} 
             />
             <div className={`absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#4B9CFF] rounded-full mix-blend-screen filter blur-[100px] md:blur-[150px] animate-pulse transition-opacity duration-500 ${isDarkMode ? 'opacity-10' : 'opacity-20'}`} />
             <div className={`absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-indigo-900 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] transition-opacity duration-500 ${isDarkMode ? 'opacity-20' : 'opacity-5'}`} />
          </div>

          {/* --- NAVBAR (FIXED TOP) --- */}
          {/* 'absolute top-0' fixes it to the top of the card. z-50 keeps it above scrollable content */}
          <div className="absolute top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-3 md:px-4 flex justify-center pointer-events-none">
            <nav className={`glass-nav pointer-events-auto ${isDarkMode ? 'dark' : 'light'} rounded-full px-4 md:px-6 py-2.5 md:py-3 w-full max-w-[1200px] flex justify-between items-center transition-colors duration-500`}>
              
               <div className="flex items-center">
                <div className="relative cursor-pointer">
                  <span className={`text-2xl md:text-[28px] font-extrabold tracking-tight leading-none transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Cloveo
                  </span>
                  <div className="absolute top-[51%] left-[65%] w-2.5 h-[2.5px] md:w-3 md:h-[3px] bg-blue-500 rounded-full"></div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold">
                {data.navLinks.slice(0, 2).map((link, idx) => (
                    <a key={idx} href={link.href} className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} hover:underline decoration-2 underline-offset-4`}>
                      {link.label}
                    </a>
                ))}
                
                {/* Categories Dropdown */}
                <div className="relative group h-full flex items-center">
                  <button className={`flex items-center gap-1 transition-colors duration-300 py-2 ${isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-black'}`}>
                    Categories <ChevronDown size={14} className="mt-[1px] group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className={`rounded-2xl shadow-xl border p-2 w-64 backdrop-blur-xl transition-colors duration-300 ${isDarkMode ? 'bg-[#1A1D25]/95 border-white/10' : 'bg-white border-gray-100'}`}>
                      {data.categories.map((cat, idx) => (
                          <DropdownItem key={idx} icon={cat.icon} title={cat.title} subtitle={cat.subtitle} color={cat.color} isDarkMode={isDarkMode} />
                      ))}
                    </div>
                  </div>
                </div>

                {data.navLinks.slice(2).map((link, idx) => (
                    <a key={idx} href={link.href} className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} hover:underline decoration-2 underline-offset-4`}>
                      {link.label}
                    </a>
                ))}
              </div>

              <div className="hidden lg:flex items-center gap-4">
                <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors cursor-pointer relative flex items-center justify-center ${isDarkMode ? 'text-gray-300 hover:bg-white/10 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-black'}`}>
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={isDarkMode ? "dark" : "light"}
                            initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            exit={{ scale: 0.5, opacity: 0, rotate: 180 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.div>
                    </AnimatePresence>
                </button>
                <button className={`p-2 rounded-full transition-colors cursor-pointer ${isDarkMode ? 'text-gray-300 hover:bg-white/10 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-black'}`}>
                  <User size={20} />
                </button>
                <button className="bg-[#4B9CFF] hover:bg-blue-600 text-white px-7 py-2.5 rounded-full font-bold shadow-md shadow-blue-200 transition-all text-sm transform active:scale-95 cursor-pointer">Contact Us</button>
              </div>

              <div className="lg:hidden flex items-center gap-2">
                 <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 text-white' : 'bg-white/50 text-gray-800'}`}>
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                 </button>
                <button className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 text-white' : 'bg-white/50 text-gray-800'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </nav>
          </div>

          {/* --- MOBILE MENU --- */}
          <div className="absolute top-[80px] left-3 right-3 z-40 lg:hidden flex flex-col items-center">
             <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div initial="hidden" animate="visible" exit="exit" variants={menuContainerVariants} className={`w-full max-w-[1200px] backdrop-blur-xl rounded-[24px] shadow-2xl border overflow-hidden ${isDarkMode ? 'bg-[#15171e]/95 border-white/10' : 'bg-white/95 border-white/20'}`}>
                    <div className="p-5 space-y-4">
                        {data.navLinks.slice(0, 1).map((link, idx) => (
                           <motion.a key={idx} variants={menuItemVariants} href={link.href} className={`block text-lg font-bold border-b pb-3 ${isDarkMode ? 'text-white border-white/10' : 'text-gray-800 border-gray-100'}`}>
                             {link.label}
                           </motion.a>
                        ))}
                        <motion.div variants={menuItemVariants} className={`border-b pb-3 ${isDarkMode ? 'border-white/10' : 'border-gray-100'}`}>
                           <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className={`flex items-center justify-between w-full text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                              Categories <ChevronDown className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} size={18}/>
                           </button>
                           <AnimatePresence>
                             {isCategoryOpen && (
                               <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                  <div className="pt-3 pl-4 space-y-3">
                                     {data.categories.map((cat, idx) => (
                                         <div key={idx} className={`flex items-center gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{cat.icon} {cat.title}</div>
                                     ))}
                                  </div>
                               </motion.div>
                             )}
                           </AnimatePresence>
                        </motion.div>
                        {data.navLinks.slice(1).map((link, idx) => (
                           <motion.a key={idx} variants={menuItemVariants} href={link.href} className={`block text-lg font-bold border-b pb-3 ${isDarkMode ? 'text-white border-white/10' : 'text-gray-800 border-gray-100'}`}>
                             {link.label}
                           </motion.a>
                        ))}
                    </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>

          {/* --- MAIN HERO CONTENT (SCROLLABLE) --- */}
          {/* overflow-y-auto enables scrolling, pt-32 prevents content from hiding behind navbar */}
          <div className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden pt-32 pb-10 custom-scrollbar">
             <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[600px]">
                  
                  {/* Left Side: Text Content */}
                  <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="lg:col-span-7 flex flex-col items-start w-full">
                    
                    <motion.div variants={fadeInUp} className="relative group cursor-pointer mb-6 sm:mb-8 self-start">
                       <div className="absolute inset-0 bg-[#4B9CFF] blur-md opacity-25 group-hover:opacity-40 transition-opacity rounded-full"></div>
                       <div className={`relative flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border backdrop-blur-md transition-colors ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-200'}`}>
                          <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#4B9CFF] shadow-[0_0_10px_#4B9CFF] animate-pulse"></span>
                          <span className={`text-xs sm:text-sm font-medium tracking-wide transition-colors ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{data.hero.badge}</span>
                          <ArrowRight size={14} className="text-[#4B9CFF] group-hover:translate-x-1 transition-transform" />
                       </div>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className={`text-4xl sm:text-6xl md:text-7xl lg:text-[92px] leading-[1.0] sm:leading-[0.95] font-semibold tracking-tight mb-6 sm:mb-8 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                       {data.hero.headlinePrefix} <span className="font-light text-gray-400 italic font-serif">{data.hero.headlineItalic}</span> <br/>
                       {data.hero.headlineMiddle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold drop-shadow-2xl">{data.hero.headlineGradient}</span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8 sm:mb-10 font-light border-l-2 border-[#4B9CFF]/30 pl-4 sm:pl-6 transition-colors duration-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {data.hero.description}
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center sm:items-start lg:items-center">
                      <button className="group relative w-full sm:w-auto bg-[#4B9CFF] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl font-bold text-base sm:text-lg overflow-hidden transition-all hover:scale-[1.02] shadow-[0_10px_40px_-10px_rgba(75,156,255,0.5)] cursor-pointer">
                        <span className="relative z-10 flex items-center justify-center gap-2">{data.hero.ctaPrimary} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/></span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#4B9CFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                      
                      <div className="flex items-center gap-4 px-2 w-full sm:w-auto justify-center sm:justify-start">
                        <div className="flex -space-x-3">
                           {[1,2,3,4].map((i) => (
                               <div key={i} className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 overflow-hidden relative ${isDarkMode ? 'border-[#0F1115] bg-gray-700' : 'border-white bg-gray-200'}`}>
                                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                               </div>
                           ))}
                        </div>
                        <div className="text-sm text-left">
                           <p className={`font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{data.hero.ctaSecondary}</p>
                           <p className="text-gray-500">{data.hero.ctaSecondarySub}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Right Side: Visuals (Smooth Animation) */}
                  <div className="lg:col-span-5 relative h-[450px] sm:h-[500px] lg:h-[700px] w-full flex items-center justify-center perspective-[2000px] mt-8 lg:mt-0 pointer-events-none">
                     <motion.div variants={smoothBlueGlow} animate="animate" className="absolute inset-0 glow-mesh" />
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </>
  );
};

// --- HELPER COMPONENTS ---
const DropdownItem = ({ icon, title, subtitle, color, isDarkMode }) => {
  const colorMap = {
    blue: "text-blue-500 bg-blue-50 dark:bg-blue-500/20",
    purple: "text-purple-500 bg-purple-50 dark:bg-purple-500/20",
    green: "text-green-500 bg-green-50 dark:bg-green-500/20"
  };
  return (
    <a href="#" className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group/item ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}>
      <div className={`${colorMap[color]} p-2.5 rounded-lg group-hover/item:scale-110 transition-transform`}>{icon}</div>
      <div>
        <span className={`block font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</span>
        <span className={`block text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>{subtitle}</span>
      </div>
    </a>
  );
};

export default CloveoHero;