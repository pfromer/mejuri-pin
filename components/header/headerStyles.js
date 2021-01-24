
import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
    position: fixed;
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

export const PinsCountContainer = styled.span`
    display: flex;
    justify-content: center;
    font-weight: 100;
    font-family: -apple - system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen - Sans, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, Meiryo, ＭＳ Ｐゴシック, Arial, sans - serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 14px;

    ${props => props.theme.down(props.theme.breakpoints.sm)} {
        display: none;
    }
`

export const BlockContainer = styled.div`
    display: block;
    margin: 20px 0 10px 0;
`