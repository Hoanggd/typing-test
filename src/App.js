import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "features/Home";
import Auth from "features/Auth";
import Theme from "Theme";
import { fetchUserByToken } from "features/Auth/userSlice";

function App(props) {
  const { className } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserByToken(localStorage.getItem("token")));
  }, [dispatch]);
  return (
    <Theme>
      <div className={className}>
        <Switch>
          <Route path="/">
            <Auth />
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Theme>
  );
}

export default styled(App)`
  position: relative;
  height: 100vh;
`;
