import React from "react";
import "./App.css";
import Login from "./Login/Login.container";
import Datagrid from "./Datagrid/Datagrid.container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/datagrid" component={Datagrid}></Route>
      </Switch>
    </Router>
  </div>
);

export default App;
