import React from 'react';
import Title from '../../ui/Title/Title';
import { cards } from '../../ui/Data';

import { motion } from "framer-motion";
import Button from '../../ui/Button';

const Feature = () => {
  return (
    <div>
      <Title subtitle={'特徴的なセクション'} title={'Discover the unique features of our services'} />
      <div className="py-12 px-4 md:px-8 lg:px-16">
        <div className="flex flex-wrap gap-8 justify-center">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative w-full md:w-[45%] lg:w-[30%] bg-white rounded-lg shadow-lg overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative overflow-hidden">
                {/* Image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay with Button */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                  {/* <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
                    Learn More
                  </button> */}
                  <Button className='px-3' text={'demo'} />
                </div>
              </div>
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;