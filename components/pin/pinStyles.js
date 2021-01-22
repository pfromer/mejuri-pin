import styled from 'styled-components'


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
    position: relative;

    > div {
        border-radius: 12px;
    }
`

export const OverlayAnimation = styled.div`
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: black;
    overflow: hidden;
    width: 100%;
    height:0;
    transition: .5s ease;
    height: 100%;
    bottom: 0;
    opacity:0.4;
`

export const OverlayText = styled.span`
    color: white;
    font-size: 18px;
    padding: 0 calc(50% - 25px);
`

