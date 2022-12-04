import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    width: 54rem;
    height: 13.25rem;
    background: ${(props) => props.theme["base-profile"]};
    margin-top: calc(0px - 13rem/2);

    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 0.625rem;
`

export const Avatar = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 0.5rem;
    margin-left: 2.5rem;
`

export const ProfileInfo= styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const ProfileTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 38.25rem;
    margin-bottom: 0.5rem;

    span {
        color: ${(props) => props.theme["base-title"]};
        font-size: 24px;
        line-height: 1.3;
        font-weight: 700;
    }
`

export const GitHub = styled.a`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};

    span {
        color: ${(props) => props.theme.blue};
        font-size: 12px;
        font-weight: 700;
        line-height: 1.6;
    }
`

export const Bio = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 1.5rem;
`

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    color: ${(props)=> props.theme["base-subtitle"]};
`
export const ContentInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`