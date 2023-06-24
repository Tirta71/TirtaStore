import React, { useState } from "react";
import PageLoader from "../Loading/PageLoader";
import { toast } from "react-toastify";

export default function WidgetWallet({ dataWallet, historyWallet }) {
  const [showAllTransactions, setShowAllTransactions] = useState(false);

  const handleViewAll = () => {
    const pendingTransactionsExist = historyWallet.some((item) => !item.status);

    if (showAllTransactions) {
      setShowAllTransactions(false);
      if (pendingTransactionsExist) {
        toast.error("Show Pending transaction");
      } else {
        toast.success("Close All transaction");
      }
    } else {
      setShowAllTransactions(true);
      toast.success("Show All transaction");
    }
  };

  const filteredTransactions = showAllTransactions
    ? historyWallet
    : historyWallet.filter((item) => !item.status);

  return (
    <div className="uk-width-2-3@l">
      <div className="widjet --wallet">
        <div className="widjet__head">
          <h3 className="uk-text-lead">Saldo Wallet</h3>
        </div>
        <div className="widjet__body">
          <div className="wallet-info">
            {dataWallet.amount ? (
              <div className="wallet-value">Rp {dataWallet.amount}</div>
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
          <a onClick={handleViewAll}>
            {showAllTransactions
              ? filteredTransactions.some((item) => !item.status)
                ? "View Pending"
                : "Close"
              : "View All"}
          </a>
        </div>

        {filteredTransactions.length === 0 ? (
          <div className="no-transaction">No Pending transaction.</div>
        ) : (
          filteredTransactions.map((item) => (
            <div className="widjet__body" key={item.id}>
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
            </div>
          ))
        )}
      </div>
    </div>
  );
}
