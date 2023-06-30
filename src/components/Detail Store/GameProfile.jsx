import React from "react";

export default function GameProfile({ game }) {
  return (
    <div className="game-profile-card">
      <div className="game-profile-card__media">
        <img src={game.image} alt="game-profile-card" />
      </div>
      <div className="game-profile-card__intro">
        <span>{game.deskripsi}</span>
      </div>
      <ul className="game-profile-card__list">
        <li>
          <div>Reviews:</div>
          <div className="game-card__rating">
            <span>{game.rating}</span>
            <i className="ico_star"></i>
          </div>
        </li>
      </ul>
      <ul className="game-profile-card__type">
        <li>
          <span>{game.genre}</span>
        </li>
      </ul>
    </div>
  );
}
