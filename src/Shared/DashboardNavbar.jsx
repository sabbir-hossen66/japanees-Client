import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaUser } from 'react-icons/fa';
import { IoIosCreate, IoMdSettings } from 'react-icons/io';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Mobile menu toggle */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 bg-indigo-600 text-white fixed top-4 left-4 z-10"
      >
        {isMobileMenuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Navbar */}
      <div className="text-white">
        <div className=" py-4 sm:px-6 lg:px-8">
          <div>
            {/* Logo or title */}
            {/* <div className="flex items-center">
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div> */}

            {/* Desktop Menu */}
            <div className=" space-y-4">
              <Link to="/" className="flex items-center space-y-2">
                <FaUser className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link to="/stats" className="flex items-center space-y-2">
                <IoIosCreate className="h-5 w-5" />
                <span>Stats</span>
              </Link>
              <Link to="/profile" className="flex items-center space-y-2">
                <CgProfile className="h-5 w-5" />
                <span>Profile</span>
              </Link>
              <Link to="/settings" className="flex items-center space-y-2">
                <IoMdSettings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
              <div className="space-y-4 py-4">
                <Link to="/" className="flex items-center space-y-2">
                  <FaUser className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link to="/stats" className="flex items-center space-y-2">
                  <IoIosCreate className="h-5 w-5" />
                  <span>Stats</span>
                </Link>
                <Link to="/profile" className="flex items-center space-y-2">
                  <CgProfile className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <Link to="/settings" className="flex items-center space-y-2">
                  <IoMdSettings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default DashboardNavbar;
