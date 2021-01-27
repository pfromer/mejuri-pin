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
    color: ${props => props.theme.colors.lightest};
    display:flex;
    padding: 4px 16px;
    background-color: ${props => props.theme.colors.custom};
    border-radius: ${props => props.theme.borderRadius.standard};
    font-size: ${props => props.theme.fontSizes.small};
    opacity: 0.8;
    width: 90px;
    overflow: hidden;
`

export const IconContainer = styled.div`
    margin-top: 9px;
    font-size: ${props => props.theme.fontSizes.large};
`
export const ImageContainer = styled.div`
    display: flex;
    position: relative;

    > div, img {
        border-radius: ${props => props.theme.borderRadius.standard};
    }
`

const BaseOverlayStyles = css`
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.dark};
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
export const Overlay = styled.a`
    ${BaseOverlayStyles}
    bottom: 0%;
    height: 98.5%;  
`
export const OverlayText = styled.span`
    color: ${props => props.theme.colors.lightest};
    font-size: ${props => props.theme.fontSizes.large};
    top: 4%;
    padding: 0 calc(50% - 25px);
    position: relative;
`