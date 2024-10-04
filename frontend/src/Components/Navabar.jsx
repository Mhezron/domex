import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Domex
            </Link>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex ml-auto space-x-4">
            <Link
              to="/news"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium"
            >
              News
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium"
            >
              Analysis
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/forex"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium"
            >
              Learn Forex
            </Link>
            <Link
              to="/tools"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium"
            >
              Tools
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-l font-medium"
            >
              Contacts
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={!isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/news"
            className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            News
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Analysis
          </Link>
          <Link
            to="/services"
            className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            to="/pricing"
            className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Pricing
          </Link>
          <Link
            to="/forex"
            className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Learn Forex
          </Link>
          <Link
            to="/tools"
            className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Tools
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
