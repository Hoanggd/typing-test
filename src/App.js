import React from "react";
import styled from "styled-components/macro";

import Home from "features/Home";
import Theme from "Theme";

function App(props) {
  const { className } = props;
  return (
    <Theme>
      <div className={className} >
        <Home />
      </div>
    </Theme>
  );
}

export default styled(App)`
  
`;
