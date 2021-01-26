import styled, { keyframes, css } from 'styled-components'

export const ButtonContainer = styled.div`
    position: absolute;
    right: 0.5em;
    top: 0.5em;
`
export const OuterLink = styled.a`
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
export const IconContainer = styled.div`
    margin-top: 9px;
    font-size: 18px;
`
export const ImageContainer = styled.div`
    display: flex;
    position: relative;

    > div, img {
        border-radius: 12px;
    }
`

const BaseOverlayStyles = css`
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: black;
    overflow: hidden;
    width: 100%;
    height:0;
    opacity:0.05;
    top: 0;
`


const overlayKeyframe = keyframes`
    to {
    bottom: 0;
    height: 98.5%;
    }
`;


export const OverlayAnimation = styled.div`
    ${BaseOverlayStyles}
    animation: ${overlayKeyframe} 0.5s ease;
    animation-fill-mode: forwards;
    opacity:0.4;
`

export const Overlay = styled.div`
    ${BaseOverlayStyles}
    bottom: 0%;
    height: 98.5%;  
`

export const OverlayText = styled.span`
    color: white;
    font-size: 18px;
    top: 4%;
    padding: 0 calc(50% - 25px);
    position: relative;
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

export const ProductNameContainer = styled.span`
    margin-left:4px;
    white-space: nowrap;
    animation: ${horizontalScrollKeyFrame} ${props => props.length * 0.2}s   linear forwards;
`
0

export const ArrowAndTextContainer = styled.span`
    animation: ${verticalScrollKeyFrame} 2s ease forwards;
    animation-delay: 2s;
    transform: translate(0, -200%);
    display: flex;
`

export const TextContainer = styled.span`
    margin-left:4px;
`


