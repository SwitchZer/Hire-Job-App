import Button from "@/components/EditProfile/Button";
import Footer from "@/components/Footer";
import ExperiencePortfolioTab from "@/components/Module/Profile/ExperiencePortfolioTab";
import Navbar from "@/components/Navbar";
import HireHistory from "@/components/Profile/HireHistory";
import { fetchSkills } from "@/configs/redux/action/fetchSkillAction";
import { hireHistoryWorkers } from "@/configs/redux/action/hireAction";
import { getWorkerProfile } from "@/configs/redux/action/profileAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileWorker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector((state) => state.profile.profile);
  const { data } = useSelector((state) => state.skills);
  const { history } = useSelector((state) => state.hire);

  const handleEdit = () => {
    navigate("/editprofile");
  };

  useEffect(() => {
    dispatch(getWorkerProfile());
    dispatch(fetchSkills());
    dispatch(hireHistoryWorkers());
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
                  src={profile.photo || "/Mask Group.png"}
                  className="size-28 rounded-full object-cover"
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
                  className="justify-center bg-[#5E50A1] w-full items-center px-16 py-4 text-white whitespace-nowrap rounded"
                >
                  Edit profile
                </button>
              </div>
            )}

            {data.length > 0 && (
              <div className="flex flex-col gap-5">
                <h3 className="font-semibold text-[22px] leading-6 text-[#1F2A36]">
                  Skill
                </h3>
                <ul className="flex flex-wrap gap-x-[10px] gap-y-[20px]">
                  {data.map((item) => (
                    <li
                      key={item.id}
                      className="flex px-[14px] py-[4px] bg-[#FBB017] bg-opacity-60 border border-[#FBB017] border-solid rounded-[4px] font-semibold text-xs leading-5 text-white"
                    >
                      {item.skill_name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-[22px] leading-6 text-[#1F2A36]">
                History Hire
              </h3>
              <ul className="flex flex-wrap gap-x-[10px] gap-y-[20px]">
                {history.map((item) => (
                  <div
                    key={item.hire_id}
                    className="flex bg-[#FFFFFF] p-[20px] items-center border border-black rounded-md justify-between h-fit"
                  >
                    <div className="flex gap-5 items-center">
                      <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-[22px] text-[#1F2A36]">
                          {item.message_purpose}
                        </h2>
                        <p className="font-normal text-sm leading-6 text-[#1F2A36]">
                          {item.recruiters_company}
                        </p>
                        <div className="flex gap-[11px]">
                          <p className="font-normal text-sm leading-5 text-[#9EA0A5]">
                            {item.recruiters_position}
                          </p>
                        </div>
                        <p className="font-normal text-sm leading-4 text-[#1F2A36]">
                          {item.description_request_hire}
                        </p>
                        <p className="font-normal text-sm leading-4 text-[#1F2A36]">
                          Please Contact : {item.email_request_hire}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>

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
