// TODO: REFACTORIZAR CODE
import { styled } from 'styled-components'
import { useDeleteCustomer, usePutCustomer } from '../../../hooks/useCustomer'
import { useAuthStore } from '../../../store/tokenStore'
import { useEffect, useState, useId } from 'react'
import {
  Button,
  Input,
  WrapperInput
} from '../../../styled-component/Components'
import { useForm } from 'react-hook-form'
import { PencilFill, TrashFill } from 'react-bootstrap-icons'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import LoadingModalCusomer from '../shared/LoadingModalCusomer'
import { useGetCustomerById } from '../hooks/useGetCustomerById'

const ModalCustomer = ({ id, type, setType, close }) => {
  const idName = useId()
  const idLastName = useId()
  const idEmail = useId()
  const idAddress = useId()
  const idPhone = useId()
  const idDocument = useId()
  const idRuc = useId()

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

  const { mutateAsync } = usePutCustomer(id)

  const queryClient = useQueryClient()

  const handleOnSubmit = async data => {
    try {
      const response = await mutateAsync(data)
      if (response.status === 200) {
        queryClient.invalidateQueries('findAllCustomer')
        setType('read')
        setTypeCustomer(null)
        close()
        toast.success('Cliente Editado')
      }
    } catch (error) {
      close()
      toast.error('Error en el servidor')
    }
  }

  const { mutateAsync: deleteCustomerMutateAsync } = useDeleteCustomer(
    // token,
    id
  )

  const handleDelete = async () => {
    const res = await deleteCustomerMutateAsync()
    if (res.status === 200) {
      close()
      queryClient.invalidateQueries('findAllCustomer')
      toast.success('Cliente Eliminado')
    }
  }

  return (
    <Main onSubmit={handleSubmit(handleOnSubmit)}>
      <h2>{type === 'edit' ? 'Editar Cliente' : 'Cliente'}</h2>
      {(isLoading && !isError) || (!typeCustomer && <LoadingModalCusomer />)}
      {!isLoading && !isError && data && typeCustomer && (
        <div className={`container ${typeCustomer ?? 'null'}`}>
          <WrapperInput>
            <label htmlFor={idName}>Nombre</label>
            <Input
              type='text'
              id={idName}
              {...register('name', { required: true })}
              isError={errors.name}
              disabled={type === 'read'}
            />
            {errors.name?.type === 'required' && (
              <span className='error'>El nombre es requerido</span>
            )}
          </WrapperInput>
          {typeCustomer === 'person' && (
            <WrapperInput>
              <label htmlFor={idLastName}>Apellido</label>
              <Input
                type='text'
                id={idLastName}
                {...register('lastName', { required: true })}
                isError={errors.lastName}
                disabled={type === 'read'}
              />
              {errors.lastName?.type === 'required' && (
                <span className='error'>El apellido es requerido</span>
              )}
            </WrapperInput>
          )}
          {/* email */}
          <WrapperInput>
            <label htmlFor={idEmail}>correo</label>
            <Input
              type='email'
              id={idEmail}
              {...register('email', { required: true })}
              isError={errors.email}
              disabled={type === 'read'}
            />
            {errors.email?.type === 'required' && (
              <span className='error'>El correo es requerido</span>
            )}
          </WrapperInput>
          {/* address */}
          <WrapperInput>
            <label htmlFor={idAddress}>Direccion</label>
            <Input
              type='text'
              id={idAddress}
              {...register('address', { required: true })}
              isError={errors.address}
              disabled={type === 'read'}
            />
            {errors.address?.type === 'required' && (
              <span className='error'>La direccion es requerida</span>
            )}
          </WrapperInput>
          {/* phone */}
          <WrapperInput>
            <label htmlFor={idPhone}>Telefono</label>
            <Input
              type='text'
              id={idPhone}
              {...register('phone', { required: true })}
              isError={errors.phone}
              disabled={type === 'read'}
            />
            {errors.phone?.type === 'required' && (
              <span className='error'>El telefono es requerido</span>
            )}
          </WrapperInput>

          {typeCustomer === 'person' ? (
            <WrapperInput>
              <label htmlFor={idDocument}>Documento</label>
              <Input
                type='text'
                id={idDocument}
                {...register('document', { required: true })}
                isError={errors.document}
                disabled={type === 'read'}
              />
              {errors.document?.type === 'required' && (
                <span className='error'>El documento es requerido</span>
              )}
            </WrapperInput>
          ) : (
            <WrapperInput>
              <label htmlFor={idRuc}>RUC</label>
              <Input
                type='text'
                id={idRuc}
                {...register('ruc', { required: true })}
                isError={errors.ruc}
                disabled={type === 'read'}
              />
              {errors.ruc?.type === 'required' && (
                <span className='error'>El RUC es requerido</span>
              )}
            </WrapperInput>
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
// 314
