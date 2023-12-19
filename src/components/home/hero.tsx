import imgright from "../../assets/images/7 (2) 1.png";
const Hero=()=>{
    return(
        <section className="grid  pb-3 pt-10 md:pt-20 lg:grid-cols-2 grid-cols-1 2xl:w-[50%] gap-12 relative items-center w-[90%] mx-auto">
        <div>
          <h2
           
            className="text-[30px] md:text-[55px] lg:text-[50px] xl:text-[64px] md:leading-[85px]  text-[#000000] font-NunitoBold 	"
          >
            De #1 verzendtool voor VVB orders
          </h2>
          <p className="text-[15px] md:text-[18px] lg:text-[14px] xl:text-[20px] font-NunitoMedium py-8">
            In één klik al jouw VVB-orders gesorteerd, gedownload, samengevoegd
            en gereedgemaakt om direct te kunnen beginnen met inpakken. Geen
            paklijsten meer nodig dankzij jouw referentie(s) direct op het
            verzendlabel!
          </p>
          <button className="bg-[#238CFF] rounded-[50px] px-6 py-2 font-NunitoRegular text-[14px] md:text-[16px] lg:text-[15px] xl:text-[20px] text-white">
            Probeer 10 dagen gratis
          </button>
        </div>
        <div className="mt-10 lg:mt-0">
          <img src={imgright} alt="" className="w-[80%] lg:w-[85%] mx-auto" />
        </div>
      </section>
    )

}
export default Hero