import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="flex flex-row" onClick={handleLogoClick}>
        <img
          className="shrink-0 max-w-full aspect-[3.57] w-[127px] cursor-pointer"
          src="/images/logo/logo1.svg"
          alt=""
        />
      </div>
    </>
  );
};

export default Logo;
