import React, { useEffect, useState } from "react";
import { API_URL } from "../../api";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function HeaderHome() {
  const [dataGambar, setDataGambar] = useState([]);

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    axios
      .get(`${API_URL}/${userId}`)
      .then((result) => {
        setDataGambar(result.data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const handleLogout = () => {
    axios
      .put(`${API_URL}/${userId}`, { isLogin: false })
      .then((response) => {
        localStorage.clear();
        toast.success("Berhasil Logooout");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to update login status:", error);
      });
  };

  return (
    <header className="page-header">
      <div className="page-header__inner">
        <div className="page-header__sidebar">
          <div className="page-header__menu-btn">
            <button className="menu-btn ico_menu is-active"></button>
          </div>
          <div className="page-header__logo">
            <img src="assets/img/logo.png" alt="logo" />
            <span className="page-header__logo_text">TIRTASTORE</span>
          </div>
        </div>
        <div className="page-header__content">
          <div className="page-header__search">
            <div className="search">
              <div className="search__input">
                <i className="ico_search"></i>
                <input type="search" name="search" placeholder="Search" />
              </div>
              <div className="search__btn">
                <button type="button">
                  <i className="ico_microphone"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="page-header__action">
            <a className="profile" href="/wallet">
              <img src={dataGambar} alt="profile" />
            </a>
          </div>
          <div className="btn-logout">
            <button
              onClick={handleLogout}
              style={{
                marginLeft: "1rem",
                border: "none",
                backgroundColor: "#f46119",
                padding: "0.4rem 1rem",
                color: "white",
                borderRadius: "1rem",
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
