// src/pages/LoginPage.tsx
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "@contexts/AuthContext";
import { toast } from "react-toastify";
// import { FcGoogle } from "react-icons/fc";

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

  // const handleGoogleLogin = async () => {
  //   const success = await googleSignin();
  //   if (success) {
  //     toast.success("Login successful!");
  //     navigate("/dashboard");
  //   } else {
  //     toast.error("Google Login failed. Please try again.");
  //   }
  // };

  return (
    <div className="flex h-screen">
      {/* Left Side - Image and Text */}
      <div
        className="w-2/3 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5710614/pexels-photo-5710614.jpeg?auto=compress&cs=tinysrgb&w=800')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative flex flex-col justify-center h-full px-10 text-white z-10">
          <div
            className="text-3xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Paper Shaper{" "}
            <span className="inline-block transform rotate-45">📝</span>
          </div>
          <div className="my-8">
            <h1 className="text-5xl font-bold mb-4 leading-snug">
              Generate Mock Papers Effortlessly
            </h1>
            <p className="text-lg mb-6">
              Create AI-powered mock tests for classes 8, 9, and 10.
            </p>
          </div>

          {/* <div className="flex space-x-4 mt-8">
            <a href="#" className="text-green-200 hover:text-white">
              🌐
            </a>
            <a href="#" className="text-green-200 hover:text-white">
              📷
            </a>
            <a href="#" className="text-green-200 hover:text-white">
              🐦
            </a>
            <a href="#" className="text-green-200 hover:text-white">
              🔗
            </a>
          </div> */}
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/3 max-w-lg flex flex-col justify-start items-center p-10 md:p-12 bg-white my-44">
        <h2 className="text-3xl font-semibold mb-8 text-green-800">
          Login to your account
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-6 mt-6"
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
              href="#"
              className="hover:underline"
              onClick={() => {
                toast.info("Feature coming soon!");
              }}
            >
              Forgot Password?
            </a>
          </div>
          {/* Login Without Google */}
          <button
            type="submit"
            className="w-full py-3 bg-green-700 text-white rounded-md font-semibold text-lg hover:bg-green-800 transition duration-300 mt-24"
          >
            Login
          </button>
          {/* Login With Google Button */}
          {/* <div className="w-full mt-6">
            <button
              type="button"
              className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition duration-300"
              onClick={handleGoogleLogin}
            >
              <FcGoogle className="h-6 w-6 mr-2" />
              <span className="text-gray-700 font-semibold text-md">
                Continue with Google
              </span>
            </button>
          </div> */}
        </form>

        <div className="text-center text-gray-600 mt-8">
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
