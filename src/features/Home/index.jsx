import React from "react";
import styled from "styled-components/macro";

import Nav from 'components/Nav';

const Home = ({ className }) => {
  return (
    <div className={className}>
      <Nav />
      
    </div>
  );
};

Home.propTypes = {};

export default styled(Home)`
  background-color: ${props => props.theme.background};
  height: 100vh;
`;
