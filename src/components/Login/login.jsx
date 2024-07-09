import InputField from "./InputField";
import Button from "../Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/configs/redux/action/authAction";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(form, navigate, toast));
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
        Welcome let's continue your Journey.
      </p>
      <form onSubmit={handleSubmit}>
        <InputField
          value={form.email}
          onChange={handleChange}
          label="Email"
          name="email"
          placeholder="Email"
        />
        <InputField
          type="password"
          value={form.password}
          onChange={handleChange}
          name="password"
          label="Password"
          placeholder="*****"
        />
        <div className="self-end mt-7 text-gray-800">Lupa kata sandi?</div>
        <Button
          disabled={status === "loading"}
          className="justify-center items-center w-full py-5 mt-6 font-bold text-white whitespace-nowrap bg-amber-400 rounded border border-black border-solid shadow-sm max-md:px-5 max-md:max-w-full"
        >
          Login
        </Button>
      </form>
      <div className="text-center mt-8">
        You don't have an account yet?{" "}
        <a href="/registerworker" className="text-amber-400">
          Register as Worker
        </a>{" "}
        or{" "}
        <a href="/registerrecruiter" className="text-amber-400">
          Register as Recruiter
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
