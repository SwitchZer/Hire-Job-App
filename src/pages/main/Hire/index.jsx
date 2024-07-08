import Input from "@/components/EditProfile/Input";
import TextArea from "@/components/EditProfile/TextArea";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { hireWorkers } from "@/configs/redux/action/hireAction";
import { getWorkerId } from "@/configs/redux/action/workerAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Hire = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state.worker);
  const skills = useSelector((state) => state.skills.skills);
  const role = useSelector((state) => state.checkRole.role);

  const [form, setForm] = useState({
    workers_id: id,
    message_purpose: "Full-time",
    name_request_hire: "",
    email_request_hire: "",
    phone_request_hire: "",
    description_request_hire: "",
  });

  useEffect(() => {
    dispatch(getWorkerId(id));
    // dispatch(getSkill(id));
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleHire = (e) => {
    e.preventDefault();
    dispatch(hireWorkers(form));
    navigate(`/detailprofile/${id}`);
  };

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setForm({
      ...form,
      message_purpose: selectedValue,
    });
  };

  const navigate = useNavigate();

  return (
    <div className="bg-[#F6F7F8]">
      <Navbar />
      <div className="bg-[#5E50A1] h-[361px] mb-[-361px] "></div>

      <div className="pt-10 pb-[210px] max-lg:px-[30px]">
        <div className="flex gap-[30px] container mx-auto max-lg:flex-col">
          <div className="flex flex-col basis-4/12 gap-[34px] bg-[#FFFFFF] p-[30px] h-fit rounded-lg">
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

              {role === "recruiter" && (
                <button
                  onClick={handleHire}
                  className="justify-center bg-[#5E50A1]  items-center px-16 py-4 text-white whitespace-nowrap rounded"
                >
                  Hire
                </button>
              )}
            </div>

            {/* {skills.map((skill) => (
            <li key={skill.id}>
              {skill.skill_name}
              <button onClick={() => handleRemoveSkill(skill.id)}>
                Remove
              </button>
            </li>
          ))} */}

            <div className="flex flex-col gap-6 font-normal text-sm leading-5 text-[#9EA0A5]"></div>
          </div>

          <section className="flex flex-col py-11 bg-white w-full rounded-lg max-md:max-w-full">
            <h2 className="self-start ml-8 text-2xl font-semibold text-gray-800 leading-[56.1px] max-md:ml-2.5">
              Contact {profile.name}
            </h2>
            <hr className="shrink-0 mt-6 h-px border border-solid bg-stone-300 border-stone-300 max-md:max-w-full" />
            <div className="flex flex-col px-8 mt-9 text-xs text-zinc-400 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="font-normal text-xs text-[#9EA0A5] pl-[5px]">
                  Purpose of this Message
                </label>
                <select
                  className="p-[15px] rounded-[4px] font-normal text-sm text-[#1F2A36] placeholder:text-[#858D96] outline-none border border-[#E2E5ED]"
                  value={form.message_purpose}
                  onChange={handleSortChange}
                >
                  <option value="Full-time" selected>
                    Full-time
                  </option>
                  <option value="Part-time" selected>
                    Part-time
                  </option>
                  <option value="Self-employed" selected>
                    Self-employed
                  </option>
                  <option value="Freelance" selected>
                    Freelance
                  </option>
                  <option value="Contract" selected>
                    Contract
                  </option>
                  <option value="Internship" selected>
                    Internship
                  </option>
                  <option value="Apprenticeship" selected>
                    Apprenticeship
                  </option>
                  <option value="Seasonal" selected>
                    Seasonal
                  </option>
                </select>
              </div>
              <Input
                name="name_request_hire"
                value={form.name_request_hire}
                onChange={handleChange}
                label="Name"
                placeholder="Masukan nama lengkap"
              />
              <Input
                name="email_request_hire"
                value={form.email_request_hire}
                onChange={handleChange}
                label="Email"
                placeholder="Masukan job desk"
              />
              <Input
                name="phone_request_hire"
                value={form.phone_request_hire}
                onChange={handleChange}
                label="Phone"
                placeholder="Masukan domisili"
              />
              <TextArea
                name="description_request_hire"
                value={form.description_request_hire}
                onChange={handleChange}
                label="Description"
                placeholder="Tuliskan deskripsi singkat"
                className="items-start px-4 pt-5 pb-24 mt-1 text-sm bg-white rounded border border-gray-200 border-solid text-neutral-400 max-md:pr-5 max-md:max-w-full"
              />
              <button
                onClick={handleHire}
                className="justify-center items-center px-16 py-4 text-[#FBB017] whitespace-nowrap rounded mt-5 text-center bg-white border-[#FBB017] border"
              >
                <p className="font-bold">Hire</p>
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hire;
