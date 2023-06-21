import React, { useEffect, useState } from "react";
import { ToggleTheme } from "../components/ToggleThemeButton/ToggleThemeButton";
import HeaderHome from "../components/Home/HeaderHome";
import SideBar from "../components/SideBar/SideBar";
import SearchFavourite from "../components/Favourite/SearchFavourite";
import GameCard from "../components/Favourite/GameCard";

import axios from "axios";
import { API_URL } from "../api";

export default function Favorite() {
  const [dataFavorite, setDataFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const idUser = localStorage.getItem("userId");

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${API_URL}/${idUser}`)
      .then((response) => {
        setDataFavorite(response.data.favorites);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch favorites:", error);
        setIsLoading(false);
      });
  }, [idUser]);

  const handleDeleteItem = (index) => {
    const updatedFavorites = [...dataFavorite];
    updatedFavorites.splice(index, 1);

    axios
      .put(`${API_URL}/${idUser}`, { favorites: updatedFavorites })
      .then(() => {
        setDataFavorite(updatedFavorites);
        console.log("Item deleted from favorites");
      })
      .catch((error) => {
        console.error("Failed to delete item from favorites:", error);
      });
  };

  return (
    <div className="page-favourites">
      <ToggleTheme />

      <div className="page-wrapper">
        <HeaderHome />
        <div className="page-content">
          <SideBar />
          <main className="page-main">
            <div className="uk-grid" data-uk-grid>
              <div className="uk-width-2-3@l">
                <div className="widjet --filters">
                  <div className="widjet__head">
                    <h3 className="uk-text-lead">My Favourites</h3>
                  </div>
                  <div className="widjet__body">
                    <div
                      className="uk-grid uk-child-width-1-4@xl uk-child-width-1-2@s uk-flex-middle uk-grid-small"
                      data-uk-grid
                    >
                      <SearchFavourite />
                      <div className="uk-text-right">
                        <a href="#!">{dataFavorite.length} items</a>
                      </div>
                    </div>
                  </div>
                </div>
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <GameCard
                    dataFavorite={dataFavorite}
                    handleDelete={handleDeleteItem}
                  />
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
