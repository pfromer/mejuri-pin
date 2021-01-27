import styled, { css, keyframes } from 'styled-components'

export const MainContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 2px;
        opacity: 0.8;
        position: fixed;
        z-index: 2;
        background-color: ${props => props.theme.colors.lightest};
        width: 92.5%;
        top: 0;
        height: 65px;
        margin-top: 0;
        padding: 0 10px;
`
export const OtherButtonsContainer = styled.div`
        opacity:1;
        display: flex;
        justify-content: space-between;
        flex-grow: 20;
        justify-content: flex-start;
        align-items: center;

        > * {
                margin-right: 18px;
        }
`
export const SaveButtonContainer = styled.div`
        opacity:1;
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
        align-items: center;
`
export const LinkContainer = styled.div`
        font-size: 25px;
        padding-top: 1px;
`

export const SavedSpan = styled.span`
        width: 88px;
        text-align: center;
`
const animateBackground = keyframes`
    0% {
        background: #b4cae0;
    }
    25% {
        background: #f1ecec
    }
    50% {
        background: #b4cae0;
    }
    100% {
        background: #f1ecec
    }
`;

export const StyledAnchor = styled.a`
        background-color: #f1ecec;
        color: ${props => props.theme.colors.dark};
        text-decoration: none;
        font-weight: ${props => props.theme.fontWeights.heavy};
        padding: 12px 25px;
        ${props => props.rounded && css`
                border-radius: ${props.theme.borderRadius.heavy};
        `}
        ${props => props.fireAnimation && css`
                animation: ${animateBackground} 2s ease-in-out;
        `}
`