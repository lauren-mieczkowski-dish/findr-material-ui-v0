import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./core/components/PrivateRoute";

// Admin
const Admin = lazy(() => import("./admin/pages/Admin"));
const Dashboard = lazy(() => import("./admin/pages/Dashboard"));
const Faq = lazy(() => import("./admin/pages/Faq"));
const HelpCenter = lazy(() => import("./admin/pages/HelpCenter"));
const Home = lazy(() => import("./admin/pages/Home"));
const Profile = lazy(() => import("./admin/pages/Profile"));
const ProfileActivity = lazy(() => import("./admin/pages/ProfileActivity"));
const ProfileInformation = lazy(
  () => import("./admin/pages/ProfileInformation")
);
const ProfilePassword = lazy(() => import("./admin/pages/ProfilePassword"));

// Auth
const ForgotPassword = lazy(() => import("./auth/pages/ForgotPassword"));
const ForgotPasswordSubmit = lazy(
  () => import("./auth/pages/ForgotPasswordSubmit")
);
const Login = lazy(() => import("./auth/pages/Login"));
const Register = lazy(() => import("./auth/pages/Register"));


// Core
const Forbidden = lazy(() => import("./core/pages/Forbidden"));
const NotFound = lazy(() => import("./core/pages/NotFound"));
const UnderConstructions = lazy(
  () => import("./core/pages/UnderConstructions")
);

// Landing
const Landing = lazy(() => import("./landing/pages/Landing"));

// Devices
const DeviceManagement = lazy(() => import("./devices/pages/DeviceManagement"));

const AppRoutes = () => {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<Landing />} />
      <PrivateRoute path="admin" element={<Admin />}>
        <PrivateRoute path="/" element={<Home />} />
        <PrivateRoute path="dashboard" element={<Dashboard />} />
        <PrivateRoute path="faq" element={<Faq />} />
        <PrivateRoute path="help" element={<HelpCenter />} />
        <PrivateRoute path="profile" element={<Profile />}>
          <PrivateRoute path="/" element={<ProfileActivity />} />
          <PrivateRoute path="information" element={<ProfileInformation />} />
          <PrivateRoute path="password" element={<ProfilePassword />} />
        </PrivateRoute>
        <PrivateRoute
          path="connect"
          element={
            <Navigate
              to={`/${process.env.PUBLIC_URL}/under-construction`}
              replace
            />
          }
        />
        <PrivateRoute
          path="vault"
          element={
            <Navigate
              to={`/${process.env.PUBLIC_URL}/under-construction`}
              replace
            />
          }
        />
        <PrivateRoute
          path="apollo"
          element={
            <Navigate
              to={`/${process.env.PUBLIC_URL}/under-construction`}
              replace
            />
          }
        />
        <PrivateRoute
          path="harbor"
          element={
            <Navigate
              to={`/${process.env.PUBLIC_URL}/under-construction`}
              replace
            />
          }
        />
        <PrivateRoute path="device-management" element={<DeviceManagement />} />
      </PrivateRoute>
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="forgot-password-submit" element={<ForgotPasswordSubmit />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="under-construction" element={<UnderConstructions />} />
      <Route path="403" element={<Forbidden />} />
      <Route path="404" element={<NotFound />} />
      <Route
        path="*"
        element={<Navigate to={`/${process.env.PUBLIC_URL}/404`} replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
