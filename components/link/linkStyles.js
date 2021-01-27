import styled, { css } from 'styled-components'

export const StyledAnchor = styled.a`
  cursor: pointer;
  padding: 12px 20px;
  border-radius: ${props => props.theme.borderRadius.heaviest};
  font-size: ${props => props.theme.fontSizes.medium};
  font-family: ${props => props.theme.fontFamilies.default};

  ${({ active }) => active && css`
      background-color: ${props => props.theme.colors.dark};
      color: ${props => props.theme.colors.lightest};
      font-weight: ${props => props.theme.fontWeights.heavy};
  `}

  ${({ active }) => !active && css`
    &:hover {
        background-color: ${props => props.theme.colors.light};
    }
        
    color: ${props => props.theme.colors.dark};
    font-weight: ${props => props.theme.fontWeights.medium};
`}`