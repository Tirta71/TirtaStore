/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { toast } from "react-toastify";

export default function WalletActivity({ historyTransaction }) {
  const handleViewAll = () => {
    if (historyTransaction.length === 0) {
      toast.error("No history transaction");
      return;
    }
    window.location.href = "/profile";
  };
  return (
    <div className="widjet --activities">
      <div className="widjet__head">
        <h3 className="uk-text-lead">History Transaction Game</h3>
        <a onClick={handleViewAll}>View All</a>
      </div>
      <div className="widjet__body">
        <ul className="activities-list">
          {historyTransaction.map((item) => (
            <li className="activities-item">
              <div className="activities-item__logo">
                <a href="/profile">
                  <img src={item.image} />
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
