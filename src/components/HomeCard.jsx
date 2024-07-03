import React from "react";

// import SkillTag from "./Profile/SkillTag";
import Button from "./EditProfile/Button";

const HomeCard = ({ image, name, job, location, onClick }) => {
  return (
    <div className="flex bg-[#FFFFFF] p-[20px] items-center justify-between h-fit">
      <div className="flex gap-5 items-center">
        <img src={image || "Mask Group.png"} className="size-24 rounded-full" />
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-[22px] text-[#1F2A36]">
            {name ? name : "Name"}
          </h2>
          <p className="font-normal text-sm leading-6 text-[#1F2A36]">
            {job ? job : "Position"}
          </p>
          <div className="flex gap-[11px]">
            {/* <img src={GreyPin} /> */}
            <p className="font-normal text-sm leading-5 text-[#9EA0A5]">
              {location ? location : "Domicile"}
            </p>
          </div>
          {/* {skills && (
            <ul className="flex flex-wrap gap-x-[10px] gap-y-[20px]">
              {skills.map((item) => (
                <SkillTag key={item.id} skill={item} />
              ))}
            </ul>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
