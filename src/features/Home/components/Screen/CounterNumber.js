import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import {H2, Caption} from 'components/Typography';

const CounterNumber = props => {
  const {number, children, className} = props
  return (
    <div className={className}>
      <H2>{number}</H2>
      <Caption>{children}</Caption>
    </div>
  )
}

CounterNumber.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  children: PropTypes.string.isRequired,
  hightLight: PropTypes.bool
}

CounterNumber.defaultProps = {
  highLight: true
}

export default styled(CounterNumber)`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${H2} {
    color: ${props => props.highLight && props.theme.primaryLighten};
  }

  ${Caption} {
    text-transform: uppercase;
  }
`
