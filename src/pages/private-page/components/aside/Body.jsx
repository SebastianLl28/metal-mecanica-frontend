import {
  HouseDoorFill,
  PencilSquare,
  FilePersonFill
} from 'react-bootstrap-icons'
import styled from 'styled-components'
import { Element, Link, List } from './Aside'

const Body = () => {
  return (
    <Main>
      <List>
        <Element>
          <Link to='/dashboard'>
            <HouseDoorFill />
            Inicio
          </Link>
        </Element>
        <Element>
          <Link to='/customer'>
            <FilePersonFill />
            Clientes
          </Link>
        </Element>
        <Element>
          <Link to='/orders'>
            <PencilSquare />
            Pedidos
          </Link>
        </Element>
      </List>
    </Main>
  )
}

export default Body

const Main = styled.main`
  color: #9da4ae;
  font-weight: bold;
  flex-grow: 1;
  flex-basis: 0;
`
