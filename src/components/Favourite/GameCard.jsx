import React from "react";

export default function GameCard({ dataFavorite, handleDelete }) {
  const handleDeleteClick = (index) => {
    handleDelete(index);
  };

  return (
    <div>
      {dataFavorite.map((game, index) => (
        <div className="game-card --horizontal favourites-game" key={index}>
          <div className="game-card__box">
            <div className="game-card__media">
              <img src={game.image} alt={game.title} />
            </div>
            <div className="game-card__info">
              <a className="game-card__title" href={game.slug}>
                {game.title}
              </a>
              <div className="game-card__genre">{game.genre}</div>
              <div className="game-card__rating-and-price">
                <div className="game-card__rating">
                  <span>{game.rating}</span>
                  <i className="ico_star"></i>
                </div>
              </div>
            </div>
            <div className="game-card__more">
              <button
                className="btn-delete"
                onClick={() => handleDeleteClick(index)}
                style={{
                  backgroundColor: "#f46119",
                  border: "none",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
