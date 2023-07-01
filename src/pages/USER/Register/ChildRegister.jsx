import React from "react";

export default function ChildRegister({
  handleEmailChange,
  handlePasswordChange,
  handleRegister,
  handleUsernameChange,
  email,
  password,
  username,
}) {
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
                        required
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
