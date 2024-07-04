import Button from "@/components/EditProfile/Button";
import Footer from "@/components/Footer";
import ExperiencePortfolioTab from "@/components/Module/Profile/ExperiencePortfolioTab";
import Navbar from "@/components/Navbar";
import { fetchSkills } from "@/configs/redux/action/fetchSkillAction";
import { getWorkerProfile } from "@/configs/redux/action/profileAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileWorker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector((state) => state.profile.profile);
  const skills = useSelector((state) => state.profile.skills);

  const handleEdit = () => {
    navigate("/editprofile");
  };

  useEffect(() => {
    dispatch(getWorkerProfile());
    dispatch(fetchSkills());
  }, [dispatch]);

  return (
    <div className="bg-[#F6F7F8]">
      <Navbar />
      <div className="bg-[#5E50A1] h-[361px] mb-[-361px] "></div>

      <div className="pt-10 pb-[210px] max-lg:px-[30px]">
        <div className="flex gap-[30px] container mx-auto max-lg:flex-col">
          <div className="flex flex-col basis-4/12 gap-[34px] bg-[#FFFFFF] p-[30px] h-fit rounded-lg">
            {profile && (
              <div className="flex flex-col gap-5 items-center">
                <img
                  src={profile.photo || "Mask Group.png"}
                  className="size-24 rounded-full"
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
                <button
                  onClick={handleEdit}
                  className="justify-center bg-[#5E50A1]  items-center px-16 py-4 text-white whitespace-nowrap rounded"
                >
                  Edit profile
                </button>
              </div>
            )}

            {skills.map((skill) => (
              <li key={skill.id}>
                {skill.skill_name}
                {/* <button onClick={() => handleRemoveSkill(skill.id)}>
                    Remove
                  </button> */}
              </li>
            ))}

            <div className="flex flex-col gap-6 font-normal text-sm leading-5 text-[#9EA0A5]"></div>
          </div>

          <div className="flex flex-col basis-8/12 gap-[34px] bg-[#FFFFFF] p-[30px] h-fit rounded-lg ">
            <ExperiencePortfolioTab />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileWorker;
