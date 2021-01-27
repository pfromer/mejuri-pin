
import styled from 'styled-components'

export const StyledAnchor = styled.a`
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 24px;
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.default};

  ${({ active }) => active && `
      background-color: black;
      color: white;
      
      font-weight: 700;
  `}

  ${({ active }) => !active && `

  &:hover {
      background-color: #e8e8e8;
    }
      
      
      color: black;
      font-weight: 500;
  `}`