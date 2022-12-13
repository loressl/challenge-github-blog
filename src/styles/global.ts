import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: ${(props) => props.theme["base-background"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    a, button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        border: 0;
    }

    span, p {
        color: ${(props) => props.theme["base-text"]};
    }
`;
