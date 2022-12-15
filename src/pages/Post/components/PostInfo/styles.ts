import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 54rem;
  height: 10.5rem;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  margin-top: calc(0px - 13rem / 2);
  padding: 2rem;
`;

export const PostInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

export const ChooseOption = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${(props) => props.theme.blue};

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
  }
`;

export const PostInfoTitle = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
  color: ${(props) => props.theme["base-title"]};
  margin-bottom: 0.5rem;
`;
