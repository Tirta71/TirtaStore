import React, { useEffect, useState } from "react";
import { ToggleTheme } from "../components/ToggleThemeButton/ToggleThemeButton";
import HeaderHome from "../components/Home/HeaderHome";
import SideBar from "../components/SideBar/SideBar";
import WidgetWallet from "../components/wallet/WidgetWallet";
import WidgetPayment from "../components/wallet/WidgetPayment";
import axios from "axios";
import { API_URL } from "../api";
import Activity from "../components/Profile/Activity";
import WalletActivity from "../components/wallet/WalletActivity";

export default function Wallet() {
  const [dataWallet, setDataWallet] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      axios
        .get(`${API_URL}/${userId}`)
        .then((response) => {
          console.log(response.data);
          setDataWallet(response.data.wallet);
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
              <WidgetPayment />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
