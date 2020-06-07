import React from 'react';
import styled from 'styled-components/macro'

export default styled.input`
  background: ${({theme}) => theme.divider};
  border: 1px solid ${({theme}) => theme.border};
  padding: 12px 12px;
  border-radius: 6px;
  color: ${({theme}) => theme.primaryText};
  font-size: 0.875rem;

  ::placeholder {
    color: ${({theme}) => theme.disable};
  }

  :focus {
    outline: none;
    border: 1px solid ${({theme}) => theme.primary};
  }
`
