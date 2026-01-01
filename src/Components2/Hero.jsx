"use client"
import React, { useState } from 'react';
import { User, ChevronDown, PenTool, MessageSquare, Menu, X, ArrowRight, Zap, Shield, Activity, TrendingUp, Star, Sun, Moon } from 'lucide-react';
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
  stats: {
    balanceLabel: "Total Balance",
    balanceValue: "$4,250.00",
    growthLabel: "Growth",
    growthValue: "+124%",
    payoutText: "Payout Sent"
  },
  categories: [
    { title: "Meme Design", subtitle: "Viral content", color: "blue", icon: <PenTool size={18} /> },
    { title: "Reddit Posting", subtitle: "Community", color: "purple", icon: <MessageSquare size={18} /> },
    { title: "Moderation", subtitle: "Management", color: "green", icon: <Shield size={18} /> }
  ],
  glassList: [
    { title: "Meme Creation", price: "+$25.00", icon: <PenTool size={16}/> },
    { title: "Mod Task", price: "+$12.50", icon: <Shield size={16}/> },
    { title: "Data Entry", price: "+$8.00", icon: <Activity size={16}/> }
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

  const floatSlow = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const floatFast = {
    animate: {
      y: [0, -25, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
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
            background: rgba(15, 17, 21, 0.7); /* Dark translucent */
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          }
          .glass-nav.light {
            background: rgba(255, 255, 255, 0.85); /* Light translucent */
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
          }

          /* Dynamic Glass Card */
          .glass-card-premium { 
            backdrop-filter: blur(24px); 
            transition: background 0.3s, border 0.3s, box-shadow 0.3s;
          }
          .glass-card-premium.dark {
            background: linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          }
          .glass-card-premium.light {
            background: linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%);
            border: 1px solid rgba(255, 255, 255, 1);
            box-shadow: 0 25px 50px -12px rgba(75, 156, 255, 0.15);
          }
          
          .glow-mesh { background: radial-gradient(circle at center, rgba(75, 156, 255, 0.15) 0%, transparent 70%); }
        `}
      </style>

      {/* Outer Wrapper */}
      <div className={`min-h-screen w-full flex items-center justify-center p-2 sm:p-4 md:p-6 font-outfit transition-colors duration-500 ${isDarkMode ? 'bg-[#050505]' : 'bg-gray-50'}`}>
        
        {/* Hero Card */}
        <div className={`relative w-full max-w-[1600px] min-h-screen lg:min-h-[850px] lg:h-[90vh] rounded-[24px] md:rounded-[50px] overflow-hidden shadow-2xl flex flex-col transition-colors duration-500 ${isDarkMode ? 'bg-[#0F1115]' : 'bg-white'}`}>
          
          {/* --- Dynamic Background --- */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
             
             {/* Image Visibility */}
             <div 
                className={`absolute inset-0 grayscale transition-all duration-500 
                ${isDarkMode 
                  ? 'opacity-40 mix-blend-overlay' 
                  : 'opacity-40 mix-blend-multiply' 
                }`}
                style={{
                  backgroundImage: `url('${data.hero.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
             />
             
             {/* Gradient Overlays */}
             <div className={`absolute inset-0 bg-gradient-to-r transition-colors duration-500 
               ${isDarkMode 
                 ? 'from-[#0F1115] via-[#0F1115]/80' 
                 : 'from-white via-white/50' 
               } to-transparent`} 
             />
             
             {/* Animated Blobs */}
             <div className={`absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#4B9CFF] rounded-full mix-blend-screen filter blur-[100px] md:blur-[150px] animate-pulse transition-opacity duration-500 ${isDarkMode ? 'opacity-10' : 'opacity-20'}`} />
             <div className={`absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-indigo-900 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] transition-opacity duration-500 ${isDarkMode ? 'opacity-20' : 'opacity-5'}`} />
          </div>

          {/* --- NAVBAR --- */}
          <div className="absolute top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-3 md:px-4 flex justify-center">
            <nav className={`glass-nav ${isDarkMode ? 'dark' : 'light'} rounded-full px-4 md:px-6 py-2.5 md:py-3 w-full max-w-[1200px] flex justify-between items-center relative z-50 transition-colors duration-500`}>
              
               <div className="flex items-center">
                <div className="relative cursor-pointer">
                  {/* Logo Text Color Transition */}
                  <span className={`text-2xl md:text-[28px] font-extrabold tracking-tight leading-none transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Cloveo
                  </span>
                  <div className="absolute top-[51%] left-[65%] w-2.5 h-[2.5px] md:w-3 md:h-[3px] bg-blue-500 rounded-full"></div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold">
                {data.navLinks.slice(0, 2).map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.href} 
                      className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} hover:underline decoration-2 underline-offset-4`}
                    >
                      {link.label}
                    </a>
                ))}
                
                {/* Categories Dropdown */}
                <div className="relative group h-full flex items-center">
                  <button className={`flex items-center gap-1 transition-colors duration-300 py-2 ${isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-black'}`}>
                    Categories 
                    <ChevronDown size={14} className="mt-[1px] group-hover:rotate-180 transition-transform" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className={`rounded-2xl shadow-xl border p-2 w-64 backdrop-blur-xl transition-colors duration-300 ${isDarkMode ? 'bg-[#1A1D25]/95 border-white/10' : 'bg-white border-gray-100'}`}>
                      {data.categories.map((cat, idx) => (
                          <DropdownItem key={idx} icon={cat.icon} title={cat.title} subtitle={cat.subtitle} color={cat.color} isDarkMode={isDarkMode} />
                      ))}
                    </div>
                  </div>
                </div>

                {data.navLinks.slice(2).map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.href} 
                      className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} hover:underline decoration-2 underline-offset-4`}
                    >
                      {link.label}
                    </a>
                ))}
              </div>

              <div className="hidden lg:flex items-center gap-4">
                 {/* Toggle Button */}
                 <button 
                    onClick={toggleTheme}
                    className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-gray-300 hover:bg-white/10 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-black'}`}
                 >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                 </button>

                <button className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-gray-300 hover:bg-white/10 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-black'}`}>
                  <User size={20} />
                </button>
                <button className="bg-[#4B9CFF] hover:bg-blue-600 text-white px-7 py-2.5 rounded-full font-bold shadow-md shadow-blue-200 transition-all text-sm transform active:scale-95 cursor-pointer">Contact Us</button>
              </div>

              {/* Mobile Controls */}
              <div className="lg:hidden flex items-center gap-2">
                 <button 
                    onClick={toggleTheme}
                    className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 text-white' : 'bg-white/50 text-gray-800'}`}
                 >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                 </button>
                <button 
                  className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 text-white' : 'bg-white/50 text-gray-800'}`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </nav>
          </div>

          {/* --- MOBILE MENU --- */}
          <div className="absolute top-[80px] left-3 right-3 z-40 lg:hidden flex flex-col items-center">
             <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div 
                    initial="hidden" animate="visible" exit="exit" variants={menuContainerVariants} 
                    className={`w-full max-w-[1200px] backdrop-blur-xl rounded-[24px] shadow-2xl border overflow-hidden ${isDarkMode ? 'bg-[#15171e]/95 border-white/10' : 'bg-white/95 border-white/20'}`}
                  >
                    <div className="p-5 space-y-4">
                        {data.navLinks.slice(0, 1).map((link, idx) => (
                           <motion.a 
                             key={idx} variants={menuItemVariants} href={link.href} 
                             className={`block text-lg font-bold border-b pb-3 ${isDarkMode ? 'text-white border-white/10' : 'text-gray-800 border-gray-100'}`}
                           >
                             {link.label}
                           </motion.a>
                        ))}
                        <motion.div variants={menuItemVariants} className={`border-b pb-3 ${isDarkMode ? 'border-white/10' : 'border-gray-100'}`}>
                           <button 
                             onClick={() => setIsCategoryOpen(!isCategoryOpen)} 
                             className={`flex items-center justify-between w-full text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                           >
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
                           <motion.a 
                             key={idx} variants={menuItemVariants} href={link.href} 
                             className={`block text-lg font-bold border-b pb-3 ${isDarkMode ? 'text-white border-white/10' : 'text-gray-800 border-gray-100'}`}
                           >
                             {link.label}
                           </motion.a>
                        ))}
                        <motion.div variants={menuItemVariants} className="pt-2">
                           <button className="w-full bg-[#4B9CFF] text-white py-3.5 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform">Contact Us</button>
                        </motion.div>
                    </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>

          {/* --- MAIN HERO CONTENT --- */}
          <div className="relative z-10 flex flex-col justify-center flex-grow w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mt-24 lg:mt-0 pb-10">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Side: Text Content */}
              <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="lg:col-span-7 flex flex-col items-start pt-4 lg:pt-0 w-full">
                
                <motion.div variants={fadeInUp} className="relative group cursor-pointer mb-6 sm:mb-8 self-start">
                   <div className="absolute inset-0 bg-[#4B9CFF] blur-md opacity-25 group-hover:opacity-40 transition-opacity rounded-full"></div>
                   <div className={`relative flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border backdrop-blur-md transition-colors ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-200'}`}>
                      <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#4B9CFF] shadow-[0_0_10px_#4B9CFF] animate-pulse"></span>
                      <span className={`text-xs sm:text-sm font-medium tracking-wide transition-colors ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{data.hero.badge}</span>
                      <ArrowRight size={14} className="text-[#4B9CFF] group-hover:translate-x-1 transition-transform" />
                   </div>
                </motion.div>

                {/* Dynamic Headline Color */}
                <motion.h1 variants={fadeInUp} className={`text-4xl sm:text-6xl md:text-7xl lg:text-[92px] leading-[1.0] sm:leading-[0.95] font-semibold tracking-tight mb-6 sm:mb-8 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                   {data.hero.headlinePrefix} <span className="font-light text-gray-400 italic font-serif">{data.hero.headlineItalic}</span> <br/>
                   {data.hero.headlineMiddle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold drop-shadow-2xl">{data.hero.headlineGradient}</span>
                </motion.h1>

                {/* Dynamic Paragraph Color */}
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

              {/* Right Side: Visuals */}
              <div className="lg:col-span-5 relative h-[450px] sm:h-[500px] lg:h-[700px] w-full flex items-center justify-center perspective-[2000px] mt-8 lg:mt-0">
                
                <div className="absolute inset-0 glow-mesh opacity-40 animate-pulse" />

                {/* Main Floating Card */}
                <motion.div variants={floatSlow} animate="animate" className={`relative z-20 w-[90%] sm:w-[380px] h-[400px] sm:h-[520px] glass-card-premium ${isDarkMode ? 'dark' : 'light'} rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden`}>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />

                    <div className="flex justify-between items-start">
                        <div>
                           <div className="text-[#4B9CFF] font-bold tracking-widest text-xs uppercase mb-1">{data.stats.balanceLabel}</div>
                           <div className={`text-4xl sm:text-5xl font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{data.stats.balanceValue}</div>
                        </div>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#4B9CFF] rounded-full flex items-center justify-center shadow-[0_0_20px_#4B9CFF]">
                            <Zap fill="white" className="text-white" size={20} />
                        </div>
                    </div>

                    <div className="relative h-24 sm:h-32 w-full my-4">
                       <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                          <path d="M0,80 C50,80 80,40 150,40 C220,40 250,10 320,10" fill="none" stroke="#4B9CFF" strokeWidth="4" strokeLinecap="round" className="drop-shadow-[0_0_10px_rgba(75,156,255,0.5)]" />
                          <circle cx="320" cy="10" r="6" fill="#fff" className="animate-ping" />
                          <circle cx="320" cy="10" r="6" fill="#fff" />
                       </svg>
                       <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className={`absolute top-[20%] left-[30%] sm:top-[30%] sm:left-[40%] border px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl ${isDarkMode ? 'bg-[#1A1D25] border-white/10' : 'bg-white border-gray-100'}`}>
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{data.stats.payoutText}</span>
                       </motion.div>
                    </div>

                    {/* Dynamic List */}
                    <div className="space-y-2 sm:space-y-3 relative z-10">
                        {data.glassList.map((item, idx) => (
                           <div key={idx} className={`${idx === 2 ? 'hidden sm:block' : ''}`}>
                               <GlassListItem icon={item.icon} title={item.title} price={item.price} isDarkMode={isDarkMode} />
                           </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={floatFast} animate="animate" className={`hidden sm:block absolute top-[10%] left-[-5%] glass-card-premium ${isDarkMode ? 'dark' : 'light'} p-4 rounded-2xl z-30`}>
                   <Star className="text-yellow-400 fill-yellow-400" size={28} />
                </motion.div>

                <motion.div animate={{ y: [0, 20, 0], x: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className={`absolute bottom-[5%] right-0 sm:bottom-[15%] sm:right-[-5%] glass-card-premium ${isDarkMode ? 'dark' : 'light'} p-3 sm:p-5 rounded-2xl z-10 flex gap-3 items-center`}>
                   <div className="bg-green-500/20 p-1.5 sm:p-2 rounded-full text-green-400"><TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                   <div>
                      <div className="text-[10px] sm:text-xs text-gray-400 uppercase">{data.stats.growthLabel}</div>
                      <div className={`text-sm sm:text-base font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{data.stats.growthValue}</div>
                   </div>
                </motion.div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

// --- HELPER COMPONENTS (Adaptive) ---

const GlassListItem = ({ icon, title, price, isDarkMode }) => (
    <div className={`flex items-center justify-between p-2.5 sm:p-3 rounded-2xl border transition-colors cursor-pointer group ${isDarkMode ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-gray-50 border-gray-100 hover:bg-gray-100'}`}>
        <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl transition-colors ${isDarkMode ? 'bg-[#0F1115] text-gray-400 group-hover:text-white' : 'bg-white text-gray-500 group-hover:text-gray-900'}`}>
                {icon}
            </div>
            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'}`}>{title}</span>
        </div>
        <span className="text-[#4B9CFF] font-bold text-xs sm:text-sm bg-[#4B9CFF]/10 px-2 py-1 rounded-lg">{price}</span>
    </div>
);

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