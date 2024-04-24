import React from "react";

const SkillTag = ({ children }) => {
  return (
    <div className="justify-center px-3.5 py-2 rounded border border-amber-400 border-solid bg-amber-400 bg-opacity-60">
      {children}
    </div>
  );
};

export default SkillTag;
