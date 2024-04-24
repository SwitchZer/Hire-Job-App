import React from "react";

const IcontText = ({ iconSrc, text }) => {
  return (
    <div className="flex gap-3 leading-[143%]">
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="shrink-0 w-4 aspect-square"
      />
      <div className="flex-auto">{text}</div>
    </div>
  );
};

export default IcontText;
