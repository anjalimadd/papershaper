// import { useAuth } from "@hooks/useAuth";
import DashboardPage from "@pages/DashboardPage";
import LandingPage from "@pages/LandingPage";
import LoginPage from "@pages/LoginPage";
import TryDemoPage from "@pages/TryDemoPage";
import NotFoundPage from "@pages/NotFoundPage";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import SignupPage from "@pages/SignupPage";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = sessionStorage.getItem("user");
  return user ? children : <Navigate to="/login" />;
};

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route
        path="/try-demo"
        element={
          <ProtectedRoute>
            <TryDemoPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
