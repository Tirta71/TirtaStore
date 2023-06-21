import React from "react";
import { dataGameCard } from "../../Data/dataGameCard";

export default function PopularGames() {
  return (
    <div className="uk-width-1-1">
      <h3 className="uk-text-lead">Most Popular</h3>
      <div className="js-popular">
        <div className="swiper">
          <div className="swiper-wrapper">
            {dataGameCard.map((game) => (
              <div className="swiper-slide" key={game.id}>
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
            ))}
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
