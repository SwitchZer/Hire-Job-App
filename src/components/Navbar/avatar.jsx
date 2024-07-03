import { Avatar, AvatarImage } from "@/components/ui/avatar";

import LogoutButton from "../Logout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AvatarIcon = () => {
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);
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
        <Avatar onClick={handleProfile}>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
    </>
  );
};

export default AvatarIcon;
