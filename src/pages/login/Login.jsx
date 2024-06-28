import { styled } from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Container } from '../../styled-component/Components'
import { useLogin } from './hooks/useLogin'
import Input from '../../components/ui/Input'
import { Button, Link } from '@styled'
import { LoginSchema } from './schema/LoginSchema'

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(LoginSchema)
  })

  const { mutate } = useLogin()

  const handleSubmitForm = async user => {
    mutate(user)
  }

  return (
    <Container>
      <Form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
        <h2>Iniciar Sesión</h2>
        <Input
          label='Correo'
          type='email'
          error={errors?.email}
          hookForm={{ ...register('email') }}
        />
        <Input
          label='Contraseña'
          error={errors?.password}
          type='password'
          hookForm={{ ...register('password') }}
        />
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
