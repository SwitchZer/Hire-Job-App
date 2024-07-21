import React from "react";
import Input from "../EditProfile/Input";
import TextArea from "../EditProfile/TextArea";
import { useDispatch } from "react-redux";
import { addExperience } from "@/configs/redux/action/experienceAction";

const ExperienceForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({
    position: "",
    company: "",
    work_month: "",
    work_year: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExperience(form));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="flex flex-col py-11 mt-8 bg-white rounded-lg max-md:max-w-full">
      <h2 className="self-start ml-8 text-2xl font-semibold text-gray-800 leading-[56.1px] max-md:ml-2.5">
        Experience
      </h2>
      <hr className="shrink-0 mt-6 h-px border border-solid bg-stone-300 border-stone-300 max-md:max-w-full" />
      <div className="flex flex-col px-8 mt-9 text-xs text-zinc-400 max-md:px-5 max-md:max-w-full">
        <Input
          name="position"
          value={form.position}
          onChange={handleChange}
          label="Position"
          placeholder="Masukan nama lengkap"
        />
        <Input
          name="company"
          value={form.company}
          onChange={handleChange}
          label="Company"
          placeholder="Masukan job desk"
        />
        <Input
          name="work_month"
          value={form.work_month}
          onChange={handleChange}
          label="Work Month"
          placeholder="Masukan domisili"
        />
        <Input
          name="work_year"
          value={form.work_year}
          onChange={handleChange}
          label="Work Year"
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
        <button
          onClick={handleSubmit}
          className="justify-center items-center px-16 py-4 text-[#FBB017] whitespace-nowrap rounded mt-5 text-center bg-white border-[#FBB017] border"
        >
          <p className="font-bold">Add Experience</p>
        </button>
      </div>
    </section>
  );
};

export default ExperienceForm;
