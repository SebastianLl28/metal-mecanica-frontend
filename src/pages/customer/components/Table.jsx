import {
  useReactTable,
  getCoreRowModel,
  flexRender
} from '@tanstack/react-table'
import { TableStyle } from '../../../styled-component/Components'
import { useCustomer } from '../../../hooks/useCustomer'
import { useAuthStore } from '../../../store/tokenStore'
// import { useCustomerFilter } from '../../../store/customerFilterStore'
// import { useEffect } from 'react'

const Table = () => {
  // id name lastName email address phone identification ruc createdAt updateAt
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

  const {
    data: customer,
    isLoading,
    isError
    // refetch
  } = useCustomer(token, { name: 'asdas' })

  const { getHeaderGroups, getRowModel, getFooterGroups } = useReactTable({
    data: customer && !isLoading && !isError ? customer.data : [],
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  // useEffect(() => {
  //   refetch()
  // }, [filter])

  return (
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
      <tfoot>
        {getFooterGroups().map(footerGroup => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map(footer => (
              // <th key={header.id}>{header.column.columnDef.footer}</th>
              <th key={footer.id}>
                {flexRender(
                  footer.column.columnDef.footer,
                  footer.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </TableStyle>
  )
}

export default Table
