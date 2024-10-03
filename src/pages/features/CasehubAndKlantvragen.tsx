import FeaturedSection from '@/components/features/subs/FeaturedSection';
import Hero from '@/components/features/subs/Hero';
import OpportunityFinder from '@/components/features/subs/OpportunityFinder';
import ProductResearch from '@/components/features/subs/ProductResearch';
import Trustpilot from '@/components/home/subs/Trustpiolt';
import { featureCasehubAndKlantvragen } from '@/db';

const CasehubAndKlantvragen = () => {
  const feature = featureCasehubAndKlantvragen;

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

export default CasehubAndKlantvragen;
