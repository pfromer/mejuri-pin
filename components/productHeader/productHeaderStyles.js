import styled, { css, keyframes } from 'styled-components'

export const StyledHeader = styled.header`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 2px;
        opacity: 0.8;
        position: fixed;
        z-index: 2;
        background-color: white;
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

`
export const LinkContainer = styled.div`
        font-size: 25px;
        padding-top: 1px;
`
export const StyledAnchor = styled.a`
        background-color: #f1ecec;
        padding: 9px 20px;
        color: black;
        text-decoration: none;
        border-radius: 20px;
        font-weight: 700;
        padding: 12px 25px;
        margin-right: 8px;
`


const rotateAnimatiom = keyframes`
                0% {transform: rotate(0deg);}
                15% {transform: rotate(20deg);}
                40% {transform: rotate(0deg);}
                55% {transform: rotate(-20deg);}
                70% {transform: rotate(0deg);}
                85% {transform: rotate(20deg);}
                100% {transform: rotate(0deg);}
        `;

export const LikesLinkContainer = styled.div`
        font-size: 25px;
        padding-top: 5px;
        ${props => props.animate && css`
                animation: ${rotateAnimatiom} 3s ease;
                animation-fill-mode: forwards;
        `};

        
`

export const SavedSpan = styled.span`
        font-size: 16px;
        display: flex;
        align-items: center;
        border-width: 0;
        outline: none;
        border-radius: 4px;
        padding: 2px 24px 2px 21px;
`


