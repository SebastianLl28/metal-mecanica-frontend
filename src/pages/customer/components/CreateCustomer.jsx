import { styled } from 'styled-components'
import { Button } from '../../../styled-component/Components'
import InputTest from '../../../components/ui/Input'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import TypeClient from './TypeClient'
import { usePostCustomer } from '../hooks/usePostCustomer'

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
        <InputTest
          label='Nombre'
          error={errors?.name}
          wrapperClass={`name ${!isPerson && 'span'}`}
          hookForm={{
            ...register('name', {
              required: true
            })
          }}
        />
        {isPerson && (
          <InputTest
            label='Apellido'
            error={errors?.lastName}
            wrapperClass='lastName'
            hookForm={{
              ...register('lastName', {
                required: {
                  value: isPerson
                }
              })
            }}
          />
        )}
        <InputTest
          label='Correo'
          error={errors?.email}
          wrapperClass='email'
          hookForm={{
            ...register('email', {
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            })
          }}
        />
        <InputTest
          label='Dirección'
          error={errors?.address}
          wrapperClass='address'
          hookForm={{
            ...register('address', {
              required: true
            })
          }}
        />
        <InputTest
          label='Telefono'
          error={errors?.phone}
          wrapperClass='phone'
          hookForm={{ ...register('phone') }}
        />
        {isPerson && (
          <InputTest
            label='Identificación'
            error={errors?.document}
            wrapperClass='identification'
            hookForm={{ ...register('document') }}
          />
        )}
        {!isPerson && (
          <InputTest
            label='ruc'
            error={errors?.ruc}
            wrapperClass='ruc'
            hookForm={{
              ...register('ruc', {
                required: !isPerson,
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
// 193 lines
