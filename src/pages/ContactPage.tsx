// src/pages/ContactPage.tsx

import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
    return (
        <div className="font-sans text-gray-800">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="text-center py-10 bg-gray-50">
                <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
                    Get in Touch with Paper Shaper
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mt-8 mb-12 max-w-2xl mx-auto">
                    Have questions or need help? Our team is here to assist you.
                </p>
            </section>

            {/* Contact Form */}
            <section className="py-8 bg-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Send Us a Message
                    </h2>
                    <form
                        className="flex flex-col space-y-6"
                        action="https://formspree.io/your-email@example.com"
                        method="POST"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full p-4 bg-gray-100 border border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full p-4 bg-gray-100 border border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="w-full p-4 bg-gray-100 border border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500"
                        />
                        <button
                            type="submit"
                            className="w-fit px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors duration-300 shadow-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Contact Information
                    </h2>
                    <ul className="space-y-6 text-left list-none">
                        <li className="flex items-start">
                            <span className="flex-shrink-0 mr-3 text-green-700 font-bold">
                                •
                            </span>
                            <span className="font-semibold">
                                Email: <a href="mailto:info@papershaper.com">papershaper07x@gmail.com</a>
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 mr-3 text-green-700 font-bold">
                                •
                            </span>
                            <span className="font-semibold">
                                Phone: +91 86046 25996
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 mr-3 text-green-700 font-bold">
                                •
                            </span>
                            <span className="font-semibold">
                                Address: Paper Shaper, New Delhi, India
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ContactPage;