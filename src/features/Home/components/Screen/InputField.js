import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import {
  wordSubmit,
  checkCurrentWord,
  setCurrenWord,
  changeTimeRemaining,
  typing
} from "features/Home/sentenceSlice";

import Blink from "./Blink";

const useComingWord = () => {
  const coming = useSelector((state) => state.sentence.coming);
  const currentWord = useSelector((state) => state.sentence.currentWord).split(
    ""
  );

  const firstWord = coming[0].split("");
  const newFirstWord = firstWord.map((item, index) => {
    if (item === currentWord[index]) {
      return "";
    } else {
      return item;
    }
  });
  const finalComingWord = [newFirstWord.join(""), ...coming.slice(1)].join(" ");

  if (finalComingWord.charAt(0) === " ") {
    return "&nbsp" + finalComingWord;
  }
  return finalComingWord;
};

const useSubmited = () => {
  const warning = useSelector((state) => state.sentence.warning);
  const submited = useSelector((state) => state.sentence.submited).join(
    "&nbsp"
  );
  const currentWord = useSelector((state) => state.sentence.currentWord);

  if (!currentWord) {
    return submited + "&nbsp";
  }

  if (warning) {
    return `${submited}&nbsp<span class="warning">${currentWord}</span>`;
  } else {
    return `${submited}&nbsp${currentWord} `;
  }
};

const InputField = (props) => {
  const sentenceRef = useRef();

  const { className } = props;
  const [value, setValue] = useState("");
  const [isFocus, setFocus] = useState(true);

  const upcoming = useComingWord();
  const submited = useSubmited();

  const dispatch = useDispatch();
  const sentence = useSelector((state) => state.sentence.coming).join(" ");
  const isTyping = useSelector((state) => state.sentence.isTyping);
  const timeRemaining = useSelector((state) => state.sentence.timeRemaining);

  useEffect(() => {
    sentenceRef.current.focus();
  }, []);

  useEffect(() => {
    let interval
    if (isTyping) {
      interval = setInterval(() => {
        dispatch(changeTimeRemaining())
      }, 1000)
    } else {
      clearInterval(isTyping);
    }

    return () => {
      clearInterval(interval)
    }
  }, [isTyping]);

  const handleChange = (e) => {
    const char = e.target.value;
    setValue(char);
    dispatch(checkCurrentWord(char));
    dispatch(setCurrenWord(char.trim()));
    dispatch(typing(true));
  };

  const handleKeyPress = (e) => {
    if (e.key === " ") {
      setValue("");
      dispatch(wordSubmit(value));
    }
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <div
      className={className}
      onClick={() => {
        sentenceRef.current.focus();
      }}
    >
      {isFocus && <Blink />}
      <input
        ref={sentenceRef}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div
        className="sentence right"
        dangerouslySetInnerHTML={{ __html: submited }}
      ></div>
      <div
        className="sentence"
        dangerouslySetInnerHTML={{ __html: upcoming }}
      ></div>
    </div>
  );
};

InputField.propTypes = {};

export default styled(InputField)`
  border: 1px solid ${(props) => props.theme.border};
  width: 90%;
  height: 64px;
  border-radius: 6px;
  margin: 0 auto;
  cursor: text;

  display: flex;
  position: relative;

  ${Blink} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .sentence {
    color: ${(props) => props.theme.title};
    text-transform: uppercase;
    font-size: 1.5rem;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    align-items: center;

    > .warning {
      color: ${(props) => props.theme.error}
    }

    &.right {
      justify-content: flex-end;
      color: ${(props) => props.theme.secondaryText};
      mask-image: linear-gradient(-90deg, rgba(0, 0, 0, 1.0), transparent);
    }
}
  }

  input {
    position: absolute;
    opacity: 0;
  }
`;
