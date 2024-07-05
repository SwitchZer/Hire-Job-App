import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import api from "@/configs/api";
import InputField from "./InputField";
import Button from "../Button";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    conmpany: "",
    postion: "",
  });

  const handleRegister = () => {
    api
      .post("/recruiters/register", {
        email: form.email,
        password: form.password,
        name: form.name,
        phone: form.phone,
        company: form.company,
        position: form.position,
      })
      .then((res) => {
        alert("selamat berhasil login");
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err.response);
        alert("anda gagal register");
      });
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="flex flex-col self-stretch px-5 my-auto text-base max-md:mt-10 max-md:max-w-full">
      <h1 className="text-3xl font-semibold text-gray-800 max-md:max-w-full">
        Hello, Pewpeople
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-md:max-w-full">
        Start Your Journey Here!
      </p>
      <form onSubmit={handleRegister}>
        <InputField
          type="text"
          value={form.name}
          name="name"
          label="Name"
          placeholder="Insert Your Fullname"
          onChange={handleChange}
        />
        <InputField
          value={form.email}
          type="email"
          onChange={handleChange}
          label="Email"
          name="email"
          placeholder="Insert Your Email"
        />
        <InputField
          type="text"
          value={form.company}
          name="company"
          label="Company"
          placeholder="Insert Your Company Name"
          onChange={handleChange}
        />
        <InputField
          type="text"
          value={form.position}
          name="position"
          label="Position"
          placeholder="Insert Your Position on Company"
          onChange={handleChange}
        />
        <InputField
          type="password"
          value={form.password}
          onChange={handleChange}
          name="password"
          label="Password"
          placeholder="Insert Your Password"
          test-id="test"
        />

        <InputField
          type="text"
          value={form.phone}
          name="phone"
          label="No Handphone"
          placeholder="Insert Your Phone Number"
          onChange={handleChange}
        />
        <Button className="justify-center items-center w-full py-5 mt-6 font-bold text-white whitespace-nowrap bg-amber-400 rounded border border-black border-solid shadow-sm max-md:px-5 max-md:max-w-full">
          Register
        </Button>
      </form>
      <div className="text-center mt-8">
        Already Have Account?
        <a href="/login" className="text-amber-400">
          {" "}
          Login Here
        </a>
      </div>
    </div>
  );
};

export default RegisterForm;
