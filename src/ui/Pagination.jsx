import { useState, useMemo } from "react";

const Pagination = ({ totalItems, itemsPerPage = 10, currentPage = 1 }) => {
  const [page, setPage] = useState(currentPage);

  const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage]);

  const currentData = (data) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };

  const goToPage = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    setPage(pageNumber);
  };

  const nextPage = () => goToPage(page + 1);
  const prevPage = () => goToPage(page - 1);

  return {
    currentPage: page,
    totalPages,
    currentData,
    goToPage,
    nextPage,
    prevPage,
  };
};

export default Pagination;