import ProtectedRoute from "@/components/Module/ProtectedRoute";
import Profile from "@/components/Profile";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
// import RegisterRecruiter from "@/pages/auth/RegisterRecruiter";
import EditProfile from "@/pages/main/EditProfile";
import Home from "@/pages/main/Home";
import LandingPage from "@/pages/main/LandingPage";
// import Latihan from "@/pages/main/Latihan";
import Portofilio from "@/pages/main/Portofolio";
import ProfileCompany from "@/pages/main/ProfileCompany";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainRouter = () => {
  // const { token } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editprofile/:id"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profilecompany"
          element={
            <ProtectedRoute>
              <ProfileCompany />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portofolio"
          element={
            <ProtectedRoute>
              <Portofilio />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
