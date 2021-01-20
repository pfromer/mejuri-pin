
import styled from 'styled-components'

export const StyledAnchor = styled.a`



${({ active }) => active && `
    background-color: black;
    padding: 4px 16px;
    border-radius: 24px;
    color: white;
    font-size: 16px;
    font-weight: 700;
`}

${({ active }) => !active && `
    background-color: #e8e8e8;
    padding: 4px 16px;
    border-radius: 24px;
    color: black;
    font-size: 16px;
    font-weight: 500;
`}


`