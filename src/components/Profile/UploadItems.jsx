import React from "react";
import { toast } from "react-toastify";
import "./profile.css";
export default function UploadItems({ favorite }) {
  const handleFavClick = () => {
    if (favorite.length === 0) {
      toast.error("No Favorite game");
      return;
    }
    window.location.href = "/favourites";
  };
  return (
    <div className="uk-width-1-3@l">
      <div className="widjet__head">
        <h3 className="uk-text-lead">Favorites Games</h3>
        <a onClick={handleFavClick}>View All</a>
      </div>

      <div className="widjet --games">
        <div className="widjet__body">
          <ul className="games-list">
            {favorite.map((item, index) => (
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
