import { useEffect, useState } from 'react'

const initialColumns = [
  { header: 'Nombre', accessorKey: 'name' },
  { header: 'Apellido', accessorKey: 'lastName' },
  { header: 'Email', accessorKey: 'email' },
  { header: 'Direccion', accessorKey: 'address' },
  { header: 'Telefono', accessorKey: 'phone' },
  { header: 'Identificacion', accessorKey: 'document' },
  { header: 'RUC', accessorKey: 'ruc' },
  { header: 'Acciones', accessorKey: 'actions' }
]

export const useColumnsViews = type => {
  const [columns, setColumns] = useState(initialColumns)

  useEffect(() => {
    // ? If it is a company, there should be no last name identification
    if (type === 'company') {
      const newColumns = initialColumns.filter(
        element =>
          element.header !== 'Identificacion' && element.header !== 'Apellido'
      )
      setColumns(newColumns)
      return
    }

    // ? If it is a person, there should be no RUC identification
    if (type === 'person') {
      const newColumns = initialColumns.filter(
        element => element.header !== 'RUC'
      )
      setColumns(newColumns)
      return
    }

    // ? all columns
    setColumns(initialColumns)
  }, [type])

  return { columns }
}
