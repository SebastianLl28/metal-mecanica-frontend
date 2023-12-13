import styled from 'styled-components'
import { useCustomerFilter } from '../../../store/customerFilterStore'
import { Input } from '../../../styled-component/Components'

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
        name=''
        id=''
        value={filter.customer_type}
        onChange={e => setFilter({ ...filter, customer_type: e.target.value })}>
        {types.map(type => (
          <option key={type.id} value={type.type}>
            {type.value}
          </option>
        ))}
      </select>
      <Input
        type='text'
        value={filter.name}
        onChange={e => setFilter({ ...filter, name: e.target.value })}
      />
      <ul>
        {Object.keys(filter).map(key => (
          <li key={key}>{`${key}: ${filter[key]}`}</li>
        ))}
      </ul>
    </Main>
  )
}

export default CustomerType

const Main = styled.div`
  & > select {
    border: 1px solid #ccc;
  }
`
