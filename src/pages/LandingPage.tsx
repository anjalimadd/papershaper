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
          The Future of Education with{" "}
          <span className="text-green-700">AI-Driven Mock Papers</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Expert tools to elevate your exam preparation. Start creating
          AI-powered mock papers with ease.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/get-started"
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
                "Generate custom papers for class 8th, 9th, and 10th with AI.",
            },
            {
              title: "Question Bank Integration",
              description:
                "Access thousands of quality questions for accurate assessments.",
            },
            {
              title: "Exam Simulator",
              description:
                "Simulate real exam environments for better preparation.",
            },
            {
              title: "Customizable Content",
              description:
                "Tailor content to focus on specific topics or difficulty levels.",
            },
            {
              title: "Instant Feedback",
              description:
                "Receive instant feedback on mock exams for continuous improvement.",
            },
            {
              title: "Performance Analytics",
              description:
                "Track performance and progress over time with detailed analytics.",
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
          Seamless Integrations with Top Educational Tools
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Connect with leading tools to enhance your preparation experience.
        </p>
        <div className="flex justify-center space-x-4">
          <img
            src="https://source.unsplash.com/random/80x80"
            alt="Tool 1"
            className="w-20 h-20 rounded-full"
          />
          <img
            src="https://source.unsplash.com/random/80x80?2"
            alt="Tool 2"
            className="w-20 h-20 rounded-full"
          />
          <img
            src="https://source.unsplash.com/random/80x80?3"
            alt="Tool 3"
            className="w-20 h-20 rounded-full"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
