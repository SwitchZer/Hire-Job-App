import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import InputField from "./InputField";
import Button from "../Button";
import { register } from "@/configs/redux/action/authAction";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(form, navigate));
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
        type="password"
        value={form.password}
        onChange={handleChange}
        name="password"
        label="password :"
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
      <Button
        onClick={handleSubmit}
        className="justify-center items-center w-full py-5 mt-6 font-bold text-white whitespace-nowrap bg-amber-400 rounded border border-black border-solid shadow-sm max-md:px-5 max-md:max-w-full"
      >
        Register
      </Button>
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
