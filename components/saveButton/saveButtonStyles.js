import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
    color: ${props => props.theme.colors.powderWhite};
    background-color: ${props => props.theme.colors.strong};
    padding: 2px 10px;
    font-size: 16px;
    display:flex;
    align-items:center;
    border-width:0;
    outline:none;

    ${props => props.rounded && css`
        border-radius: 12px;
    `};

`
export const TextContainer = styled.span`
    margin-left:4px;
`
export const IconContainer = styled.div`
    margin-top: 9px;
    font-size: 18px;
`

