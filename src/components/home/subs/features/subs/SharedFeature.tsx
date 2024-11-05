import { FaSquareCheck as IconCheckbox } from "react-icons/fa6";
import { BsArrowRight as IconArrowRight } from "react-icons/bs";
import { featuresData } from "@/db/home-feature-sections";
import { cn } from "@/utils";

interface IProps {
  feature: (typeof featuresData)[0];
}

const SharedFeature: React.FC<IProps> = ({ feature }) => {
  return (
    <section className="w-full flex flex-col items-center rounded-md justify-start gap-8 mt-6 px-4 md:px-14 py-4 bg-gray-200">
      <div className="w-full grid lg:grid-cols-2 gap-12">
        {/* Col 1  */}
        <div className="w-full flex flex-col gap-8">
          {/* Title  */}
          <h4 className="text-black-800 font-semibold text-2xl w-full text-left ">
            {feature?.title}
          </h4>

          {/* Heading + Sub text  */}
          <div className="w-full flex flex-col items-start justify-start gap-2">
            <h3 className="text-black-800 font-semibold text-3xl w-full text-left whitespace-break-spaces break-words">
              {feature?.heading}
            </h3>
            <p className="text-base font-semibold text-neutral-600 text-left whitespace-break-spaces break-words">
              {feature?.subText}
            </p>
          </div>

          {/* Bullets  */}
          <div className="w-full grid gap-3">
            {feature?.bullets?.label && (
              <div className="bg-green-500 rounded-full w-fit px-4 py-1 font-medium text-base md:text-base text-white-main">
                {feature?.bullets?.label}
              </div>
            )}
            <div className="grid w-full gap-2">
              {feature?.bullets?.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start justify-start gap-2 w-full"
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
        <div
          className={cn(
            "relative w-full h-fit pb-[75%] my-auto overflow-hidden",
            feature?.img?.className,
          )}
        >
          <img
            src={feature?.img.url}
            alt="Orderverwerking"
            className="w-full h-full object-cover rounded-md absolute"
          />
        </div>
      </div>

      <div className="w-full flex justify-between items-center flex-row flex-wrap gap-x-3 gap-y-6 sm:gap-6">
        {/* Tags  */}
        <div className="flex justify-start items-center flex-wrap gap-3 sm:gap-4">
          {feature?.tags.map((item, index) => (
            <div
              key={index}
              className="text-black-800 text-sm font-[800] rounded-full border-2 border-solid border-black-800 px-4 py-1 transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </div>
        <a
          href={feature?.pageUrl}
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

export default SharedFeature;
