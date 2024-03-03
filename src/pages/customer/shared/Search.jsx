import { useCustomerFilter } from '@store/customerFilterStore'
import { Input } from '@styled/Components'

const Search = () => {
  const { filter, setFilter } = useCustomerFilter()

  return (
    <div>
      <Input
        type='text'
        value={filter.name}
        placeholder='Buscar a...'
        onChange={e => setFilter({ name: e.target.value, pagination: 1 })}
      />
    </div>
  )
}

export default Search
