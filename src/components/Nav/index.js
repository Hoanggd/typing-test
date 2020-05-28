import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "assets/images/logo.svg";
import { LinkOutline } from "components/Button";
import DarkToggle from "components/DarkToggle";

const Nav = (props) => {
  const darkMode = useSelector(state => state.darkMode);
  const { className } = props;
  return (
    <div className={className}>
      <Link to="/">
        <Logo />
      </Link>
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
  );
};

Nav.propTypes = {};

export default styled(Nav)`
  display: flex;
  align-items: center;

  max-width: 1200px;
  margin: 0 auto;
  height: 72px;

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
