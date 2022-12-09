import styled from "styled-components";

export const SearchInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4.5rem;
    margin-bottom: 3rem;
`
export const Publication = styled.div`
    display: flex;
    line-height: 1.6;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span {
        font-weight: 700;
        font-size: 18px;
        color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
        font-weight: 400;
        font-size: 14px;
        text-align: right;
        color: ${(props) => props.theme["base-span"]};
    }
`

export const Input = styled.input`
    height: 3.125rem;
    background: ${(props) => props.theme["base-input"]};
    border-radius: 0.375rem;
    border: 1px solid ${(props) => props.theme["base-border"]};
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
`