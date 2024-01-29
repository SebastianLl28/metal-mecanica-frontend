import styled from "styled-components"
import Body from "./components/Body"
import Header from "./components/Header"

const Orders = () => {
  return (
    <Container>
      <Header/>
      <Body/>
    </Container>
  )
}

export default Orders

const Container = styled.main`
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: start;
  flex-direction: column;
  padding: 4rem;
  gap: 2rem;
`
