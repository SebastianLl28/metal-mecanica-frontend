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
  $textDecoration: props.$textDecoration || 'none',
  $align: props.$align || 'left',
  $letterSpacing: props.$letterSpacing || 'normal',
  $wordSpacing: props.$wordSpacing || 'normal',
  $textTransform: props.$textTransform || 'none'
}))`
  font-size: ${props => props.$fontSize};
  color: ${props => props.$color};
  font-family: ${props => props.$fontFamily};
  font-weight: ${props => props.$weight};
  line-height: ${props => props.$lineHeight};
  text-decoration: ${props => props.$textDecoration};
  text-align: ${props => props.$align};
  letter-spacing: ${props => props.$letterSpacing};
  word-spacing: ${props => props.$wordSpacing};
  text-transform: ${props => props.$textTransform};
`
