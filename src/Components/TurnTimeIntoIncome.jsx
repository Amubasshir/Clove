"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TurnTimeIntoIncome = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-6 font-outfit overflow-hidden">
      {/* Import Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* --- LEFT SIDE: 3D IMAGE & ANIMATION --- */}
          {/* Responsive Height: h-[350px] on mobile, h-[500px] on desktop */}
          <div className="relative flex justify-center items-center h-[350px] sm:h-[450px] lg:h-[500px] order-1 lg:order-1">
            
            {/* 1. The Blue Ring Frame (Behind) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute w-[60%] md:w-[70%] h-[20%] md:h-[30%] border-[4px] md:border-[5px] border-[#4B9CFF] rounded-[100%] z-0 bottom-0 md:-bottom-10 left-[20%] md:left-[15%]"
            />

            {/* 2. The Blue Glow Ring (At Feet) */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute bottom-[5%] md:bottom-[10%] w-[70%] h-[30px] md:h-[40px] bg-[#4B9CFF] blur-[30px] md:blur-[40px] opacity-60 rounded-[100%] z-10"
            />

            {/* 3. The 3D Character Image (Floating) */}
            <motion.img
              // Fixed the URL typo (removed .com from ibb.co)
              src="https://i.ibb.co/DHnRkVss/trun.png" 
              alt="3D Team"
              className="relative z-20 object-contain h-full w-auto drop-shadow-xl" 
              
              animate={{ y: [-10, 10, -10] }} // Floating Animation
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>

          {/* --- RIGHT SIDE: TEXT CONTENT --- */}
          {/* Responsive Alignment: Center on mobile, Left on desktop */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-2">
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              // Responsive Text Sizes
              className="text-4xl sm:text-5xl lg:text-[4rem] leading-[1.1] font-extrabold text-black tracking-tight mb-4 md:mb-6"
            >
              Turn Your Free Time <br className="hidden md:block" />
              into 
              {/* Blue Highlighted Text */}
              <span className="relative inline-block ml-2 md:ml-3 px-2">
                 <span className="absolute inset-0 bg-blue-50 rounded-lg transform -skew-x-3 h-[90%] top-[10%] w-full"></span>
                 <span className="relative text-[#4B9CFF]">Real Income</span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-base md:text-lg leading-[1.7] mb-8 max-w-md lg:max-w-lg font-light"
            >
              Cloveo lets you earn money by completing simple online tasks anytime, 
              anywhere. From creating posts to moderating content, every action 
              counts – and every task pays.
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-[#4B9CFF] hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-base md:text-lg shadow-lg shadow-blue-200 w-full sm:w-auto cursor-pointer"
            >
              Start Task
            </motion.button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TurnTimeIntoIncome;