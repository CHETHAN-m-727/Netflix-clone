import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./LoginPage.module.scss";
import Nav from "../../components/Nav/Nav";
import HomePage from "../HomePage";
import { setLoggedIn } from "../../store/project/ProjectSlise";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      email === "mc@gmail.com" ||
      (number === "123456789" && password === "12345")
    ) {
      console.log("login success");
      dispatch(setLoggedIn(true));
      navigate("/home");
    } else {
      console.log("Login failed");
      navigate("/");
    }
  };

  return (
    <>
      <div className={Style.logInPage}>
        <Nav />
        <div className={Style.LoginContainer}>
          <div className={Style.SigIN}>Sign In</div>

          <form className={Style.LoginForm} onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="email or number"
              value={email || Number}
              onChange={(_) =>
                setEmail(_.target.value) || setNumber(_.target.value)
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(_) => setPassword(_.target.value)}
            />
            <button className={Style.submit} type="submit">
              Sign in
            </button>
          </form>
          {error && <div className={Style.error}>{error}</div>}
          <div className={Style.ForgotPassword}> Forgot password?</div>
          <div className={Style.CheckBox}>
            <input type="checkbox" /> Remember me
          </div>
          <div className={Style.sineUp}>
            New to Netflix?
            <div className={Style.sineUpNow}>Sign up now</div>
          </div>
          <div className={Style.LearnMore}>
            This page is protected by Google reCAPTCHA to
            <br /> ensure you're not a bot.{" "}
            <a href="https://www.netflix.com/in/browse/genre/920">Learn more</a>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
