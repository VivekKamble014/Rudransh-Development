import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-white">
              MyPortfolio
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Home
            </a>
            <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              About
            </a>
            <a href="#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Projects
            </a>
            <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              About
            </a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Projects
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;