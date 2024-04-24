import React from "react";

const PortofolioItem = ({ image, alt, application, onClick }) => {
  return (
    <button
      className="flex flex-col grow items-center text-sm leading-6 text-gray-800 max-md:mt-5"
      onClick={onClick}
    >
      <img loading="lazy" src={image} className="aspect-[1.47] w-[219px]" />
      <span className="mt-3.5">{application}</span>
    </button>
  );
};

export default PortofolioItem;
