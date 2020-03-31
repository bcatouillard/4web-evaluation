import React from "react";
import "./Login.css";

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  formHandler,
  hideErrorMessage
}) => (
  <>
    <div className="login">
      <h1 className="subtitle">Login</h1>
      <form className="login" onSubmit={formHandler}>
        <label for="email">Login</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="login__email"
          placeholder="Email"
        />
        <label for="password">Password</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          className="login__password"
          placeholder="Password"
        />
        <h3 className="login__error " style={hideErrorMessage}>
          Bad credentials
        </h3>
        <button className="login__button">Login</button>
      </form>
    </div>
  </>
);

export default Login;