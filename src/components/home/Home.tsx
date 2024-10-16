import React from "react";
import Hero from "./subs/Hero";
import Trustpilot from "./subs/Trustpiolt";
import Features from "./subs/features/Features";
import WhyBlueEngine from "./subs/WhyBlueEngine";
import Pricing from "./subs/Pricing";
import StartTrial from "./subs/StartTrial";
import ProposedActions from "./subs/features/subs/ProposedActions";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Hero />
      <Trustpilot />
      <Features />
      <WhyBlueEngine />
      <Pricing />
      <StartTrial />
      <ProposedActions />
    </div>
  );
};

export default Home;
