import React from "react";
import styled from "styled-components/macro";

import { Subtitle2 } from "components/Typography";

const BodyItem = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="avatar">
      </div>
      <div>
        <Subtitle2>Pham Dinh Hoang</Subtitle2>
      </div>
      <div className="score">
        <div>
          <span>197</span>
          <span>WPM</span>
        </div>
      </div>
      <div>an hour ago</div>
    </div>
  );
};

export default styled(BodyItem)`
  display: grid;
  grid-template-columns: 1fr 5fr 4fr 2fr;
  gap: 0 12px;
  padding: 16px 0;
  align-items: center;
  color: ${(props) => props.theme.primaryText};
  font-size: 0.875rem;

  border-top: 1px solid ${props => props.theme.border};

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    overflow: hidden;

    justify-self: flex-end;

    background: url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg);
    background-size: cover;
    background-position: center;
  }

  .score {
    justify-self: flex-start;

    > div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;
