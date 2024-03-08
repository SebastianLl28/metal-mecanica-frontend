import { darken } from 'polished'
import styled from 'styled-components'

export const Button = styled.button.attrs(props => ({
  $padding: props.$padding || '.8em 1em',
  width: props.width || '100%',
  fontSize: props.fontSize || '1.1em',
  $bg: props.$bg || '#6366f1'
}))`
  color: #fff;
  background-color: ${props => props.$bg};
  width: ${props => props.width};
  padding: ${props => props.$padding};
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: ${props => props.fontSize};

  transition: background-color 0.2s;

  &:hover {
    /* background-color: #5559ce; */
    background-color: ${props => darken(0.08, props.$bg)};
  }
`
