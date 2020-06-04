import React from "react";
import BodyItem from "./BodyItem";

import styled from "styled-components/macro";

const Body = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <BodyItem />
      <BodyItem />
      <BodyItem />
      <BodyItem />
      <BodyItem />
      <BodyItem />
      <BodyItem />
    </div>
  );
};

export default styled(Body)`
  ${BodyItem}:first-child {
    border: none;
  }
`;
