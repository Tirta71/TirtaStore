import React from "react";

export default function Activity({ profileData }) {
  return (
    <div class="widjet --activity">
      <div class="widjet__head">
        <h3 class="uk-text-lead">Recent Transaction</h3>
      </div>

      {profileData.history.map((item) => (
        <div class="widjet__body">
          <div class="widjet-game">
            <div class="widjet-game__media">
              <a>
                <img src={item.image} />
              </a>
            </div>
            <div class="widjet-game__info">
              <a class="widjet-game__title">{item.title}</a>
              <div class="widjet-game__record">{item.date}</div>
              <strong>{item.status ? "SUCCESS" : "PENDING"}</strong>
              <div class="widjet-game__last-played">Rp. {item.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
