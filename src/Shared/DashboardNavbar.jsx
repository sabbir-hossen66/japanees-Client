import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaUser } from 'react-icons/fa';
import { IoIosCreate, IoMdSettings } from 'react-icons/io';
import { FiMenu, FiX } from 'react-icons/fi';
import { RiAdminFill } from 'react-icons/ri';
import { MdOutlineLibraryBooks, MdOutlineGroup, MdManageAccounts } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  const isAdmin = true; // Set this dynamically based on user role
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const adminLinks = (
    <>
      <Link to="/dashboard/lessons" className="flex items-center space-x-2">
        <MdOutlineLibraryBooks className="h-5 w-5" />
        <span>Lessons</span>
      </Link>
      <Link to="/dashboard/add-lessons" className="flex items-center space-x-2">
        <IoIosCreate className="h-5 w-5" />
        <span>Add Lessons</span>
      </Link>
      <Link to="/dashboard/add-vocabularies" className="flex items-center space-x-2">
        <MdOutlineLibraryBooks className="h-5 w-5" />
        <span>Add Vocabularies</span>
      </Link>
      <Link to="/dashboard/manage-users" className="flex items-center space-x-2">
        <MdOutlineGroup className="h-5 w-5" />
        <span>Manage Users</span>
      </Link>
      <Link to="/dashboard/vocabulary-management" className="flex items-center space-x-2">
        <MdManageAccounts className="h-5 w-5" />
        <span>Vocabulary Management</span>
      </Link>
    </>
  );

  const userLinks = (
    <>
      <Link to="/stats" className="flex items-center space-x-2">
        <IoIosCreate className="h-5 w-5" />
        <span>Stats</span>
      </Link>
      <Link to="/settings" className="flex items-center space-x-2">
        <IoMdSettings className="h-5 w-5" />
        <span>Settings</span>
      </Link>
    </>
  );

  const commonLinks = (
    <>
      <Link to="/" className="flex items-center space-x-2">
        <FaUser className="h-5 w-5" />
        <span>Home</span>
      </Link>
      <Link to="/profile" className="flex items-center space-x-2">
        <CgProfile className="h-5 w-5" />
        <span>Profile</span>
      </Link>
    </>
  );

  return (
    <div>
      {/* Mobile menu toggle */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-2 bg-indigo-600 text-white fixed top-4 right-4 z-10 rounded-full shadow-lg"
      >
        {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </button>

      {/* Navbar */}
      <div className="text-white">
        <div className="py-4 sm:px-6 lg:px-8">
          <div>
            {/* Desktop Menu */}
            <div className="space-y-4 hidden lg:block">
              {/* Admin/User Links */}
              {isAdmin ? adminLinks : userLinks}

              {/* Divider */}
              <hr className="border-gray-500 my-2" />

              {/* Common Links */}
              {commonLinks}
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
              <div className="space-y-4 py-4">
                {/* Admin/User Links */}
                {isAdmin ? adminLinks : userLinks}

                {/* Divider */}
                <hr className="border-gray-500 my-2" />

                {/* Common Links */}
                {commonLinks}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
