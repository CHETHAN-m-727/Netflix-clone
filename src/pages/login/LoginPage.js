// LoginPage.js

import React from "react";
import "./LoginPage.css"; // Import the CSS file with the styles
import Header from "../../components/header/Header";

const LoginPage = () => {
  return (
    <>
      <div className="login-header">
        <Header />
      </div>
      <div className="background-container">
        <div className="container">
          <form className="form-container">
            <h1 className="sign-in">Sign In</h1>
            <input type="text" placeholder="Email or Phone number" />
            <input type="password" placeholder="Password" />

            <button type="submit">Sign In</button>
            <div className="checkbox-container">
              <div className="remember-me">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a
                href="https://www.facebook.com/"
                className="need-help"
                id="need-help"
              >
                Need help?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
