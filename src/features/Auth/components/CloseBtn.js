import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const CloseBtn = ({className}) => {
  return (
    <Link to="/" className={className}>
      x
    </Link>
  );
};

export default styled(CloseBtn)`
  position: absolute;
  right: 7%;
  top: 7%;
  cursor: pointer;

  color: ${({theme}) => theme.title};
  text-decoration: none;
  transform: scaleY(0.9);

  padding: 4px;
`;
