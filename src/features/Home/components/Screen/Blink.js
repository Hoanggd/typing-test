import React, {useEffect, useState} from "react";
import styled from "styled-components/macro";

const Blink = ({className}) => {

  return <div className={className}></div>;
};

export default styled(Blink)`
  width: 2px;
  height: 36px;
  background: ${(props) => props.theme.title};
  /* transition: .2s ease-in-out; */

  animation: blinker 1s infinite;

  @keyframes blinker {
    0% {
      opacity: 0
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: 0
    }
  }
`;
