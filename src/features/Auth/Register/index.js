import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";
import config from "config";

import { H6, Body2 } from "components/Typography";
import FbButton from "components/FbButton";
import Input from "components/Input";
import Button from "components/Button";
import Link from "components/Link";
import CloseBtn from "../components/CloseBtn";

import { setUser } from "features/Auth/userSlice";

const Register = (props) => {
  const { className } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "post",
      baseURL: config.base_url,
      url: "/register",
      data: { name, email, password },
    });
    const data = response.data;
    if (data.error) {
      setError(data.error.message);
    } else {
      localStorage.setItem("token", data.user.token);
      const userData = {
        ...data.user
      }
      dispatch(setUser({
        name: userData.name,
        photoUrl: userData.photoUrl,
        _id: userData._id
      }))
      history.push("/");
    }
  };

  return (
    <div className={className} onClick={() => history.push("/")}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <CloseBtn className="close-btn" />
        <H6>Register</H6>
        <form onSubmit={handleSubmit}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            type="text"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <p className="error">&#160;{error}&#160;</p>
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

  form {
    width: 100%;
  }

  .error {
    color: ${({ theme }) => theme.secondary};
    margin-bottom: 12px;
    text-align: center;
    font-size: 0.875rem;
  }

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
    padding: calc(24px + 1%);

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
