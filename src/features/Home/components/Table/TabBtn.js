import React from "react";
import styled from "styled-components/macro";

import {Subtitle2} from 'components/Typography'

const TabBtn = (props) => {
  const { className, children, imgSrc } = props;
  return (
    <div className={className}>
      <div className="label">
        <img src={imgSrc} alt="icon" />
        <Subtitle2>{children}</Subtitle2>
      </div>
      <div className="underline"></div>
    </div>
  );
};

TabBtn.defaultProps = {
  children: "Leader Board",
  active: true,
  imgSrc: ""
};

export default styled(TabBtn)`
  color: ${(props) => props.theme.title};

  display: inline-block;

  .label {
    padding: 20px 0px 12px;
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 6px;
  }

  .underline {
    width: ${props => props.active ? '100%' : '0'};
    height: 1px;
    background: ${(props) => props.theme.secondary};

  }
`;
