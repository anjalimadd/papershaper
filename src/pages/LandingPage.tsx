// src/pages/LandingPage.tsx

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-center py-24 bg-gray-50">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
          Transform Your Exam Preparation with
        </h1>
        <h2 className="inline-block overflow-hidden border-r-4 border-green-700 motion-preset-typewriter-[56] motion-duration-[8000ms] text-2xl md:text-4xl font-black text-green-700 whitespace-nowrap mx-auto">
          GenAI-Powered Exam Papers for Classes 9-12 | CBSE & ICSE
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mt-8 mb-12 max-w-2xl mx-auto">
          Elevate Your Study Game with Expert Tools: Create AI-Powered Mock
          Papers with Ease
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/try-demo"
            className="px-8 py-4 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors duration-300 shadow-lg"
          >
            Get Started
          </Link>
          <Link
            to="/try-demo"
            className="px-8 py-4 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300 shadow-lg"
          >
            Try Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Efficient and Integrated Mock Paper Creation Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
                "Gain immediate insights with instant feedback on your performance, helping you identify strengths and areas for improvement.",
            },
            {
              title: "Performance Analytics",
              description:
                "Monitor and track your academic progress effortlessly, using detailed performance analytics to guide your study strategy.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Key Benefits of Using Paper Shaper
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Our system boosts exam readiness, enhances learning efficiency, and
            streamlines preparation.
          </p>
          <ul className="space-y-6 text-left">
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-3 text-green-700 font-bold">
                •
              </span>
              <span>
                <strong>Boost Preparation with AI:</strong> Let AI curate the
                best mock papers tailored to your needs.
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-3 text-green-700 font-bold">
                •
              </span>
              <span>
                <strong>Real-Time Feedback:</strong> Identify strengths and
                weaknesses instantly to focus on improvement.
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-3 text-green-700 font-bold">
                •
              </span>
              <span>
                <strong>Enhanced Exam Readiness:</strong> Train with realistic
                exams to boost confidence and reduce exam anxiety.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Tailored Plans for Your Preparation Needs
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
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
              className="w-full md:w-80 bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {packageItem.plan}
              </h3>
              <p className="text-3xl font-semibold mb-6 text-green-700">
                {packageItem.price}/month
              </p>
              <ul className="text-gray-600 space-y-3 mb-6 text-left">
                {packageItem.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/get-started"
                className="inline-block px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors duration-300 shadow-md"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Revolutionize Your Learning with Cutting-Edge Tools
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto px-4">
          Elevate your exam preparation with innovative, AI-powered tools
          tailored for CBSE and ICSE students. Seamlessly integrate with top
          educational platforms to create dynamic and personalized mock papers.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {[
            {
              src: "https://cdn-icons-png.flaticon.com/512/1040/1040902.png",
              alt: "AI Mock Paper Generator",
              name: "AI Mock Paper Generator",
              description:
                "Effortlessly generate personalized AI-driven mock papers designed for Classes 9-12 students.",
            },
            {
              src: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
              alt: "Advanced Question Bank",
              name: "Advanced Question Bank",
              description:
                "Unlock a comprehensive library of quality-assured exam questions, enhancing your revision process.",
            },
            {
              src: "https://cdn-icons-png.flaticon.com/512/3404/3404754.png",
              alt: "Performance Analytics",
              name: "Performance Analytics",
              description:
                "Gain valuable insights into your learning with our interactive performance analytics dashboard.",
            },
            {
              src: "https://cdn-icons-png.flaticon.com/512/1173/1173412.png",
              alt: "Exam Simulator",
              name: "Exam Simulator",
              description:
                "Practice with simulated exams to master time management and enhance your readiness for the real test.",
            },
          ].map((tool, index) => (
            <div
              key={index}
              className="bg-gray-200 shadow-md border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={tool.src}
                alt={tool.alt}
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover text-black border border-gray-300 bg-white p-2"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
              <Link
                to="#"
                className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                Learn More
              </Link>
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
