import React, { useState } from "react";
import "./Login.css";
import Login from "./Login";
import { useHistory } from "react-router-dom";

const EnhanceLogin = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hideErrorMessage, setHideErrorMessage] = useState({
    visibility: "hidden"
  });
  const history = useHistory();

  const formHandler = e => {
    e.preventDefault();
    if (email === "contact@web.fr" && password === "azerty") {
      history.push("/datagrid");
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
