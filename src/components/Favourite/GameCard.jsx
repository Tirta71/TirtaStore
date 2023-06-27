import React from "react";
import { motion } from "framer-motion";

export default function GameCard({ dataFavorite, handleDelete }) {
  const handleDeleteClick = (index) => {
    handleDelete(index);
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {dataFavorite.map((game, index) => (
        <motion.div
          key={index}
          className="game-card --horizontal favourites-game"
          variants={itemVariants}
        >
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
        </motion.div>
      ))}
    </motion.div>
  );
}
