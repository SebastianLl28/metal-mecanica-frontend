import styled from 'styled-components'
import { PersonFill, BuildingFill } from 'react-bootstrap-icons'
const TypeClient = ({ isPerson, setIsPerson }) => {
  const handleClick = type => {
    setIsPerson(type === 'persona')
  }

  return (
    <Main>
      <button
        className={`container person ${isPerson && 'active'}`}
        type='button'
        onClick={() => handleClick('persona')}>
        <PersonFill />
        <p>Persona</p>
      </button>
      <button
        className={`container enterprise ${!isPerson && 'active'}`}
        type='button'
        onClick={() => handleClick('empresa')}>
        <BuildingFill />
        <p>Empresa</p>
      </button>
    </Main>
  )
}

export default TypeClient

const Main = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > .container {
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.7em 0em;
    justify-content: center;
    width: 8rem;
    cursor: pointer;

    &.person {
      border-radius: 2rem 0 0 2rem;
    }

    &.enterprise {
      border-radius: 0 2rem 2rem 0;
    }

    &.active {
      background-color: #9ea0ff;
    }

    &:not(.active) {
      background-color: #c7c7c7;
    }
  }
`
