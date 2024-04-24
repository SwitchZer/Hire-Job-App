import { Avatar, AvatarImage } from "@/components/ui/avatar";

import LogoutButton from "../Logout";

const AvatarIcon = () => {
  return (
    <>
      <div className="flex gap-10 justify-between items-center self-start">
        <LogoutButton />
        <img src="/public/bell.svg" alt="" />
        <img src="/public/mail.svg" alt="" />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
    </>
  );
};

export default AvatarIcon;
