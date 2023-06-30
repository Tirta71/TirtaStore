import React from "react";
import { motion } from "framer-motion";
import { dataGameCard } from "../../../Data/dataGameCard";
export default function HomeMobile() {
  const HomeData = dataGameCard.slice(0, 4);

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
      <h3 className="uk-text-lead">Most Popular</h3>

      {HomeData.length > 0 ? (
        HomeData.map((game) => (
          <motion.div
            key={game.id}
            className="game-card"
            variants={itemVariants}
            style={{ margin: "1rem 0 1rem 0" }}
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
