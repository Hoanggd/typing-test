import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  return (
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
