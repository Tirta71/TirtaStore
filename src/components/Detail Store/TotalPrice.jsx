import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../api";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
export default function TotalPrice({
  selectedItem,
  title,
  genre,
  rating,
  image,
}) {
  const [favorites, setFavorites] = useState([]);
  const idUser = localStorage.getItem("userId");
  const [history, setHistory] = useState([]);
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/${idUser}`)
      .then((response) => {
        setFavorites(response.data.favorites || []);
        setHistory(response.data.history || []);
        setAmount(response.data.wallet.amount);
      })
      .catch((error) => {
        console.error("Failed to fetch favorites and history:", error);
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
        window.location.href = "/favourites";
      })
      .catch((error) => {
        console.error("Failed to update data in favorites:", error);
      });
  };

  console.log("Amount", amount);

  const buyNow = () => {
    if (amount < selectedItem.price) {
      Swal.fire({
        title: "Saldo Wallet Kurang",
        text: "apakah kamu mau top up?",
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/wallet";
        }
      });

      return;
    }

    const updatedAmount = amount - selectedItem.price;

    const transaction = {
      price: selectedItem.price,
      jumlah: selectedItem.jumlah,
      title,
      genre,
      rating,
      image,
      status: true,
      date: new Date().toLocaleString(),
    };

    const updatedHistory = [...history, transaction];

    axios
      .put(`${API_URL}/${idUser}`, {
        history: updatedHistory,
        wallet: { amount: updatedAmount },
      })
      .then((response) => {
        setHistory(updatedHistory);
        setAmount(updatedAmount);

        Swal.fire({
          title: "Do you want to buy this item?",
          showCancelButton: true,
          confirmButtonText: "Confirm",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Transaction Success",
              text: "",
              icon: "success",
              confirmButtonText: "OK",
            }).then(() => {
              window.location.href = "/wallet";
            });
          }
        });
      })
      .catch((error) => {
        console.error("Failed to update data in history:", error);
      });
  };

  return (
    <div className="game-profile-price">
      <div className="game-profile-price__value">
        {selectedItem && (
          <div>
            <p>Wallet Rp. {amount.toLocaleString()}</p>
            <p>Rp.{selectedItem.price.toLocaleString()}</p>
            {title === "Mobile Legend" && <p>{selectedItem.jumlah} Diamond</p>}
            {title === "Valorant" && <p>{selectedItem.jumlah} Point</p>}
            {title === "Genshin Impact" && <p>{selectedItem.jumlah} Genesis</p>}
            {title === "Pubg Mobile" && <p>{selectedItem.jumlah} UC</p>}
          </div>
        )}
      </div>
      <button
        className="uk-button uk-button-danger uk-width-1-1"
        type="button"
        onClick={buyNow}
      >
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
