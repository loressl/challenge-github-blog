import styled from "styled-components";

interface GroupInfoContainerProps {
  gap: number;
  colorLabel?: string;
  colorSubtitle?: string;
}

export const GroupInfoContainer = styled.footer<GroupInfoContainerProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap+"rem"};
  color: ${(props) => props.colorLabel};

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    color: ${(props) => props.colorSubtitle};
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;