import React from "react";
import { cn } from "@/utils";

const FeaturedSection: React.FC<ISubFeatureSectionDataType> = ({
  data,
  index,
}) => {
  const { title, subText, image, name } = data;
  return (
    <section
      className={cn(
        " max-w-screen-xl mx-auto mb-[3.5rem] flex flex-col-reverse md:grid items-center justify-between gap-12 md:gap-8 bg-white-main px-3 lg:px-4 grid-cols-2",
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-2 lg:max-w-[80%]",
          index % 2 === 0 ? "lg:order-last" : "lg:order-first",
        )}
      >
        {name && (
          <div className="flex justify-start items-center">
            <div className="bg-blue-700 text-white-main border-[1px] border-solid border-transparent rounded-full shadow-none text-[13px] lg:text-sm font-medium py-[.2rem] lg:py-[.3rem] px-[.6rem] lg:px-[.8rem] hero-gradient-button">
              {name}
            </div>
          </div>
        )}
        <h3 className="font-extrabold text-[28px] leading-8 whitespace-break-spaces">
          {title}
        </h3>
        <p className="font-normal text-base whitespace-break-spaces">
          {subText}
        </p>
      </div>
      <div
        className={cn(
          "flex items-center justify-center pb-[60%] relative w-full",
          index % 2 === 0 ? "lg:order-first" : "lg:order-last",
        )}
      >
        <img
          src={image}
          alt="featured-section"
          className="w-full h-full absolute top-0 left-0"
        />
      </div>
    </section>
  );
};

export default FeaturedSection;
