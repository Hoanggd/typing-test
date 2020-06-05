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

  color: ${({theme}) => theme.primaryText};
  
  display: flex;
  align-items: center;

  svg {
    margin-right: 6px;
    opacity: .65;
  }
`;
