import React from "react";

function Avatar({ src, alt }) {
  return (
    <div className="flex justify-center items-center self-center px-2.5 rounded-full bg-amber-400 bg-opacity-40 h-[140px] w-[140px]">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-full aspect-square"
      />
    </div>
  );
}
export default Avatar;
