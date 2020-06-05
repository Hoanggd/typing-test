import React from "react";
import styled from "styled-components/macro";
import { H6 } from "components/Typography";
import FbButton from 'components/FbButton';

const Login = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="container">
        <H6>Log in</H6>
        <FbButton />
      </div>
    </div>
  );
};

export default styled(Login)`
  background: rgba(0,0,0,.4);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;

  .container {
    background: ${({theme}) => theme.divider};
    width: 90%;
    max-width: 450px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 30vh;
    padding: 5%;

    border-radius: 6px;
    box-shadow: ${({theme}) => theme.boxShadow};
    border: 1px solid ${({theme}) => theme.border};

    display: flex;
    justify-content: center;
  }
`;
