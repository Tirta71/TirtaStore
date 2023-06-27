import React, { useState } from "react";
import PageLoader from "../Loading/PageLoader";
import "../../css/pagenation.css";
import { motion } from "framer-motion";
export default function WidgetWallet({ dataWallet, historyWallet }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [filterStatus, setFilterStatus] = useState("all");

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredTransactions = historyWallet.filter(
    (item) =>
      filterStatus === "all" ||
      (item.status && filterStatus === "success") ||
      (!item.status && filterStatus === "pending")
  );

  const currentTransactions = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
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
    <div className="uk-width-2-3@l">
      <div className="widjet --wallet">
        <div className="widjet__head">
          <h3 className="uk-text-lead">Saldo Wallet</h3>
        </div>
        <div className="widjet__body">
          <div className="wallet-info">
            {dataWallet.amount ? (
              <div className="wallet-value">
                Rp. {dataWallet.amount.toLocaleString()}
              </div>
            ) : (
              <PageLoader />
            )}
            <div className="wallet-label">
              {dataWallet.amount === 0 ? "Disable" : "Available"}
            </div>
          </div>
        </div>
      </div>

      <div className="widjet --activity">
        <div className="widjet__head">
          <h3 className="uk-text-lead">Wallet Transaction</h3>
          <div className="filter-status">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="success">Success</option>
            </select>
          </div>
        </div>

        {filteredTransactions.length === 0 ? (
          <div className="no-transaction">
            {filterStatus === "pending"
              ? "No Pending transaction."
              : filterStatus === "success"
              ? "No History transaction."
              : "No transaction found."}
          </div>
        ) : (
          currentTransactions.map((item) => (
            <motion.div
              className="widjet__body"
              key={item.id}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="widjet-game">
                <div className="widjet-game__media">
                  <a>
                    <img src={item.image} alt="" />
                  </a>
                </div>
                <div className="widjet-game__info">
                  <a className="widjet-game__title">{item.title}</a>
                  <div className="widjet-game__record">{item.date}</div>
                  <strong style={{ color: item.status ? "green" : "red" }}>
                    {item.status ? "SUCCESS" : "PENDING"}
                  </strong>
                  <div className="widjet-game__last-played">
                    Rp. {parseInt(item.price).toLocaleString()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}

        {/* Pagination */}
        {filteredTransactions.length > 0 && (
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
        )}
      </div>
    </div>
  );
}
