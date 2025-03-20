import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../AuthProvider";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const { userRole } = useAuth();

  const getNavLinks = () => {
    switch (userRole) {
      case "STUDENT":
        return [
          { to: "/", label: "Home" },
          { to: "/hostels", label: "Hostels" },
          { to: "/applications", label: "Applications" },
          { to: "/about", label: "About Us" },
        ];
      case "STAFF":
        return [
          { to: "/", label: "Home" },
          { to: "/create", label: "Create" },
          { to: "/about", label: "About Us" },
        ];
      case "USTAFF":
        return [
          { to: "/staffHostel", label: "MyHostel" },
          { to: "/staffApplication", label: "Applications" },
          { to: "/staffPayments", label: "Payments" },
          { to: "/room", label: "Room" },

        ];
      case "USTUDENT":
        return [
          { to: "/studentHostel", label: "MyHostel" },
          { to: "/studentFood", label: "Food" },
          { to: "/studentPayments", label: "Payments" },
        ];
      default:
        return [
          { to: "/", label: "Home" },
          { to: "/hostels", label: "Hostels" },
          { to: "/about", label: "About Us" },
        ];
    }
  };

  return (
    <header className="bg-gray-900 border-b-2 border-b-blue-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition duration-300">
            MyWebsite
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          {getNavLinks().map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-blue-400 transition duration-300">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex space-x-4 items-center">

          {userRole == "USER" ? (
            <>
              <Link to="/login" className="py-2 hover:text-blue-400 transition duration-300 flex items-center" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition duration-300 flex items-center" onClick={() => setIsOpen(false)}>
                Register
              </Link>
            </>
          ) : <>
            <Link to="/logout" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition duration-300 flex items-center" onClick={() => setIsOpen(false)}>
              Logout
            </Link>
          </>}
        </div>
        <button className="md:hidden text-blue-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-2">
          {getNavLinks().map((link) => (
            <Link key={link.to} to={link.to} className="py-2 hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          {userRole == "USER" ? (
            <>
              <Link to="/login" className="py-2 hover:text-blue-400 transition duration-300 flex items-center" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition duration-300 flex items-center" onClick={() => setIsOpen(false)}>
                Register
              </Link>
            </>
          ) : <>
            <Link to="/logout" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition duration-300 flex items-center" onClick={() => setIsOpen(false)}>
              Logout
            </Link>
          </>}
        </div>
      )}
    </header>
  );
}