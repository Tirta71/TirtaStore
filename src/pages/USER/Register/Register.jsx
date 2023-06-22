import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../api";
import { toast } from "react-toastify";

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
            favorites: [],
            Bio: "",
            image:
              "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
            wallet: {
              amount: 10,
            },
            history: [],
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
    <div className="page-login">
      <div className="page-wrapper">
        <main className="page-first-screen">
          <div
            className="uk-grid uk-grid-small uk-child-width-1-2@s uk-flex-middle uk-width-1-1"
            data-uk-grid
          >
            <div className="logo-big">
              <img
                src="assets/img/logo-big.png"
                alt="logo"
                className="animation-navspinv"
              />
              <span>TirtaStore</span>
              <h1>Join now and Top Up your Game</h1>
            </div>
            <div>
              <div className="form-login">
                <div className="form-login__box">
                  <div className="uk-heading-line uk-text-center">
                    <span>Register</span>
                  </div>
                  <form>
                    <div className="uk-margin">
                      <input
                        className="uk-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="uk-margin">
                      <input
                        className="uk-input"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </div>
                    <div className="uk-margin">
                      <input
                        className="uk-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div className="uk-margin">
                      <button
                        className="uk-button uk-button-danger uk-width-1-1"
                        type="button"
                        onClick={handleRegister}
                      >
                        Register
                      </button>
                    </div>
                    <div className="uk-text-center">
                      <span>Already have an account?</span>
                      <a className="uk-margin-small-left" href="/login">
                        Log In
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
