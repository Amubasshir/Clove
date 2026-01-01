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
