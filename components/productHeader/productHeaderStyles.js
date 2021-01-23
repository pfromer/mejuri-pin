import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 16px 0;
        padding: 0 2px;
`


export const OtherButtonsContainer = styled.div`
        display: flex;
        justify-content: space-between;
        flex-grow: 20;
        justify-content: flex-start;
        align-items: center;

        > * {
                margin-right: 8px;
        }
`

export const SaveButtonContainer = styled.div`
        display: flex;
        flex-grow: 1;
        justify-content: space-between;

`
export const LinkContainer = styled.div`
        font-size: 25px;
`

export const StyledAnchor = styled.a`
        background-color: #f1ecec;
        padding: 9px 20px;
        color: black;
        text-decoration: none;
        border-radius: 12px;

`
