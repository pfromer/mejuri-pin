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


const goDown = keyframes`
                0% {top: -24px; visibility visible;}
                99% {top: 80px; visibility visible;}
                100% {top: 80px; visibility hidden;}
        `;

export const LikesLinkContainer = styled.div`
        animation: ${goDown} 3s ease;
        animation-fill-mode: forwards;
        display: flex;
        flex-direction: column;
        position: absolute;
        font-size: 14px;
        padding-top: 5px;
        background-color: black;
        color: white;
        border-radius: 12px;
        top: 3px;
        opacity: 1;
        z-index: 3;
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


