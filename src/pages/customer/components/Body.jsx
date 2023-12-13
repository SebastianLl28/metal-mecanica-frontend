import { styled } from 'styled-components'
import Table from './Table'
// import CustomerType from './CustomerType'

const Body = () => {
  return (
    <Container>
      {/* <CustomerType /> */}
      <Table />
    </Container>
  )
}

export default Body

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  display: grid;
  gap: 1rem;
`
