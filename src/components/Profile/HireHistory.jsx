import React from "react";

const HireHistory = (nameRecruiter) => {
  return (
    <div className="flex bg-[#FFFFFF] p-[20px] items-center justify-between h-fit">
      <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-[22px] text-[#1F2A36]">
            {nameRecruiter || "Recruiter Name Not Found 404"}
          </h2>
          <p className="font-normal text-sm leading-6 text-[#1F2A36]"></p>
          <div className="flex gap-[11px]">
            <p className="font-normal text-sm leading-5 text-[#9EA0A5]"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireHistory;
