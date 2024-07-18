import React from "react";
import SkillItem from "./SkillItem";

const SkillTalentSection = () => {
  const skills = [
    {
      icon: "/tick 13.svg",
      text: "Java",
    },
    {
      icon: "/tick 13.svg",
      text: "Kotlin",
    },
    {
      icon: "/tick 13.svg",
      text: "PHP",
    },
    {
      icon: "/tick 13.svg",
      text: "JavaScript",
    },
    {
      icon: "/tick 13.svg",
      text: "Golang",
    },
    {
      icon: "/tick 13.svg",
      text: "C++",
    },
    {
      icon: "/tick 13.svg",
      text: "Ruby",
    },
    {
      icon: "/tick 13.svg",
      text: "10+ Other programming languages",
    },
  ];

  return (
    <section className="mt-10 w-full max-w-[1058px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl font-semibold text-gray-800 leading-[56.16px] max-md:max-w-full">
              Skill Tallent
            </h2>
            <p className="mt-8 text-lg leading-7 text-gray-600 max-md:max-w-full">
              Look for the talent you want here who has various types of skills
            </p>
            <div className="mt-9 max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base leading-7 text-gray-600 whitespace-nowrap max-md:mt-10">
                    {skills.slice(0, 4).map((skill, index) => (
                      <SkillItem
                        key={index}
                        icon={skill.icon}
                        text={skill.text}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base leading-7 text-gray-600 max-md:mt-10">
                    {skills.slice(4).map((skill, index) => (
                      <SkillItem
                        key={index}
                        icon={skill.icon}
                        text={skill.text}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="Group 1196.png"
            alt="Skill Talent Image"
            className="grow w-full aspect-[1.16] max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillTalentSection;
