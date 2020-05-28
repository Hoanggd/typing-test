import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const LinkOutline =  styled(Link)`
  color: ${props => props.theme.primaryLighten};
  /* padding: 12px 24px; */
  border: 1px solid ${props => props.theme.primaryLighten};
  border-radius: 100px;
  text-decoration: none;
  transition: .2s ease-in-out;
  width: 90px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.theme.divider};
  }
`

