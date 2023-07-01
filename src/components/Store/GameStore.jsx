import React from "react";
import { motion } from "framer-motion";

export default function GameStore({ filteredData, selectedCategory }) {
  const filteredGames = selectedCategory
    ? filteredData.filter((game) => game.genre === selectedCategory)
    : filteredData;

  // Mengurutkan game berdasarkan rating
  const sortedGames = filteredGames.sort((a, b) => b.rating - a.rating);

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
    <motion.div
      className="uk-grid uk-child-width-1-6@xl uk-child-width-1-4@l uk-child-width-1-3@s uk-flex-middle uk-grid-small"
      data-uk-grid
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {sortedGames.length > 0 ? (
        sortedGames.map((game) => (
          <motion.div
            key={game.id}
            className="game-card"
            variants={itemVariants}
          >
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
          </motion.div>
        ))
      ) : (
        <div className="no-games">No games found in this category.</div>
      )}
    </motion.div>
  );
}
