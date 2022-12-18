import reactMarkdown from "react-markdown";
import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  max-width: 90rem;

  main {
    max-width: 54rem;
  }
`;

export const Content = styled(reactMarkdown)`
  padding: 2.5rem 2rem;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;

  p{
    color: ${(props) => props.theme.blue};
  }
`