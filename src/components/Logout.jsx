import { useDispatch } from "react-redux";
import { logoutUser } from "@/configs/redux/action/authAction";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the logoutUser thunk action
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <Button className="bg-red-800" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
