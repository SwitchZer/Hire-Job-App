import Footer from "@/components/Footer";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWorker } from "@/configs/redux/action/workerAction";
import Navbar from "@/components/Navbar";
import Input from "@/components/EditProfile/Input";
import Button from "@/components/EditProfile/Button";
import HomeCard from "@/components/HomeCard";

const Home = () => {
  const dispatch = useDispatch();
  const talent = useSelector((state) => state.worker.workers);
  const [searchInput, setSearchInput] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("");
  const [params, setParams] = useState({
    limit: 9,
    page: 1,
    search: "",
    sort: "created_at",
    sortBy: "DESC",
  });

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getWorker(params));
  }, [dispatch, params]);

  const handleNavigate = (id) => {
    navigate(`/detailprofile/${id}`);
  };

  const handlePrevious = () => {
    if (params.page > 1) {
      setParams({
        ...params,
        page: params.page - 1,
      });
    }
  };

  const handleNext = () => {
    setParams({
      ...params,
      page: params.page + 1,
    });
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setParams({
      ...params,
      page: 1,
      search: searchInput,
      sort: selectedSort,
      sortBy: selectedSortBy,
    });
  };

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSort(selectedValue);
    setParams({
      ...params,
      page: 1, // Reset the page to 1
      sort: selectedValue,
    });
  };

  const handleSortByChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSortBy(selectedValue);
    setParams({
      ...params,
      page: 1, // Reset the page to 1
      sortBy: selectedValue,
    });
  };
  return (
    <>
      <div className="bg-[#F6F7F8]">
        <Navbar />

        <div>
          <div className="px-[150px] py-[33px] bg-[#5E50A1]">
            <div className="container mx-auto">
              <h1 className="font-bold text-[28px] leading-5 text-white">
                Top Jobs
              </h1>
            </div>
          </div>

          <div className="px-[150px] py-[50px]">
            <div className="container mx-auto flex flex-col gap-[50px]">
              <div className="flex bg-white p-[8px] rounded-[8px] overflow-hidden shadow-[0px_1px_20px_0_rgba(197,197,197,0.25)]">
                <div className="flex w-full pr-[25px]">
                  <Input
                    onChange={handleSearchInputChange}
                    value={searchInput}
                    name="search"
                    className="p-[20px] outline-none font-normal text-sm leading-5 text-[#1F2A36] placeholder:text-[#858D96] border-0"
                    label=""
                    type="text"
                    placeholder="Search for any skill"
                  />
                  {/* <img
                    onClick={handleSearch}
                    className="w-6 cursor-pointer"
                    src={GreySearch}
                  /> */}
                </div>

                <div className="flex border-l pl-[25px] gap-[25px]">
                  <select
                    className="outline-none font-normal text-sm leading-5 text-[#1F2A36]"
                    value={selectedSort}
                    onChange={handleSortChange}
                  >
                    <option value="created_at" selected>
                      Sort by created date
                    </option>
                    <option value="name">Sort by name</option>
                    <option value="location">Sort by location</option>
                  </select>
                  <select
                    className="outline-none font-normal text-sm leading-5 text-[#1F2A36]"
                    value={selectedSortBy}
                    onChange={handleSortByChange}
                  >
                    <option value="DESC" selected>
                      DESC
                    </option>
                    <option value="ASC">ASC</option>
                  </select>
                  <button
                    onClick={handleSearch}
                    className={`justify-center items-center px-16 py-4 text-white whitespace-nowrap rounded px-[30px] py-[15px] rounded-[4px] font-bold text-sm leading-6 text-white bg-[#5E50A1]`}
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="flex flex-col rounded-[8px] overflow-hidden shadow-[0px_1px_20px_0_rgba(197,197,197,0.25)] gap-[1px]">
                {talent.map((item) => (
                  <div key={item.id} onClick={() => handleNavigate(item.id)}>
                    <HomeCard
                      image={item.photo || "Mask Group.png"}
                      name={item.name}
                      job={item.job_desk}
                      location={item.domicile}
                      skills={item.skills}
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-[6px] justify-center items-center">
                <div
                  onClick={handlePrevious}
                  className="flex rounded-[4px] bg-white border border-[#E2E5ED] size-[58px] items-center justify-center"
                >
                  <p> {"<"} </p>
                </div>
                <div className="flex rounded-[4px] bg-[#5E50A1] border border-[#E2E5ED] size-[58px] items-center justify-center font-normal text-lg leading-7 text-white">
                  {params.page}
                </div>

                <div
                  onClick={handleNext}
                  className="flex rounded-[4px] bg-white border border-[#E2E5ED] size-[58px] items-center justify-center"
                >
                  <p> {">"} </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
