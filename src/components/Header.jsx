import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition duration-300">
            MyWebsite
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
          <Link to="/hostels" className="hover:text-blue-400 transition duration-300">Hostels</Link>
          <Link to="/about" className="hover:text-blue-400 transition duration-300">About Us</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/login" className="hover:text-blue-400 transition duration-300 flex items-center">Login</Link>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition duration-300 flex items-center">
            Get Started
          </Link>
        </div>
        <button className="md:hidden text-blue-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-2">
          <Link to="/" className="py-2 hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/hostels" className="py-2 hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>
            Hostels
          </Link>
          <Link to="/about" className="py-2 hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/login" className="py-2 hover:text-blue-400 transition duration-300 flex items-center" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link to="/get-started" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition duration-300 flex items-center" onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}