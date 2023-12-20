import { styled } from 'styled-components'
import { TableStyle } from '../../../styled-component/Components'
import { useCustomer } from '../../../hooks/useCustomer'
import { useAuthStore } from '../../../store/tokenStore'
import { useCustomerFilter } from '../../../store/customerFilterStore'
import Pagination from './Pagination'

const Table = () => {
  const columns = [
    { header: 'Nombre', accessorKey: 'name' },
    { header: 'Apellido', accessorKey: 'lastName' },
    { header: 'Email', accessorKey: 'email' },
    { header: 'Direccion', accessorKey: 'address' },
    { header: 'Telefono', accessorKey: 'phone' },
    { header: 'Identificacion', accessorKey: 'identification' },
    { header: 'RUC', accessorKey: 'ruc' }
  ]

  const { filter } = useCustomerFilter()

  const { token } = useAuthStore()

  const { data: customer, isLoading, isError } = useCustomer(token, filter)

  return (
    <Main>
      <TableStyle>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.header}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            !isError &&
            customer &&
            customer.data.results.length === 0 && (
              <tr>
                <td colSpan={7} className='noData'>
                  No hay resultados
                </td>
              </tr>
            )}
          {!isLoading &&
            !isError &&
            customer.data.results &&
            customer.data.results.map(element => (
              <tr key={element.id}>
                {columns.map(column => (
                  <td
                    key={element.id + column.header}
                    title={element[column.accessorKey]}>
                    {element[column.accessorKey]}
                  </td>
                ))}
              </tr>
            ))}
          {isLoading && !isError && (
            <tr>
              <td colSpan={7} className='loading'>
                Cargando...
              </td>
            </tr>
          )}
          {!isLoading && isError && (
            <td colSpan={7} className='noData'>
              Error del servidor
            </td>
          )}
        </tbody>
      </TableStyle>
      {!isLoading && !isError && customer && (
        <Pagination info={customer.data.info} />
      )}
    </Main>
  )
}

export default Table

const Main = styled.main`
  display: grid;
  gap: 1.5rem;
`
