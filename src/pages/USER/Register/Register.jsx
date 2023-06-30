import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../api";
import { toast } from "react-toastify";
import ChildRegister from "./ChildRegister";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    if (!username || !email || !password) {
      toast.error("Mohon Input semua form");
      return;
    }
    axios
      .get(API_URL)
      .then((response) => {
        const existingUser = response.data.find(
          (user) => user.username === username || user.email === email
        );
        if (existingUser) {
          toast.error("Username atau email sudah ada");
        } else {
          const userData = {
            email,
            username,
            password,
            Bio: "",
            image:
              "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
            wallet: {
              amount: 10,
            },
            isLogin: false,
          };

          axios
            .post(API_URL, userData)
            .then((response) => {
              toast.success("Register Success");
              console.log(response.data);
              navigate("/login");
            })
            .catch((error) => {
              console.error("Registration failed", error.response.data);
              toast.error("Registrasi Yang bener boy");
            });
        }
      })
      .catch((error) => {
        console.error("Failed to fetch existing users", error.response.data);
        toast.error("Error Boy");
      });
  };

  return (
    <ChildRegister
      handleEmailChange={handleEmailChange}
      handleUsernameChange={handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      handleRegister={handleRegister}
      email={email}
      username={username}
      password={password}
    />
  );
}
