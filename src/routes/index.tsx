import DashboardPage from "../pages/DashboardPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import TryDemoPage from "../pages/TryDemoPage";
import NotFoundPage from "../pages/NotFoundPage";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router";
import SignupPage from "../pages/SignupPage";
import ContactPage from "pages/ContactPage";
import AboutPage from "pages/AboutPage";
import ServicesPage from "pages/ServicesPage";
import ForgotPasswordPage from "pages/ForgotPasswordPage";
import { useEffect } from "react";
import PricingPage from "pages/PricingPage";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = sessionStorage.getItem("user");
  return user ? children : <Navigate to="/login" />;
};

// Add this ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const AppRoutes: React.FC = () => (
  <Router>
    <ScrollToTop />
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
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
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
