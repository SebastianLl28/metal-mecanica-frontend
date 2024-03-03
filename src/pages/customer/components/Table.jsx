import { styled } from 'styled-components'
import { TableStyle } from '../../../styled-component/Components'
import { useCustomerFilter } from '../../../store/customerFilterStore'
import Pagination from '../../../components/Pagination'
import { ArrowRight, PencilFill } from 'react-bootstrap-icons'
import { useModal } from '../../../hooks/useModal'
import { useState } from 'react'
import ModalCustomer from '../modals/ModalCustomer'
import {
  useColumnsViews,
  useCustomer,
  usePreFetchUseGetCustomerById
} from '../hooks'

const Table = () => {
  const { filter, setFilter } = useCustomerFilter()

  const { data: customer, isLoading, isError } = useCustomer(filter)

  const { ModalContainer, handleOpen, handleClose } = useModal()

  const [idModal, setIdModal] = useState(null)
  const [typeModal, setTypeModal] = useState(null)

  const { columns } = useColumnsViews(filter.customerType)

  const handleOpenModal = info => {
    setIdModal(info.id)
    setTypeModal(info.type)
    handleOpen()
  }

  const { preFetchUserById } = usePreFetchUseGetCustomerById()

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
                      <div
                        className='actions'
                        onMouseEnter={() => preFetchUserById(element.id)}>
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
