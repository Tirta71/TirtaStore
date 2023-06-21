/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { dataCarouselFeature } from "../../Data/dataCarouselFeature";
export default function Feature() {
  return (
    <div className="uk-width-2-3@l uk-width-3-3@m uk-width-3-3@s">
      <h3 className="uk-text-lead">Recommended</h3>
      <div className="js-recommend">
        <div className="swiper">
          <div className="swiper-wrapper">
            {dataCarouselFeature.map((item) => (
              <div className="swiper-slide" key={item.id}>
                <div className="recommend-slide">
                  <div className="tour-slide__box">
                    <a className="game-card__title" href={`/${item.slug}`}>
                      <img src={item.image} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swipper-nav">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
