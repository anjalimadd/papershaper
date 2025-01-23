// src/pages/AboutPage.tsx

import Header from "../components/Header";
import Footer from "../components/Footer";
import ankitImage from '../../public/photo_ankit.png'

const AboutPage = () => {
    return (
        <div className="font-sans text-gray-800">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="text-center py-16 bg-gray-50">
                <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
                    Meet the Team
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mt-8 mb-12 max-w-2xl mx-auto">
                    Our team is dedicated to helping students achieve their academic goals.
                </p>
            </section>

            {/* Team Members Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Our Founders
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Yash Kushwaha */}
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Yash Kushwaha"
                                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover text-black border border-gray-300 bg-white p-2"
                            />
                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                Yash Kushwaha
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Co-Founder & CEO
                            </p>
                            <p className="text-sm text-gray-600">
                                Yash is a passionate educator and entrepreneur who aims to revolutionize the education sector.
                            </p>
                        </div>

                        {/* Ankit Varshney */}
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={ankitImage}
                                alt="Ankit Varshney"
                                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover text-black border border-gray-300 bg-white p-2"
                            />
                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                Ankit Varshney
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Co-Founder & CTO
                            </p>
                            <p className="text-sm text-gray-600">
                                Ankit is a skilled technologist and innovator who is dedicated to creating cutting-edge education solutions.
                            </p>
                        </div>

                        {/* Harsh Kushwaha */}
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Harsh Kushwaha"
                                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover text-black border border-gray-300 bg-white p-2"
                            />
                            <h3 className="text-lg font-medium text-gray-800 mb-2">
                                Harsh Kushwaha
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Co-Founder & COO
                            </p>
                            <p className="text-sm text-gray-600">
                                Harsh is a seasoned operations expert who is responsible for driving growth and efficiency within the organization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutPage;