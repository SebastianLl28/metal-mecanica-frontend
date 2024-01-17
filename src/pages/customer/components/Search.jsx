import { useCustomerFilter } from '../../../store/customerFilterStore'
import { Input } from '../../../styled-component/Components'

const Search = () => {
  const { filter, setFilter } = useCustomerFilter()

  return (
    <div>
      <Input
        type='text'
        value={filter.name}
        onChange={e => setFilter({ name: e.target.value, pagination: 1 })}
      />
    </div>
  )
}

export default Search
