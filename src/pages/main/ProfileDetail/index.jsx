import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import PortofolioItem from "@/components/Profile/PortofolioItem";
import { getWorkerId } from "@/configs/redux/action/workerAction";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ProfileDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const profile = useSelector((state) => state.worker.profile);
  const skills = useSelector((state) => state.skills.skills);
  const role = useSelector((state) => state.auth.role);

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

      <div className="px-[150px] pt-[70px] pb-[210px] max-lg:px-[30px]">
        <div className="flex gap-[30px] container mx-auto max-lg:flex-col">
          <div className="flex flex-col basis-4/12 gap-[34px] bg-[#FFFFFF] p-[30px] h-fit rounded-lg">
            <div className="flex flex-col gap-5 items-center">
              <img src={profile.photo} className="size-24" />
              <div className="flex flex-col gap-[13px] w-full">
                <h2 className="font-semibold text-[22px] text-[#1F2A36]">
                  {profile.name}
                </h2>
                <p className="font-normal text-sm leading-6 text-[#1F2A36]">
                  {profile.job_desk}
                </p>
                <div className="flex gap-[11px]">
                  {/* <img src={GreyPin} /> */}
                  <p className="font-normal text-sm leading-5 text-[#9EA0A5]">
                    {profile.domicile}
                  </p>
                </div>
                <p className="font-normal text-sm leading-5 text-[#9EA0A5]">
                  {profile.workplace}
                </p>
              </div>
              <p className="font-normal text-sm leading-6 text-[#9EA0A5] w-full">
                {profile.description}
              </p>
              {role === "Recruiter" && (
                <Button
                  variant="primary-purple"
                  className="w-full"
                  onClick={handleHire}
                  text="Hire"
                />
              )}
            </div>

            {skills.length > 0 && (
              <div className="flex flex-col gap-5">
                <h3 className="font-semibold text-[22px] leading-6 text-[#1F2A36]">
                  Skill
                </h3>
                <ul className="flex flex-wrap gap-x-[10px] gap-y-[20px]">
                  {skills.map((item) => (
                    <Tag key={item.id} skill={item.skill_name} />
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-6 font-normal text-sm leading-5 text-[#9EA0A5]">
              {profile.email && (
                <Social image={EmailIcon} social={profile.email} />
              )}

              {profile.instagram && (
                <Social image={InstagramIcon} social={profile.instagram} />
              )}

              {profile.github && (
                <Social image={GithubIcon} social={profile.github} />
              )}

              {profile.gitlab && (
                <Social image={GitlabIcon} social={profile.gitlab} />
              )}
            </div>
          </div>

          <div className="flex flex-col basis-8/12 gap-[34px] bg-[#FFFFFF] p-[30px] h-fit rounded-lg ">
            <ProfileTab user={id} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileDetail;
