import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PageLoader from "../Loading/PageLoader";
import { API_URL } from "../../api";

export default function SideBar() {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const userId = localStorage.getItem("userId");
  const isActiveLink = (match) => {
    return match === "/"
      ? location.pathname === match
      : location.pathname.startsWith(match);
  };

  const handleNavLinkClick = () => {
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/${userId}/favorites`)
      .then((response) => {
        const isLoggedIn = response.data.isLogin;
        setIsLogin(isLoggedIn);

        if (response.data) {
          const count = response.data.length;
          setFavoritesCount(count);
        }
      })
      .catch((error) => {
        console.error("Failed to retrieve login status", error);
      });
  }, []);

  const dataSideBar = [
    { to: "/", label: "Home", icon: "ico_home" },
    { to: "/profile", label: "Profile", icon: "ico_profile" },
    {
      to: "/favourites",
      label: "Favourites",
      icon: "ico_favourites",
      count: favoritesCount,
    },
    { to: "/wallet", label: "Wallet", icon: "ico_wallet" },
    { to: "/store", label: "Store", icon: "ico_store" },
  ];

  return (
    <aside className="sidebar is-show" id="sidebar">
      <div className="sidebar-box">
        <ul className="uk-nav">
          {dataSideBar.map((link, index) => (
            <li
              key={index}
              className={isActiveLink(link.to) ? "uk-active" : ""}
            >
              <a href={link.to} onClick={handleNavLinkClick}>
                <i className={link.icon}></i>
                <span>{link.label}</span>
                {link.count && <span className="count">{link.count}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
