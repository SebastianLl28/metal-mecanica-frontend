import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Aside = () => {
  return (
    <Main>
      <Header />
      <Body />
      <Footer />
    </Main>
  )
}

export default Aside

const Main = styled.aside`
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  background-color: #1c2536;
  padding: 1.5rem 1.2rem;
  min-width: 18rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Element = styled.li`
  color: #9da4ae;
  font-weight: bold;
`

export const Link = styled(NavLink)`
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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
