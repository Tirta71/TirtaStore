import React from "react";

export default function WalletActivity() {
  return (
    <div className="widjet --activities">
      <div className="widjet__head">
        <h3 className="uk-text-lead">Activities</h3>
        <a href="09_games-store.html">View All</a>
      </div>
      <div className="widjet__body">
        <ul className="activities-list">
          <li className="activities-item">
            <div className="activities-item__logo">
              <a href="10_game-profile.html">
                <img src="assets/img/game-1.jpg" alt="image" />
              </a>
            </div>
            <div className="activities-item__info">
              <a className="activities-item__title" href="10_game-profile.html">
                {" "}
                Grand Theft Auto...
              </a>
              <div className="activities-item__date">5 Jul, 2020</div>
            </div>
            <div className="activities-item__price">-14.80 USD</div>
          </li>
          <li className="activities-item">
            <div className="activities-item__logo">
              <a href="10_game-profile.html">
                <img src="assets/img/game-2.jpg" alt="image" />
              </a>
            </div>
            <div className="activities-item__info">
              <a className="activities-item__title" href="10_game-profile.html">
                {" "}
                Counter-Strike: G...
              </a>
              <div className="activities-item__date">25 Apr, 2020</div>
            </div>
            <div className="activities-item__price">-14.99 USD</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
