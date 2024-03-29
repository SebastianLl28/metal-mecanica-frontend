import { styled } from 'styled-components'
import Table from '../components/Table'
import Search from '../shared/Search'
import CustomerType from '../components/CustomerType'

const Body = () => {
  return (
    <Container>
      <CustomerType />
      <header>
        <Search />
      </header>
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
  border-radius: 1.5rem;

  header {
    display: flex;
    gap: 2rem;
    align-items: center;
    padding-inline: 1.5rem;
    & > div:first-child {
      flex-basis: 100%;
    }
  }
`
