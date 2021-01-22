import styled from 'styled-components'

export const ButtonContainer = styled.a`
    position:absolute;
    right: 0.5em;
    top: 0.5em;
    color: ${props => props.theme.colors.powderWhite};
    background-color: ${props => props.theme.colors.strong};
    border-radius: 12px;
    padding: 2px 10px;
    font-size: 16px;
    display:flex;
    align-items:center;
`
export const TextContainer = styled.span`
    margin-left:4px;
`
export const IconContainer = styled.div`
    margin-top: 9px;
    font-size: 18px;
`

