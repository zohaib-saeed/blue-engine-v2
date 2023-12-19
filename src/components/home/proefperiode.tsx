import img1 from "../../assets/images/CosTape (1) 1.png";
import img2 from "../../assets/images/image 17.png";

const Proefperiode = () => {
  return (
    <section id="pricing" className="py-10 md:py-[80px]  bg-[#FFF]">
      <div className="w-[90%] 2xl:w-[50%] mx-auto">
        <div className="grid grid-cols-1">
          <p className="text-[14px] md:text-[20px] lg:text-[25px] font-[500] text-[#312ECB] text-center font-NunitoMedium">
            Moeiteloos inpakken en verzenden voor VVB
          </p>
          <h2 className=" lg:text-[50px] md:text-[36px] text-[25px] font-NunitoBold text-center">
            Start nu je gratis proefperiode!
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1  items-center">
          <div>
            <img src={img1} alt="" className="mt-10 md:mt-0 w-[80%] md:w-full xl:w-[80%] mx-auto" />
          </div>
          <div className="grid grid-cols-1 justify-center items-center mt-20 md:mt-0">
            <div className="text-center">
            <button className="bg-[#238CFF] font-[700] rounded-[50px] lg:px-20 px-10 py-3 font-NunitoRegular xl:text-[35px] lg:text-[26px] text-[20px] text-white">
              Klik hier
            </button>
            <p className="xl:text-[16px] lg:text-[16px] text-[13px] font-bold py-2 lg:py-4">10 dagen gratis proef. Stopt automatisch. Geen betaalgegevens nodig.</p>
            </div>
          </div>
          <div>
            <img src={img2} alt="" className="mt-10 md:mt-0 w-[80%] md:w-full lg:w-[90%] xl:w-[80%] mx-auto"/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Proefperiode;
