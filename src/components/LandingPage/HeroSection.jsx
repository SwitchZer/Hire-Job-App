import React from "react";

const HeroSection = () => {
  return (
    <section className="mt-20 w-full max-w-[1174px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl font-semibold text-gray-800 leading-[70px] max-md:max-w-full">
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </h1>
            <p className="mt-11 text-lg leading-7 text-gray-600 max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <button className="justify-center self-start p-6 mt-14 text-base font-bold text-white rounded bg-[#5E50A1] max-md:px-5 max-md:mt-10">
              Mulai Dari Sekarang
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <img
            src="/Group 1195.png"
            alt="Hero Image"
            className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
