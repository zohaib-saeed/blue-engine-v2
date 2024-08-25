import { FaCircleCheck as IconCheck } from "react-icons/fa6";
import { transparentPricingData } from "@/db";
import { cn } from "@/utils";
import { Button } from "@/components/shared";
import useRedirect from "../../../../helpers/useRedirect";
import { REGISTER_URL } from "../../../../helpers/AppPaths";

const Pricing = () => {
  const onRedirect = useRedirect();

  return (
    <section className="w-full px-3 lg:px:4 flex items-center justify-start flex-col gap-12 md:gap-14 py-16 bg-blue-200/50 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-blue-700 text-center text-sm font-semibold">
          Onbeperkt aantal winkels
        </p>
        <h2 className="text-black-800 font-[800] text-3xl md:text-4xl w-full text-center">
          Transparante prijzen
        </h2>
      </div>
      <div className="w-full max-w-screen-lg flex items-center justify-center relative">
        {/* Pricing Cards  */}
        <div className="w-full grid lg:grid-cols-4 gap-3 lg:gap-2 max-w-screen-sxl">
          {/* Cards  */}
          {transparentPricingData.map((item, index) => (
            <div
              key={index}
              className={cn(
                "w-full max-w-[300px] flex flex-col items-center justify-start gap-2 rounded-xl bg-white-main px-4 lg:px-5 py-6 lg:py-8 mx-auto shadow",
                index === 1 ? "bg-blue-700" : "",
              )}
            >
              {/* Title  */}
              <h3
                className={cn(
                  "text-2xl text-center font-bold text-black-900 leading-tight",
                  index === 1 ? "text-white-main" : "",
                )}
              >
                {item.title}
              </h3>
              {/* Pricing  */}
              <div
                className={cn(
                  "text-3xl font-bold text-black-900 text-center flex items-center justify-center gap-1 flex-wrap",
                  index === 1 ? "text-white-main" : "",
                )}
              >
                <p>{item.price}</p>
                <div className="flex flex-col items-start justify-end text-sm sm:text-[15px] lg:text-[17px] leading-tight">
                  <span>&nbsp;{item.subscriptionDetail}</span>
                  <span>/&nbsp;{item.subscriptionTime}</span>
                </div>
              </div>
              {/* Bullets ==> Features  */}
              <div className="w-full flex flex-col items-center justify-start gap-2 mt-3 min-h-20">
                {item.features.map((bullet, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-start gap-2"
                  >
                    <IconCheck
                      size={17}
                      className={cn(
                        "text-blue-700",
                        index === 1 ? "text-white-main" : "",
                      )}
                    />
                    <p
                      className={cn(
                        "text-[13px] sm:text-sm text-black-800",
                        index === 1 ? "text-white-main" : "",
                      )}
                    >
                      {bullet}
                    </p>
                  </div>
                ))}
                {index === 3 && (
                  <p className="text-[13px] sm:text-sm text-black-800 font-bold">
                    (daama €9,99 per 250 orders)
                  </p>
                )}
              </div>
              {/* Button  */}
              <Button
                className={cn(
                  "",
                  index === 1
                    ? "bg-white-main text-black-500 hover:bg-white-main hover:text-black-500"
                    : "bg-blue-700 text-white-main",
                )}
                radius="xl"
                onClick={() => onRedirect(REGISTER_URL)}
              >
                Klik hier
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
