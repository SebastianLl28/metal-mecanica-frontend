import { styled } from 'styled-components'
import {
  Button,
  Input,
  WrapperInput
} from '../../../styled-component/Components'
import { useForm } from 'react-hook-form'
import { useId, useState, useEffect } from 'react'
import TypeClient from './TypeClient'
import { usePostCustomer } from '../../../hooks/useCustomer'
import { useAuthStore } from '../../../store/tokenStore'
import { useQueryClient } from '@tanstack/react-query'

const CreateCustomer = ({ close }) => {
  const idName = useId()

  const [isPerson, setIsPerson] = useState(true)

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm()

  const { mutateAsync } = usePostCustomer()

  const { token } = useAuthStore()

  const queryClient = useQueryClient()

  const onSubmit = async data => {
    const response = await mutateAsync({ token, data })
    if (response.status === 200) {
      reset()
      queryClient.invalidateQueries('findAllCustomer')
      close()
    }
  }

  useEffect(() => {
    reset()
  }, [isPerson])

  return (
    <Main onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h2>Agregar Cliente</h2>
        <TypeClient isPerson={isPerson} setIsPerson={setIsPerson} />
      </header>
      <Container>
        <WrapperInput className={`name ${!isPerson && 'span'}`}>
          <label htmlFor={idName}>Nombre</label>
          <Input
            id={idName}
            type='text'
            {...register('name', {
              required: true
            })}
            isError={errors.name}
          />
          {errors.name?.type === 'required' && (
            <span className='error'>El nombre es requerido</span>
          )}
        </WrapperInput>
        {isPerson && (
          <WrapperInput className='lastName'>
            <label htmlFor={idName}>Apellido</label>
            <Input
              id={idName}
              type='text'
              {...register('lastName', {
                required: isPerson
              })}
              isError={errors.lastName}
            />
            {errors.lastName?.type === 'required' && (
              <span className='error'>El apellido es requerido</span>
            )}
          </WrapperInput>
        )}
        <WrapperInput className='email'>
          <label htmlFor={idName}>Correo</label>
          <Input
            id={idName}
            type='text'
            {...register('email', {
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            })}
            isError={errors.email}
          />
          {errors.email?.type === 'pattern' && (
            <span className='error'>
              El correo tiene que estar en el formato adecuado
            </span>
          )}
        </WrapperInput>
        <WrapperInput className='address'>
          <label htmlFor={idName}>Dirección</label>
          <Input id={idName} type='text' {...register('address')} />
        </WrapperInput>
        <WrapperInput className='phone'>
          <label htmlFor={idName}>Telefono</label>
          <Input id={idName} type='text' {...register('phone')} />
        </WrapperInput>
        {isPerson && (
          <WrapperInput className='identification'>
            <label htmlFor={idName}>Identificación</label>
            <Input
              id={idName}
              type='text'
              {...register('document', {
                required: isPerson
              })}
              isError={errors.document}
            />
            {errors.document?.type === 'required' && (
              <span className='error'>La identificación es requerida</span>
            )}
          </WrapperInput>
        )}
        {!isPerson && (
          <WrapperInput className='ruc'>
            <label htmlFor={idName}>ruc</label>
            <Input
              id={idName}
              type='text'
              {...register('ruc', {
                required: !isPerson,
                pattern: /^[0-9]{11}$/
              })}
              isError={errors.ruc}
            />
            {(errors.ruc?.type === 'pattern' && (
              <span className='error'>El ruc tiene que tener 11 digitos</span>
            )) ||
              (errors.ruc?.type === 'required' && (
                <span className='error'>El ruc es requerido</span>
              ))}
          </WrapperInput>
        )}
      </Container>
      <Button type='submit'>Guardar</Button>
    </Main>
  )
}

export default CreateCustomer

const Main = styled.form`
  width: 30rem;

  & > header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > h2 {
      font-size: 1.3em;
      font-weight: bold;
    }
  }

  & > input {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
  }

  display: grid;
  gap: 1.8rem;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1rem;

  & > .email {
    grid-column: span 2;
  }

  & > .address {
    grid-column: span 2;
  }

  & > .name.span {
    grid-column: span 2;
  }
`
