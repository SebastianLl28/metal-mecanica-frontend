import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { PencilFill, TrashFill } from 'react-bootstrap-icons'
import { useForm } from 'react-hook-form'
import LoadingModalCusomer from '../shared/LoadingModalCusomer'
import InputTest from '@components/ui/Input'
import { Button } from '@styled/Components'
import { useDeleteCustomer, useGetCustomerById, usePutCustomer } from '../hooks'

const ModalCustomer = ({ id, type, setType, close }) => {
  const { data, isLoading, isError } = useGetCustomerById(id)
  const [typeCustomer, setTypeCustomer] = useState(null)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    if (data && !isLoading && !isError) {
      if (data.data.lastName) {
        setTypeCustomer('person')
        reset({
          name: data.data.name,
          lastName: data.data.lastName,
          email: data.data.email,
          address: data.data.address,
          phone: data.data.phone,
          document: data.data.document
        })
      } else {
        setTypeCustomer('company')
        reset({
          name: data.data.name,
          email: data.data.email,
          address: data.data.address,
          phone: data.data.phone,
          ruc: data.data.ruc
        })
      }
    }
  }, [data])

  const { mutate: mutatePut } = usePutCustomer(id)

  const handleOnSubmit = async data => {
    mutatePut(data)
    close()
  }

  const { mutate: mutateDelete } = useDeleteCustomer(id)

  const handleDelete = async () => {
    mutateDelete()
    close()
  }

  return (
    <Main onSubmit={handleSubmit(handleOnSubmit)}>
      <h2>{type === 'edit' ? 'Editar Cliente' : 'Cliente'}</h2>
      {(isLoading && !isError) || (!typeCustomer && <LoadingModalCusomer />)}
      {!isLoading && !isError && data && typeCustomer && (
        <div className={`container ${typeCustomer ?? 'null'}`}>
          <InputTest
            label='Nombre'
            error={errors?.name}
            isRequired={true}
            disabled={type === 'read'}
            hookForm={{
              ...register('name', {
                required: {
                  value: true,
                  message: 'El nombre es requerido'
                }
              })
            }}
          />
          {typeCustomer === 'person' && (
            <InputTest
              label='Apellido'
              error={errors?.lastName}
              isRequired={true}
              disabled={type === 'read'}
              hookForm={{
                ...register('lastName', {
                  required: {
                    value: typeCustomer === 'person',
                    message: 'El apellido es requerido'
                  }
                })
              }}
            />
          )}
          <InputTest
            label='Correo'
            error={errors?.email}
            disabled={type === 'read'}
            hookForm={{
              ...register('email')
            }}
          />
          <InputTest
            label='Direccion'
            error={errors?.address}
            isRequired={true}
            disabled={type === 'read'}
            hookForm={{
              ...register('address', {
                required: {
                  value: true,
                  message: 'La direccion es requerida'
                }
              })
            }}
          />
          <InputTest
            label='Telefono'
            error={errors?.phone}
            disabled={type === 'read'}
            hookForm={{
              ...register('phone')
            }}
          />

          {typeCustomer === 'person' ? (
            <InputTest
              label='Documento'
              error={errors?.document}
              isRequired={true}
              disabled={type === 'read'}
              hookForm={{
                ...register('document', {
                  required: {
                    value: true,
                    message: 'El documento es requerido'
                  }
                })
              }}
            />
          ) : (
            <InputTest
              label='RUC'
              error={errors?.ruc}
              isRequired={true}
              disabled={type === 'read'}
              hookForm={{
                ...register('ruc', {
                  required: {
                    value: true,
                    message: 'El RUC es requerido'
                  }
                })
              }}
            />
          )}
        </div>
      )}

      <div className='buttons'>
        <Button
          $bg='#ff382a'
          fontSize='1em'
          width='min-content'
          onClick={close}>
          Cerrar
        </Button>
        {type === 'edit' && (
          <Button fontSize='1em' width='min-content' type='submit'>
            Guardar
          </Button>
        )}
      </div>

      <div className='icons'>
        {type === 'read' && (
          <button onClick={() => setType('edit')}>
            <PencilFill color='#ffdf12' />
          </button>
        )}
        <button type='button' onClick={handleDelete}>
          <TrashFill color='#ff382a' />
        </button>
      </div>
    </Main>
  )
}

export default ModalCustomer

const Main = styled.form.attrs(props => ({
  $typeCustomer: props.$typeCustomer
}))`
  width: 25rem;
  position: relative;

  h2 {
    font-size: 1.8em;
    text-align: center;
    font-weight: bold;
  }

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;

    & > p {
      text-align: center;
      font-weight: bold;
      font-size: 1.5em;
    }
  }

  .container {
    display: grid;
    gap: 1rem;

    &.company {
      grid-template-columns: 1fr 1fr;

      & > div:not(:nth-child(4)):not(:nth-child(5)) {
        grid-column: 1 / 3;
      }
    }

    &.person {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 1fr);

      & > div:nth-child(3),
      & > div:nth-child(4) {
        grid-column: 1 / 3;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1.3rem;
  }

  .icons {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 0.2rem;

    & > button {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #cecece53;
      }
    }
  }
`
