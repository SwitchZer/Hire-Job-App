import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSkill,
  deleteSkill,
  fetchProfile,
  uploadFileWorker,
} from "@/configs/redux/action/editprofileAction";
import Input from "@/components/EditProfile/Input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchSkills } from "@/configs/redux/action/fetchSkillAction";
import { editProfile } from "@/configs/redux/action/editprofileAction";
import TextArea from "@/components/EditProfile/TextArea";
import { useNavigate } from "react-router-dom";
import ExperienceForm from "@/components/Module/experienceForm";
import PortfolioForm from "@/components/Module/portfolioForm";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.skills);
  const { profile, loading, error } = useSelector((state) => state.profile);
  const [form, setForm] = useState({
    name: "",
    job_desk: "",
    domicile: "",
    workplace: "",
    description: "",
    skill_name: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProfile(form));
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    dispatch(addSkill(form));
  };

  const handleDeleteSkill = (id) => {
    dispatch(deleteSkill(id));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    dispatch(uploadFileWorker(file));
  };

  const handleCancel = () => {
    navigate("/profileworker");
  };

  useEffect(() => {
    if (profile) {
      setForm({
        name: profile.name || "",
        job_desk: profile.job_desk || "",
        domicile: profile.domicile || "",
        workplace: profile.workplace || "",
        description: profile.description || "",
      });
    }
  }, [profile]);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchSkills());
  }, [dispatch]);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="flex flex-col bg-neutral-100">
        <Navbar />
        <div className="bg-[#5E50A1] h-[361px] mb-[-361px] "></div>

        <div className="self-stretch mt-10 mx-20 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
              <section className="flex flex-col text-base font-bold max-md:mt-8">
                <div className="flex flex-col items-start py-8 pr-20 pl-8 w-full text-sm leading-9 bg-white rounded-lg text-zinc-400 max-md:px-5">
                  <img
                    src={profile.photo}
                    className="size-28 rounded-full mx-auto object-cover"
                  />

                  <label
                    htmlFor="upload-photo"
                    className="m-auto pt-5 flex gap-3 cursor-pointer leading-[143%]"
                  >
                    <input
                      type="file"
                      id="upload-photo"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <img
                      loading="lazy"
                      src="edit (1) 1.svg"
                      alt=""
                      className="shrink-0 w-4 aspect-square"
                    />
                    <div className="flex-auto">Edit</div>
                  </label>

                  <h1 className="mt-14 text-2xl font-semibold text-gray-800 max-md:mt-10">
                    {profile.name}
                  </h1>
                  <p className="mt-5 text-gray-800 leading-[171%]">
                    {profile.job_desk || "Please Add Job Desk"}
                  </p>
                  <div className="flex gap-3 mt-5 leading-[143%]">
                    <img
                      loading="lazy"
                      src="map-pin (4) 1.svg"
                      alt=""
                      className="shrink-0 w-4 aspect-square"
                    />
                    <div className="flex-auto">{profile.domicile}</div>
                  </div>
                  <p className="mt-5 uppercase leading-[143%]">
                    {profile.role}
                  </p>
                </div>
              </section>
              <button
                onClick={handleSubmit}
                className="justify-center items-center px-16 py-4 text-white whitespace-nowrap rounded mt-5 text-center bg-[#5E50A1]"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="justify-center items-center px-16 py-4 text-white whitespace-nowrap rounded mt-4 text-center border border-solid border-[#5E50A1] "
              >
                <p className="text-[#5E50A1]">Cancel</p>
              </button>
            </div>
            <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                <section className="flex flex-col py-11 bg-white rounded-lg max-md:max-w-full">
                  <h2 className="self-start ml-8 text-2xl font-semibold text-gray-800 leading-[56.1px] max-md:ml-2.5">
                    Data diri
                  </h2>
                  <hr className="shrink-0 mt-6 h-px border border-solid bg-stone-300 border-stone-300 max-md:max-w-full" />
                  <div className="flex flex-col px-8 mt-9 text-xs text-zinc-400 max-md:px-5 max-md:max-w-full">
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      label="Nama lengkap"
                      placeholder="Masukan nama lengkap"
                    />
                    <Input
                      name="job_desk"
                      value={form.job_desk}
                      onChange={handleChange}
                      label="Job desk"
                      placeholder="Masukan job desk"
                    />
                    <Input
                      name="domicile"
                      value={form.domicile}
                      onChange={handleChange}
                      label="Domicile"
                      placeholder="Masukan domisili"
                    />
                    <Input
                      name="workplace"
                      value={form.workplace}
                      onChange={handleChange}
                      label="Workplace"
                      placeholder="Masukan tempat kerja"
                    />
                    <TextArea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      label="Description"
                      placeholder="Tuliskan deskripsi singkat"
                      className="items-start px-4 pt-5 pb-24 mt-1 text-sm bg-white rounded border border-gray-200 border-solid text-neutral-400 max-md:pr-5 max-md:max-w-full"
                    />
                  </div>
                </section>

                <section className="flex flex-col py-14 mt-8 whitespace-nowrap bg-white rounded-lg max-md:max-w-full">
                  <h2 className="self-start ml-8 text-2xl font-semibold text-gray-800 leading-[56.1px] max-md:ml-2.5">
                    Skill
                  </h2>
                  <div className="shrink-0 mt-6 h-px border border-solid bg-stone-300 border-stone-300 max-md:max-w-full" />
                  <div className="gap-5 mx-8 text-sm max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <Input
                      name="skill_name"
                      value={form.skill_name}
                      onChange={handleChange}
                      placeholder="Masukan job desk"
                    />
                  </div>
                  <button
                    onClick={handleAddSkill}
                    className="bg-amber-400 py-2 mx-8 px-4 text-white whitespace-nowrap rounded"
                  >
                    Simpan
                  </button>
                  {data.length > 0 && (
                    <>
                      <div className="ml-8 pt-5">
                        <p>
                          <i>Note: Clicked skills will be deleted!</i>
                        </p>
                      </div>
                      <ul className="flex gap-2 ml-8 pt-4">
                        <div className="flex flex-col gap-5">
                          <ul className="flex flex-wrap gap-x-[10px] gap-y-[20px]">
                            {data.map((item) => (
                              <li key={item.id} className="flex">
                                <button className="flex px-[14px] py-[4px] bg-amber-400 rounded-[4px] font-semibold text-xs leading-5 text-white">
                                  <div className="flex justify-between items-center gap-1">
                                    {item.skill_name}
                                    <p
                                      className="ml-2 cursor-pointer text-red-600"
                                      onClick={() => handleDeleteSkill(item.id)}
                                    >
                                      X
                                    </p>
                                  </div>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </ul>
                    </>
                  )}
                </section>

                <ExperienceForm />

                <PortfolioForm />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EditProfile;
