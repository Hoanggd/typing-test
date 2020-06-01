import React from "react";
import styled from 'styled-components/macro';

import CounterNumber from "./CounterNumber";

const Counter = (props) => {
  const {className} = props;
  return (
    <div className={className}>
      <div>
        <CounterNumber number={60}>words/min</CounterNumber>
        <CounterNumber number={60}>% acuracy</CounterNumber>
      </div>
      <CounterNumber number={60} highLight>sec</CounterNumber>
    </div>
  );
};

Counter.propTypes = {};

export default styled(Counter)`
  display: grid;
  grid-template-rows: 1fr 1fr;

  > div:first-child {
    display: flex;
    justify-content: center;
    align-self: flex-end;

    > ${CounterNumber} {
      margin: 0 30px;
    }
  }

  > div:last-child {
    margin-top: 12px;
  }
`;
