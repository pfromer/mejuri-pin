import styled, { keyframes, css } from 'styled-components'


export const OuterLink = styled.a`
    position:absolute;
    left: 0.5em;
    bottom: 0.5em;
    color: ${props => props.theme.colors.powderWhite};
    display:flex;
    padding: 4px 16px;

    background-color: #2a2828;
    border-radius: 12px;
    font-size: 14px;
    opacity: 0.8;
`

export const TextContainer = styled.span`
    margin-left:4px;
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
    justify-content: center;
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
    opacity:0.2;
    top: 0;
`

function animaOverlay() {
    const animation = keyframes`
      to {
        bottom: 0;
        height: 98.5%;
      }
    `;
    return animation;
}

export const OverlayAnimation = styled.div`
    ${BaseOverlayStyles}
    animation: ${animaOverlay()} 0.5s ease;
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

