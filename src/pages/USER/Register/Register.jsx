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

  const handleRegister = async () => {
    if (!username || !email || !password) {
      toast.error("Mohon Isi semua form");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Masukkan email dengan benar");
      return;
    }

    if (username.length < 5) {
      toast.error("Minimal panjang username adalah 5 karakter");
      return;
    }

    if (password.length < 8) {
      toast.error("Minimal panjang password adalah 8 karakter");
      return;
    }

    try {
      const response = await axios.get(API_URL);
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

        const registerResponse = await axios.post(API_URL, userData);
        toast.success("Registrasi berhasil");
        console.log(registerResponse.data);
        navigate("/login");
      }
    } catch (error) {
      console.error("Registrasi gagal", error.response.data);
      toast.error("Registrasi gagal. Silakan coba lagi.");
    }
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
