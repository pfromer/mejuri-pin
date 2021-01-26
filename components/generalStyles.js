import styled, { css } from 'styled-components'

export const TappableImageContainer = styled.div`
        margin-top: 65px;
`

export const StyledAnchor = styled.a`
        background-color: #f1ecec;
        color: black;
        text-decoration: none;
        font-weight: 700;
        padding: 12px 25px;
        ${props => props.rounded && css`
                border-radius: 20px;
        `}
`

export const DistantContainer = styled.div`
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: center;
`
export const ProductName = styled.span`
        font-family: cursive;
        font-size: 17px;
`