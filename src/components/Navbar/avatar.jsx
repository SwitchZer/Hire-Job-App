import { Avatar, AvatarImage } from "@/components/ui/avatar";

import LogoutButton from "../Logout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkRole } from "@/configs/redux/action/checkRoleAction";
import { useEffect } from "react";

const AvatarIcon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const role = useSelector((state) => state.checkRole.role);
  useEffect(() => {
    if (token) {
      dispatch(checkRole());
    }
  }, [token, dispatch]);
  const handleProfile = () => {
    if (role === "recruiter") {
      navigate(`/profilerecruiter`);
    } else {
      navigate(`/profileworker`);
    }
  };
  return (
    <>
      <div className="flex gap-10 justify-between items-center self-start">
        <LogoutButton />
        <img src="/bell.svg" alt="" />
        <img src="/mail.svg" alt="" />
        <Avatar className="cursor-pointer" onClick={handleProfile}>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
    </>
  );
};

export default AvatarIcon;
