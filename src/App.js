import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Header from "./Pages/Header";
import "./style.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/profile"
          component={() => <Profile authorized={false} />}
        />
      </Switch>
    </Router>
  );
}
