import { styled } from 'styled-components'
const Button = ({ children, type, action, width, padding, fontSize }) => {
  const handleClick = () => {
    console.log(typeof action)
  }

  return (
    <ButtonStyle
      type={type}
      onClick={handleClick}
      width={width}
      padding={padding}
      fontSize={fontSize}>
      {children}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  color: #fff;
  background-color: #394861;
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || '1em 2em'};
  padding: ${({ padding }) => padding || '1em 2em'};
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1em;

  transition: background-color 0.2s;

  &:hover {
    background-color: #556a8e;
  }
`
