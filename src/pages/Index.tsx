import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import OurStorySection from "@/components/OurStorySection";
import AchievementsSection from "@/components/AchievementsSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import SurpriseSection from "@/components/SurpriseSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<'hero' | 'journey' | 'surprise'>('hero');

  const handleStartJourney = () => {
    setCurrentSection('journey');
  };

  const handleRevealSurprise = () => {
    setCurrentSection('surprise');
  };

  if (currentSection === 'surprise') {
    return <SurpriseSection />;
  }

  if (currentSection === 'journey') {
    return (
      <div className="min-h-screen">
        <TimelineSection />
        <OurStorySection />
        <AchievementsSection />
        <LoveLetterSection onRevealSurprise={handleRevealSurprise} />
      </div>
    );
  }

  return <HeroSection onStartJourney={handleStartJourney} />;
};

export default Index;
