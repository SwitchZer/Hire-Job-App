import React from "react";

const Input = ({ label, className, placeholder, type = "text", ...props }) => {
  return (
    <>
      <div className="flex flex-col my-3">
        {label && <div className="text-xs text-zinc-400">{label}</div>}
        <input
          {...props}
          type={type}
          className={`w-full justify-center outline-none items-start px-4 py-3 mt-1 text-sm bg-white rounded-md border border-gray-200 border-solid text-neutral-400 ${className}`}
        />
      </div>
    </>
  );
};

export default Input;
