import styled from 'styled-components'
import { useRef, useEffect, useState } from 'react'
import { useCustomerFilter } from '@store/customerFilterStore'

const CustomerType = () => {
  const { filter, setFilter } = useCustomerFilter()
  const [typeRefActive, setTypeRefActive] = useState(null)

  const allRef = useRef()
  const personaRef = useRef()
  const empresaRef = useRef()

  const types = [
    { id: 1, type: 'all', value: 'Todo', ref: allRef },
    { id: 2, type: 'person', value: 'Persona', ref: personaRef },
    { id: 3, type: 'company', value: 'Empresa', ref: empresaRef }
  ]

  const findBoundingInType = () =>
    types
      .find(type => type.type === filter.customerType)
      .ref.current.getBoundingClientRect()

  useEffect(() => {
    const res = findBoundingInType()
    if (res) {
      setTypeRefActive(res)
    }
  }, [filter])

  const handleClick = id => {
    const type = types.find(type => type.id === id)
    setFilter({ customerType: type.type, pagination: 1 })
  }

  return (
    <Main>
      <Container>
        {types.map(type => (
          <div
            key={type.id}
            ref={type.ref}
            onClick={() => handleClick(type.id)}>
            <p>{type.value}</p>
          </div>
        ))}
      </Container>
      <Test
        $width={typeRefActive && typeRefActive.width}
        $translate={typeRefActive && typeRefActive.x}
      />
    </Main>
  )
}

export default CustomerType

const Main = styled.div`
  border-bottom: 1px solid #0000001a;

  & > select {
    border: 1px solid #ccc;
  }
`

const Container = styled.div`
  display: flex;

  & > div {
    padding: 0.8rem 1.2rem;
    font-size: 1.05em;
    font-weight: bold;
    color: #7b7b7b;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.02);
    }
  }
`

const Test = styled.div`
  transition: all 0.3s ease-in-out;
  height: 2.8px;
  width: ${props => props.$width ?? 0}px;
  background-color: #6366f1;
  position: absolute;
  left: 0;
  transform: translateX(${props => props.$translate ?? 0}px);
  animation: init 0.25s linear forwards;

  @keyframes init {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
