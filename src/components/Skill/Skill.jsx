import React, { useEffect } from 'react';
import Title from '../../ui/Title/Title';
import { littleCard } from '../../ui/Data';
import usePagination from '../../ui/Pagination'; // Import the custom hook
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Skill = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation should happen only once on scroll
    });
  }, []);

  const { currentPage, totalPages, currentData, nextPage, prevPage, goToPage } = usePagination({
    totalItems: littleCard.length,
    itemsPerPage: 8, // Adjust items per page as needed
  });

  const paginatedItems = currentData(littleCard); // Get the current page data

  // Re-trigger AOS animations when the current page changes
  useEffect(() => {
    AOS.refresh();
  }, [currentPage]);

  return (
    <div className="py-12">
      <Title subtitle={'JLPT試験'} title={'Prepare for JLPT exams'} />
      <div className="container mx-auto">
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {paginatedItems?.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="fade-up" // Add AOS fade-up animation
              data-aos-delay={index * 100} // Stagger animation based on index
            >
              <div className="text-5xl">{card.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{card.title}</h3>
              <p className="mt-2 text-gray-600 text-sm text-center">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
