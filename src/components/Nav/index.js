import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "assets/images/logo.svg";
import { LinkOutline } from "components/Button";
import DarkToggle from "components/DarkToggle";

const Nav = (props) => {
  const darkMode = useSelector((state) => state.darkMode);
  const { className } = props;
  return (
    <div className={className}>
      <Link to="/">
        <Logo />
      </Link>
      <div className="link-wrapper">
        <ul className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/graph">Graph</Link>
        </ul>
        <LinkOutline className="login" to="/login">
          Login
        </LinkOutline>
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

  max-width: 1200px;
  margin: 0 auto 24px ;
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
