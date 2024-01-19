import { styled } from 'styled-components'
import { TableStyle } from '../../../styled-component/Components'
import { useCustomer } from '../../../hooks/useCustomer'
import { useAuthStore } from '../../../store/tokenStore'
import { useCustomerFilter } from '../../../store/customerFilterStore'
import Pagination from '../../../components/Pagination'
import { ArrowRight, PencilFill } from 'react-bootstrap-icons'
import { useModal } from '../../../hooks/useModal'
import { useState, useEffect } from 'react'
import ModalCustomer from './ModalCustomer'

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

const Table = () => {
  const [columns, setColumns] = useState(initialColumns)

  const { filter, setFilter } = useCustomerFilter()

  const { token } = useAuthStore()

  const { data: customer, isLoading, isError } = useCustomer(token, filter)

  const { ModalContainer, handleOpen, handleClose } = useModal()

  const [idModal, setIdModal] = useState(null)
  const [typeModal, setTypeModal] = useState(null)

  useEffect(() => {
    if (filter.customerType === 'company') {
      const newColumns = initialColumns.filter(
        element =>
          element.header !== 'Identificacion' && element.header !== 'Apellido'
      )
      setColumns(newColumns)
      return
    }

    if (filter.customerType === 'person') {
      const newColumns = initialColumns.filter(
        element => element.header !== 'RUC'
      )
      setColumns(newColumns)
      return
    }

    setColumns(initialColumns)
  }, [filter])

  const handleOpenModal = info => {
    setIdModal(info.id)
    setTypeModal(info.type)
    handleOpen()
  }

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
                    {column.accessorKey === 'actions' ? (
                      <div className='actions'>
                        <button
                          onClick={() =>
                            handleOpenModal({ id: element.id, type: 'edit' })
                          }>
                          <PencilFill />
                        </button>
                        <button
                          onClick={() =>
                            handleOpenModal({ id: element.id, type: 'read' })
                          }>
                          <ArrowRight />
                        </button>
                      </div>
                    ) : (
                      element[column.accessorKey] ?? <p className='center'>-</p>
                    )}
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
        <div className='container-pagination'>
          <Pagination
            total={customer.data.info.pages}
            current={filter.pagination}
            onChange={pagination => setFilter({ pagination })}
          />
        </div>
      )}
      <ModalContainer>
        <ModalCustomer
          id={idModal}
          type={typeModal}
          setType={setTypeModal}
          close={handleClose}
        />
      </ModalContainer>
    </Main>
  )
}

export default Table

const Main = styled.main`
  display: grid;
  gap: 1.5rem;
  width: 100%;

  .center {
    text-align: center;
  }

  .container-pagination {
    display: flex;
    justify-content: end;
    padding: 0 1.5rem 1.5rem 0;
  }
`
