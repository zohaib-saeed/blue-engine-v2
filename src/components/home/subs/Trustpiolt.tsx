const Trustpilot = () => {
  return (
    <section className="w-full flex items-center justify-center max-w-screen-sxl m-auto">
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 bg-white-main py-6 lg:py-8 px-3 lg:px-4">
        <img
          src="/images/trustpilot-stars.svg"
          alt="Trustpilot"
          className="h-[28px] lg:h-[34px] w-[175px] lg:w-[215px]"
        />
        <div className="text-base lg:text-lg text-blue-950">
          4.8 gebasseerd op 24 reviews op
        </div>
        <img
          src="/images/trustpilot-logo.svg"
          alt="Trustpilot"
          className="h-[28px] lg:h-[34px] w-[114px] lg:w-[138px]"
        />
      </div>
    </section>
  );
};

export default Trustpilot;
