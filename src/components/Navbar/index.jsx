import AvatarIcon from "./avatar";
import Logo from "./logo";

const Navbar = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container flex justify-between p-5">
          <Logo />
          <AvatarIcon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
