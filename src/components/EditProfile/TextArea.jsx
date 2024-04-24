import React from "react";

const TextArea = ({ label, placeholder, type = "text", ...props }) => {
  return (
    <>
      {label && <div className="text-xs text-zinc-400">{label}</div>}
      <input
        {...props}
        type={type}
        className="w-full items-start px-4 pt-5 pb-24 mt-1 text-sm bg-white rounded border border-gray-200 border-solid text-neutral-400"
      />
    </>
  );
};

export default TextArea;
