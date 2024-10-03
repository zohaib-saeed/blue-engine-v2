import { Button } from '@/components/shared';

const ProductResearch = () => {
  return (
    <section className="bg-[url('/images/home-hero-bg.png')] bg-cover bg-center bg-no-repeat w-screen flex justify-center py-[1.5rem] px-3 lg:px-4">
      <div className="max-w-screen-xl mx-auto box py-[5rem] flex flex-col gap-2 justify-between items-center">
        <h3 className="text-black-main text-[28px] text-white font-extrabold text-center">
          Ga gelijk aan de slag met BlueEngine
        </h3>
        <p className="text-neutral-600 text-base font-normal ">
          14 dagen uitproberen. Stopt automatisch. Geen betaalgegevens nodig
        </p>
        <Button className="mt-4 w-[300px] mx-auto bg-gradient-to-r from-blue-600 to-[#32aaff] bg-blue-300 text-white-main rounded-[3px] shadow-none text-base font-extrabold px-[30px] outline-none">
          Maak een account aan
        </Button>
      </div>
    </section>
  );
};

export default ProductResearch;
