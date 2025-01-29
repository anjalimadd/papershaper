import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h3
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => window.location.replace("/")}
          >
            Paper Shapers
          </h3>
          <p className="text-gray-400">
            Your partner in AI-powered mock paper creation, transforming education one test at a time.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            {/* <li>
              <Link
                to="/pricing"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Pricing
              </Link>
            </li> */}
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/blog"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/docs"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                to="/refund"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-800 pt-8">
        <div>© 2025 Papershapers. All rights reserved.</div>
        <div className="mt-2 text-sm text-gray-600">
          App Version: {__APP_VERSION__} 
        </div>
      </div>

    </footer>
  );
}
