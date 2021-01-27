import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    background-color: ${props => props.theme.colors.powderWhite};
    z-index:2;
    transition: top 0.6s;
    top : 0;
    
    ${props => props.theme.mediaQueries.down(props.theme.breakpoints.sm)} {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
    }

    ${({ visible }) => !visible && css`
    ${props => props.theme.mediaQueries.down(props.theme.breakpoints.sm)} {
        top : ${props => "-" + props.theme.navbarHeight}
    }
`}
`

export const PinsCountContainer = styled.span`
    display: flex;
    justify-content: center;
    font-weight: 100;
    font-family: ${props => props.theme.fontFamilies.default};
    font-size: ${props => props.theme.fontSizes.small}; 

    ${props => props.theme.mediaQueries.down(props.theme.breakpoints.sm)} {
        display: none;
    }
`

export const BlockContainer = styled.div`
    display: block;
    margin: 20px 0 10px 0;
`