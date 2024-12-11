import React, { useState } from "react";
import { tutorials } from "../../ui/Data";
import Pagination from "../../ui/Pagination";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";


const Tutorials = () => {
  const itemsPerPage = 6; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Initialize pagination utility
  const pagination = Pagination({
    totalItems: tutorials.length,
    itemsPerPage,
    currentPage,
  });

  // Get the current data for the current page
  const paginatedTutorials = pagination.currentData(tutorials);

  return (
    <div className="p-6">
      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedTutorials.map((tutorial, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
            <img
              src={tutorial.thumbnail}
              alt={tutorial.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{tutorial.title}</h3>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* <a
                href={tutorial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:from-cyan-500 hover:to-blue-500">
                See Tutorial
              </a> */}
              <Link to={'https://youtu.be/12VQYnuIgrM?si=aZOMGXqhIPKA6xqe'}> <Button text={'see video'} /></Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={pagination.prevPage}
          disabled={pagination.currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 disabled:opacity-50">
          Previous
        </button>

        {Array.from({ length: pagination.totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => pagination.goToPage(index + 1)}
            className={`px-4 py-2 rounded-lg ${pagination.currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}>
            {index + 1}
          </button>
        ))}

        <button
          onClick={pagination.nextPage}
          disabled={pagination.currentPage === pagination.totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Tutorials;
