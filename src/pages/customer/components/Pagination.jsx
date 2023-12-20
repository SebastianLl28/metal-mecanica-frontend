import styled from 'styled-components'
import { useCustomerFilter } from '../../../store/customerFilterStore'

const Pagination = ({ info }) => {
  const { filter, setFilter } = useCustomerFilter()

  const handlePagination = e => {
    setFilter({ pagination: e.target.value })
  }

  return (
    <Main>
      <button
        disabled={filter.pagination <= 1}
        onClick={() => setFilter({ pagination: filter.pagination - 1 })}>
        &lt;
      </button>
      <input
        type='text'
        value={filter.pagination}
        onChange={handlePagination}
      />
      <button
        disabled={filter.pagination >= info.pages}
        onClick={() => setFilter({ pagination: filter.pagination + 1 })}>
        &gt;
      </button>
      <span>de</span>
      <span>{info.pages}</span>
    </Main>
  )
}

export default Pagination

const Main = styled.div`
  display: flex;
  gap: 10px;

  align-items: center;

  & > input[type='text'] {
    border: 1px solid black;
    padding: 5px;
    width: 50px;
    border-radius: 15px;
    width: 2em;
    text-align: center;
  }

  & > button {
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;

    &:disabled {
      background-color: gray;
    }
  }
`
