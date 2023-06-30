import React, { useEffect, useState } from "react";
import { API_URL } from "../../api";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import SearchHeader from "./HeaderHome/SearchHeader";
import ButtonLogout from "../Button Logout/ButtonLogout";
import { useMediaQuery } from "react-responsive";

export default function HeaderHome() {
  const [dataGambar, setDataGambar] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 500 });
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
          <SearchHeader />
          <div className="page-header__action">
            <a className="profile" href="/profile">
              <img src={dataGambar} alt="profile" />
            </a>
          </div>
          {!isMobile && <ButtonLogout />}
        </div>
      </div>
    </header>
  );
}
