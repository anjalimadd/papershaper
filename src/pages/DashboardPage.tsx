import { AuthContext } from "@contexts/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface User {
  email: string;
  photoURL: string;
}

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const authContext = useContext(AuthContext);

  // Ensure authContext is not undefined and has logout function
  const { logout } = authContext || {};

  // Fetch user from sessionStorage on component mount
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    if (logout) {
      logout();
      window.location.replace("/login");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-5">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between text-center mb-2">
          <h1
            className="text-3xl font-bold text-green-800 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Paper Shaper Dashboard
          </h1>
          {user && (
            <div
              className="mr-5 cursor-pointer"
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            >
              <img
                src={
                  user?.photoURL ||
                  "https://randomuser.me/api/portraits/men/1.jpg"
                }
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover mx-auto border-2 border-green-500"
              />

              {isPopoverOpen && (
                <div className="absolute right-7 w-32">
                  <div className=" text-center">
                    <button
                      onClick={handleLogout}
                      className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg text-sm hover:bg-red-700 transition duration-300"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Welcome Heading */}
        {user && (
          <div className="text-center my-6">
            <h2 className="text-2xl font-semibold text-green-700">
              Welcome, {user.email}!
            </h2>
            <p className="text-gray-600 mt-3">
              Let's shape your paper with Paper Shaper!
            </p>
          </div>
        )}

        {/* Demo Section */}
        <div className="bg-green-100 rounded-lg p-8 shadow-md my-12">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">
            Try the Demo
          </h2>
          <p className="text-gray-700 mb-6">
            Experience the powerful features of Paper Shaper. Start by clicking
            the button below to explore the demo.
          </p>
          <button
            className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
            onClick={() => navigate("/try-demo")}
          >
            Start Demo
          </button>
        </div>

        {/* Feature Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Shape Your Paper
            </h3>
            <p className="text-gray-600">
              Design and modify your paper items with our easy-to-use tools.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Paper Templates
            </h3>
            <p className="text-gray-600">
              Access a variety of customizable templates for different paper
              needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Advanced Features
            </h3>
            <p className="text-gray-600">
              Unlock professional tools for advanced paper shaping and design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
