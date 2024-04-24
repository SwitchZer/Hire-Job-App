import React from "react";

const FeatureItem = ({ icon, text }) => {
  return (
    <div className="flex gap-5 mb-4">
      <img src={icon} alt="" className="shrink-0 w-6 aspect-square" />
      <div className="flex-auto">{text}</div>
    </div>
  );
};

export default FeatureItem;
