import React, { useState } from "react";

import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import ChildLogin from "./ChildLogin";
import { toast } from "react-toastify";
import { API_URL } from "../../../api";

toast.configure();

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(API_URL)
      .then((response) => {
        const userData = response.data.find(
          (user) => user.username === username && user.password === password
        );
        if (userData) {
          const userId = userData.id;
          axios
            .put(`${API_URL}/${userId}`, {
              isLogin: true,
            })
            .then(() => {
              localStorage.setItem("userId", userId);
              toast.success("Login Success");
              setTimeout(() => {
                window.location.href = "/";
              }, 3000);
            })
            .catch((error) => {
              console.error("Failed to update isLogin", error.response.data);
              toast.error("An error occurred while updating login status");
            });
        } else {
          toast.error("Invalid username or password");
          setUsername("");
          setPassword("");
        }
      })
      .catch((error) => {
        console.error("Login failed", error.response.data);
        toast.error("An error occurred during login");
      });
  };

  return (
    <ChildLogin
      handleSubmit={handleSubmit}
      handlePasswordChange={handlePasswordChange}
      handleUsernameChange={handleUsernameChange}
      username={username}
      password={password}
    />
  );
}
