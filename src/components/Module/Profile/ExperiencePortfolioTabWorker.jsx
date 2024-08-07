import React, { useEffect, useState } from "react";
// import CompanyLogo from "../../assets/company-logo.png";
import PortfolioContent from "@/components/Base/PortfolioContent";
import ExperienceContent from "@/components/Base/ExperienceContent";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolio } from "@/configs/redux/action/portfolioAction";
import { getExperience } from "@/configs/redux/action/experienceAction";

const ExperiencePortfolioTabWorker = ({ user }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(1);
  const handleToggle = (id) => {
    setToggle(id);
  };

  const { portfolio } = useSelector((state) => state.portfolio);
  const { experience } = useSelector((state) => state.experience);

  useEffect(() => {
    dispatch(getPortfolio(user));
    dispatch(getExperience(user));
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-[34px]">
      <ul className="flex gap-[30px] max-lg:overflow-x-scroll">
        <li
          className="flex flex-col gap-[11px] cursor-pointer"
          onClick={() => handleToggle(1)}
        >
          <h1
            className={
              toggle === 1
                ? "font-semibold text-[22px] text-[#1F2A36] max-lg:text-base"
                : "font-semibold text-[22px] text-[#9EA0A5] max-lg:text-base"
            }
          >
            Portofolio
          </h1>
          <div
            className={
              toggle === 1
                ? "bg-[#5E50A1] h-1 rounded-full"
                : "bg-transparent h-1 rounded-full"
            }
          ></div>
        </li>
        <li
          className="flex flex-col gap-[11px] cursor-pointer"
          onClick={() => handleToggle(2)}
        >
          <h1
            className={
              toggle === 2
                ? "font-semibold text-[22px] text-[#1F2A36] max-lg:text-base"
                : "font-semibold text-[22px] text-[#9EA0A5] max-lg:text-base"
            }
          >
            Pengalaman Kerja
          </h1>
          <div
            className={
              toggle === 2
                ? "bg-[#5E50A1] h-1 rounded-full"
                : "bg-transparent h-1 rounded-full"
            }
          ></div>
        </li>
      </ul>

      <div className={toggle === 1 ? "block" : "hidden"}>
        <div className="grid grid-cols-3 gap-x-[18px] gap-y-[30px] max-lg:grid-cols-1">
          {portfolio.map((item) => (
            <div key={item.portofolio_id}>
              <PortfolioContent
                app={item.application_name}
                image={item.image || "/Mask Group.png"}
                link={item.link_repository}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={toggle === 2 ? "block" : "hidden"}>
        <div className="flex flex-col gap-4">
          {/* {experience.map((item) => (
            <div key={item.experience_id}>
              <ExperienceContent
                companyLogo={item.photo}
                position={item.position}
                company={item.company}
                //   startDate={formatDate(item.start_date)}
                //   endDate={formatDate(item.end_date)}
                // duration={item.duration_in_months}
                // description={item.description}
              />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePortfolioTabWorker;
