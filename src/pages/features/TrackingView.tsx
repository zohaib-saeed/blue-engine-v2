import FeaturedSection from "@/components/features/FeaturedSection";
import Hero from "@/components/features/Hero";
import OpportunityFinder from "@/components/features/OpportunityFinder";
import ProductResearch from "@/components/features/ProductResearch";
import Trustpilot from "@/components/home/subs/Trustpiolt";
import { featureTrackingView } from "@/db";

const TrackingView = () => {
  const feature = featureTrackingView;

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Hero data={feature[0]} />
      <Trustpilot />
      <OpportunityFinder data={feature[1]} />
      {feature.slice(2).map((item, index) => (
        <FeaturedSection key={index} data={item} index={index + 1} />
      ))}
      <ProductResearch />
    </div>
  );
};

export default TrackingView;
