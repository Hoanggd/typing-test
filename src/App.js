import React from "react";
import styled from "styled-components/macro";
import { Switch, Route } from "react-router-dom";

import Home from "features/Home";
import Auth from "features/Auth";
import Theme from "Theme";

function App(props) {
  const { className } = props;
  return (
    <Theme>
      <div className={className}>
        <Switch>
          <Route path="/:id">
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
`;
