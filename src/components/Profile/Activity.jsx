/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Activity({ profileData }) {
  return (
    <div className="widjet --activity">
      <div className="widjet__head">
        <h3 className="uk-text-lead">Recent Transaction</h3>
      </div>

      {profileData.map((item) => (
        <div className="widjet__body">
          <div className="widjet-game">
            <div className="widjet-game__media">
              <a>
                <img src={item.image} />
              </a>
            </div>
            <div className="widjet-game__info">
              <a className="widjet-game__title">{item.title}</a>
              <div className="widjet-game__record">{item.date}</div>
              <strong style={{ color: item.status ? "green" : "red" }}>
                {item.status ? "SUCCESS" : "PROCESS TOP UP"}
              </strong>
              <div className="widjet-game__last-played">
                Rp. {item.price.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
