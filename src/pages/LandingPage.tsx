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
      <section className="text-center py-12 md:py-24 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            Transform Your Exam Preparation with
          </h1>

          {/* Animated Heading */}
          <h2 className="inline-block overflow-hidden border-r-4 border-green-700 motion-preset-typewriter-[92] motion-duration-[10s] text-xl sm:text-2xl md:text-4xl font-black text-green-700 whitespace-nowrap mx-auto max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl">
            GenAI-Powered Exam Papers for Classes 9-12 | CBSE & ICSE
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-6 sm:mt-8 md:mt-8 mb-8 md:mb-12">
            Elevate Your Study Game with Expert Tools: Create AI-Powered Mock Papers with Ease
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              to="/try-demo"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors duration-300 shadow-lg text-sm sm:text-base"
            >
              Get Started
            </Link>
            <Link
              to="/try-demo"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300 shadow-lg text-sm sm:text-base"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-emerald-700">
            Smart Exam Preparation Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Exam Generator",
                description:
                  "Create customized mock papers and test questions for Classes 9-12 (CBSE). Select your class, subject, and chapter to generate tailored practice materials or assessment questions instantly.",
                link: "/try-demo",
                linkText: "Try Exam Generator",
                icon: (
                  <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                )
              },
              {
                title: "Document-Based Question Generator",
                description:
                  "Upload documents (resumes, study materials, etc.) to receive personalized PDFs with interview questions or chapter tests generated using content analysis and web research integration.",
                link: "/document-helper",
                linkText: "Try Document Helper",
                icon: (
                  <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg flex flex-col"
              >
                <div className="flex-grow">
                  <div className="mb-6 p-4 bg-emerald-50 rounded-full w-16 h-16 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <a
                  href={feature.link}
                  className="mt-4 inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-center font-semibold shadow-md hover:shadow-lg"
                >
                  {feature.linkText}
                </a>
              </div>
            ))}
          </div>
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
      <section className="py-12 md:py-16 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
            Revolutionize Your Learning with Cutting-Edge Tools
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto">
            Elevate your exam preparation with innovative, AI-powered tools
            tailored for CBSE and ICSE students. Seamlessly integrate with top
            educational platforms to create dynamic and personalized mock papers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
                className="bg-white sm:bg-gray-50 md:bg-white shadow-sm sm:shadow-md border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={tool.src}
                  alt={tool.alt}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full object-cover border-2 border-gray-300 bg-white p-1.5 sm:p-2"
                />
                <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-1 sm:mb-2">
                  {tool.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  {tool.description}
                </p>
                <Link
                  to="#"
                  className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-green-600 text-white text-xs sm:text-sm font-medium rounded-full hover:bg-green-700 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
