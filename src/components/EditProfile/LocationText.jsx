import React from "react";

const LocationText = (src) => {
  return (
    <div className="flex gap-3 mt-5 leading-[143%]">
      <img
        loading="lazy"
        src={src}
        alt=""
        className="shrink-0 w-4 aspect-square"
      />
      <div className="flex-auto">{location}</div>
    </div>
  );
};

export default LocationText;
