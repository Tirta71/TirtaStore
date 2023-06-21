import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const urlLogin = "https://6491b88b2f2c7ee6c2c8cc9b.mockapi.io/user";
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(urlLogin)
      .then((response) => {
        const userData = response.data.find(
          (user) => user.username === username && user.password === password
        );
        if (userData) {
          const userId = userData.id;
          axios
            .put(`${urlLogin}/${userId}`, {
              isLogin: true,
            })
            .then(() => {
              localStorage.setItem("userId", userId);
              toast.success("Login Success");
              setTimeout(() => {
                navigate("/");
              }, 2000);
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
    <div className="page-login">
      <ToastContainer />
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
              <h1>Join now and Top up your game</h1>
            </div>
            <div>
              <div className="form-login">
                <div className="form-login__box">
                  <div className="uk-heading-line uk-text-center">
                    <span>Login</span>
                  </div>
                  <form onSubmit={handleSubmit}>
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
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                    <div className="uk-margin uk-text-center">
                      <a href="01_login-in.html">Forgotten password?</a>
                    </div>
                    <hr />
                    <div className="uk-text-center">
                      <span>Don’t have an account?</span>
                      <a className="uk-margin-small-left" href="/register">
                        Register
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
