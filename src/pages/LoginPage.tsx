import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"; // Updated import
import { useState, useContext } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext)!;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: LoginFormInputs) => {
    const { email, password } = data;
    const success = await login(email, password);
    if (success) {
      toast.success("Login successful!");
      navigate("/dashboard");
    } else {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side - Image and Text */}
      <div
        className="lg:w-2/3 w-full h-64 lg:h-auto bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5710614/pexels-photo-5710614.jpeg?auto=compress&cs=tinysrgb&w=800')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex flex-col justify-center h-full px-6 lg:px-10 text-white z-10">
          <div
            className="text-2xl lg:text-3xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Paper Shaper{" "}
            <span className="inline-block transform rotate-45">📝</span>
          </div>
          <div className="my-4 lg:my-8">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-snug">
              Generate Mock Papers Effortlessly
            </h1>
            <p className="text-base lg:text-lg mb-6">
              Create AI-powered mock tests for classes 9, 10, and 12.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="lg:w-1/3 w-full max-w-lg flex flex-col justify-start items-center p-6 lg:p-10 bg-white lg:my-44">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-8 text-green-800">
          Login to your account
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-4 lg:space-y-6 mt-4 lg:mt-6"
        >
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </div>
          <div className="text-right text-green-600 text-sm mt-2">
            <a
              href="/forgot-password"
              className="hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-700 text-white rounded-md font-semibold text-lg hover:bg-green-800 transition duration-300 mt-6 lg:mt-24"
          >
            Login
          </button>
        </form>

        <div className="text-center text-gray-600 mt-6 lg:mt-8">
          <span>Don't have an account?</span>
          <Link
            to="/register"
            className="text-green-600 font-medium ml-2 hover:text-green-700"
          >
            Create your new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;