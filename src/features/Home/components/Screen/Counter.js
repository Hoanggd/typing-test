import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { typing } from "features/Home/sentenceSlice";

import CounterNumber from "./CounterNumber";
import { sendResult } from "features/Home/sentenceSlice";

const Counter = (props) => {
  const { className } = props;
  const timeRemaining = useSelector((state) => state.sentence.timeRemaining);
  const incorectWords = useSelector((state) => state.sentence.incorectWords);
  const submited = useSelector((state) => state.sentence.submited);
  const dispatch = useDispatch();

  const speed =
    ((submited.length - incorectWords) / (60 - timeRemaining)) * 60 || 0;
  const accuracy =
    ((submited.length - incorectWords) / submited.length) * 100 || 0;

  useEffect(() => {
    (async () => {
      if (timeRemaining === 0) {
        const token = localStorage.getItem("token");
        if (token) {
          dispatch(sendResult({ wpm: speed, token }));
        }
        dispatch(typing(false));
      }
    })();
  }, [timeRemaining, dispatch, speed]);

  return (
    <div className={className}>
      <div>
        <CounterNumber number={speed < 10000 ? Math.round(speed) : 0}>
          words/min
        </CounterNumber>
        <CounterNumber number={Math.round(accuracy)}>% acuracy</CounterNumber>
      </div>
      <CounterNumber number={timeRemaining || "TIME OVER"} highLight>
        {timeRemaining ? "sec" : ""}
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
    align-items: flex-end;

    > ${CounterNumber} {
      margin: 0 30px;
    }
  }

  > div:last-child {
    margin-top: 20px;
  }
`;
