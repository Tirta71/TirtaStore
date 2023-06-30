import React, { useEffect, useState } from "react";
import { ToggleTheme } from "../components/ToggleThemeButton/ToggleThemeButton";
import HeaderHome from "../components/Home/HeaderHome";
import SideBar from "../components/SideBar/SideBar";
import WidgetWallet from "../components/wallet/WidgetWallet";
import WidgetPayment from "../components/wallet/WidgetPayment";
import axios from "axios";
import { API_URL } from "../api";
import Swal from "sweetalert2";

export default function Wallet() {
  const [dataWallet, setDataWallet] = useState([]);
  const [dataTransaction, setDataTransaction] = useState([]);
  const userId = localStorage.getItem("userId");
  const [historyWallet, setHistoryWallet] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          const [walletResult, historyResult, historyWalletResult] =
            await Promise.all([
              axios.get(`${API_URL}/${userId}`),
              axios.get(`${API_URL}/${userId}/history`),
              axios.get(`${API_URL}/${userId}/walletTransaction`),
            ]);

          setDataWallet(walletResult.data.wallet);
          setDataTransaction(historyResult.data);
          setHistoryWallet(historyWalletResult.data);
        } catch (error) {
          let timerInterval;
          Swal.fire({
            title: "To many request !",
            html: "Wait retrieving data! <b></b> milliseconds.",
            timer: 10000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              setTimeout(() => {
                window.location.reload();
              }, 500);
            }
          });
        }
      }
    };

    fetchData();
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
              <WidgetWallet
                dataWallet={dataWallet}
                historyWallet={historyWallet}
              />
              <WidgetPayment historyTransaction={dataTransaction} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
