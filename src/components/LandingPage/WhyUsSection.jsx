import React from "react";
import FeatureItem from "./FeatureItem";

const WhyUsSection = () => {
  const features = [
    {
      icon: "/tick 1.svg",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: "/tick 1.svg",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: "/tick 1.svg",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: "/tick 1.svg",
      text: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <section className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="Group 1194.png"
            alt="Why Us Image"
            className="grow w-full aspect-[1.16] max-md:mt-6 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start px-5 mt-10 text-base leading-7 text-gray-600 max-md:mt-10 max-md:max-w-full">
            <h2 className="mb-2 self-stretch text-4xl font-semibold text-gray-800 leading-[56px] max-md:max-w-full">
              Kenapa harus mencari tallent di peworld
            </h2>
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
