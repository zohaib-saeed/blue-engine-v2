import { Button } from "@/components/shared";
import { whyBlueEngineData } from "@/db";
import { cn, getTailwindColor } from "@/utils";
import { REGISTER_URL } from "../../../../helpers/AppPaths";
import useRedirect from "../../../../helpers/useRedirect";

const WhyBlueEngine = () => {
  const redirect = useRedirect();

  return (
    <section className="w-full max-w-screen-sxl px-3 lg:px:4 flex items-center justify-start flex-col gap-14 md:gap-16 py-12 bg-white-main">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <div className="w-full grid xs:grid-cols-[0.7fr_1.3fr] gap-4 xs:gap-7">
          {/* Col 1 */}
          <div className="w-full flex flex-col items-start justify-start gap-3">
            {["Inzichtelijker.", "Effectiever.", "Simpeler.", "Sneller."].map(
              (item, index) => (
                <h3
                  key={index}
                  className={cn(
                    "w-fit px-1 text-left font-extrabold text-black-800 text-3xl md:text-4xl",
                    index === 1
                      ? "border-[1px] broder-solid border-black-800"
                      : "",
                  )}
                >
                  {item}
                </h3>
              ),
            )}
          </div>
          {/* Col 2  */}
          <div className="w-full flex flex-col items-start justify-start gap-3">
            <h3 className="w-fit px-1 text-left font-extrabold text-black-800 text-3xl md:text-4xl">
              Ervaar de kracht van BlueEngine
            </h3>
            <p className="w-full text-sm md:text-base font-medium text-left">
              Hoe succuesvoller je wordt, hoe meer uren je er mee bezig bent Dat
              geldt natuurlijk ook voor je bol.com business. Tijd voor stap 2:
              het aantal uren aan dat je dagelijks kwijt bent aan standaard
              zaken te minimaliseren zodat je meer tijd overhoudt voor de
              succesvolle zaken. Maak je bedrijf een stuk soepeler en klaar voor
              groei!
            </p>
            <Button
              onClick={() => redirect(REGISTER_URL)}
              color={getTailwindColor("blue", "700")}
              className="transition-all duration-300"
            >
              Probeer uit
            </Button>
          </div>
        </div>
        <div className="w-full grid xs:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-7 md:gap-10">
          {whyBlueEngineData.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-start justify-start gap-2"
            >
              <div className="w-[75px] h-[75px] flex items-center justify-center rounded-full bg-gray-200">
                <img
                  src={`/images/home/why-us/${index + 1}.svg`}
                  alt="Img here"
                  className="w-[60%] h-[60%] m-auto"
                />
              </div>
              <h3 className="text-base xs:text-lg md:text-xl font-bold text-black-800 text-left">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-black-500 text-left font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBlueEngine;
