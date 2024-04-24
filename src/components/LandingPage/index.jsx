import React from "react";
import HeroSection from "./HeroSection";
import WhyUsSection from "./WhyUsSection";
import SkillTalentSection from "./SkillTalentSection";

const LandingPageContent = () => {
  return (
    <div className="flex flex-col items-center self-center w-full max-w-[1218px] max-md:max-w-full">
      <HeroSection />
      <WhyUsSection />
      <SkillTalentSection />
    </div>
  );
};

export default LandingPageContent;
