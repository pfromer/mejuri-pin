import styled, { keyframes, css } from 'styled-components'

export const OuterLinkContainer = styled.a`
    position: absolute;
    left: 0.5em;
    bottom: 0.5em;
    color: ${props => props.theme.colors.powderWhite};
    display:flex;
    padding: 4px 16px;
    background-color: #2a2828;
    border-radius: 12px;
    font-size: 14px;
    opacity: 0.8;
    width: 90px;
    overflow: hidden;
`
export const ArrowContainer = styled.span`
    transform: rotate(45deg);
    font-size:16px;
`

const horizontalScrollKeyFrame = keyframes`
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-300%, 0);
    }
`;

const verticalScrollKeyFrame = keyframes`
    to {
        transform: translate(0, 0);
    }
`;

export const ArrowAndTextContainer = styled.span`
    animation: ${verticalScrollKeyFrame} 2s ease forwards;
    animation-delay: ${props => props.animationDelay}s;
    transform: translate(0, -200%);
    display: flex;
`

export const TextContainer = styled.span`
    margin-left:4px;
`

export const ProductNameContainer = styled.span`
    margin-left:4px;
    white-space: nowrap;
    animation: ${horizontalScrollKeyFrame} ${props => props.animationDuration}s   linear forwards;
`