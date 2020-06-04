import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import classNames from "classnames";

import useOnClickOutside from 'hooks/clickOutSide';

const Select = (props) => {
  const { listItem, className, onClick } = props;
  const [option, setOption] = useState(props.listItem[0]);
  const [isShowDropdown, setShowDropDown] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setShowDropDown(false))

  const handleItemClick = (item) => {
    setOption(item);
    onClick(item);
    setShowDropDown(false);
  }

  const handleBtnClick = () => {
    setShowDropDown(!isShowDropdown);
  }

  return (
    <div className={className} ref={ref}>
      <button onClick={handleBtnClick}>{option}</button>
      <div className="triangle"></div>
      <ul  className={classNames({ hide: !isShowDropdown })}>
        {listItem.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  listItem: PropTypes.array,
  onClick: PropTypes.func
};

Select.defaultProps = {
  label: "English",
  listItem: ["English", "Vietnamese"],
};

export default styled(Select)`
  position: relative;

  &:hover button {
    border: 1px solid ${(props) => props.theme.primary};
  }

  button {
    height: ${(props) => props.height};
    min-width: ${(props) => props.width};
    padding: 4px;
    border: 1px solid ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.modal};
    color: ${(props) => props.theme.primaryText};
    border-radius: 6px;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  ul {
    position: absolute;
    top: calc(100% + 6px);
    border: 1px solid ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.modal};
    border-radius: 6px;
    box-shadow: ${(props) => props.theme.boxShadow};
    overflow: hidden;
    transition: .2s ease-in-out;

    &.hide {
      transform: scale(0, 0);
      opacity: 0;
    }

    li {
      list-style: none;
      color: ${(props) => props.theme.primaryText};
      padding: 12px 16px;
      white-space: nowrap;
      cursor: pointer;
      &:hover {
        background: ${(props) => props.theme.primary};
      }
    }
  }

  .triangle {
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;

    border-left: 4px solid ${(props) => props.theme.disable};
    transform: rotate(45deg);

    position: absolute;
    right: 4px;
    bottom: 4px;
    pointer-events: none;
  }
`;
