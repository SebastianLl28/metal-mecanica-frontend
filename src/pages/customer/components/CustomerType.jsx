import styled from 'styled-components'
import { useCustomerFilter } from '../../../store/customerFilterStore'

const CustomerType = () => {
  const types = [
    { id: 1, type: 'all', value: 'todo' },
    { id: 2, type: 'person', value: 'Persona' },
    { id: 3, type: 'company', value: 'Empresa' }
  ]

  const { filter, setFilter } = useCustomerFilter()

  return (
    <Main>
      <select
        value={filter.customerType}
        onChange={e =>
          setFilter({ customerType: e.target.value, pagination: 1 })
        }>
        {types.map(type => (
          <option key={type.id} value={type.type}>
            {type.value}
          </option>
        ))}
      </select>
    </Main>
  )
}

export default CustomerType

const Main = styled.div`
  & > select {
    border: 1px solid #ccc;
  }
`
