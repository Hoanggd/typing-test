import React, { useEffect } from "react";
import InputField from "./InputField";
import InputFooter from "./InputFooter";
import { useDispatch } from "react-redux";
import styled from 'styled-components/macro'

import { addComingWord } from "features/Home/sentenceSlice";

const Input = ({className}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addComingWord())
  }, [dispatch]);
  return (
    <div className={className}>
      <InputField />
      <InputFooter />
    </div>
  );
};

Input.propTypes = {};

export default styled(Input)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
