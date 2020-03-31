import React, { useState } from "react";
import "./Login.css";
import Login from "./Login";

const EnhanceLogin = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hideErrorMessage, setHideErrorMessage] = useState({
    visibility: "hidden"
  });

  const formHandler = e => {
    e.preventDefault();
    if (email === "contact@web.fr" && password === "azerty") {
      // Add redirection to next page if authentification successful 
    } else {
      setHideErrorMessage({
        visibility: "visible"
      });
    }
  };

  return (
    <Login
      {...props}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      formHandler={formHandler}
      hideErrorMessage={hideErrorMessage}
    />
  );
};

export default EnhanceLogin;
