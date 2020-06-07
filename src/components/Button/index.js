import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export default styled.button`
  color: rgba(255, 255, 255, .85);
  background: ${({theme}) => theme.primaryLighten};
  padding: 12px 12px;
  text-align: center;
  border-radius: 6px;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
`

export const LinkOutline =  styled(Link)`
  color: ${props => props.theme.primaryLighten};
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

export const ReloadBtn = styled.button`
  background: ${props => props.theme.primary};
  width: 48px;
  height: 48px;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: .1s ease-in-out;

  :focus {
    outline: none;
  }

  :hover {
    background: ${props => props.theme.primaryLighten}
  }
`

