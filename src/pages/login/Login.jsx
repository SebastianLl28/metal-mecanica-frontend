import { useId } from 'react'
import { styled } from 'styled-components'
import { useForm } from 'react-hook-form'
import {
  Button,
  Container,
  Input,
  Link,
  WrapperInput
} from '../../styled-component/Components'
import { useLogin } from './hooks/useLogin'

const Login = () => {
  const idEmail = useId()
  const idPassword = useId()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const { mutate } = useLogin()

  const handleSubmitForm = async user => {
    mutate(user)
  }

  return (
    <Container>
      <Form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
        <h2>Iniciar Sesión</h2>
        <WrapperInput>
          <label htmlFor={idEmail}>Correo</label>
          <Input
            type='email'
            id={idEmail}
            {...register('email', {
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              required: true
            })}
            isError={errors.email}
          />
          {(errors.email?.type === 'required' && (
            <span className='error'>El correo es requerido</span>
          )) ||
            (errors.email?.type === 'pattern' && (
              <span className='error'>
                El correo tiene que estar en el formato adecuado
              </span>
            ))}
        </WrapperInput>
        <WrapperInput>
          <label htmlFor={idPassword}>Contraseña</label>
          <Input
            type='password'
            id={idPassword}
            {...register('password', {
              required: true,
              minLength: 5
            })}
            isError={errors.password}
          />
          {(errors.password?.type === 'required' && (
            <span className='error'>La contraseña es requerido</span>
          )) ||
            (errors.password?.type === 'minLength' && (
              <span className='error'>
                La contraseña tiene que tener al menos 5 caracteres
              </span>
            ))}
        </WrapperInput>
        <Button type='submit'>Ingresar</Button>
        <p>
          <span>No tienes cuenta? </span>
          <Link to='/register'>Registrarse</Link>
        </p>
      </Form>
    </Container>
  )
}

export default Login

const Form = styled.form`
  display: grid;
  justify-items: start;
  gap: 1.8rem;
  background-color: #fff;
  padding: 3rem 2rem;
  border-radius: 1rem;
  width: min(95%, 32rem);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 30px;

  & > h2 {
    font-size: 2.5rem;
    text-align: center;
    width: 100%;
    font-weight: bold;
  }
`
