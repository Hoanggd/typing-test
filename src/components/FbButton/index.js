import React from 'react';
import styled from 'styled-components/macro';
import {ReactComponent as FbIcon} from 'assets/images/fb-icon.svg'

const FbButton = (props) => {
  const {className} = props
  return (
    <button className={className}>
      <FbIcon />
      <span>| Login via Facebook</span>
    </button>
  )
}

export default styled(FbButton)`
  background: ${({theme}) => theme.facebook};
  border: none;
  border-radius: 6px;
  padding: 12px 12px;

  display: flex;
  justify-content: center;

  color: rgba(255, 255, 255, .85);
  
  display: flex;
  align-items: center;

  svg {
    margin-right: 6px;
    opacity: .85;
  }

  cursor: pointer;
`;
