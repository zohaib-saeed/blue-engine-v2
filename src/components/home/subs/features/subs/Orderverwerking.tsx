import { FaSquareCheck as IconCheckbox } from "react-icons/fa6";
import { BsArrowRight as IconArrowRight } from "react-icons/bs";

const Orderverwerking = () => {
  return (
    <section className="w-full flex flex-col items-center rounded-md justify-start gap-8 mt-6 px-4 md:px-14 py-4 bg-gray-200">
      <div className="w-full grid lg:grid-cols-2 gap-12">
        {/* Col 1  */}
        <div className="w-full flex flex-col gap-8">
          <h4 className="text-black-800 font-semibold text-2xl w-full text-left ">
            Orderverwerking{" "}
            <span className="underline decoration-blue-600 underline-offset-4 decoration-2">
              VVB
            </span>{" "}
            | Non-VVB
          </h4>

          {/* Heading + Sub text  */}
          <div className="w-full flex flex-col items-start justify-start">
            <h3 className="text-black-800 font-semibold text-3xl w-full text-left whitespace-break-spaces break-words">
              Binnen 10 seconda aan de slag met inpakken
            </h3>
            <p className="text-base font-semibold text-neutral-600 text-left whitespace-break-spaces break-words">
              De snelste manier om je VVB-orders te verwerken
            </p>
          </div>

          {/* Bullets  */}
          <div className="w-full grid gap-3">
            <div className="bg-green-500 rounded-full w-fit px-4 py-1 font-medium text-base md:text-base text-white-main">
              In 1 klik
            </div>
            <div className="grid w-full gap-2">
              {[
                "Alle orders gesorteerd, bevestigd en in 1 PDF",
                "Verzendinfo onderaan VVB label",
                "Picklijst met hoeveel artikelen te verzenden vandaag",
                "Alvast inpakken zonder te bevetigen (optie)",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-2 w-full"
                >
                  <IconCheckbox className="text-green-500 size-5" />
                  <p className="text-base font-semibold text-neutral-600 text-left whitespace-break-spaces break-words">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Col 2 */}
        <div className="relative w-full h-fit pb-[75%] my-auto overflow-hidden">
          <img
            src="/images/home/orderverwerking/1.svg"
            alt="Orderverwerking"
            className="w-full h-full object-cover rounded-md absolute"
          />
        </div>
      </div>

      <div className="w-full flex justify-between items-center flex-row flex-wrap gap-x-3 gap-y-6 sm:gap-6">
        {/* Tags  */}
        <div className="flex justify-start items-center flex-wrap gap-3 sm:gap-4">
          {["Foutloos inpakken", "Bespaart tijd", "Razendsnel"].map(
            (item, index) => (
              <div
                key={index}
                className="text-black-800 text-sm font-[800] rounded-full border-2 border-solid border-black-800 px-4 py-1 transition-all duration-300"
              >
                {item}
              </div>
            )
          )}
        </div>
        <a
          href="/features/orderverwerking"
          target="_blank"
          className="text-black-800 text-base lg:text-lg font-[800] flex items-center justify-center gap-2 rounded-full border-2 border-solid border-black-800 px-4 py-1 cursor-pointer hover:bg-black-800/5 transition-all durration-300"
          rel="noreferrer"
        >
          <span>Bekijk meer</span>
          <IconArrowRight size={21} />
        </a>
      </div>
    </section>
  );
};

export default Orderverwerking;
