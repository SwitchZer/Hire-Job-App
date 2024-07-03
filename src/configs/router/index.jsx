import ProtectedRoute from "@/components/Module/ProtectedRoute";
import Login from "@/pages/auth/Login";
import RegisterRecruiter from "@/pages/auth/RegisterRecruiter";
import RegisterWorker from "@/pages/auth/RegisterWorker";
import EditProfile from "@/pages/main/EditProfile";
import Home from "@/pages/main/Home";
import LandingPage from "@/pages/main/LandingPage";
import Portofilio from "@/pages/main/Portofolio";

import ProfileId from "@/pages/main/ProfileWorker";
import ProfileCompany from "@/pages/main/ProfileRecruiter";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileWorker from "@/pages/main/ProfileWorker";
import ProfileRecruiter from "@/pages/main/ProfileRecruiter";
import ProfileDetail from "@/pages/main/ProfileDetail";

const MainRouter = () => {
  // const { token } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerworker" element={<RegisterWorker />} />
        <Route path="/registerrecruiter" element={<RegisterRecruiter />} />
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
          path="/profileworker"
          element={
            <ProtectedRoute>
              <ProfileWorker />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profilerecruiter"
          element={
            <ProtectedRoute>
              <ProfileRecruiter />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              <ProfileDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editprofile"
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
