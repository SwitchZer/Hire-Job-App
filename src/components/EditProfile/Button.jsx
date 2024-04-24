import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`justify-center items-center px-16 py-4 text-white whitespace-nowrap rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
