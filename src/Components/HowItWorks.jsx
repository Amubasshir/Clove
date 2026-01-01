import React from 'react';
import { UserPlus, CheckCircle2, MousePointer2, ClipboardCheck, Timer, DollarSign } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Sign Up & Verify",
      desc: "Create your free Cloveo account.",
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
          <UserPlus size={32} className="text-[#4B9CFF]" />
          <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1 border-2 border-white">
            <CheckCircle2 size={12} className="text-white" />
          </div>
        </div>
      ),
      borderStyle: "solid",
      numPosition: "top"
    },
    {
      id: "02",
      title: "Choose a Task",
      desc: "Choose from posting, creating, or moderating.",
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center bg-teal-50 rounded-lg mb-4">
          <div className="bg-teal-500 w-10 h-12 rounded-sm flex flex-col gap-1 p-2 items-start justify-center">
             <div className="w-6 h-1 bg-white/50 rounded"></div>
             <div className="w-4 h-1 bg-white/50 rounded"></div>
             <div className="w-5 h-1 bg-white/50 rounded"></div>
          </div>
          <MousePointer2 size={20} className="absolute bottom-2 right-2 text-gray-800 fill-black stroke-white" />
        </div>
      ),
      borderStyle: "dashed",
      numPosition: "bottom" 
    },
    {
      id: "03",
      title: "Complete & Submit",
      desc: "Follow instructions and complete the task.",
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
          <ClipboardCheck size={36} className="text-gray-600" />
          <div className="absolute top-2 right-4 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      ),
      borderStyle: "solid",
      numPosition: "top"
    },
    {
      id: "04",
      title: "Get Paid Instantly",
      desc: "Earn instantly after approval.",
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center bg-yellow-50 rounded-full mb-4">
          <Timer size={40} className="text-blue-900 absolute" />
          <div className="absolute flex items-center justify-center bg-yellow-400 w-8 h-8 rounded-full border-2 border-white z-10">
             <DollarSign size={18} className="text-blue-900 font-bold" />
          </div>
        </div>
      ),
      borderStyle: "solid",
      numPosition: "bottom"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 font-outfit overflow-hidden">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800&display=swap');
          .font-outfit { font-family: 'Outfit', sans-serif; }`}
      </style>

      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-[3.5rem] font-extrabold text-black mb-6 tracking-tight leading-tight">
            How It Works
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            Join Cloveo, pick a task that interests you, complete it as instructed, and get paid. 
            It’s fast, easy, and designed for anyone to start earning right away.
          </p>
        </div>

        {/* --- STEPS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-24 gap-x-8">
          
          {steps.map((step) => (
            <div key={step.id} className="relative flex flex-col group">
              
              {/* 
                 --- STEP NUMBER LOGIC ---
                 Default (Mobile): -top-14 (সব কার্ডের উপরে থাকবে)
                 Large Screen (lg): যদি 'bottom' পজিশন হয়, তাহলে নিচে চলে যাবে (-bottom-14)
              */}
              <span 
                className={`absolute left-2 text-5xl font-bold text-[#7FBFFF] z-10 
                ${step.numPosition === 'top' 
                   ? '-top-14' 
                   : '-top-14 lg:-bottom-14 lg:top-auto' 
                 }
                `}
              >
                {step.id}
              </span>

              {/* --- CARD CONTAINER --- */}
              <div 
                className={`
                  relative w-full h-full min-h-[280px] rounded-[35px] p-3
                  border-2 border-[#4B9CFF]
                  ${step.borderStyle === 'dashed' ? 'border-dashed' : 'border-solid'}
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                `}
              >
                
                {/* Inner Gray Box */}
                <div className="bg-[#F6F7F9] w-full h-full rounded-[25px] p-6 flex flex-col items-center justify-center text-center">
                  
                  <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;