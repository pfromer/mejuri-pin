import styled from 'styled-components'

export const SaveButton = styled.a`
    position:absolute;
    right: 0.5em;
    top: 0.5em;
    color: white;
    display:none;
    background-color: #e60023;
    border-radius: 12px;
    padding: 4px 16px;
    font-size: 16px;
`
export const OuterLink = styled.a`
    position:absolute;
    left: 0.5em;
    bottom: 0.5em;
    color: white;
    display:none;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;

    &:hover {
        img {
            filter: grayscale(50%);
        }
    }

    &:hover ${SaveButton} {
        display:flex;
        align-items:center;
    }

    &:hover ${OuterLink} {
        display:flex;
    }

    > div {
        border-radius: 12px;
    }
`
export const GridContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(50px, auto);
`

