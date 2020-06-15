import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "assets/images/logo.svg";
import { LinkOutline } from "components/Button";
import DarkToggle from "components/DarkToggle";
import User from "./User";

const Nav = (props) => {
  const darkMode = useSelector((state) => state.darkMode);
  const user = useSelector((state) => state.user);
  const { className } = props;
  return (
    <div className={className}>
      <Link to="/">
        <Logo />
      </Link>
      <div className="link-wrapper">
        {user.name ? (
          <User />
        ) : (
          <LinkOutline className="login" to="/login">
            Login
          </LinkOutline>
        )}
        <DarkToggle isDark={darkMode} />
      </div>
    </div>
  );
};

Nav.propTypes = {};

export default styled(Nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  max-width: 1200px;
  margin: 0 auto 24px;
  height: 72px;

  .link-wrapper {
    display: flex;
    align-items: center;
  }

  .login {
    margin-right: 20px;
  }

  .nav-link a {
    color: ${(props) => props.theme.title};
    text-decoration: none;
    margin-right: 20px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
