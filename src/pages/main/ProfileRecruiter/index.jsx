import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProfile } from "@/configs/redux/action/recruiterAction";
import { useNavigate } from "react-router-dom";

const ProfileRecruiter = () => {
  const dispatch = useDispatch();

  const myProfile = useSelector((state) => state.recruiter.profile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("edit");
  };

  return (
    <div className="bg-[#F6F7F8]">
      <Navbar />
      <div className="px-[150px] pt-[70px] pb-[210px] ">
        <div className="container mx-auto rounded-lg overflow-hidden">
          <div className="flex flex-col bg-[#5E50A1] px-[30px] py-[4px] h-[200px] justify-end items-end">
            <div className="flex items-center gap-[6px]">
              {/* <img className="w-[16px]" src={WhiteEdit} alt="" /> */}
              {/* <p className="font-semibold text-[22px] leading-[56px] text-white">Change Background</p> */}
            </div>
          </div>

          <div className="flex justify-center items-center my-[-75px]">
            <img
              className="size-[150px] rounded-full object-cover"
              src={myProfile.photo || "Mask Group.png"}
              alt=""
            />
            {/* <img className="size-[150px] rounded-full object-cover" src={myProfile.photo ? myProfile.photo : Person1} alt="" /> */}
          </div>

          <div className="flex flex-col gap-[34px] bg-[#FFFFFF] pt-[95px] pb-[190px] px-[250px] items-center h-fit">
            <div className="flex flex-col gap-5 items-center text-center">
              <div className="flex flex-col gap-[13px] items-center">
                <h2 className="font-semibold text-[22px] text-[#1F2A36]">
                  {myProfile.name}
                </h2>
                <p className="font-normal text-sm leading-6 text-[#1F2A36]">
                  {myProfile.position}
                </p>
                <div className="flex gap-[11px]">
                  {/* <img src={GreyPin}/> */}
                  <p className="font-normal text-sm leading-5 text-[#9EA0A5]">
                    {myProfile.city}
                  </p>
                </div>
              </div>
              <p className="font-normal text-sm leading-6 text-[#9EA0A5] w-full">
                {myProfile.description}
              </p>
              <button
                onClick={handleEdit}
                className="justify-center bg-[#5E50A1]  items-center px-16 py-4 text-white whitespace-nowrap rounded"
              >
                Edit profile
              </button>
            </div>
            {/* <div className="flex flex-col gap-6 font-normal text-sm leading-5 text-[#9EA0A5]">
              <SocialMedia image={EmailIcon} social={myProfile.email} />
              <SocialMedia image={InstagramIcon} social={myProfile.instagram} />
              <SocialMedia image={PhoneIcon} social={myProfile.phone} />
              <SocialMedia image={LinkedinIcon} social={myProfile.linkedin} />
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileRecruiter;
