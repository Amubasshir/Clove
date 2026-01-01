"use client";

import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const CloveoFooter = ({ isDarkMode }) => {
  return (
    <div className={`w-full font-outfit pt-32 transition-colors duration-500 ${isDarkMode ? 'bg-[#05050A]' : 'bg-gray-50'}`}>
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
            : 'bg-gradient-to-r from-[#3ca5ff] to-[#258aff]'}
        `}>
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-[50%] p-8 md:p-16 flex flex-col items-center md:items-start text-center md:text-left z-40 relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-4 tracking-tight">
              Ready To Start <br />
              Earning?
            </h2>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-blue-50'} text-base md:text-[17px] mb-8 font-light`}>
              Join Cloveo today and complete your first task in minutes.
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
        ${isDarkMode ? 'bg-[#0A0A0F]' : 'bg-[#0f111a]'}
      `}>
        
        {/* Background Texture (Glow Effect) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none" 
             style={{ backgroundImage: isDarkMode 
                ? 'radial-gradient(circle at 50% 0%, #1e293b 0%, transparent 70%)' 
                : 'radial-gradient(circle at 50% 0%, #1a2236 0%, transparent 70%)' }}>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 relative z-10">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center">
              <span className="text-[40px] font-bold tracking-tight text-white">Cloveo</span>
              <div className="w-5 h-[5px] bg-blue-500 rounded-full mt-2.5 ml-[-42px]"></div>
            </div>
            
            <p className="text-gray-400 text-[15px] leading-relaxed max-w-xs font-light">
              Join thousands of people earning by designing memes, 
              posting on Reddit, or moderating tasks
            </p>
            
            <div className="flex gap-5 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-[15px] font-light">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">All Task</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold text-white">Help</h3>
            <ul className="space-y-4 text-gray-400 text-[15px] font-light">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trust and safety</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy settings</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-semibold text-white">Subscribe Our Newsletter</h3>
            <p className="text-gray-400 text-[15px] max-w-xs font-light">
              Stay updated with the latest security tips and offers
            </p>
            <form className="relative w-full max-w-sm mt-2">
              <input 
                type="email" 
                placeholder="Email Address..." 
                className={`w-full pl-6 pr-32 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 border-none text-sm
                  ${isDarkMode ? 'bg-[#1A1A24] text-white placeholder-gray-500' : 'bg-[#f4f7fa] text-gray-800 placeholder-gray-400'}`}
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#4B9CFF] hover:bg-blue-600 text-white px-8 rounded-full font-semibold text-[15px] transition-all shadow-md cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-light">
          <p>© 2026 All rights reserved!</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CloveoFooter;