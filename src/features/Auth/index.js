import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const user = useSelector((state) => state.user);

  return user.name ? (
    <Redirect to={{pathname: '/'}} />
  ) : (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default Auth;
