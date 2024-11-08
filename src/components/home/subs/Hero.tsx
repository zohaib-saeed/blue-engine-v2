import { Button } from "@/components/shared";
import { getTailwindColor } from "@/utils";
import useRedirect from "../../../../helpers/useRedirect";
import { REGISTER_URL } from "../../../../helpers/AppPaths";

const Hero = () => {
  const redirect = useRedirect();

  return (
    <section className="w-full py-10 sm:py-16 lg:py-20 px-3 lg:px-4 bg-[url('/images/home/home-hero-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="w-full max-w-screen-xl grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        {/* Col 1  */}
        <div className="w-full flex flex-col item-center justify-center gap-2 xs:gap-4 md:gap-5">
          <h2 className="text-white-main font-[800] text-3xl md:text-4xl lg:text-5xl">
            Magazijnsoftware voor VVB en Non-VVB'ers
          </h2>
          <p className="text-base md:text-lg text-left text-white-mercury">
            Ontwikkeld om het{" "}
            <span className="bg-white-main rounded-full px-[10px] font-bold text-sm md:text-base text-blue-700">
              drukke leven
            </span>{" "}
            van de bol-verkoper te versimpelen. Met talloze tools welke jouw
            dagelijkse taken{" "}
            <span className="bg-white-main rounded-full px-[10px] font-bold text-sm md:text-base text-blue-700">
              automatiseert
            </span>
            , kosten bespaard en prestatienormen bewaakt!
          </p>
          <Button
            color={getTailwindColor("white", "main")}
            className="mr-auto text-blue-700 hover:bg-white-main hover:text-blue-700"
            onClick={() => redirect(REGISTER_URL)}
          >
            Probeer 14 dagen gratis uit
          </Button>
        </div>
        {/* Col 2  */}
        <div className="w-full max-w-[85%] sm:max-w-[60%] lg:max-w-none h-full flex items-center justify-end m-auto">
          <div className="w-full pb-[80%] flex items-center justify-center relative">
            <img
              src="/images/home/hero.png"
              alt="Hero"
              className="w-full h-full object-contain absolute top-0 left-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
