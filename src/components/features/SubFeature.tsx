import Hero from './subs/Hero';
import OpportunityFinder from './subs/OpportunityFinder';
import FeaturedSection from './subs/FeaturedSection';
import ProductResearch from './subs/ProductResearch';
import Trustpilot from '@/components/home/subs/Trustpiolt';
import { subFeaturesData } from '@/db';

const SubFeature = () => {
  const subFeature = subFeaturesData[0];

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Hero data={subFeature.first} />
      <Trustpilot />
      <OpportunityFinder data={subFeature.second} />
      <FeaturedSection data={subFeature.third} index={1} />
      <FeaturedSection data={subFeature.fourth} index={2} />
      <FeaturedSection data={subFeature.fifth} index={3} />
      <ProductResearch />
    </div>
  );
};

export default SubFeature;
