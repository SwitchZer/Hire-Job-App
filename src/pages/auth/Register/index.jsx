import Hero from "@/components/Login/hero";
import RegisterForm from "@/components/Register/RegisterForm";

const Register = () => {
  return (
    <>
      <div>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <Hero />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
