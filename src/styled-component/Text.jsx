import styled from 'styled-components'
import { Link as _Link } from 'react-router-dom'

export const Title = styled.h2`
  font-size: 2.1em;
  font-weight: bold;
`
export const Link = styled(_Link)`
  text-decoration: underline;
`

export const Text = styled.p.attrs(props => ({
  $fontSize: props.$fontSize || '1em',
  $color: props.$color || 'black',
  $fontFamily: props.$fontFamily || 'inherit',
  $weight: props.$weight || 'normal',
  $lineHeight: props.$lineHeight || '1.5',
  $decoration: props.$decoration || 'none',
  $align: props.$align || 'left',
  $spacing: props.$spacing || 'normal',
  $wordSpacing: props.$wordSpacing || 'normal',
  $transform: props.$transform || 'none'
}))`
  font-size: ${props => props.$fontSize};
  color: ${props => props.$color};
  font-family: ${props => props.$fontFamily};
  font-weight: ${props => props.$weight};
  line-height: ${props => props.$lineHeight};
  text-decoration: ${props => props.$decoration};
  text-align: ${props => props.$align};
  letter-spacing: ${props => props.$spacing};
  word-spacing: ${props => props.$wordSpacing};
  text-transform: ${props => props.$transform};
`
