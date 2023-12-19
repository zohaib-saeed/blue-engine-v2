import img_1 from "../../assets/images/f1 (6) 1.png";
import img_2 from "../../assets/images/Feature5 1.png";
import img_3 from "../../assets/images/Feature3 1.png";
import img_4 from "../../assets/images/feature4 1.png";
import img_5 from "../../assets/images/f1 (6) 1.png";
import img_6 from "../../assets/images/Feature6 1.png";
import img_7 from "../../assets/images/feature-7.png";
import img_8 from "../../assets/images/feature-8.png";
import img_9 from "../../assets/images/feature-9.png";
import img3 from "../../assets/images/op-witte.png";

interface featuresType {
  img: string;
  name: string;
  descritpion: string;
}
const Features = () => {
  const FeaturesListLeft: featuresType[] = [
    {
      img: img_1,
      name: "Inpak-gegevens direct op het VVB verzendlabel!",
      descritpion:
        " Alle informatie die jij wilt al gelijk op het verzendlabel! Zeg maar dag tegen picklijsten of handmatig opschrijven. Jouw productcode, aantal, interne referentie, verzendzak of andere instructies direct op het verzendlabel; het kan allemaal!",
    },
    {
      img: img_2,
      name: "Inzicht welke VVB-orders bij een Parcelshop liggen, stilstaan, of teruggestuurd zijn door je vervoerder",
      descritpion:
        "Wil je graag weten welke pakketten van je VVB-orders bij een parcelshop liggen en niet zijn afgehaald, of wellicht problemen hebben, of simpelweg retour worden gestuurd omdat er iets mis is met het pakket? Zo krijg je inzicht in al je VVB-orders.",
    },
    {
      img: img_3,
      name: "Houdt rekening met de gewenste levertijd van de klant",
      descritpion:
        "Sorteert jouw verzendlabels op basis van jouw productreferentie en maakt hier 1 pdf van. Dit maakt het inpakken een stuk makkelijker. Dit terwijl het wel rekening houdt met de gewenste leverdag van de klant!",
    },
  ];

  const FeaturesListRight: featuresType[] = [
    {
      img: img_4,
      name: "Stel zelf automatisch in: brievenbus of pakket",
      descritpion:
        " Van te voren zelf ingesteld instelling welk EAN als pakket of als brievenbus moet verzonden worden. Twee of meer items in een bestelling, ook dit kan je gemakkelijk aangeven!",
    },
    {
      img: img_5,
      name: "Genereer één totale paklijst",
      descritpion:
        "Een paklijst met de totaal aantallen van je producten welke je vandaag moet verzenden.",
    },
    {
      img: img_6,
      name: "Maakt automatisch de labels aan en verzend ze naar je email",
      descritpion:
        "Staat jouw pakkettype altijd goed of heb je het via onze verzendregels ingericht? Dan kun je er ook voor kiezen om het automatisch je paklijst + VVB verzendlabels te laten e-mailen naar je. Handig als jij nog orders aan het inpakken bent bijvoorbeeld!",
    },
  ];
  return (
    <>
      <section id="features" >
        <img
          src={img3}
          alt=""
          className="w-[25%] md:w-[20%] lg:w-[12%] 2xl:w-[8%] ml-auto pr-5"
        />
        <h2 className="text-[35px] md:text-[50px] font-NunitoBold text-center bg-[#C9E3FF] py-2">
          Features
        </h2>
      </section>

      <section className="w-[90%]  2xl:w-[50%] mx-auto pt-16 sm:px-2">
        {FeaturesListLeft.map((item, index) => {
          return (
            <div className=" shadow_drop mb-16 px-6  relative  rounded-[10px]  py-6">
              <div
                key={index}
                className="grid  sm:space-x-6   grid-cols-12  items-center"
              >
                <div className="lg:col-span-2 col-span-12">
                  <img
                    src={item.img}
                    alt=""
                    className=" w-[35%] lg:w-[80%] mx-auto"
                  />
                  <h2 className="bg-[#238CFF] absolute text-[16px] sm:-left-6 -left-2 -top-3 rounded-[41px] py-1 px-5 max-w-[75px] font-NunitoBold text-center text-white uppercase">
                    NEW
                  </h2>
                </div>
                <div className="lg:col-span-10 col-span-12 mt-5 lg:mt-0">
                  <h2 className="text-[16px] md:text-[24px]  xl:text-[30px] text-center lg:text-left  font-NunitoBold md:leading-10">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-[12px] md:text-[18px] xl:text-[22px] text-center lg:text-left   font-NunitoMedium">
                    {item.descritpion}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="w-[90%] 2xl:w-[50%] mx-auto pb-16">
        {FeaturesListRight.map((item, index) => {
          return (
            <div className=" shadow_drop mb-16 pr-4 pl-10    relative  rounded-[10px] ">
              <div
                key={index}
                className="grid    py-2 grid-cols-12   items-center"
              >
                <div className="lg:col-span-10  lg:pr-10 lg:order-1 order-2 col-span-12">
                  <h2 className="text-[16px] md:text-[24px]  xl:text-[30px] text-center lg:text-left  font-NunitoBold md:leading-10">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-[12px] md:text-[18px] xl:text-[22px] text-center lg:text-left   font-NunitoMedium">
                    {item.descritpion}
                  </p>
                </div>
                <div className="lg:col-span-2 lg:order-2 order-1 col-span-12">
                  <img
                    src={item.img}
                    alt=""
                    className="py-4 w-[35%] lg:w-[80%] mx-auto"
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div className="text-center">
          <button className="bg-[#238CFF]   rounded-[50px] px-8 md:px-10 py-3 md:py-4 font-NunitoBold text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px]  text-white">
            Bekijk de features
          </button>
        </div>
      </section>

      <section className="w-[90%] xl:w-[85%] 2xl:w-[50%] mx-auto   gap-5 grid grid-cols-1 md:grid-cols-3 py-10 lg:py-36">
        <div>
          <img src={img_8} alt="" className="w-[60%] mx-auto" />
          <h2 className="font-NunitoExtraBold leading-6 lg:leading-10 pt-5 lg:pt-14  text-center text-[30px] md:text-[35px] lg:text-[50px] xl:text-[55px] ">
            3X
          </h2>
          <p className="font-NunitoExtraBold text-center text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px] ">
            Efficient
          </p>
        </div>
        <div className="mt-10 md:mt-0">
          <img src={img_7} alt="" className="w-[60%] mx-auto" />
          <h2 className="font-NunitoExtraBold leading-6 lg:leading-10 pt-5 lg:pt-14  text-center text-[30px] md:text-[35px] lg:text-[50px] xl:text-[55px] ">
            -78%
          </h2>
          <p className="font-NunitoExtraBold text-center text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px] ">
            Inpakfouten
          </p>
        </div>
        <div className="mt-10 md:mt-0">
          <img src={img_9} alt="" className="w-[60%] mx-auto" />
          <h2 className="font-NunitoExtraBold leading-6 lg:leading-10 pt-5 lg:pt-14  text-center text-[30px] md:text-[35px] lg:text-[50px] xl:text-[55px] ">
            -9%
          </h2>
          <p className="font-NunitoExtraBold text-center text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px] ">
            Retouren
          </p>
        </div>
      </section>
    </>
  );
};
export default Features;
