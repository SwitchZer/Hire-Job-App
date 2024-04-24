import React from "react";

const Input = ({ label, placeholder, type = "text", ...props }) => {
  return (
    <>
      {label && <div className="text-xs text-zinc-400">{label}</div>}
      <input
        {...props}
        type={type}
        className="w-full justify-center items-start px-4 py-5 mt-1 text-sm bg-white rounded border border-gray-200 border-solid text-neutral-400"
      />
    </>
  );
};

export default Input;
