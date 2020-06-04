import React from 'react'
import styled from 'styled-components/macro';

import Counter from './Counter';
import Input from './Input';

const Screen = props => {
  const {className} = props
  return (
    <div className={className}>
      <Counter />
      <Input />
    </div>
  )
}

Screen.propTypes = {
  
}

export default styled(Screen)`
  height: 440px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto 28px;
  border-radius: 20px;

  background: ${props => props.theme.divider};

  display: grid;
  grid-template-rows: 6fr 5fr;

`;
