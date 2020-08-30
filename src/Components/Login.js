import React from "react";
import "./Login.css";

function Login(props) {

  const loginBtnHandler = () => {
    props.setLoginStatus(true);
  }

  return (
    <div className="Login">
      <h1 className="LoginTitle">draft_notes</h1>
      <p className="LoginSubhead">
        A minimalistic text editor for distraction-free creativity.
      </p>
      <form className="LoginForm">
        <span>
          <label htmlFor="email" className="LoginLabel">
            Email
          </label>
          <input type="text" className="LoginInput" />
        </span>
        <span>
          <label htmlFor="email" className="LoginLabel">
            Password
          </label>
          <input type="text" className="LoginInput" />
        </span>
        <button className="LoginBtn" onClick={loginBtnHandler}>Login</button>
      </form>
    </div>
  );
}

export default Login;
