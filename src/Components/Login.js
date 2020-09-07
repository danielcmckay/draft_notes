import React, { useState, useContext } from "react";
import "./Login.css";
import AuthContext from "../context/AuthContext";
import axios from "axios";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [loginMode, setLoginMode] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const auth = useContext(AuthContext);

  const loginBtnHandler = (e) => {
    e.preventDefault();

    onSubmitHandler();
  };

  const signUpBtnHandler = (e) => {
    e.preventDefault();
    setLoginMode(false);
  };

  const onSubmitHandler = () => {
    if (loginMode) {
      try {
        axios.post("http://localhost:5000/auth/login", user);
        props.setLoginStatus(true);
      } catch (error) {
        alert(error);
      }
    } else {
      try {
        axios.post("http://localhost:5000/auth/signup", user);
        props.setLoginStatus(true);
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <div className="Login">
      <h1 className="LoginTitle">draft_notes</h1>
      <p className="LoginSubhead">
        A minimalistic text editor for distraction-free creativity.
      </p>
      <form className="LoginForm">
        {!loginMode && (
          <>
            <span>
              <label htmlFor="firstName" className="LoginLabel">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                className="LoginInput"
                onChange={onChangeHandler}
              />
            </span>
            <span>
              <label htmlFor="lastName" className="LoginLabel">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                className="LoginInput"
                onChange={onChangeHandler}
              />
            </span>
          </>
        )}
        <span>
          <label htmlFor="email" className="LoginLabel">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="LoginInput"
            onChange={onChangeHandler}
          />
        </span>
        <span>
          <label htmlFor="password" className="LoginLabel">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="LoginInput"
            onChange={onChangeHandler}
          />
        </span>
        <span className="BtnSpan">
          <button className="LoginBtn Btn" onClick={loginBtnHandler}>
            {loginMode ? "Login" : "Sign Up"}
          </button>
          <button
            className="SignUpBtn Btn"
            onClick={signUpBtnHandler}
            style={{ display: !loginMode && "none" }}
          >
            Sign Up
          </button>
        </span>
      </form>
    </div>
  );
}

export default Login;
