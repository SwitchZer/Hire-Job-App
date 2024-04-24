const Hero = () => {
  return (
    <section className="flex overflow-hidden relative flex-col grow justify-center font-semibold text-white min-h-[822px] max-md:mt-10 max-md:max-w-full max-sm:hidden">
      <img
        loading="lazy"
        src="/Mask Group.png"
        alt="Hero background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center pb-20 pl-11 bg-[#5E50A1] h-full max-md:pl-5 max-md:max-w-full max-sm:hidden opacity-85">
        <div className="flex gap-5 self-stretch w-full text-sm whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-1 gap-1.5 self-start mt-11 max-md:mt-10">
            <img
              loading="lazy"
              src="/layers 1.svg"
              alt="Peworld logo"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto">Peworld</div>
          </div>
          <img
            loading="lazy"
            src="/Vector 42.svg"
            alt=""
            className="shrink-0 aspect-[0.31] fill-white fill-opacity-10 w-[77px]"
          />
        </div>
        <h1 className="self-start mt-3 ml-5 text-5xl font-bold leading-[70px] w-[456px] max-md:max-w-full">
          Temukan developer berbakat & terbaik di berbagai bidang keahlian
        </h1>

        <img
          loading="lazy"
          src="/Vector 41.svg"
          alt="Scroll down arrow"
          className="mt-14 mb-9 max-w-full aspect-[33.33] w-[124px] max-md:mt-10"
        />
      </div>
    </section>
  );
};

export default Hero;
