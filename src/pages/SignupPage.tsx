// src/pages/SignupPage.tsx

import { useAuth } from '@hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<SignupFormInputs>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = (data: SignupFormInputs) => {
    if (signup(data.name, data.email, data.password)) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Image and Text */}
      <div className="w-2/3 bg-cover bg-center relative" style={{ backgroundImage: `url('https://source.unsplash.com/random')` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative flex flex-col justify-center h-full px-10 text-white z-10">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4 leading-snug">Join Paper Shaper</h1>
            <p className="text-lg mb-6">
              Start generating AI-powered mock papers for classes 8, 9, and 10 with ease. Enhance your preparation and stay ahead.
            </p>
          </div>
          <div className="text-3xl font-bold">Paper Shaper <span className="inline-block transform rotate-45">📝</span></div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-1/3 max-w-lg flex flex-col justify-center items-center p-10 md:p-16 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-green-800 text-center">Create your account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
              {showPassword ? <EyeSlashIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
            </div>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) => value === watch('password') || 'Passwords do not match',
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
            <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? <EyeSlashIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
            </div>
          </div>
          <button type="submit" className="w-full py-3 bg-green-700 text-white rounded-md font-semibold text-lg hover:bg-green-800 transition duration-300 mt-6">
            Sign Up
          </button>
        </form>
        <div className="text-center text-gray-600 mt-8">
          Already have an account? <Link to="/login" className="text-green-600 font-medium ml-2 hover:text-green-700">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
