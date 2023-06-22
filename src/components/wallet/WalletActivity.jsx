import React from "react";

export default function WalletActivity({ historyTransaction }) {
  console.log("History ku", historyTransaction);

  return (
    <div className="widjet --activities">
      <div className="widjet__head">
        <h3 className="uk-text-lead">Activities</h3>
        <a href="/profile">View All</a>
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
                  {item.date && (
                    <p>{new Date(item.date).toLocaleDateString()}</p>
                  )}
                </div>
              </div>
              <div className="activities-item__price">Rp. {item.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
