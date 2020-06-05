import React from "react";
import styled from "styled-components/macro";

import Home from "features/Home";
import Login from "features/Auth/Login";
import Theme from "Theme";

function App(props) {
  const { className } = props;
  return (
    <Theme>
      <div className={className} >
        <Login />
        <Home />
      </div>
    </Theme>
  );
}

export default styled(App)`
  position: relative;
`;
