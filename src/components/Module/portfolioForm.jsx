import React from "react";
import Input from "../EditProfile/Input";

const PortfolioForm = () => {
  const [form, setForm] = React.useState({
    application_name: "",
    link_repository: "",
    application: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="flex flex-col py-11 mt-8 bg-white rounded-lg max-md:max-w-full">
      <h2 className="self-start ml-8 text-2xl font-semibold text-gray-800 leading-[56.1px] max-md:ml-2.5">
        Portfolio
      </h2>
      <hr className="shrink-0 mt-6 h-px border border-solid bg-stone-300 border-stone-300 max-md:max-w-full" />
      <div className="flex flex-col px-8 mt-9 text-xs text-zinc-400 max-md:px-5 max-md:max-w-full">
        <Input
          name="position"
          value={form.application_name}
          onChange={handleChange}
          label="Position"
          placeholder="Masukan nama lengkap"
        />
        <Input
          name="job_desk"
          value={form.link_repository}
          onChange={handleChange}
          label="Job desk"
          placeholder="Masukan job desk"
        />

        <Input
          type="file"
          name="workplace"
          value={form.workplace}
          onChange={handleChange}
          label="Workplace"
          placeholder="Masukan tempat kerja"
        />

        <button
          //   onClick={handleSubmit}
          className="justify-center items-center px-16 py-4 text-[#FBB017] whitespace-nowrap rounded mt-5 text-center bg-white border-[#FBB017] border"
        >
          <p className="font-bold">Add Experience</p>
        </button>
      </div>
    </section>
  );
};

export default PortfolioForm;
