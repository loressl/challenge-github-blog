import { Link } from "react-router-dom";
import styled from "styled-components";

export const GitHubContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  color: ${(props) => props.theme.blue};

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.span`
  color: ${(props) => props.theme.blue} !important;
  font-size: 12px !important;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;
`;
