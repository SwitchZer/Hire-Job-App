import Card from "@/components/Card/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import TopJobs from "@/components/TopJobs";
import Divi from "@/components/Divi";
import React, { useEffect, useState } from "react";
import { getWorker } from "@/configs/redux/action/workerAction";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust the number according to your requirements
  dispatch(getWorker(currentPage, itemsPerPage));
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="flex flex-col bg-neutral-100">
        <Navbar />
        <main>
          <TopJobs />
          <form className="container flex gap-5 self-center py-1.5 pr-2 pl-5 mt-12 max-w-full text-center bg-white rounded-lg shadow-[0px_1px_20px_rgba(197,197,197,0.25)] w-[1140px] max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-sm:-mb-1">
            <input
              className="flex-auto my-auto text-sm text-center leading-5 text-zinc-400"
              placeholder="Search for any skill"
              // onChange={handleSearch}
            />

            <input type="text" id="search" name="search" className="sr-only" />
            <div className="flex gap-5 justify-between text-base font-semibold whitespace-nowrap">
              <div className="flex gap-5 justify-between items-center text-zinc-400">
                <img
                  src="/search (1) 1.svg"
                  alt="Category"
                  className="shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="shrink-0 self-stretch w-px border border-solid bg-zinc-400 border-zinc-400 h-[58px]" />
                <div className="self-stretch my-auto">Kategori</div>
              </div>
              <button
                type="submit"
                className="justify-center px-9 py-5 my-auto text-white rounded bg-[#5E50A1] max-md:px-5"
              >
                Search
              </button>
            </div>
          </form>
          <div className="container flex flex-col self-center pt-10 pb-10 mt-12 w-full font-semibold bg-white rounded-lg max-w-[1140px] shadow-[0px_1px_20px_rgba(197,197,197,0.25)] max-md:mt-10 max-md:max-w-full">
            <React.Fragment>
              <Card />
            </React.Fragment>
          </div>
          <nav className="container justify-center flex gap-3.5 self-center px-5 mt-12 text-lg leading-7 whitespace-nowrap text-zinc-400 max-md:flex-wrap max-md:mt-10 max-sm:ml-0">
            <button
              onClick={handlePrev}
              className="shrink-0 rounded bg-white border border-gray-200 border-solid aspect-square w-[58px]"
            >
              <img
                src="next 2.svg"
                alt="Previous Page"
                className="flex justify-center items-center pl-5"
              />
            </button>
            {/* <button
              aria-current="page"
              className="flex justify-center items-center px-6 font-bold text-white rounded bg-[#5E50A1] h-[58px] w-[58px] max-md:px-5"
            >
              {params.page}
            </button> */}

            <button
              onClick={handleNext}
              className="shrink-0 rounded bg-white border border-gray-200 border-solid aspect-square w-[58px]"
            >
              <img
                src="next 3.svg"
                alt="Next Page"
                className="flex justify-center items-center pl-4"
              />
            </button>
          </nav>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
