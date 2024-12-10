import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (

    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-white text-2xl font-bold">
            ~日本~ Learn
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-white hover:text-gray-300 text-lg transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="#features"
              className="text-white hover:text-gray-300 text-lg transition-all duration-300"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 text-lg transition-all duration-300"
            >
              AboutUs
            </Link>
            <Link
              to="#dashboard"
              className="text-white hover:text-gray-300 text-lg transition-all duration-300"
            >
              Dashboard
            </Link>
            <div className="flex space-x-4">
              {isLoggedIn ? (
                // Show "Register" button if the user is logged in
                <button
                  onClick={toggleLogin}
                  className="text-indigo-600 bg-white hover:bg-indigo-100 px-4 py-2 rounded-md transition-all duration-300"
                >
                  Register
                </button>
              ) : (
                // Show "Login" button if the user is not logged in
                <button
                  onClick={toggleLogin}
                  className="text-indigo-600 bg-white hover:bg-indigo-100 px-4 py-2 rounded-md transition-all duration-300"
                >
                  Login
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-500">
          <Link
            to="/"
            className="block text-white hover:bg-indigo-600 px-4 py-2 text-lg transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="block text-white hover:bg-indigo-600 px-4 py-2 text-lg transition-all duration-300"
          >
            Features
          </Link>
          <Link
            to="/about"
            className="block text-white hover:bg-indigo-600 px-4 py-2 text-lg transition-all duration-300"
          >
            About
          </Link>
          <a
            to="/dashboard"
            className="block text-white hover:bg-indigo-600 px-4 py-2 text-lg transition-all duration-300"
          >
            Dashboard
          </a>
          <div className="flex space-x-4">
            {isLoggedIn ? (
              // Show "Register" button if the user is logged in
              <button
                onClick={toggleLogin}
                className="text-indigo-600 bg-white hover:bg-indigo-100 px-4 py-2 rounded-md transition-all duration-300"
              >
                Register
              </button>
            ) : (
              // Show "Login" button if the user is not logged in
              <button
                onClick={toggleLogin}
                className="text-indigo-600 bg-white hover:bg-indigo-100 px-4 py-2 rounded-md transition-all duration-300"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>

  );
};
export default Header;