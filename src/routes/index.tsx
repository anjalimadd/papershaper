import { useAuth } from "@hooks/useAuth";
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

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
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
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/try-demo" element={<TryDemoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
