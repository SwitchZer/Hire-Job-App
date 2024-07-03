import React from "react";
import Logo from "./logo";
import LandingButton from "./landingbutton";
import { NavLink } from "react-router-dom";

const NavbarLandingPage = () => {
  return (
    <>
      <div className="container flex justify-between p-5">
        <Logo />
        <div className="flex gap-4">
          <NavLink to={"/login"}>
            <LandingButton className="bg-white border border-solid border-[#5E50A1] text-[#5E50A1]">
              Sign In
            </LandingButton>
          </NavLink>
          <NavLink to={"/registerworker"}>
            <LandingButton className="self-start text-white bg-[#5E50A1]">
              Sign Up
            </LandingButton>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavbarLandingPage;
