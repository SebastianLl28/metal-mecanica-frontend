import { PersonFill, DoorClosedFill } from 'react-bootstrap-icons'
import { Element, Link, List } from './Aside'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/', { replace: true })
  }

  return (
    <footer>
      <List>
        <Element>
          <Link to='profile'>
            <PersonFill />
            Perfil
          </Link>
        </Element>
        <Element>
          <Button onClick={logout}>
            <DoorClosedFill />
            Salir
          </Button>
        </Element>
      </List>
    </footer>
  )
}

export default Footer

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.65em 0 0.65em 1.2em;
  border-radius: 5px;
  gap: 0.8em;
  font-size: 1.1em;
  transition: 0.2s ease-in-out;
  transition-property: background-color, color;

  & > svg {
    font-size: 1.2em;
    align-self: center;
    transition: color 0.2s ease-in-out;
  }

  &:hover {
    background-color: #252e3e;
  }

  &.active {
    color: #fff;
    background-color: #252e3e;

    & > svg {
      color: #6366f1;
    }
  }
`
