import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSkill,
  fetchProfile,
  removeSkill,
} from "@/configs/redux/action/editprofileAction";
import Button from "@/components/EditProfile/Button";
import Input from "@/components/EditProfile/Input";

import Avatar from "@/components/EditProfile/Avatar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchSkills } from "@/configs/redux/action/fetchSkillAction";
import { editProfile } from "@/configs/redux/action/editprofileAction";
import TextArea from "@/components/EditProfile/TextArea";

const Profile = () => {
  const [newSkill, setNewSkill] = useState("");
  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.skills);
  const { profile, loading, error } = useSelector((state) => state.profile);
  const [form, setForm] = useState({
    name: "",
    job_desk: "",
    domicile: "",
    workplace: "",
    description: "",
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

  const handleAddSkill = () => {
    if (newSkill.trim() === "") {
      return;
    }
    dispatch(addSkill(newSkill));
    setNewSkill("");
  };

  const handleRemoveSkill = (skillId) => {
    dispatch(removeSkill(skillId));
  };

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  useEffect(() => {
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
        <div className="self-stretch mt-10 mx-20 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
              <section className="flex flex-col text-base font-bold max-md:mt-8">
                {profile && (
                  <div className="flex flex-col items-start py-8 pr-20 pl-8 w-full text-sm leading-9 bg-white rounded-lg text-zinc-400 max-md:px-5">
                    <Avatar src="/public/Ellipse 325.png" alt="Profile" />
                    <div className="m-auto pt-5 flex gap-3 leading-[143%]">
                      <img
                        loading="lazy"
                        src="edit (1) 1.svg"
                        alt=""
                        className="shrink-0 w-4 aspect-square"
                      />
                      <div className="flex-auto">Edit</div>
                    </div>
                    <h1 className="mt-14 text-2xl font-semibold text-gray-800 max-md:mt-10">
                      {profile.name}
                    </h1>
                    <p className="mt-5 text-gray-800 leading-[171%]">
                      {profile.job_desk}
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
                )}
              </section>
            </div>
            <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
              <form onSubmit={handleSubmit}>
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
                    <div className="flex gap-5 mx-8 mt-8 text-sm max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                      <ul>
                        {skills &&
                          skills.map((skill) => (
                            <li key={skill.id}>
                              {skill.skill_name}
                              <button
                                onClick={() => handleRemoveSkill(skill.id)}
                              >
                                Remove
                              </button>
                            </li>
                          ))}
                      </ul>
                      {/* <div>
                        <Input
                          className="w-full"
                          type="text"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                        />
                        <button
                          className="justify-center px-3.5 py-5 font-bold text-white bg-amber-400 rounded"
                          onClick={handleAddSkill}
                        >
                          Add Skill
                        </button>
                      </div> */}

                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Masukan job desk"
                      />
                      <button
                        onClick={handleAddSkill}
                        className="justify-center px-3.5 py-5 font-bold text-white bg-amber-400 rounded"
                      >
                        Simpan
                      </button>
                    </div>
                  </section>
                  <Button
                    onclick={handleSubmit}
                    className="mt-5 text-center bg-[#5E50A1]"
                  >
                    Save
                  </Button>
                  <Button
                    text="Batal"
                    className="mt-4 text-center border border-solid border-[#5E50A1] "
                  >
                    <p className="text-[#5E50A1]">Cancel</p>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
