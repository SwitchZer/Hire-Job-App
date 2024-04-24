import React from "react";

const LandingButton = ({ children, className }) => {
  return (
    <>
      <button className={`justify-center px-4 py-3 rounded ${className}`}>
        {children}
      </button>
    </>
  );
};

export default LandingButton;
