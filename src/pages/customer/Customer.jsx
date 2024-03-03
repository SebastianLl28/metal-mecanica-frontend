import styled from 'styled-components'
import Header from './sections/Header'
import Body from './sections/Body'

const Customer = () => {
  return (
    <Container>
      <Header />
      <Body />
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
  padding: 4rem;
  gap: 2rem;
`
