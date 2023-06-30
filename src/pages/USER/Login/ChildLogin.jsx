import React from "react";
import { ToastContainer } from "react-toastify";

export default function ChildLogin({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
}) {
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
