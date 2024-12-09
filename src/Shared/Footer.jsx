import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between items-center text-center lg:text-left">
            {/* Logo and About Section */}
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <h1 className="text-2xl font-bold">~日本~ Learn</h1>
              <p className="mt-2 text-sm">
                Your gateway to mastering Japanese vocabulary with ease and fun!
              </p>
            </div>

            {/* Navigation Links */}
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="hover:text-indigo-200 transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-indigo-200 transition duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-indigo-200 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#dashboard"
                    className="hover:text-indigo-200 transition duration-300"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="#"
                  className="hover:text-indigo-200 transition duration-300"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-indigo-200 transition duration-300"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-indigo-200 transition duration-300"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-indigo-200 transition duration-300"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 border-t border-white/20 pt-4">
            <p className="text-sm text-center">
              &copy; {new Date().getFullYear()} ~日本~ Learn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;