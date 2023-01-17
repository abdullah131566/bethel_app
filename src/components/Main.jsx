import React from "react";
import EmpoweringChurchSection from "./Specific.jsx/Main/EmpoweringChurchSection";
import HeroSection from "./Specific.jsx/Main/HeroSection";
import MinistriesSection from "./Specific.jsx/Main/MinistriesSection";
import OurOfficeSection from "./Specific.jsx/Main/OurOfficeSection";
import StatementOfFaithSection from "./Specific.jsx/Main/StatementOfFaithSection";
import VisionBehindBethelSection from "./Specific.jsx/Main/VisionBehindBethelSection";
import VisionStatementSection from "./Specific.jsx/Main/VisionStatementSection";
import WhatWeDoSection from "./Specific.jsx/Main/WhatWeDoSection";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <VisionStatementSection />
      <MinistriesSection />
      <WhatWeDoSection />
      <VisionBehindBethelSection />
      <StatementOfFaithSection />
      <EmpoweringChurchSection />
      <OurOfficeSection />
    </main>
  );
};

export default Main;
