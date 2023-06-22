import React, { useEffect, useState } from "react";
import { ToggleTheme } from "../components/ToggleThemeButton/ToggleThemeButton";
import HeaderHome from "../components/Home/HeaderHome";
import SideBar from "../components/SideBar/SideBar";
import WidgetWallet from "../components/wallet/WidgetWallet";
import WidgetPayment from "../components/wallet/WidgetPayment";
import axios from "axios";
import { API_URL } from "../api";

export default function Wallet() {
  const [dataWallet, setDataWallet] = useState([]);
  const [dataTransaction, setDataTransaction] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      axios
        .get(`${API_URL}/${userId}`)
        .then((response) => {
          setDataWallet(response.data.wallet);
          setDataTransaction(response.data.history);
        })
        .catch((error) => {
          console.error("Failed to fetch wallet data", error);
        });
    }
  }, [userId]);

  return (
    <div className="page-wallet">
      <ToggleTheme />

      <div className="page-wrapper">
        <HeaderHome />
        <div className="page-content">
          <SideBar />
          <main className="page-main">
            <div className="uk-grid" data-uk-grid>
              <WidgetWallet dataWallet={dataWallet} />
              <WidgetPayment historyTransaction={dataTransaction} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
