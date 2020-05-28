import React from "react";
import styled from "styled-components/macro";
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import { ReactComponent as Moon } from "assets/images/moon.svg";
import { ReactComponent as Sun } from "assets/images/sun.svg";
import {toggleDark} from 'features/Home/darkModeSlice';

const DarkToggle = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleDark())
  }

  const { className } = props;
  return (
    <div className={className} onClick={handleClick}>
      <div className="circle-wrapper">
        <div className="circle"></div>
      </div>
      <Moon />
      <Sun />
    </div>
  );
};

DarkToggle.propTypes = {
  isDark: PropTypes.bool
};

DarkToggle.defaultProps = {
  isDark: false
}

export default styled(DarkToggle)`
  background-color: #1C1F22;
  height: 40px;
  width: 80px;
  border-radius: 100px;
  border: 1px solid ${props => props.theme.border};

  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  cursor: pointer;

  .circle-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 2px;

    display: flex;
    align-items: center;
    transform: translateX(${props => props.isDark && "39px"});
    transition: .1s ease-in-out;
  }

  .circle {
    background-color: #f5f5f5;
    width: 34px;
    height: 34px;
    border-radius: 100px;
    transition: .2s ease-in-out;
    border: 1px solid ${props => props.theme.title};
  }
`;
