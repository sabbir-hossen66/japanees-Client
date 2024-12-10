import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../ui/Button";
import Title from "../../ui/Title/Title";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-300 py-16 px-6 md:px-12 lg:px-24 text-gray-600">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-mm font-semibold " data-aos="fade-up">
            We'd love to hear from you! Contact us using the form below.
          </p>
          <Title title={'Get in Touch'} />

        </div>

        {/* Contact Information */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
          <div
            className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left"
            data-aos="fade-right"
          >
            <div className="mb-6">
              <FaPhoneAlt className="text-4xl text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-lg">+1 (555) 123-4567</p>
            </div>
            <div className="mb-6">
              <FaEnvelope className="text-4xl text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-lg">contact@yourcompany.com</p>
            </div>
            <div>
              <FaMapMarkerAlt className="text-4xl text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold">Visit Us</h3>
              <p className="text-lg">123 Main Street, City, Country</p>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="flex-1 bg-white p-8 rounded-lg shadow-lg "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message"
                  rows="5"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <Button className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition" text={'Send Message'} />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;