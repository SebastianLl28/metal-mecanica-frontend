import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from '@tanstack/react-table'
import { TableStyle } from '../../../styled-component/Components'
import { useCustomer } from '../../../hooks/useCustomer'
import { useAuthStore } from '../../../store/tokenStore'
import { useState } from 'react'

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

  const { token } = useAuthStore()

  // const { filter } = useCustomerFilter()

  const [person, setPerson] = useState({ name: '' })

  const {
    data: customer,
    isLoading,
    isError
    // refetch
  } = useCustomer(token, person)

  const { getHeaderGroups, getRowModel } = useReactTable({
    data: customer && !isLoading && !isError ? customer.data : [],
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  // useEffect(() => {
  //   refetch()
  // }, [filter])

  return (
    <>
      <input
        type='text'
        value={person.name}
        onChange={e => setPerson(e.target.value)}
      />
      <TableStyle>
        <thead>
          {getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>{header.column.columnDef.header}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableStyle>
    </>
  )
}

export default Table
