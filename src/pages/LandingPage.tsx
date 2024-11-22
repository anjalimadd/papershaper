// src/pages/LandingPage.tsx

import Footer from "@components/Footer";
import Header from "@components/Header";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">
          Transform Your Exam Preparation with
        </h1>
        <h2 className="text-4xl mb-4 font-bold text-green-700 motion-preset-typewriter-[44] motion-duration-[8000ms] font-sans mx-auto">
          GenAI-Powered Exam Papers for Classes 9-12 | CBSE & ICSE
        </h2>{" "}
        <p className="text-lg text-gray-600 mb-8">
          Elevate Your Study Game with Expert Tools: Create AI-Powered Mock
          Papers with Ease
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/try-demo"
            className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800"
          >
            Get Started
          </Link>
          <Link
            to="/try-demo"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
          >
            Try Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Efficient and Integrated Mock Paper Creation Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-5xl mx-auto">
          {[
            {
              title: "AI-Powered Mock Papers",
              description:
                "Effortlessly generate custom exam papers for Classes 8, 9, and 10 using advanced AI technology. Tailor your mock papers to align with specific syllabus requirements.",
            },
            {
              title: "Question Bank Integration",
              description:
                "Access a vast library of thousands of curated quality questions, ensuring precise and thorough assessments tailored to CBSE and ICSE standards.",
            },
            {
              title: "Exam Simulator",
              description:
                "Immerse yourself in realistic exam environments to boost your readiness and confidence during actual exams.",
            },
            {
              title: "Customizable Content",
              description:
                "Customize your mock papers to concentrate on specific chapters or topics, ensuring focused and effective studying.",
            },
            {
              title: "Instant Feedback",
              description:
                "Gain immediate insights with instant feedback on your performance, helping you identify strengths and areas for improvement",
            },
            {
              title: "Performance Analytics",
              description:
                "Monitor and track your academic progress effortlessly, using detailed performance analytics to guide your study strategy.",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Key Benefits of Using Paper Shaper
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our system boosts exam readiness, enhances learning efficiency, and
            streamlines preparation.
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Boost Preparation with AI:</strong> Let AI curate the best
              mock papers tailored to your needs.
            </li>
            <li>
              <strong>Real-Time Feedback:</strong> Identify strengths and
              weaknesses instantly to focus on improvement.
            </li>
            <li>
              <strong>Enhanced Exam Readiness:</strong> Train with realistic
              exams to boost confidence and reduce exam anxiety.
            </li>
          </ul>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Tailored Plans for Your Preparation Needs
        </h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {[
            {
              plan: "Basic",
              price: "$19",
              features: [
                "Access to question bank",
                "Basic analytics",
                "Custom papers",
              ],
            },
            {
              plan: "Pro",
              price: "$39",
              features: [
                "Advanced question selection",
                "Detailed analytics",
                "Unlimited mock exams",
              ],
            },
            {
              plan: "Premium",
              price: "$59",
              features: [
                "All features of Pro",
                "Personalized feedback",
                "Priority support",
              ],
            },
          ].map((packageItem, index) => (
            <div
              key={index}
              className="w-64 bg-gray-100 p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-bold mb-4">{packageItem.plan}</h3>
              <p className="text-2xl font-semibold mb-4">
                {packageItem.price}/month
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                {packageItem.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link
                to="/get-started"
                className="px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Transform Your Preparation with Seamless Integrations
        </h2>
        <p className="text-lg text-gray-600 mb-8 mx-24">
          Enhance your learning experience with our AI-powered integrations
          designed to simplify CBSE and ICSE exam preparation. Connect with
          trusted educational platforms to create comprehensive and customized
          mock papers effortlessly.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              alt: "Tool A - AI Mock Paper Generator",
              name: "AI Mock Paper Generator",
              description:
                "Generate personalized AI-driven mock papers for Classes 9-12.",
            },
            {
              src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              alt: "Tool B - Advanced Question Bank",
              name: "Advanced Question Bank",
              description:
                "Access a vast library of quality-assured exam questions.",
            },
            {
              src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              alt: "Tool C - Performance Analytics Dashboard",
              name: "Performance Analytics",
              description:
                "Track and analyze your progress with detailed insights.",
            },
            {
              src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              alt: "Tool D - Exam Simulator",
              name: "Exam Simulator",
              description:
                "Prepare with realistic simulations of actual exam conditions.",
            },
          ].map((tool, index) => (
            <div
              key={index}
              className="bg-gray-200 shadow-md border border-gray-200 rounded-lg p-6"
            >
              <img
                src={tool.src}
                alt={tool.alt}
                className="w-16 h-16 mx-auto mb-4 rounded-full object-cover border border-gray-300"
              />
              <h3 className="text-lg font-medium text-gray-800 text-center">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
                {tool.description}
              </p>
              <button className="mt-4 w-36 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full hover:bg-green-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
