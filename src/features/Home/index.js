import React from "react";
import styled from "styled-components/macro";

import Nav from "components/Nav";
import Screen from "./components/Screen";
import Table from "./components/Table";

const Home = ({ className }) => {
  return (
    <div className={className}>
      <Nav />
      <Screen />
      <Table />
    </div>
  );
};

Home.propTypes = {};

export default styled(Home)`
  background-color: ${(props) => props.theme.background};
  height: 100%;
  padding-bottom: 48px;
`;
