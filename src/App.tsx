// src/App.tsx
// In App.tsx or main entry point file
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";

const App = () => (
  <>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
    />
    <AppRoutes />
  </>
);

export default App;
