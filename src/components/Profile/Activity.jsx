/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../../css/pagenation.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
export default function Activity({ profileData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const itemsPerPage = 3;
  const totalPages = Math.ceil(profileData.length / itemsPerPage);
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const filterDataByStatus = (data, status) => {
    if (status === "pending") {
      return data.filter((item) => !item.status);
    } else if (status === "success") {
      return data.filter((item) => item.status);
    } else {
      return data;
    }
  };

  // Menghitung index item yang akan ditampilkan pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredData = filterDataByStatus(profileData, statusFilter);
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const pageVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
    },
  };
  return (
    <div className="widjet --activity">
      {profileData.length > 0 && (
        <>
          <div className="widjet__head">
            <h3 className="uk-text-lead">Recent Transaction</h3>
          </div>
          <div className="filter-status">
            <select
              id="status-filter"
              value={statusFilter}
              onChange={handleStatusFilterChange}
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="success">Success</option>
            </select>
          </div>
          {currentItems.map((item) => (
            <motion.div
              className="widjet__body"
              style={{ marginTop: "15px" }}
              key={item.id}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div
                className="widjet-game"
                style={{
                  flexDirection: isMobile ? "row" : "",
                  gap: isMobile ? "1rem" : "",
                }}
              >
                <div className="widjet-game__media">
                  <a>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ height: isMobile ? "50px" : "" }}
                    />
                  </a>
                </div>

                <div
                  className="widjet-game__info"
                  style={{ fontSize: isMobile ? "8px" : "" }}
                >
                  <a
                    className="widjet-game__title"
                    style={{ fontSize: isMobile ? "10px" : "" }}
                  >
                    {item.title}
                  </a>
                  <div
                    className="widjet-game__record"
                    style={{ fontSize: isMobile ? "10px" : "" }}
                  >
                    {isMobile ? (
                      <span>Rp. {item.price.toLocaleString()}</span>
                    ) : (
                      <span>{item.date}</span>
                    )}
                  </div>
                  <strong style={{ color: item.status ? "green" : "red" }}>
                    {item.status ? "SUCCESS" : "PROCESS TOP UP"}
                  </strong>
                  <div className="widjet-game__last-played">
                    {!isMobile && <>Rp. {item.price.toLocaleString()}</>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Pagination */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  className={`pagination__button ${
                    pageNumber === currentPage ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
