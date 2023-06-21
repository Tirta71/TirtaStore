import React from "react";

export default function UploadItems({ favorite }) {
  console.log(favorite);
  return (
    <div class="uk-width-1-3@l">
      <div class="widjet --upload">
        <div class="widjet__head">
          <h3 class="uk-text-lead">Favorite</h3>
        </div>
      </div>

      <div class="widjet --games">
        <div class="widjet__head">
          <h3 class="uk-text-lead">Games</h3>
          <a href="/favourites">View All</a>
        </div>

        <div class="widjet__body">
          <ul class="games-list">
            {favorite.favorites.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt="game" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
