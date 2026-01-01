"use client"
import React, { useState } from 'react';
import { User, ChevronDown, PenTool, MessageSquare, CheckCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // 1. Import Framer Motion

const CloveoHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // 2. Animation Variants (অ্যানিমেশন সেটিংস)
  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1 // লিংকগুলো একটার পর একটা আসবে
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;800&display=swap');
          .font-outfit { font-family: 'Outfit', sans-serif; }
        `}
      </style>

      <div className="min-h-screen w-full bg-white flex items-center justify-center p-2 sm:p-4 md:p-6 font-outfit">
        
        {/* HERO CARD CONTAINER */}
        <div className="relative w-full max-w-[1600px] min-h-[800px] lg:h-[86vh] lg:min-h-[750px] rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl bg-gray-900 flex flex-col">
          
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url('https://i.ibb.co.com/KgT6rjt/Hero-Img.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 lg:bg-gradient-to-tr lg:from-black/80 lg:via-black/20 lg:to-transparent" />
          </div>

          {/* --- NAVBAR --- */}
          <div className="absolute top-0 left-0 right-0 z-50 pt-4 md:pt-8 px-2 md:px-4 flex justify-center">
            <nav className="bg-white rounded-[30px] px-5 py-3 md:px-8 md:py-2.5 w-full max-w-[1240px] flex justify-between items-center shadow-xl relative z-50">
              
              {/* Logo */}
              <div className="flex items-center">
                <div className="relative cursor-pointer">
                  <span className="text-2xl md:text-[28px] font-extrabold text-gray-900 tracking-tight leading-none">
                    Cloveo
                  </span>
                  <div className="absolute top-[51%] left-[65%] w-2.5 h-[2.5px] md:w-3 md:h-[3px] bg-blue-500 rounded-full"></div>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
                <a href="#" className="text-black font-bold">Home</a>
                <a href="#" className="hover:text-blue-500 transition-colors">All Tasks</a>
                
                {/* Desktop Dropdown */}
                <div className="relative group h-full flex items-center">
                  <button className="flex items-center gap-1 hover:text-blue-500 transition-colors py-4">
                    Categories 
                    <ChevronDown size={14} strokeWidth={3} className="mt-[2px] opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-[80%] left-[-20px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 w-64 overflow-hidden">
                      <DropdownItem icon={<PenTool size={18} />} title="Meme Design" subtitle="Create viral content" color="blue" />
                      <DropdownItem icon={<MessageSquare size={18} />} title="Reddit Posting" subtitle="Engage communities" color="purple" />
                      <DropdownItem icon={<CheckCircle size={18} />} title="Moderation" subtitle="Manage tasks" color="green" />
                    </div>
                  </div>
                </div>

                <a href="#" className="hover:text-blue-500 transition-colors">How It Works</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Profile</a>
              </div>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex items-center gap-6">
                <button className="text-gray-700 hover:text-black transition">
                  <User size={22} strokeWidth={1.5} />
                </button>
                <button className="bg-[#4B9CFF] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md text-[15px]">
                  Contact Us
                </button>
              </div>

              {/* Mobile Menu Toggle Button */}
              <button 
                className="lg:hidden text-gray-800 z-50 p-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </nav>
          </div>

          {/* --- MOBILE MENU WITH ANIMATION --- */}
          {/* 3. AnimatePresence ব্যবহার করা হয়েছে যাতে Menu ক্লোজ হওয়ার সময়ও অ্যানিমেশন দেখায় */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                className="absolute top-20 left-2 right-2 z-40 bg-white/95 backdrop-blur-md rounded-[30px] p-6 shadow-2xl lg:hidden flex flex-col space-y-4 border border-white/20"
              >
                <motion.a variants={itemVariants} href="#" className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">Home</motion.a>
                <motion.a variants={itemVariants} href="#" className="text-xl font-medium text-gray-600 border-b border-gray-100 pb-2">All Tasks</motion.a>
                
                {/* Mobile Dropdown */}
                <motion.div variants={itemVariants} className="border-b border-gray-100 pb-2">
                  <button 
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="flex items-center justify-between w-full text-xl font-medium text-gray-600 mb-2"
                  >
                    Categories <ChevronDown className={`transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Category Animation */}
                  <AnimatePresence>
                    {isCategoryOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 space-y-3 overflow-hidden"
                      >
                        <div className="flex items-center gap-3 text-base text-gray-500 mt-2"><PenTool size={16}/> Meme Design</div>
                        <div className="flex items-center gap-3 text-base text-gray-500"><MessageSquare size={16}/> Reddit Posting</div>
                        <div className="flex items-center gap-3 text-base text-gray-500"><CheckCircle size={16}/> Moderation</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.a variants={itemVariants} href="#" className="text-xl font-medium text-gray-600 border-b border-gray-100 pb-2">How It Works</motion.a>
                <motion.a variants={itemVariants} href="#" className="text-xl font-medium text-gray-600 pb-2">Profile</motion.a>
                
                <motion.button 
                  variants={itemVariants}
                  className="bg-[#4B9CFF] text-white w-full py-3.5 rounded-2xl font-bold text-lg shadow-lg mt-2 active:scale-95 transition-transform"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* --- HERO CONTENT --- */}
          <div className="relative z-10 flex flex-col justify-end flex-grow w-full max-w-[1300px] mx-auto px-4 md:px-6 pb-12 lg:pb-16 mt-32 lg:mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
              <div className="lg:col-span-7 flex flex-col items-start ">
                <h3 className="text-white italic tracking-[0.2em] font-semibold text-xs md:text-[34px] uppercase mb-3 md:mb-4 ml-1 opacity-90">
                  Earn More. Work Less.
                </h3>
                <h1 className="text-white leading-[1.0] lg:leading-[0.95] tracking-tight space-y-5">
                  <span className="block text-4xl sm:text-6xl lg:text-[74px] font-medium">Earn Real Money</span>
                  <span className="block text-4xl sm:text-6xl lg:text-[74px] font-medium -mt-1 sm:-mt-2 lg:-mt-4">Completing Simple</span>
                  <span className="block text-[2.75rem] sm:text-[4.5rem] lg:text-[108px] font-extrabold -mt-1 sm:-mt-2 lg:-mt-4">Online Tasks</span>
                </h1>
              </div>
              <div className="lg:col-span-5 flex flex-col pb-2">
                <p className="text-gray-200 text-sm md:text-[16px] leading-relaxed max-w-md lg:max-w-[440px] mb-8 font-light opacity-90">
                  Join thousands of people earning by designing memes, posting on Reddit, or moderating tasks — all from one simple dashboard.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <button className="bg-[#4B9CFF] hover:bg-blue-600 text-white px-8 py-3.5 md:px-9 md:py-4 rounded-full font-bold text-sm md:text-[15px] transition shadow-lg text-center w-full sm:w-auto min-w-[180px]">Start Earning Now</button>
                  <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3.5 md:px-9 md:py-4 rounded-full font-bold text-sm md:text-[15px] transition shadow-lg text-center w-full sm:w-auto min-w-[180px]">Learn How It Works</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DropdownItem = ({ icon, title, subtitle, color }) => {
  const bgColors = {
    blue: 'bg-blue-100 text-blue-600 group-hover/item:bg-blue-500',
    purple: 'bg-purple-100 text-purple-600 group-hover/item:bg-purple-500',
    green: 'bg-green-100 text-green-600 group-hover/item:bg-green-500',
  };
  return (
    <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 rounded-xl transition-colors group/item">
      <div className={`${bgColors[color]} p-2 rounded-lg group-hover/item:text-white transition`}>
        {icon}
      </div>
      <div>
        <span className="block text-gray-900 font-bold text-sm">{title}</span>
        <span className="block text-gray-500 text-xs">{subtitle}</span>
      </div>
    </a>
  );
};

export default CloveoHero;