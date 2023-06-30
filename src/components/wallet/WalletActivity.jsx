import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function WalletActivity({ historyTransaction }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleViewAll = () => {
    if (historyTransaction.length === 0) {
      toast.error("No history transaction");
      return;
    }
    window.location.href = "/profile";
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = historyTransaction.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(historyTransaction.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: "100vh",
      transition: {
        duration: 1,
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: "100vh",
    },
  };

  return (
    <div className="widjet --activities">
      {historyTransaction.length > 0 && (
        <>
          <div className="widjet__head">
            <h3 className="uk-text-lead">History Transaction Game</h3>
            <a onClick={handleViewAll}>View All</a>
          </div>
          <div className="widjet__body">
            <ul className="activities-list">
              <motion.div
                className="activities-container"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {currentItems.map((item) => (
                  <motion.li
                    className="activities-item"
                    key={item.id}
                    variants={itemVariants}
                  >
                    <div className="activities-item__logo">
                      <a href="/profile">
                        <img src={item.image} alt="" />
                      </a>
                    </div>
                    <div className="activities-item__info">
                      <a className="activities-item__title" href="/profile">
                        {item.title}
                      </a>
                      <div className="activities-item__date">
                        {item.date && <p>{item.date}</p>}
                      </div>
                    </div>
                    <div className="activities-item__price">
                      <span style={{ color: item.status ? "green" : "red" }}>
                        Rp. {parseInt(item.price).toLocaleString()}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </motion.div>
            </ul>

            {totalPages > 1 && (
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
                  { length: Math.min(totalPages, 3) },
                  (_, index) => index + 1
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
            )}
          </div>
        </>
      )}
    </div>
  );
}
