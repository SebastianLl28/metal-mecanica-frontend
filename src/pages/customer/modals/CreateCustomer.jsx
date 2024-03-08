import { styled } from 'styled-components'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import TypeClient from '../components/TypeClient'
import { usePostCustomer } from '../hooks/usePostCustomer'
import Input from '@components/ui/Input'
import { Button } from '@styled'

const CreateCustomer = ({ close }) => {
  const [isPerson, setIsPerson] = useState(true)

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm()

  const { mutate } = usePostCustomer()

  const onSubmit = async data => {
    mutate(data)
    close()
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
        <Input
          label='Nombre'
          error={errors?.name}
          wrapperClass={`name ${!isPerson && 'span'}`}
          isRequired={true}
          hookForm={{
            ...register('name', {
              required: {
                value: true,
                message: 'El nombre es requerido'
              }
            })
          }}
        />
        {isPerson && (
          <Input
            label='Apellido'
            error={errors?.lastName}
            wrapperClass='lastName'
            hookForm={{
              ...register('lastName', {
                required: {
                  value: isPerson,
                  message: 'El apellido es requerido'
                }
              })
            }}
            isRequired={isPerson}
          />
        )}
        <Input
          label='Correo'
          error={errors?.email}
          wrapperClass='email'
          hookForm={{
            ...register('email', {
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            })
          }}
        />
        <Input
          label='Dirección'
          error={errors?.address}
          wrapperClass='address'
          isRequired={true}
          hookForm={{
            ...register('address', {
              required: {
                value: true,
                message: 'La dirección es requerida'
              }
            })
          }}
        />
        <Input
          label='Telefono'
          error={errors?.phone}
          wrapperClass='phone'
          hookForm={{ ...register('phone') }}
        />
        {isPerson && (
          <Input
            label='Identificación'
            error={errors?.document}
            wrapperClass='identification'
            hookForm={{ ...register('document') }}
          />
        )}
        {!isPerson && (
          <Input
            label='Ruc'
            error={errors?.ruc}
            wrapperClass='ruc'
            isRequired={!isPerson}
            hookForm={{
              ...register('ruc', {
                required: {
                  value: !isPerson,
                  message: 'El ruc es requerido'
                },
                pattern: /^[0-9]{11}$/
              })
            }}
          />
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
