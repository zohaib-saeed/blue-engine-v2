import { Button } from "@/components/shared";
import useRedirect from "../../../../helpers/useRedirect";
import { REGISTER_URL } from "../../../../helpers/AppPaths";

const StartTrial = () => {
  const onRedirect = useRedirect();

  return (
    <section className="w-full max-w-screen-lg p-3 md:px-8 py-16 grid xs:grid-cols-2 gap-10 lg:gap-16">
      {/* Col 1 */}
      <div className="w-full order-2 xs:order-1 flex flex-col items-start justify-end gap-5 lg:gap-6">
        <h2 className="text-black-800 font-[800] text-3xl md:text-4xl w-full text-left">
          Start nu je gratis proefperiode
        </h2>
        <p className="text-base md:text-lg text-left text-black-800 md:max-w-[80%]">
          14 dagen gratis periode. Stopt automatisch. Geen betaalgegevens nodig.
        </p>
        <Button
          onClick={() => onRedirect(REGISTER_URL)}
          className="bg-blue-700 text-white-main"
        >
          Account aanmaken
        </Button>
      </div>
      {/* Col 2 */}
      <div className="w-full order-1 xs:order-2 flex items-center justify-center">
        <div className="w-full max-w-[350px] xs:max-w-none flex items-center justify-center pb-[69%] relative">
          <img
            src="/images/home/start-free-trial.png"
            alt="Start free trial"
            className="object-contain w-full h-full absolute left-0 top-0"
          />
        </div>
      </div>
    </section>
  );
};

export default StartTrial;
