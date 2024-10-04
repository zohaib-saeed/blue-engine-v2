import { PiGlobeStandBold as IconGlobe } from "react-icons/pi";
import { Button } from "@/components/shared";
import { REGISTER_URL } from "../../../../helpers/AppPaths";
import useRedirect from "../../../../helpers/useRedirect";

interface IProps {
  data: { name?: string; title: string; subText?: string; image?: string };
}

const Hero: React.FC<IProps> = ({ data }) => {
  const { name, title, image, subText } = data;

  const redirect = useRedirect();

  return (
    <section className="flex justify-center hero-section w-screen py-11 lg:pt-12 pb-16 px-3 lg:px-4 md:mb-7 bg-[url(/images/sub-features/hero-bg.png)] bg-cover bg-start bg-no-repeat)]">
      <div className="w-full grid gap-6 md:gap-10 lg:gap-20 md:grid-cols-[0.8fr_1.2fr] max-w-screen-xl mx-auto pt-[2rem]">
        {/* ---------------- Col 1 ----------------- */}
        <div className="w-full flex flex-col justify-start">
          {/*  Badge */}
          {name && (
            <div className="flex justify-start items-center gap-1 bg-white-main mr-auto px-2 py-[6px] rounded-[2px]">
              <IconGlobe className="text-blue-700" size={15} />
              <p className="text-uppercase text-xs md:text-[13px] text-blue-700 font-extrabold uppercase">
                {name}
              </p>
            </div>
          )}
          {/*  Title */}
          <h1 className="text-black font-extrabold text-3xl md:text-4xl lg:text-5xl my-[1rem] whitespace-break-spaces">
            {title}
          </h1>
          <p className="mb-[1.5rem] text-base md:text-lg font-normal whitespace-break-spaces">
            {subText}
          </p>
          {/*  CTA ==> Button */}
          <div className="flex items-center">
            <Button
              onClick={() => redirect(REGISTER_URL)}
              className="bg-blue-700 text-white-main rounded-[3px] shadow-none text-base font-extrabold px-[30px] outline-none"
            >
              Start meteen
            </Button>
          </div>
        </div>
        {/*  ---------------- Col 2 ---------------- */}
        <figure className="w-full relative pb-[60%]">
          <img
            src={image}
            alt="hero"
            className="w-full h-full absolute top-0 left-0"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
