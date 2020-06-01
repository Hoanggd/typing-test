import React, { useState } from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  wordSubmit,
  checkCurrentWord,
  setCurrenWord,
} from "features/Home/sentenceSlice";

const InputField = (props) => {
  const { className } = props;
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const sentence = useSelector((state) => state.sentence.coming).join(" ");

  const handleChange = (e) => {
    const char = e.target.value;
    setValue(char);
    dispatch(checkCurrentWord(char));
    dispatch(setCurrenWord(char));
  };

  const handleKeyPress = (e) => {
    if (e.key === " ") {
      setValue("");
      dispatch(wordSubmit());
    }
  };

  return (
    <div className={className}>
      <input
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={value}
      />
      <div className="sentence">{sentence}</div>
    </div>
  );
};

InputField.propTypes = {};

export default styled(InputField)`
  border: 1px solid ${(props) => props.theme.border};
  width: 80%;
  height: 64px;
  border-radius: 6px;
  margin: 0 auto;

  display: flex;

  .sentence {
    color: ${(props) => props.theme.title};
    text-transform: uppercase;
    font-size: 1.5rem;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    align-items: center;

    /* mask-image: linear-gradient(90deg, rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 1.0), transparent); */
}
  }

  input {
    text-align: right;
    height: 100%;
    width: 50%;
    background: none;
    border: none;
    color: ${(props) => props.theme.primaryText};
    font-size: 1.5rem;
    text-transform: uppercase;

    mask-image: linear-gradient(-90deg, rgba(0, 0, 0, 1.0), transparent);
    &:focus {
      outline: none;
    }
  }
`;
