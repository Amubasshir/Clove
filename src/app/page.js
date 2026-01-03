import CloveoFeatures from "@/Components/CloveoFeatures";
import CloveoFooter from "@/Components/CloveoFooter";
import CloveoStats from "@/Components/CloveoStats";
import CloveoHero from "@/Components/Hero";
import HowItWorks from "@/Components/HowItWorks";
import TaskListSection from "@/Components/TaskListSection";
import TurnTimeIntoIncome from "@/Components/TurnTimeIntoIncome";

import Image from "next/image";

export default function Home() {
  return (
    <main>
       <CloveoHero />
      <CloveoStats />
      <CloveoFeatures />
      <TaskListSection />
      <HowItWorks />
      <TurnTimeIntoIncome />
      <CloveoFooter/>
   </main>
  );
}

// "use client"
// import React, { useState } from 'react';
// import CloveoFeatures from "@/Components2/CloveoFeatures";
// import CloveoFooter from "@/Components2/CloveoFooter";
// import CloveoStats from "@/Components2/CloveoStats";
// import CloveoHero from "@/Components2/Hero";
// import HowItWorks from "@/Components2/HowItWorks";
// import TaskListSection from "@/Components2/TaskListSection";
// import TurnTimeIntoIncome from "@/Components2/TurnTimeIntoIncome";

// export default function Home() {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   const toggleTheme = () => setIsDarkMode(!isDarkMode);

//   return (
//     // ✅ Added dynamic class to <main> so the whole page background changes
//     <main className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#05050A]' : 'bg-white'}`}>
      
//       <CloveoHero  isDarkMode={isDarkMode}  toggleTheme={toggleTheme} 
//       />

//       <CloveoStats  isDarkMode={isDarkMode} />


//       <CloveoFeatures isDarkMode={isDarkMode} />
//       <TaskListSection isDarkMode={isDarkMode} />
//       <HowItWorks isDarkMode={isDarkMode} />
//       <TurnTimeIntoIncome isDarkMode={isDarkMode} />
//       <CloveoFooter isDarkMode={isDarkMode} />

//    </main>
//   );
// }