import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 18.5rem;
    background-image: url('/public/cover.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    img {
        height: fit-content;
        margin-top: 4rem;
    }
`