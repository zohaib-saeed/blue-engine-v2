import logo from "../assets/images/Logo.png";
import envelope from "../assets/images/envelope.svg";
import circle from "../assets/images/circle.svg";
const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F]">
      <div className="grid grid-cols-2 items-center pb-12  py-4 mx-auto 2xl:w-[50%] w-[90%]">
        <div className="flex gap-4 items-center">
          <h2 className="md:text-[48px] text-2xl font-NunitoExtraBold text-white">
            Sync8
          </h2>
          <img src={logo} alt="" className="sm:w-[80px] w-[50px] " />
        </div>
        <div></div>
      </div>
      <div className="grid  2xl:w-[50%] w-[90%]  mx-auto grid-cols-12 ">
        <div className="sm:col-span-4 col-span-12">
          <div className="grid gap-2 grid-cols-12">
            <div className="col-span-2">
              <img src={envelope} alt="" className="w-[30px]" />
            </div>
            <div className="col-span-10">
              <h2 className="font-NunitoExtraBold  lg:text-[22px] sm:text-[18px] text-[16px]  text-white sm:pb-5 pb-1">
                Info@sync8.nl
              </h2>
            </div>
          </div>
          <div className="grid  gap-2 items-center grid-cols-12 lg:mb-10">
            <div className="col-span-10">
              <h2 className="lg:text-[22px] text-[12px] font-NunitoExtraBold text-white">
                Bedrijfsgegevens
              </h2>
              <p className="text-[#FFFFFF] font-[300] lg:text-[22px] text-[12px] ">
                Meerlandenweg 65B <br /> 1187ZR Amstelveen <br /> <br />
                <span className="font-NunitoExtraBold">KVK</span> 86947273{" "}
                <br />
                <span className="font-NunitoExtraBold">BTW</span> NL864155372BO1
              </p>
            </div>
          </div>
        </div>
        <div className="sm:mb-0  sm:mt-0 mt-5  sm:col-span-4 col-span-6  ">
          <h2 className="font-NunitoExtraBold  lg:text-[22px] sm:text-[18px] text-[16px]  text-white sm:pb-5 pb-1">
            Quick Links
          </h2>
          <ul>
            <li className="text-white  lg:text-[18px] text-[11px] flex gap-2 font-NunitoRegular lg:leading-10 leading-7">
              <img src={circle} alt="" />
              <a href="/">Home</a>
            </li>
            <li className="text-white flex lg:text-[18px] text-[11px]  gap-2 font-NunitoRegular lg:leading-10 leading-7">
              <img src={circle} alt="" />
              <a href="#features">Features</a>
            </li>
            <li className="text-white lg:text-[18px] text-[11px]  flex gap-2 font-NunitoRegular lg:leading-10 leading-7">
              <img src={circle} alt="" />
              <a href="#faq">Veel gestelde vragen</a>
            </li>
          </ul>
        </div>
        <div className="sm:mb-0  sm:mt-0 mt-5  sm:col-span-4 col-span-6">
          <h2 className="font-NunitoExtraBold lg:text-[22px] sm:text-[18px] text-[16px]   text-white sm:pb-5 pb-1">
            <a href="/">Support Links</a>
          </h2>
          <ul>
            <li className="text-white lg:text-[18px] text-[11px]  flex gap-2 font-NunitoRegular lg:leading-10 leading-7">
              <img src={circle} alt="" />
              <a href="/">Algemene Voorwaarden</a>
            </li>
            <li className="text-white lg:text-[18px] text-[11px]  flex  gap-2 font-NunitoRegular lg:leading-10 leading-7">
              <img src={circle} alt="" />
              <a href="/">Privacy Statement</a>
            </li>
            <li className="text-white lg:text-[18px] text-[11px]  flex gap-2 font-NunitoRegular lg:leading-10 leading-7">
              <img src={circle} alt="" />
              <a href="/">Verwerkingsovereenkomst</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-[0.2px] border-[#AEAEAE]" />
      <div className="text-center py-4">
        <p className="text-[#CECECE] text-[9px] font-NunitoRegular">
          COPYRIGHT © 2023 ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
