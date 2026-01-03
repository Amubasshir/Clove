"use client";

import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const CloveoFooter = ({ isDarkMode }) => {
  return (
    <div className={`w-full font-outfit pt-32 transition-colors duration-500 ${isDarkMode ? 'bg-[#05050A]' : 'bg-white'}`}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* --- FLOATING CTA CARD --- */}
      <div className="relative z-20 px-4 md:px-8 max-w-7xl mx-auto -mb-32 md:-mb-28">
        <div className={`
          rounded-[40px] shadow-2xl flex flex-col md:flex-row items-center relative min-h-[400px] md:min-h-[420px] transition-all duration-500
          ${isDarkMode 
            ? 'bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-slate-800' 
            : 'bg-gradient-to-r from-[#3ca5ff] to-[#258aff] shadow-blue-200'}
        `}>
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-[50%] p-8 md:p-16 flex flex-col items-center md:items-start text-center md:text-left z-40 relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-4 tracking-tight">
              Start Earning <br /> with Confidence.
              
            </h2>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-blue-50'} text-base md:text-[17px] mb-8 font-light`}>
              Experience a 98% task approval rate and instant rewards. Stop waiting for approvals and start turning your time into real income today.
            </p>
            <button className={`
              px-9 py-4 rounded-full font-bold text-base shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer
              ${isDarkMode 
                ? 'bg-blue-600 text-white hover:bg-blue-500' 
                : 'bg-white text-gray-900 hover:bg-gray-50'}
            `}>
              Create Account
            </button>
          </div>

          {/* Right Side: Image Container */}
          <div className="hidden md:block w-full md:w-[50%] h-full absolute bottom-0 right-0 pointer-events-none">
             <img 
               src="https://i.ibb.co/Myyqr2sX/71f51ca71fcb3a905f7abf59764e05bc1665226b.png" 
               alt="Woman in brown" 
               className="absolute bottom-0 right-4 w-[230px] object-contain z-20 opacity-90"
             />
             <img 
               src="https://i.ibb.co/vChmZKr5/c5f4792b6c6a5676705f3a1bbef09677ae3d95a0.png" 
               alt="Woman in denim" 
               className="absolute bottom-0 right-40 w-[380px] object-contain z-30"
             />
             <div className={`absolute inset-0 w-full h-full z-10 rounded-[40px] ${isDarkMode ? 'bg-black/20' : 'bg-transparent'}`}></div>
          </div>
        </div>
      </div>


      {/* --- FOOTER SECTION --- */}
      <footer className={`
        pt-56 pb-10 px-4 md:px-8 relative z-10 overflow-hidden font-outfit transition-colors duration-500
        /* Added Top Shadow Here */
        ${isDarkMode 
          ? 'bg-[#0A0A0F] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.8)]' 
          : 'bg-white border-t border-gray-100 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.08)]'}
      `}>
        
        {/* Background Texture (Glow Effect) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-500" 
             style={{ 
               opacity: isDarkMode ? 0.4 : 0.6,
               backgroundImage: isDarkMode 
                ? 'radial-gradient(circle at 50% 0%, #1e293b 0%, transparent 70%)' 
                : 'radial-gradient(circle at 50% 0%, #ebf5ff 0%, transparent 70%)' 
             }}>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 relative z-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center">
              <span className={`text-[40px] font-bold tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Cloveo</span>
              <div className="w-5 h-[5px] bg-blue-500 rounded-full mt-2.5 ml-[-42px]"></div>
            </div>
            
            <p className={`text-[15px] leading-relaxed max-w-xs font-light transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Join thousands of people earning by designing memes, 
              posting on Reddit, or moderating tasks
            </p>
            
            <div className="flex gap-5 pt-2">
              <a href="#" className={`transition-colors hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}><Facebook size={20} /></a>
              <a href="#" className={`transition-colors hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className={`transition-colors hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className={`text-lg font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Links</h3>
            <ul className={`space-y-4 text-[15px] font-light transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-blue-600'}`}>Home</a></li>
              <li><a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-blue-600'}`}>All Task</a></li>
              <li><a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-blue-600'}`}>Categories</a></li>
              <li><a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-blue-600'}`}>How It Works</a></li>
              <li><a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-blue-600'}`}>Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className={`text-lg font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Help</h3>
            <ul className={`space-y-4 text-[15px] font-light transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-blue-600'}`}>Help Center</a></li>
              <li><a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-blue-600'}`}>Trust and safety</a></li>
              <li><a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-blue-600'}`}>Privacy settings</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className={`text-lg font-semibold transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Subscribe Our Newsletter</h3>
            <p className={`text-[15px] max-w-xs font-light transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Stay updated with the latest security tips and offers
            </p>
            <form className="relative w-full max-w-sm mt-2">
              <input 
                type="email" 
                placeholder="Email Address..." 
                className={`w-full pl-6 pr-32 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-colors border
                  ${isDarkMode 
                    ? 'bg-[#1A1A24] text-white placeholder-gray-500 border-transparent' 
                    : 'bg-[#F3F4F6] text-gray-900 placeholder-gray-400 border-gray-100'}`}
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#4B9CFF] hover:bg-blue-600 text-white px-8 rounded-full font-semibold text-[15px] transition-all shadow-md cursor-pointer active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`max-w-7xl mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light transition-colors ${isDarkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-500'}`}>
          <p>© 2026 All rights reserved!</p>
          <div className="flex gap-8">
            <a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-blue-600'}`}>Privacy policy</a>
            <a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-blue-600'}`}>Terms and Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CloveoFooter;