import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 26rem;
    height: 16.25rem;
    border-radius: 0.625rem;
    background: ${(props) => props.theme["base-post"]};
    padding: 2rem;
    gap: 1.25rem;

    &:hover {
        border: 0.125rem solid ${(props) => props.theme["base-label"]};
        cursor: pointer;
        padding: 1.875rem;
    }

    &:active {
        transform: scale(0.99);
    }
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    line-height: 1.6;

    span {
        font-weight: 700;
        font-size: 20px;
        color: ${(props) => props.theme["base-title"]};
        width: 15rem;
    }

    p{
        font-weight: 400;
        font-size: 14px;
        color: ${(props) => props.theme["base-span"]};
    }
`

export const Description = styled.span`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme["base-text"]};
    -webkit-line-clamp: 4;
           line-clamp: 4; 
    -webkit-box-orient: vertical;
`