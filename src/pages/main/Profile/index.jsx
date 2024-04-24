import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import PortofolioItem from "@/components/Profile/PortofolioItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileId = ({
  skills,
  name,
  photo,
  role,
  domicile,
  job_desk,
  description,
}) => {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);
  const [portofolio, setPortofolio] = useState([]);
  const { user_id } = useParams();
  const getPortofolio = () => {
    axios({
      method: "GET",
      url: `https://fwm17-be-peword.vercel.app/v1/portfolio/${user_id}`,
    })
      .then((res) => {
        const result = res.data.data;
        setPortofolio(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPortofolio();
  }, []);

  const getProfile = () => {
    axios({
      method: "GET",
      url: `https://fwm17-be-peword.vercel.app/v1/workers/${id}`,
    })
      .then((res) => {
        const result = res.data.data;
        setProfile(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <div className="flex flex-col bg-neutral-100">
        <Navbar />
        <main className="container flex self-center mt-16 w-full max-w-[1140px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <aside className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-8 pt-8 pb-20 mx-auto w-full text-sm bg-white rounded-lg text-zinc-400 max-md:px-5 max-md:mt-8">
                <img
                  loading="lazy"
                  src={profile.photo}
                  alt={`Profile picture of ${profile.name}`}
                  className="self-center max-w-full rounded-full aspect-square w-[150px]"
                />
                <h1 className="mt-8 text-2xl font-semibold text-gray-800 leading-[56.1px]">
                  {name}
                </h1>
                <p className="mt-5 text-gray-800 leading-[171%]">
                  {profile.role}
                </p>
                <div className="flex gap-3 mt-5 leading-[143%]">
                  <img
                    loading="lazy"
                    src="/map-pin (4) 1.svg"
                    alt="Location icon"
                    className="shrink-0 w-4 aspect-square"
                  />
                  <p className="flex-auto">{profile.domicile}</p>
                </div>
                <p className="mt-5 leading-[143%]">{profile.job_desk}</p>
                <p className="mt-7 leading-6">{profile.description}</p>
                <button className="justify-center items-center px-16 py-5 mt-11 text-base font-bold text-white whitespace-nowrap rounded bg-[#5E50A1] max-md:px-5 max-md:mt-10">
                  Hire
                </button>
                <h2 className="mt-10 text-2xl font-semibold leading-6 text-gray-800">
                  Skill
                </h2>
                <div className="flex gap-2.5 mt-6 text-xs font-semibold leading-5 text-white whitespace-nowrap max-md:pr-5">
                  {/* {skills.map((skill) => (
                <div
                  key={skill}
                  className="justify-center px-6 py-2.5 rounded border border-amber-400 border-solid bg-amber-400 bg-opacity-60 max-md:px-5"
                >
                  {skill}
                </div>
              ))} */}
                </div>
                {/* {socialLinks.map(({ src, alt, text, href }) => (
              // <SocialLink key={text} src={src} alt={alt} href={href}>
              //   {text}
              // </SocialLink>
            ))} */}
              </div>
            </aside>
            <section className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-8 py-9 w-full bg-white rounded-lg max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="flex gap-5 self-start text-2xl font-semibold leading-[56.1px]">
                  <h2 className="flex-auto text-gray-800">Portofolio</h2>
                  <h2 className="flex-auto text-zinc-400">Pengalaman kerja</h2>
                </div>
                <div className="mt-2 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {portofolio
                      .slice(0, 3)
                      .map(({ image, id, application, onClick }) => (
                        <div
                          key={id}
                          className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                        >
                          <PortofolioItem
                            src={image}
                            title={application}
                            onClick={onClick}
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="mt-9 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {portofolio
                      .slice(3)
                      .map(({ image, id, application, onClick }) => (
                        <div
                          key={id}
                          className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                        >
                          <PortofolioItem
                            src={image}
                            title={application}
                            onClick={onClick}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProfileId;
