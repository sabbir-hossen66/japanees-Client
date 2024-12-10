import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../ui/Button";
import { motion } from "framer-motion";

const Bonus = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-12 px-4 lg:px-24 bg-white container mx-auto">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div
          className="max-w-lg text-center lg:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Free Life Time Update
          </h2>
          <p className="text-gray-600 mb-6">
            We continue updating our products to make sure that it will be
            running smoothly with the latest Version.
          </p>
          <Button text={'Purchase Bonus'} />
        </div>

        {/* Image Content */}
        <motion.div>
          <div className="relative mt-8 lg:mt-0 flex justify-center items-center">
            {/* First Image */}
            <motion.img
              src="https://i.ibb.co.com/pd188Gw/pexels-anntarazevich-8051946.jpg"
              alt="Background Image"
              className="w-40 h-28 sm:w-52 sm:h-36 md:w-64 md:h-48 lg:w-72 lg:h-56 rounded-lg shadow-lg transform rotate-2 z-0"
              data-aos="fade-up"
              data-aos-delay="200"
              whileHover={{
                scale: 1.05, // Scale up the image on hover
                rotate: 0, // Reset the rotation on hover
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)", // Add shadow effect on hover
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Second Image */}
            <motion.img
              src="https://i.ibb.co.com/tQ40MFL/pexels-cottonbro-3826579.jpg"
              alt="Foreground Image"
              className="absolute w-40 h-28 sm:w-52 sm:h-36 md:w-64 md:h-48 lg:w-72 lg:h-56 rounded-lg shadow-lg transform -rotate-2 z-10"
              style={{
                left: '1rem',
                top: '2rem',
              }}
              data-aos="fade-up"
              data-aos-delay="400"
              whileHover={{
                scale: 1.75,
                rotate: -1,
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bonus;
