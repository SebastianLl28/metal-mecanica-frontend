import { styled } from 'styled-components'
import { useForm } from 'react-hook-form'
import { Container } from '../../styled-component/Components'
import { useRegister } from './hooks/useRegister'
import Input from '@components/ui/Input'
import { Link, Button } from '@styled'

const Register = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors }
  } = useForm()

  const { mutate } = useRegister()

  const handleSubmitForm = async user => {
    mutate(user)
  }

  return (
    <Container>
      <Form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
        <h2>Registrarse</h2>
        <Input
          label='Nombre'
          error={errors?.name}
          hookForm={{
            ...register('name', {
              required: {
                value: true,
                message: 'El nombre es requerido'
              }
            })
          }}
        />
        <Input
          label='Apellido'
          error={errors?.lastName}
          hookForm={{
            ...register('lastName', {
              required: {
                value: true,
                message: 'El apellido es requerido'
              }
            })
          }}
        />
        <Input
          label='Correo'
          error={errors?.email}
          hookForm={{
            ...register('email', {
              required: {
                value: true,
                message: 'El correo es requerido'
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'El correo tiene que estar en el formato adecuado'
              }
            })
          }}
        />
        <Input
          label='Documento'
          error={errors?.document}
          hookForm={{
            ...register('document', {
              required: {
                value: true,
                message: 'El documento es requerido'
              }
            })
          }}
        />
        <Input
          label='Contraseña'
          error={errors?.password}
          type='password'
          hookForm={{
            ...register('password', {
              required: {
                value: true,
                message: 'La contraseña es requerida'
              }
            })
          }}
        />
        <Input
          label='Confirmar Contraseña'
          error={errors?.confirmPassword}
          type='password'
          hookForm={{
            ...register('confirmPassword', {
              required: {
                value: true,
                message: 'La contraseña es requerida'
              },
              validate: value =>
                value === getValues('password') ||
                'Las contraseñas no coinciden'
            })
          }}
        />
        <Button type='submit'>Ingresar</Button>
        <p>
          <span>Ya tienes cuenta? </span>
          <Link to='/'>Inicia sesión</Link>
        </p>
      </Form>
    </Container>
  )
}

export default Register

const Form = styled.form`
  display: grid;
  justify-items: start;
  gap: 1.8rem;
  background-color: #fff;
  padding: 3rem 2rem;
  border-radius: 1rem;
  width: min(95%, 35rem);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 30px;
  grid-template-columns: 1fr 1fr;

  & > h2,
  & > button,
  & > div:nth-of-type(3),
  & > div:nth-of-type(4),
  & > div:nth-of-type(5),
  & > div:nth-of-type(6) {
    grid-column: span 2;
  }

  & > h2 {
    width: 100%;
    font-weight: bold;
    font-size: 2.5rem;
    text-align: center;
  }
`
