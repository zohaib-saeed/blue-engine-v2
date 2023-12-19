import Group_51 from "../../assets/images/Group_51.png";
import check_blue from "../../assets/images/check_blue.svg";
import check_white from "../../assets/images/check_white.svg";

const Pricing = () => {
  return (
    <section id="pricing" className="py-10 md:py-[80px]  bg-[#C9E3FF]">
      <div className="2xl:w-[50%] xl:w-[75%] lg:w-[80%] w-[90%] mx-auto">
        <div className="grid grid-cols-1 ">
          <p className="text-[22px] tracking-wider	 font-[500] text-[#312ECB] text-center font-NunitoMedium">
            Moeiteloos inpakken en verzenden voor VVB
          </p>
          <h2 className="xl:text-[50px] text-[26px] font-NunitoBold text-center">
            Transparante prijzen
          </h2>
        </div>
        <div className="grid relative xl:gap-12 gap-5 md:py-10 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-10">
          <div
            className={` py-8  pb-14 w-full pr-18 bg-[#ffffff] z-10 rounded-[20px] mx-auto sm:px-4 	px-4 	`}
          >
            <h2 className="font-NunitoExtraBold text-[30px] md:text-[24px] text-center">
              Starter
            </h2>
            <div className="flex items-center justify-center">
              <h2 className="font-NunitoBold text-center lg:text-[40px] md:text-[26px] text-[30px]">
                € 9,95
              </h2>
              <div>
                <p className="text-[10px] p-0 pl-2 leading-none md:text-[10px] font-NunitoBold sm:mt-3">
                 Ex. BTW
                </p>
                <p className="text-[18px] font-NunitoExtraBold p-0 md:text-[15px] ">
                  / maand
                </p>
              </div>
            </div>
            <ul className="max-w-md space-y-1 pr-8 px-2 py-6">
              <>
                <li className="flex gap-1  md:text-[15px] xl:text-[16px] text-[13px] items-center font-NunitoMedium pb-2 pt-4">
                  <img src={check_blue} alt="" />
                  Tot 100 VVB orders p.m.
                </li>
                <hr className="border border-[#9CCBFF] bg-[#9CCBFF]" />
                <li className="flex  gap-1 md:text-[15px] xl:text-[16px] text-[13px] items-center font-NunitoMedium pb-2 pt-4">
                  <img src={check_blue} alt="" />1 winkel
                </li>
                <hr className="border border-[#9CCBFF] bg-[#9CCBFF]" />
              </>
            </ul>
            <center>
              <button className=" btn_hero rounded-[50px] px-8 py-2 font-NunitoRegular text-[16px] text-white">
                Klik hier
              </button>
            </center>
          </div>
          <div
            className={` py-8 pb-14 w-full bg-[#3C96F9] z-10 rounded-[20px] mx-auto sm:px-4 	px-4	`}
          >
            <h2 className="font-NunitoBold text-white text-[30px] md:text-[24px] text-center">
              Groei
            </h2>
            <div className="flex items-center justify-center">
              <h2 className="font-NunitoBold text-white text-center lg:text-[40px] md:text-[26px] text-[30px]">
                € 24,95
              </h2>
              <div>
                <p className="text-[10px] text-white  p-0 pl-2 leading-none md:text-[10px] font-NunitoBold sm:mt-3">
                 Ex. BTW
                </p>
                <p className="text-[18px] text-white  font-NunitoExtraBold p-0 md:text-[15px] ">
                  / maand
                </p>
              </div>
            </div>
            <ul className="max-w-md space-y-1 px-2 pr-8  py-6">
              <>
                <li className="flex gap-1 text-white md:text-[15px] xl:text-[16px]  text-[14px] items-center font-NunitoMedium pb-2 pt-4">
                  <img src={check_white} alt="" />
                  Tot 1000 VVB orders p.m.
                </li>
                <hr className="border border-[#9CCBFF] bg-[#9CCBFF]" />
                <li className="flex gap-1  text-white md:text-[15px] xl:text-[16px] text-[14px] items-center font-NunitoMedium pb-2 pt-4">
                  <img src={check_white} alt="" />2 winkel
                </li>
                <hr className="border border-[#9CCBFF] bg-[#9CCBFF]" />
              </>
            </ul>
            <center>
              <button className=" bg-[#fff] text-[#000000] rounded-[50px] px-8 py-2 font-NunitoMedium text-[16px] ">
                Klik hier
              </button>
            </center>
          </div>
          <div
            className={` py-8 pb-14 w-full bg-[#ffffff] z-10 rounded-[20px] mx-auto sm:px-4 	px-4`}
          >
            <h2 className="font-NunitoBold text-[30px] md:text-[24px] text-center">
              Business
            </h2>
            <div className="flex items-center justify-center">
              <h2 className="font-NunitoBold text-center lg:text-[40px] md:text-[26px] text-[30px]">
                € 49,95
              </h2>
              <div>
                <p className="text-[10px]   p-0 pl-2 leading-none md:text-[10px] font-NunitoBold sm:mt-3">
                 Ex. BTW
                </p>
                <p className="text-[18px]  font-NunitoExtraBold p-0 md:text-[15px] ">
                  / maand
                </p>
              </div>
             
              
            </div>
            <ul className="max-w-md space-y-1 px-2 py-6">
              <>
                <li className="flex gap-1 md:text-[14px] xl:text-[16px] text-[13px] items-center font-NunitoMedium pb-2 pt-4">
                  <img src={check_blue} alt="" />
                  Meer dan 1000 VVB orders p.m.
                </li>
                <hr className="border border-[#9CCBFF] bg-[#9CCBFF]" />
                <li className="flex gap-1 md:text-[14px] xl:text-[16px] text-[13px] items-center font-NunitoMedium pb-2 pt-4">
                  <img src={check_blue} alt="" />
                  +3 winkels
                </li>
                <hr className="border border-[#9CCBFF] bg-[#9CCBFF]" />
              </>
            </ul>
            <center>
              <button className=" btn_hero rounded-[50px] px-8 py-2 font-NunitoRegular text-[16px] text-white">
                Klik hier
              </button>
            </center>
          </div>

          <img
            src={Group_51}
            alt=""
            className="absolute sm:block hidden -top-5 left-[-6%] w-[220px] z-0 "
          />
          <img
            src={Group_51}
            alt=""
            className="absolute bottom-0 right-[-6%] w-[220px] z-0 "
          />
        </div>
      </div>
    </section>
  );
};
export default Pricing;
