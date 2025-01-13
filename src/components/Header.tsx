import { useContext, useEffect, useState } from "react";
import {  Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

interface User {
  name?: string;
  email: string;
  photoURL?: string;
}

export default function Header() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const authContext = useContext(AuthContext);

  // Ensure authContext is not undefined and has logout function
  const { logout } = authContext || {};

  const handleProfileClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleLogout = () => {
    if (logout) {
      logout();
      window.location.replace("/");
    }
    setIsPopoverOpen(false);
  };
  useEffect(() => {
    // Fetch user data from sessionStorage on component mount
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, []);

  return (
    <header className="bg-white shadow-md w-full">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-700">
          Paper Shaper
        </Link>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-700">
            About
          </Link>
          <Link to="/services" className="hover:text-green-700">
            Services
          </Link>
          <Link to="/contact" className="hover:text-green-700">
            Contact
          </Link>
        </nav>

        {/* Login Button (Desktop) */}
        {!user ? (
          <Link
            to="/login"
            className="hidden md:inline-block px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800"
          >
            Login
          </Link>
        ) : (
          <div className="flex flex-col items-center space-x-2 mr-10">
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={handleProfileClick}
            />
            {/* <span className="text-green-700 font-semibold">Hello User!</span> */}
            {/* Profile Popover */}
            {isPopoverOpen && (
              <div className="absolute top-12 right-18 w-32">
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="text-lg font-medium hover:text-green-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium hover:text-green-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-lg font-medium hover:text-green-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium hover:text-green-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Conditional Rendering for Login Button or User's Photo URL */}
            {user !== null ? (
              <div className="flex items-center space-x-4">
                <img
                  src={user?.photoURL || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-green-700 font-semibold">
                  {user?.email}
                </span>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:inline-block px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
