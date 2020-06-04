import React from "react";
import styled from "styled-components/macro";
import {useDispatch} from 'react-redux';

import { ReloadBtn } from "components/Button";
import { ReactComponent as ReloadImage } from "assets/images/reload.svg";
import Select from "components/Select";

import {resetState, addComingWord} from 'features/Home/sentenceSlice';

const InputFooter = ({className}) => {
  const dispatch = useDispatch();

  const handleReload = () => {
    console.log('reload')
    dispatch(resetState());
    dispatch(addComingWord());
  }

  return (
    <div className={className}>
      <Select width="108px" height="48px" onClick={(value) => console.log(value)} />
      <ReloadBtn onClick = {handleReload}>
        <ReloadImage />
      </ReloadBtn>
    </div>
  );
};

export default styled(InputFooter)`
  display: flex;

  ${Select} {
    margin-right: 16px;
  }
`;
