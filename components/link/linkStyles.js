
import styled from 'styled-components'

export const StyledAnchor = styled.a`

font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
padding: 12px 20px;
border-radius: 24px;
font-size: 16px;

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
`}


`