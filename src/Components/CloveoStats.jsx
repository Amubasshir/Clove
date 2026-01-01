"use client"
import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * 1. ANIMATED COUNTER LOGIC
 * Handles the smooth counting from 0 to the target value.
 */
const Counter = ({ value, duration = 2.5 }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 50,
    duration: duration * 1000,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Rounds numbers (e.g., 1.5 -> 2)
        ref.current.textContent = Math.round(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

/**
 * 2. INDIVIDUAL STAT ITEM
 */
const StatItem = ({ 
  data, 
  isLast, 
  normalColor, 
  highlightColor, 
  dividerColor 
}) => {
  // Determine if this specific item should be highlighted (bold/black)
  const textColor = data.highlight ? highlightColor : normalColor;
  const fontWeight = data.highlight ? 'font-bold' : 'font-bold'; // Can adjust weight difference if needed

  return (
    <div className="flex flex-col md:flex-row items-center justify-center group">
      
      {/* Content */}
      <div className="flex flex-col items-center text-center px-6 md:px-10 py-6 md:py-0">
        <div 
          className={`text-5xl md:text-6xl lg:text-[5rem] tracking-tight mb-3 flex items-baseline transition-colors duration-300 ${fontWeight}`}
          style={{ color: textColor }}
        >
          {data.prefix && <span className="mr-1">{data.prefix}</span>}
          <Counter value={data.value} />
          {data.suffix && <span className="ml-1">{data.suffix}</span>}
        </div>

        <p className="text-gray-800 font-semibold text-sm md:text-base tracking-wide uppercase opacity-80">
          {data.label}
        </p>
      </div>

      {/* Slanted Divider (Hidden on Mobile, Hidden on Last Item) */}
      {!isLast && (
        <div 
          className="hidden md:block h-20 w-[1.5px] rotate-[15deg] mx-2 lg:mx-4 origin-center"
          style={{ backgroundColor: dividerColor }} 
        />
      )}
    </div>
  );
};

/**
 * 3. MAIN CUSTOMIZABLE COMPONENT
 */
const CloveoStats = ({ 
  stats = [],            
  backgroundColor = "white",
  normalTextColor = "black", 
  highlightTextColor = "#4B9CFF", 
  dividerColor = "#4B9CFF",    
  className = "" 
}) => {
  
  // Default Data if none provided (Matches your image)
  const defaultStats = [
    { id: 1, value: 98, suffix: "%", label: "Task Approval Rate", highlight: false },
    { id: 2, value: 50, suffix: "K+", label: "Active Earners", highlight: false },
    { id: 3, value: 2, prefix: "$", suffix: "M+", label: "Total Payouts", highlight: true }, // Highlighted
    { id: 4, value: 30, suffix: "+", label: "Task Categories", highlight: false },
  ];

  const dataToRender = stats.length > 0 ? stats : defaultStats;

  return (
    <section 
      className={`w-full py-24 font-sans border-b border-gray-100 ${className}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800&display=swap');`}
      </style>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 font-[Outfit]">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center divide-y md:divide-y-0 divide-gray-100 md:gap-0">
          
          {dataToRender.map((item, index) => (
            <StatItem 
              key={item.id || index}
              data={item}
              isLast={index === dataToRender.length - 1}
              normalColor={normalTextColor}
              highlightColor={highlightTextColor}
              dividerColor={dividerColor}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default CloveoStats;