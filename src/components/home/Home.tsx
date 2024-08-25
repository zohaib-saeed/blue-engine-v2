import React from 'react';
import Hero from './subs/Hero';
import Trustpilot from './subs/Trustpiolt';
import Features from './subs/features/Features';
import WhyBlueEngine from './subs/WhyBlueEngine';
import Pricing from './subs/Pricing';
import StartTrial from './subs/StartTrial';

const Home = () => {
  return (
    <section className="w-full flex flex-col items-center justify-start">
      <Hero />
      <Trustpilot />
      <Features />
      <WhyBlueEngine />
      <Pricing />
      <StartTrial />
    </section>
  );
};

export default Home;
