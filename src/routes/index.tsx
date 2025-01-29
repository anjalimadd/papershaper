import DashboardPage from "../pages/DashboardPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import TryDemoPage from "../pages/MockPaperCreatorPage";
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
import DocumentHelperPage from "pages/DocumentHelperPage";
import { Helmet } from "react-helmet-async";

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

const LoggedOutRoute = ({ children }: { children: JSX.Element }) => {
  const user = sessionStorage.getItem("user");
  return user ? <Navigate to="/" /> : children;
};

const AppRoutes: React.FC = () => (
  <Router>
    <Helmet>
      <meta name="google-adsense-account" content="ca-pub-8294578673663801" />
    </Helmet>
    <ScrollToTop />
    <Routes>
      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mock-paper-creator"
        element={
          <ProtectedRoute>
            <TryDemoPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/document-helper"
        element={
          <ProtectedRoute>
            <DocumentHelperPage />
          </ProtectedRoute>
        }
      />

      {/* Auth routes accessible only to logged out users */}
      <Route
        path="/login"
        element={
          <LoggedOutRoute>
            <LoginPage />
          </LoggedOutRoute>
        }
      />
      <Route
        path="/register"
        element={
          <LoggedOutRoute>
            <SignupPage />
          </LoggedOutRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <LoggedOutRoute>
            <ForgotPasswordPage />
          </LoggedOutRoute>
        }
      />

      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
