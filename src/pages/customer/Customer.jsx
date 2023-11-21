import styled from 'styled-components'
import Button from '../../components/Button'

const Customer = () => {
  return (
    <Container>
      <Title>Clientes</Title>
      <Button width='fit-content' padding='.8em 1.2em'>
        Agregar
      </Button>
    </Container>
  )
}

export default Customer

const Container = styled.main`
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: start;
  flex-direction: column;
  padding: 5rem;
`
const Title = styled.h2`
  font-size: 2.8em;
  font-weight: bold;
`
