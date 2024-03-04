import Input from '@components/ui/Input'
import { useCustomerFilter } from '@store/customerFilterStore'

const Search = () => {
  const { filter, setFilter } = useCustomerFilter()

  return (
    <div>
      <Input
        value={filter.name}
        placeholder='Buscar a...'
        onChange={e => setFilter({ name: e.target.value, pagination: 1 })}
      />
    </div>
  )
}

export default Search
