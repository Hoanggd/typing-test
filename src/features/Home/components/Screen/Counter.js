import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { typing } from "features/Home/sentenceSlice";

import CounterNumber from "./CounterNumber";

const Counter = (props) => {
  const { className } = props;
  const timeRemaining = useSelector((state) => state.sentence.timeRemaining);
  const incorectWords = useSelector((state) => state.sentence.incorectWords);
  const submited = useSelector((state) => state.sentence.submited);
  const dispatch = useDispatch();

  const speed = (submited.length - incorectWords) / (60 - timeRemaining) * 60 || 0;
  const accuracy = (submited.length - incorectWords) / submited.length * 100 || 0;

  useEffect(() => {
    if (timeRemaining === 0) {
      dispatch(typing(false));
    }
  }, [timeRemaining]);

  return (
    <div className={className}>
      <div>
        <CounterNumber number={Math.round(speed)}>words/min</CounterNumber>
        <CounterNumber number={Math.round(accuracy)}>% acuracy</CounterNumber>
      </div>
      <CounterNumber number={timeRemaining} highLight>
        sec
      </CounterNumber>
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
