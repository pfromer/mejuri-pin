import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
    color: ${props => props.theme.colors.lightest};
    background-color: ${props => props.theme.colors.main};
    padding: 12px 24px;
    font-size: ${props => props.theme.fontSizes.medium};
    display:flex;
    align-items:center;
    border-width:0;
    outline:none;
    border-radius: ${props => props.theme.borderRadius.softest};
    cursor: pointer;

    ${props => props.rounded && css`
        border-radius: ${props.theme.borderRadius.standard};
        padding: 2px 12px;
    `};
`
export const TextContainer = styled.span`
    margin-left:4px;
`
export const IconContainer = styled.div`
    margin-top: 9px;
    font-size: ${props => props.theme.fontSizes.large};
`