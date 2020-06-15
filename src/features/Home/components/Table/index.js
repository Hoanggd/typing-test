import React from "react";
import styled from "styled-components/macro";

import Body from "./Body";
import Header from "./Header";

const Table = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <Header />
      <Body />
    </div>
  );
};

Table.propTypes = {};

export default styled(Table)`
  background: ${props => props.theme.divider};
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  border-radius: 20px;
  padding: 1% 5%; 
`;
