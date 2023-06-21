import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../api";
import { toast } from "react-toastify";

export default function TotalPrice({
  selectedItem,
  title,
  genre,
  rating,
  image,
}) {
  const [favorites, setFavorites] = useState([]);
  const idUser = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`${API_URL}/${idUser}`)
      .then((response) => {
        setFavorites(response.data.favorites || []);
      })
      .catch((error) => {
        console.error("Failed to fetch favorites:", error);
      });
  }, [idUser]);

  const addToFavorites = () => {
    const newFavorite = {
      title,
      genre,
      rating,
      image,
    };

    const updatedFavorites = [...favorites, newFavorite];

    axios
      .put(`${API_URL}/${idUser}`, { favorites: updatedFavorites })
      .then((response) => {
        setFavorites(updatedFavorites);
        console.log("Data updated in favorites:", response.data);
        toast.success("Favorit Added");
      })
      .catch((error) => {
        console.error("Failed to update data in favorites:", error);
      });
  };

  return (
    <div className="game-profile-price">
      <div className="game-profile-price__value">
        {selectedItem && (
          <div>
            <p>Rp.{selectedItem.price.toLocaleString()}</p>
            {title === "Mobile Legend" && <p>{selectedItem.jumlah} Diamond</p>}
            {title === "Valorant" && <p>{selectedItem.jumlah} Point</p>}
            {title === "Genshin Impact" && <p>{selectedItem.jumlah} Genesis</p>}
            {title === "Pubg Mobile" && <p>{selectedItem.jumlah} UC</p>}
          </div>
        )}
      </div>
      <button className="uk-button uk-button-danger uk-width-1-1" type="button">
        <span className="ico_shopping-cart"></span>
        <span>Buy Now</span>
      </button>
      <button
        className="uk-button uk-button-primary uk-width-1-1"
        type="button"
        onClick={addToFavorites}
      >
        <span className="ico_add-square"></span>
        <span>Add to Favorites</span>
      </button>
    </div>
  );
}
