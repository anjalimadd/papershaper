import { Link } from 'react-router-dom'

export default function Footer() {
  return (
     <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Paper Shaper</h3>
            <p>Your partner in AI-powered mock paper creation, transforming education one test at a time.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-400">About Us</Link></li>
              <li><Link to="/" className="hover:text-gray-400">Services</Link></li>
              <li><Link to="/" className="hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-gray-400">Help Center</Link></li>
              <li><Link to="/" className="hover:text-gray-400">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-gray-400">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">© 2025 Paper Shaper. All rights reserved.</div>
      </footer>
  )
}