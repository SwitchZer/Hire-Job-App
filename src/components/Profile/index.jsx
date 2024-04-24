import React, { useEffect, useState } from "react";
import SkillTag from "./SkillTag";
import SocialLink from "./SocialLink";
import PortofolioItem from "./PortofolioItem";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = ({
  skills,
  name,
  photo,
  role,
  domicile,
  job_desk,
  description,
}) => {
  const portfolioItems = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccc50ff9575d21f522c3224dfce56ee4c33a044782df059b7e22da458d62b237?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Remainder app screenshot",
      title: "Remainder app",
      onClick: () => alert("Clicked on Remainder app"),
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c42f6643219292c3e5a8003a6608f64e861595f27655b48410b325b868a98c4?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Social media app screenshot",
      title: "Social media app",
      onClick: () => alert("Clicked on Social media app"),
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1629b253fce94ea5f1b214c29a1492d65a80d5b1a25012b3e4e8b67e5568f86?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Project management web screenshot",
      title: "Project management web",
      onClick: () => alert("Clicked on Project management web"),
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/120292a176ca32ff6f76f8467c1326817fe3d853484220c6459714d0bfcc6471?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Remainder app screenshot",
      title: "Remainder app",
      onClick: () => alert("Clicked on Remainder app"),
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ca1a978ca0186c07008f1cb1db84731cec6968c6aa5977451d777cee0028898?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Social media app screenshot",
      title: "Social media app",
      onClick: () => alert("Clicked on Social media app"),
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/11d8de78f8a5507ffb88eab3b61591cf3b14f9a8c88f0684885c943c87f8efdb?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Project management web screenshot",
      title: "Project management web",
      onClick: () => alert("Clicked on Project management web"),
    },
  ];
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
  return (
    <main className="container flex self-center mt-16 w-full max-w-[1140px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-8 pt-8 pb-20 mx-auto w-full text-sm bg-white rounded-lg text-zinc-400 max-md:px-5 max-md:mt-8">
            <img
              loading="lazy"
              src={photo}
              alt={`Profile picture of ${name}`}
              className="self-center max-w-full rounded-full aspect-square w-[150px]"
            />
            <h1 className="mt-8 text-2xl font-semibold text-gray-800 leading-[56.1px]">
              {name}
            </h1>
            <p className="mt-5 text-gray-800 leading-[171%]">{role}</p>
            <div className="flex gap-3 mt-5 leading-[143%]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/add5c0d0154b054562dae1fd3fd280fca9c927697ff227dd783cce950f683151?apiKey=ff034d5512384628b4f5c1152f7ba035&"
                alt="Location icon"
                className="shrink-0 w-4 aspect-square"
              />
              <p className="flex-auto">{domicile}</p>
            </div>
            <p className="mt-5 leading-[143%]">{job_desk}</p>
            <p className="mt-7 leading-6">{description}</p>
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
  );
};

export default Profile;
