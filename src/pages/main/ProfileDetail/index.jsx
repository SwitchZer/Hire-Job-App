import Footer from "@/components/Footer";
import ExperiencePortfolioTabWorker from "@/components/Module/Profile/ExperiencePortfolioTabWorker";
import Navbar from "@/components/Navbar";

import PortofolioItem from "@/components/Profile/PortofolioItem";
import { getWorkerId } from "@/configs/redux/action/workerAction";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ProfileDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state.worker);
  const skills = useSelector((state) => state.skills.skills);
  const role = useSelector((state) => state.checkRole.role);

  useEffect(() => {
    dispatch(getWorkerId(id));
    // dispatch(getSkill(id));
  }, [dispatch]);

  const navigate = useNavigate();

  const handleHire = () => {
    navigate("hire");
  };
  return (
    <div className="bg-[#F6F7F8]">
      <Navbar />
      <div className="bg-[#5E50A1] h-[361px] mb-[-361px] "></div>

      <div className="pt-10 pb-[210px] max-lg:px-[30px]">
        <div className="flex gap-[30px] container mx-auto max-lg:flex-col">
          <div className="flex flex-col basis-4/12 gap-[34px] bg-[#FFFFFF] p-[30px] h-fit rounded-lg">
            <div className="flex flex-col gap-5 items-center">
              <img
                src={profile.photo || "/Mask Group.png"}
                className="size-28 rounded-full"
              />
              <div className="flex flex-col gap-[13px] w-full">
                <h2 className="font-semibold text-[22px] text-[#1F2A36]">
                  {profile.name}
                </h2>
                <p className="font-normal text-sm leading-6 text-[#1F2A36]">
                  {profile.job_desk || "Your Job Desk"}
                </p>
                <div className="flex gap-[11px]">
                  {/* <img src={GreyPin} /> */}
                  <p className="font-normal text-sm leading-5 text-[#9EA0A5]">
                    {profile.domicile || "Your Domicile"}
                  </p>
                </div>
                <p className="font-normal text-sm leading-5 text-[#9EA0A5]">
                  {profile.workplace || "Your Work Place"}
                </p>
              </div>
              <p className="font-normal text-sm leading-6 text-[#9EA0A5] w-full">
                {profile.description || "Your Description"}
              </p>

              {role === "recruiter" && (
                <button
                  onClick={handleHire}
                  className="justify-center bg-[#5E50A1]  items-center px-16 py-4 text-white whitespace-nowrap rounded"
                >
                  Hire
                </button>
              )}
            </div>

            {/* {skills.map((skill) => (
              <li key={skill.id}>
                {skill.skill_name}
                <button onClick={() => handleRemoveSkill(skill.id)}>
                  Remove
                </button>
              </li>
            ))} */}

            <div className="flex flex-col gap-6 font-normal text-sm leading-5 text-[#9EA0A5]"></div>
          </div>

          <div className="flex flex-col basis-8/12 gap-[34px] bg-[#FFFFFF] p-[30px] h-fit rounded-lg ">
            <ExperiencePortfolioTabWorker user={id} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileDetail;
