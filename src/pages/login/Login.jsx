import { toast } from 'react-toastify'
import { styled } from 'styled-components'
import { Input } from '../../styled-component/formComponents'
import { useId } from 'react'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import Link from '../../components/Link'
import { useLogin } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/tokenStore'

const Login = () => {
  const idEmail = useId()
  const idPassword = useId()

  const { handleSubmit, register } = useForm()

  const { mutateAsync } = useLogin()

  const navigate = useNavigate()

  const { setToken } = useAuthStore()

  const handleSubmitForm = async user => {
    const {
      status,
      data: { token }
    } = await mutateAsync(user)
    if (status !== 200) {
      toast.error('algo salio mal')
      return
    }
    setToken(token)
    toast.success('Te logueaste correctamente')
    navigate('/dashboard')
  }

  return (
    <Container>
      <Form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
        <Title>Iniciar Sesión</Title>
        <Wrapper>
          <label htmlFor={idEmail}>Correo</label>
          <TextField
            type='email'
            id={idEmail}
            {...register('email', {
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              required: true
            })}
          />
        </Wrapper>
        <Wrapper>
          <label htmlFor={idPassword}>Password</label>
          <TextField
            type='password'
            id={idPassword}
            {...register('password', {
              required: false,
              minLength: 5
            })}
          />
        </Wrapper>
        <Button type='submit' $width='100%' bg='red' inputColor='red'>
          Ingresar
        </Button>
        <p>
          <span>
            No tienes cuenta? <Link to='/register'>Registrarse</Link>
          </span>
        </p>
      </Form>
    </Container>
  )
}

export default Login

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  display: grid;
  justify-items: start;
  gap: 1.2rem;
  background-color: #fff;
  padding: 3rem 2rem;
  border-radius: 1rem;
  width: min(95%, 35rem);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 30px;
`

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  width: 100%;
  font-weight: bold;
`

const Wrapper = styled.div`
  width: 100%;

  label {
    font-size: 1.2rem;
    line-height: 1.8;
  }
`

const TextField = styled(Input)``
