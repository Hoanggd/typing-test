import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import moment from 'moment';

import { Subtitle2 } from "components/Typography";

const BodyItem = (props) => {
  const { className, wpm, time, name } = props;

  const formatTime = () => {
    return moment(time).fromNow();
  }
  return (
    <div className={className}>
      <div className="avatar"></div>
      <div>
        <Subtitle2>{name}</Subtitle2>
      </div>
      <div className="score">
        <div>
          <span>{wpm}</span>
          <span>WPM</span>
        </div>
      </div>
      <div>{formatTime()}</div>
    </div>
  );
};

BodyItem.propTypes = {
  name: PropTypes.string,
  wpm: PropTypes.number,
  time: PropTypes.string,
  photoUrl: PropTypes.string,
};

export default styled(BodyItem)`
  display: grid;
  grid-template-columns: 1fr 5fr 4fr 3fr;
  gap: 0 12px;
  padding: 16px 0;
  align-items: center;
  color: ${(props) => props.theme.primaryText};
  font-size: 0.875rem;

  border-top: 1px solid ${(props) => props.theme.border};

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    overflow: hidden;

    justify-self: flex-end;

    background: url(${(props) => props.photoUrl});
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
