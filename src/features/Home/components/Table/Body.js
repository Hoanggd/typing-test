import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

import BodyItem from "./BodyItem";

const Body = (props) => {
  const { className, results } = props;
  return (
    <div className={className}>
      {results &&
        results.length &&
        results.map((item) => (
          <BodyItem
            name={item.userId.name}
            wpm={item.wpm}
            time={item.time}
            photoUrl={item.userId.photoUrl}
            key={item._id}
          />
        ))}
    </div>
  );
};

Body.propTypes = {
  result: PropTypes.array,
};

export default styled(Body)`
  ${BodyItem}:first-child {
    border: none;
  }
`;
