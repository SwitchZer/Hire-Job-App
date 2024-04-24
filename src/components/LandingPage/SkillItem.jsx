import React from "react";

const SkillItem = ({ icon, text }) => {
  return (
    <div className="flex gap-5 mb-4">
      <img src={icon} alt="" className="shrink-0 w-6 aspect-square" />
      <div>{text}</div>
    </div>
  );
};

export default SkillItem;
