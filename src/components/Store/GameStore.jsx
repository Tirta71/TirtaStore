import React from "react";

export default function GameStore({ filteredData }) {
  return (
    <div
      className="uk-grid uk-child-width-1-6@xl uk-child-width-1-4@l uk-child-width-1-3@s uk-flex-middle uk-grid-small"
      data-uk-grid
    >
      {filteredData.length > 0 ? (
        filteredData.map((game) => (
          <div key={game.id}>
            <div className="game-card">
              <div className="game-card__box">
                <div className="game-card__media">
                  <a className="game-card__title" href={`/${game.slug}`}>
                    <img src={game.image} alt={game.title} />
                  </a>
                </div>
                <div className="game-card__info">
                  <a className="game-card__title" href={`/${game.slug}`}>
                    {game.title}
                  </a>
                  <div className="game-card__genre">{game.genre}</div>
                  <div className="game-card__rating-and-price">
                    <div className="game-card__rating">
                      <span>{game.rating}</span>
                      <i className="ico_star"></i>
                    </div>
                    <div className="game-card__price">
                      <span>{game.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="no-games">No games found in this category.</div>
      )}
    </div>
  );
}
