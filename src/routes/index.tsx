// src/routes/index.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "@pages/DashboardPage";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import NotFoundPage from "@pages/NotFoundPage";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
