import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export default styled(Link)`
  color: ${({ theme }) => theme.primary};
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
