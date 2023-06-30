import axios from "axios";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { API_URL } from "../../api";
import { toast } from "react-toastify";

export default function ButtonLogout() {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const userId = localStorage.getItem("userId");
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
        toast.error(error);
      });
  };
  return (
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
          width: isMobile ? "100%" : "",
          margin: isMobile ? "0 0.5rem" : "0 0 0 1rem",
        }}
      >
        Logout
      </button>
    </div>
  );
}
