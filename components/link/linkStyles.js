
import styled from 'styled-components'

export const StyledAnchor = styled.a`
${({ active }) => active && `
    color: red;
`}
`