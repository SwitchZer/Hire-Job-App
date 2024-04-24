import React from "react";

const SocialLink = ({ src, alt, children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-5 mt-6 whitespace-nowrap leading-[143%]"
    >
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 w-6 aspect-square"
      />
      <span className="flex-auto my-auto">{children}</span>
    </a>
  );
};

export default SocialLink;
