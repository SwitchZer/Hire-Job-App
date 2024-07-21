import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editProfileRecruiter,
  uploadFileRecruiter,
  uploadFileWorker,
} from "@/configs/redux/action/editprofileAction";
import Input from "@/components/EditProfile/Input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextArea from "@/components/EditProfile/TextArea";
import { useNavigate } from "react-router-dom";
import { getProfile } from "@/configs/redux/action/recruiterAction";

const EditProfileRecruiter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector((state) => state.profile);
  const [form, setForm] = useState({
    company: "",
    position: "",
    city: "",
    description: "",
    instagram: "",
    phone: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProfileRecruiter(form));
    navigate("/profilerecruiter");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    dispatch(uploadFileRecruiter(file));
  };

  const handleCancel = () => {
    navigate("/profilerecruiter");
  };

  useEffect(() => {
    if (profile) {
      setForm({
        company: profile.company || "",
        position: profile.position || "",
        city: profile.city || "",
        description: profile.description || "",
        instagram: profile.instagram || "",
        phone: profile.phone || "",
        linkedin: profile.linkedin || "",
      });
    }
  }, [profile]);

  useEffect(() => {
    dispatch(getProfile());
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
                    src={profile.photo || "/Mask Group.png"}
                    className="size-28 object-cover rounded-full mx-auto"
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
                      src="/edit (1) 1.svg"
                      alt=""
                      className="shrink-0 w-4 aspect-square"
                    />
                    <div className="flex-auto">Edit</div>
                  </label>
                  <h1 className="mt-4 text-2xl font-semibold text-gray-800 max-md:mt-10">
                    {profile.company}
                  </h1>
                  <p className="mt-5 text-gray-800 leading-[171%]">
                    {profile.position || "Please Add Position"}
                  </p>
                  <div className="flex gap-3 mt-5 leading-[143%]">
                    <img
                      loading="lazy"
                      src="/map-pin (4) 1.svg"
                      alt=""
                      className="shrink-0 w-4 aspect-square"
                    />
                    <div className="flex-auto">
                      {profile.city || "Please Add you Domicile"}
                    </div>
                  </div>
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
            <div className="flex flex-col mb-10 ml-5 w-full max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                <section className="flex flex-col py-11 bg-white rounded-lg max-md:max-w-full">
                  <h2 className="self-start ml-8 text-2xl font-semibold text-gray-800 leading-[56.1px] max-md:ml-2.5">
                    Data diri
                  </h2>
                  <hr className="shrink-0 mt-6 h-px border border-solid bg-stone-300 border-stone-300 max-md:max-w-full" />
                  <div className="flex flex-col px-8 mt-9 text-xs text-zinc-400 max-md:px-5 max-md:max-w-full">
                    <Input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      label="Company Name"
                      placeholder="Masukan nama lengkap"
                    />
                    <Input
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      label="Positon on Company"
                      placeholder="Masukan job desk"
                    />
                    <Input
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      label="Domicile"
                      placeholder="Masukan domisili"
                    />
                    <TextArea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      label="Description"
                      placeholder="Tuliskan deskripsi singkat"
                      className="items-start px-4 pt-5 pb-24 mt-1 text-sm bg-white rounded border border-gray-200 border-solid text-neutral-400 max-md:pr-5 max-md:max-w-full"
                    />
                    <Input
                      name="instagram"
                      value={form.instagram}
                      onChange={handleChange}
                      label="Instagram"
                      placeholder="Masukan tempat kerja"
                    />
                    <Input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      label="Phone Number"
                      placeholder="Masukan tempat kerja"
                    />
                    <Input
                      name="linkedin"
                      value={form.linkedin}
                      onChange={handleChange}
                      label="Linkedin"
                      placeholder="Masukan tempat kerja"
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EditProfileRecruiter;
