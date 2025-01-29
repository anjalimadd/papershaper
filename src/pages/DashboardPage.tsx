import Footer from "components/Footer";
import Header from "components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface User {
  email: string;
  photoURL: string;
}

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    }
  }, []);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Welcome Section */}
      <div className="bg-gradient-to-b from-green-50 to-green-100 p-6">
        {user && (
          <section className="text-center mt-8">
            <h2 className="text-3xl font-semibold text-green-800">
              Welcome, {user.email}!
            </h2>
            <p className="text-gray-600 mt-2">
              Let's shape your paper with Paper Shapers!
            </p>
          </section>
        )}

        {/* Demo Section */}
        <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-700">Try the Demo</h2>
          <p className="text-gray-600 mt-3">
            Experience the powerful features of Paper Shapers. Start by clicking
            the button below to explore the demo.
          </p>
          <button
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 shadow-lg transition"
            onClick={() => navigate("/mock-paper-creator")}
          >
            Start Demo
          </button>
        </section>
      </div>

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
                link: "/mock-paper-creator",
                linkText: "Try Exam Generator",
                icon: (
                  <svg
                    className="w-12 h-12 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                ),
              },
              {
                title: "Document-Based Question Generator",
                description:
                  "Upload documents (resumes, study materials, etc.) to receive personalized PDFs with interview questions or chapter tests generated using content analysis and web research integration.",
                link: "/document-helper",
                linkText: "Try Document Helper",
                icon: (
                  <svg
                    className="w-12 h-12 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                id="feature"
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

      <Footer />
    </>
  );
};

export default DashboardPage;
