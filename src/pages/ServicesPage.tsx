import { BoltIcon, CloudIcon, CodeBracketIcon, DevicePhoneMobileIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/24/solid";
import Footer from "components/Footer";
import Header from "components/Header";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      icon: <CodeBracketIcon className="w-10 h-10 text-green-600" />,
      title: "AI-Powered Mock Papers",
      description: "Effortlessly generate custom exam papers for Classes 8, 9, and 10 using advanced AI technology. Tailor your mock papers to align with specific syllabus requirements.",
    },
    {
      icon: <DevicePhoneMobileIcon className="w-10 h-10 text-green-600" />,
      title: "Question Bank Integration",
      description: "Access a vast library of thousands of curated quality questions, ensuring precise and thorough assessments tailored to CBSE and ICSE standards.",
    },
    {
      icon: <CloudIcon className="w-10 h-10 text-green-600" />,
      title: "Exam Simulator",
      description: "Immerse yourself in realistic exam environments to boost your readiness and confidence during actual exams.",
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10 text-green-600" />,
      title: "Customizable Content",
      description: "Customize your mock papers to concentrate on specific chapters or topics, ensuring focused and effective studying.",
    },
    {
      icon: <BoltIcon className="w-10 h-10 text-green-600" />,
      title: "Instant Feedback",
      description: "Gain immediate insights with instant feedback on your performance, helping you identify strengths and areas for improvement.",
    },
    {
      icon: <SparklesIcon className="w-10 h-10 text-green-600" />,
      title: "Performance Analytics",
      description: "Monitor and track your academic progress effortlessly, using detailed performance analytics to guide your study strategy.",
    },
  ];

  return (
    <div>
      <Header />
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We offer a wide range of services to help your business grow and succeed in the digital world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/try-demo"
              className="inline-block px-8 py-4 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors duration-300 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;