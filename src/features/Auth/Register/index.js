import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import { H6, Body2 } from "components/Typography";
import FbButton from "components/FbButton";
import Input from "components/Input";
import Button from "components/Button";
import Link from "components/Link";
import CloseBtn from "../components/CloseBtn";

const Register = (props) => {
  const { className } = props;
  const history = useHistory();
  return (
    <div className={className} onClick={() => history.push("/")}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <CloseBtn className="close-btn" />
        <H6>Register</H6>
        <form>
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button>Register</Button>
        </form>
        <Body2 className="footer">
          Already have an account? <Link to="/login">Login</Link>
        </Body2>
      </div>
    </div>
  );
};

const marginBottom = "24px";

export default styled(Register)`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;

  .close-btn {
    position: absolute;
    right: 7%;
    top: 7%;
    cursor: pointer;
  }

  .container {
    background: ${({ theme }) => theme.divider};
    width: 90%;
    max-width: 450px;
    position: absolute;
    left: 50%;
    top: 50vh;
    transform: translate(-50%, -50%);
    padding: 7% 7%;

    border-radius: 6px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border: 1px solid ${({ theme }) => theme.border};

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    ${H6} {
      margin-bottom: ${marginBottom};
    }

    ${FbButton} {
      width: 100%;
      margin-bottom: ${marginBottom};
    }

    .caption {
      color: ${({ theme }) => theme.primary};
      margin-bottom: ${marginBottom};
    }

    ${Input} {
      margin-bottom: ${marginBottom};
      width: 100%;
    }

    .forgot {
      text-decoration: none;
      color: ${({ theme }) => theme.primary};
      font-size: 0.75rem;
      text-align: right;
      width: 100%;
      display: inline-block;
      margin-bottom: ${marginBottom};

      :hover {
        text-decoration: underline;
      }
    }

    ${Button} {
      width: 100%;
      margin-bottom: ${marginBottom};
    }
  }
`;
