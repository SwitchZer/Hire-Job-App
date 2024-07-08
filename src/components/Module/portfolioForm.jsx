import React, { useEffect } from "react";
import Input from "../EditProfile/Input";
import {
  addPortfolio,
  uploadFile,
} from "@/configs/redux/action/portfolioAction";
import { useDispatch, useSelector } from "react-redux";

const PortfolioForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({
    application_name: "",
    link_repository: "",
    application: "Aplikasi Mobile",
    image: "",
  });

  const { file } = useSelector((state) => state.portfolio);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    dispatch(uploadFile(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPortfolio(form));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (file) {
      setForm((prevForm) => ({ ...prevForm, image: file }));
    }
  }, [file]);

  return (
    <section className="flex flex-col py-11 mt-8 bg-white rounded-lg max-md:max-w-full">
      <h2 className="self-start ml-8 text-2xl font-semibold text-gray-800 leading-[56.1px] max-md:ml-2.5">
        Portfolio
      </h2>
      <hr className="shrink-0 mt-6 h-px border border-solid bg-stone-300 border-stone-300 max-md:max-w-full" />
      <div className="flex flex-col px-8 mt-9 text-xs text-zinc-400 max-md:px-5 max-md:max-w-full">
        <Input
          name="application_name"
          value={form.application_name}
          onChange={handleChange}
          label="Application Name"
          placeholder="Input your Application Name"
        />
        <Input
          name="link_repository"
          value={form.link_repository}
          onChange={handleChange}
          label="Link Repository"
          placeholder="Input your Github Link"
        />

        <div className="flex flex-col gap-1">
          <label className="font-normal text-xs text-[#9EA0A5] pl-[5px]">
            App Type
          </label>
          <div className="flex items-center gap-4">
            <label
              className={
                form.type === "Aplikasi Mobile"
                  ? "flex items-center border border-[#E2E5ED] rounded-lg p-[15px] font-semibold text-sm text-[#46505C] accent-[#5E50A1]"
                  : "flex items-center p-[15px] font-normal text-sm text-[#9EA0A5]"
              }
            >
              <input
                type="radio"
                name="type"
                value="Aplikasi Mobile"
                checked={form.type === "Aplikasi Mobile"}
                onChange={handleChange}
                className="mr-2 size-4"
              />
              Mobile App
            </label>
            <label
              className={
                form.type === "Aplikasi Web"
                  ? "flex items-center border border-[#E2E5ED] rounded-lg p-[15px] font-semibold text-sm text-[#46505C] accent-[#5E50A1]"
                  : "flex items-center p-[15px] font-normal text-sm text-[#9EA0A5]"
              }
            >
              <input
                type="radio"
                name="type"
                value="Aplikasi Web"
                checked={form.type === "Aplikasi Web"}
                onChange={handleChange}
                className="mr-2"
              />
              Web App
            </label>
          </div>
        </div>

        <label htmlFor="upload-file" className=" flex flex-col gap-1 w-full">
          <p className="font-normal text-xs text-[#9EA0A5] pl-[5px]">
            Upload gambar
          </p>
          <input
            type="file"
            id="upload-file"
            className="hidden"
            onChange={handleFileUpload}
          />
          <div
            style={{ backgroundImage: `url(${form.image})` }}
            className={
              form.image
                ? "rounded-lg w-full cursor-pointer h-80 bg-cover"
                : "p-12 flex flex-col items-center gap-5 border border-[#E2E5ED] rounded-lg w-full cursor-pointer"
            }
          >
            <div className={form.image ? "hidden" : "flex flex-col gap-10"}>
              <div className="flex flex-col items-center gap-3">
                <p className="font-normal text-xs text-[#1F2A36]">
                  Upload file from your directory.
                </p>
              </div>
              <div className="flex gap-10">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-1 font-normal text-xs text-[#1F2A36]">
                    <p>High-Res Image</p>
                    <p>PNG, JPG or GIF</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-1 font-normal text-xs text-[#1F2A36]">
                    <p>Size</p>
                    <p>1080x1920 or 600x800</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>

        <button
          onClick={handleSubmit}
          className="justify-center items-center px-16 py-4 text-[#FBB017] whitespace-nowrap rounded mt-5 text-center bg-white border-[#FBB017] border"
        >
          <p className="font-bold">Add Portfolio</p>
        </button>
      </div>
    </section>
  );
};

export default PortfolioForm;
