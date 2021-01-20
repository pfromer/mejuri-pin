import styled, { css } from 'styled-components'

export const StyledList = styled.ul`
        display: flex;
        flex-direction: row;
        list-style-type: none;
        justify-content: flex-end;

        li{
            margin-left:10px;
        }
`
export const NavBar = styled.div`
    position: fixed;
    height: ${props => props.theme.navbarHeight};
    width: 100%;
    background-color: ${props => props.theme.colors.powderWhite};
    z-index:2;
    transition: top 0.6s;
    top : 0;
    
    ${props => props.theme.down(props.theme.breakpoints.sm)} {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
    }

    ${({ visible }) => !visible && css`
        ${props => props.theme.down(props.theme.breakpoints.sm)} {
            top : ${props => "-" + props.theme.navbarHeight}
        }
    `}
`