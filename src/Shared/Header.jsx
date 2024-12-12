import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
// import '.Header.css'

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate(); // useNavigate হুক ব্যবহার

  // const toggleLogin = () => {
  //   if (!isLoggedIn) {
  //     navigate('/login'); // লগইন না থাকলে '/login' এ রিডিরেক্ট
  //   } else {
  //     setIsLoggedIn(false); // লগইন থাকলে লগআউট
  //   }
  // };


  /* another */

  const { user, logOut } = useContext(AuthContext)


  // const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="sticky top-0 z-50" >
      <nav className="relative bg-white shadow">
        <div className="container px-6 py-3 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center">
                {/* <img className="w-10" src={logo} alt="" /> */}
                <h2 className="text-3xl">~日本~ Learn</h2>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
                } lg:opacity-100 lg:translate-x-0`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <li className="list-none head-section hover:animate-pulse"><NavLink to={'/'}><span className="px-2 py-2 mx-3 mt-2">Home</span></NavLink></li>
                <li className="list-none head-section hover:animate-pulse"> <NavLink to={'/about'}><span className="px-2 py-2 mx-3 mt-2">About</span></NavLink></li>
                {/* <li className="list-none head-section hover:animate-pulse"> <NavLink to={'/learning'}><span className="px-2 py-2 mx-3 mt-2">Lessons</span></NavLink></li> */}

                {
                  user ?
                    <>


                      <li className="list-none head-section hover:animate-pulse"> <NavLink to={'/tutorial'}><span className="px-2 py-2 mx-3 mt-2">Tutorials</span></NavLink></li>

                      {
                        user && //  isAdmin &&             bosabo ek somoy
                        <li className="list-none head-section hover:animate-pulse"> <NavLink to={'/dashboard'}><span className="px-2 py-2 mx-3 mt-2">DashBoard</span></NavLink></li>
                      }


                      {/* <li className="list-none head-section hover:animate-pulse"> <NavLink to={'/add-lesson'}><span className="px-2 py-2 mx-3 mt-2">AddLessons</span></NavLink></li>
                      <li className="list-none head-section hover:animate-pulse"> <NavLink to={'/add-voca'}><span className="px-2 py-2 mx-3 mt-2">AddVocabularies</span></NavLink></li>
                      <li className="list-none head-section hover:animate-pulse"> <NavLink to={'/manage-user'}><span className="px-2 py-2 mx-3 mt-2">Manage Users</span></NavLink></li>
                      <li className="list-none head-section hover:animate-pulse"> <NavLink to={'/lesson-manage'}><span className="px-2 py-2 mx-3 mt-2">LM</span></NavLink></li>
                      <li className="list-none head-section hover:animate-pulse"> <NavLink to={'/voca-manage'}><span className="px-2 py-2 mx-3 mt-2">VM</span></NavLink></li> */}
                      <div className="relative inline-block text-left">
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={toggleDropdown}
                        >
                          <img
                            alt=""
                            className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-default-600 dark:ring-offset-gray-100"
                            src={user?.photoURL}
                          />
                        </div>

                        {isOpen && (
                          <div
                            className="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="flex items-center px-4 py-2">
                              <CgProfile className="mr-2" />
                              <p>{user?.displayName || 'Your name '}</p>
                            </div>
                            <div className="py-1 flex items-center" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                              <div className="mr-2"><FaLongArrowAltRight /></div>
                              <button
                                onClick={handleLogOut}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem">
                                Logout
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                    :
                    <Link to={'/login'}><span className="px-3 py-2 mx-3 mt-2">Login</span></Link>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div >
  );
};

export default Header;
