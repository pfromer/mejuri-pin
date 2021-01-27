import styled, { css, keyframes } from 'styled-components'

export const TappableImageContainer = styled.div`
        margin-top: 65px;
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
        color: black;
        text-decoration: none;
        font-weight: 700;
        padding: 12px 25px;
        ${props => props.rounded && css`
                border-radius: 20px;
        `}
        ${props => props.fireAnimation && css`
                animation: ${animateBackground} 2s ease-in-out;
        `}

`

export const DistantContainer = styled.div`
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: center;
`
export const ProductName = styled.span`
        font-family: ${props => props.theme.fontFamilies.informal};
        font-size: 17px;
`