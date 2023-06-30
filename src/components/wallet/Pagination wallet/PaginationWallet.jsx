import React from "react";

export default function PaginationWallet({
  currentPage,
  handlePageChange,
  lastPage,
  firstPageShown,
  totalPages,
}) {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          className="pagination__button"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
      )}

      {Array.from(
        { length: lastPage - firstPageShown + 1 },
        (_, index) => index + firstPageShown
      ).map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination__button ${
            pageNumber === currentPage ? "active" : ""
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          className="pagination__button"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
}
