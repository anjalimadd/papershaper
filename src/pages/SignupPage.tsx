import { AuthContext } from "@contexts/AuthContext";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router"; 
import { toast } from "react-toastify";
// import { FcGoogle } from "react-icons/fc";

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext)!;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormInputs>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const googleSignupClicked = useRef(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = async (data: SignupFormInputs) => {
    const { email, password } = data;
    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    // Email and password validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long, include one lowercase, one uppercase letter, and one special character."
      );
      return;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = await signup(data.name, data.email, data.password);

      // Check if the result contains an error message
      if (result.success) {
        if (!googleSignupClicked.current) {
          toast.success("User created successfully");
          navigate("/login");
        }
      } else {
        // If there was an error, display the error message
        const errorMessage =
          result.error?.message ||
          "An unexpected error occurred. Please try again later.";
        toast.error(errorMessage);
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : error && typeof error === "object" && "response" in error
            ? (error as { response: { data: { message: string } } }).response
                ?.data?.message
            : "An unexpected error occurred. Please try again later.";

      toast.error(errorMessage);
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Image and Text */}
      <div
        className="w-2/3 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5710614/pexels-photo-5710614.jpeg?auto=compress&cs=tinysrgb&w=800')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
        {/* Dark overlay */}
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
              Join Paper Shaper
            </h1>
            <p className="text-lg mb-6">
              Start generating AI-powered mock papers for classes 8, 9, and 10
              with ease. Enhance your preparation and stay ahead.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-1/3 max-w-lg flex flex-col justify-center items-center p-10 md:p-16 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-green-800 text-center">
          Create your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
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
              placeholder="Password"
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
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-700 text-white rounded-md font-semibold text-lg hover:bg-green-800 transition duration-300 mt-6"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center text-gray-600 mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-medium ml-2 hover:text-green-700"
          >
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
