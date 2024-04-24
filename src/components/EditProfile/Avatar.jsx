import React from "react";

const Avatar = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="self-center max-w-full rounded-full aspecsquare w-[150px]"
    />
  );
};

export default Avatar;
