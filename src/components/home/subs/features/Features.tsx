import ProposedActions from './subs/ProposedActions';
import { homeFeaturesSectionsData } from '@/db';
import SharedFeatureSection from './subs/SharedFeatureSection';

const Features = () => {
  return (
    <section className="w-full max-w-screen-sxl flex flex-col items-center justify-start gap-12 py-12 px-4">
      {/* Headings  */}
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 w-full text-center">
          Meer dan 125 features voor Bol.com partners
        </h2>
        <p className="text-black-400 font-semibold text-lg xs:text-xl md:text-2xl w-full text-center">
          Of de GRATIS feature: facturen aanmaken & uploaden naar Bol.com
        </p>
      </div>
      {/* Sections  */}
      <ProposedActions />
      {homeFeaturesSectionsData.slice(1).map((data, index) => (
        <SharedFeatureSection
          data={data}
          key={index}
          sectionClasses={
            index % 2 === 0 ? 'lg:grid-cols-[0.9fr_1.1fr]' : 'lg:grid-cols-[1.1fr_0.9fr]'
          }
          colOneClasses={index % 2 === 0 ? 'lg:order-last' : 'lg:order-first'}
          colTwoClasses={index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'}
          colOneAlignment={index % 2 === 0 ? 'right' : 'left'}
        />
      ))}
      {/* CTA  */}
      <div
        className="text-white-main rounded-md py-2 px-4 text-center whitespace-pre-wrap leading-normal text-base"
        style={{
          background: 'linear-gradient(180deg, rgba(45,139,242,1) 0%, rgba(2,78,161,1) 100%)',
        }}
      >
        Bekijk hier de toekomstige ontwikkelingen voor aankomende periode!
      </div>
    </section>
  );
};

export default Features;
