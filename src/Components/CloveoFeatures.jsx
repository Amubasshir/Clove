import React from 'react';
import { Timer, Globe, BadgeDollarSign, FileText } from 'lucide-react';

const CloveoFeatures = () => {
  return (
    <section className="w-full bg-white py-20 md:py-32 font-outfit overflow-hidden">
      
      {/* Import Font (Outfit) to match the design style */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800&display=swap');
          .font-outfit { font-family: 'Outfit', sans-serif; }`}
      </style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT COLUMN: Feature Cards Grid --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            
            {/* Card 1: Fast & Easy */}
            <div className="bg-white border border-gray-100 p-8 rounded-[32px] hover:shadow-lg transition-shadow duration-300 flex flex-col items-start h-full min-h-[220px]">
              {/* Icon Container */}
              <div className="mb-6 relative">
                <Timer size={40} className="text-[#4B9CFF]" strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-2 bg-blue-100 p-1 rounded-full">
                   <div className="w-2 h-0.5 bg-blue-500"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast & Easy</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Complete tasks in minutes, from anywhere.
              </p>
            </div>

            {/* Card 2: Global Access (Blue Card) */}
            <div className="bg-[#4B9CFF] p-8 rounded-[32px] shadow-2xl shadow-blue-200 flex flex-col items-start h-full min-h-[220px] text-white relative overflow-hidden group">
              {/* Background Decoration */}
              <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="mb-6">
                <Globe size={40} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Global Access</h3>
              <p className="text-blue-50 leading-relaxed text-[15px] relative z-10">
                Anyone with an internet connection can join.
              </p>
            </div>

            {/* Card 3: Transparent Earnings (Full Width) */}
            <div className="sm:col-span-2 bg-white border border-gray-100 p-8 rounded-[32px] hover:shadow-lg transition-shadow duration-300 flex flex-col items-start min-h-[180px]">
              <div className="mb-6 flex items-center gap-1">
                <div className="relative">
                  <BadgeDollarSign size={40} className="text-[#4B9CFF]" strokeWidth={1.5} />
                </div>
                <FileText size={24} className="text-blue-300 -ml-2 mt-4" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Earnings</h3>
              <p className="text-gray-500 leading-relaxed text-[15px] max-w-sm">
                Know exactly how much you'll earn per task.
              </p>
            </div>

          </div>

          {/* --- RIGHT COLUMN: Text Content --- */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-4xl text-gray-500 font-medium mb-1">
              Why
            </h2>
            <h1 className="text-5xl md:text-[4rem] leading-[1.1] font-bold text-gray-900 mb-8 tracking-tight">
              Can I really earn on my own schedule?
            </h1>
            
            <p className="text-gray-500 text-base md:text-lg leading-[1.8] mb-10 max-w-lg font-light">
              Absolutely. Cloveo makes earning flexible and reliable so you can work whenever you want. With 30+ different ways to earn and a proven track record of $2M+ in total payouts, you have the freedom to turn your spare time into a steady stream of income.
            </p>

            <button className="bg-[#4B9CFF] hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-1 cursor-pointer">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CloveoFeatures;