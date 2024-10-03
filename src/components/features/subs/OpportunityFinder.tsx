const OpportunityFinder: React.FC<{ data: { title: string; subText: string } }> = ({ data }) => {
  const { title, subText } = data;
  return (
    <section className=" max-w-screen-xl mx-auto box flex flex-col gap-1 items-center justify-center px-3 lg:px-4">
      <h2 className="text-[32px] font-extrabold text-center">{title}</h2>
      <p className="text-center font-normal text-lg  max-w-full sm:max-w-[80%] lg:max-w-[60%] mx-auto">
        {subText}
      </p>
    </section>
  );
};

export default OpportunityFinder;
