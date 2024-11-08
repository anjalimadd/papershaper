import { Link } from 'react-router-dom'

export default function Header() {
  return (
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-green-700">Paper Shaper</div>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-green-700">Home</Link>
          <Link to="/" className="hover:text-green-700">About</Link>
          <Link to="/" className="hover:text-green-700">Services</Link>
          <Link to="/" className="hover:text-green-700">Contact</Link>
        </nav>
        <Link to="/login" className="px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800">Login</Link>
      </header>
  )
}