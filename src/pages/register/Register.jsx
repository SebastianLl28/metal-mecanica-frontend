import { useId } from 'react'
import { styled } from 'styled-components'
import { useForm } from 'react-hook-form'
import { Input } from '../../styled-component/formComponents'
import { useRegister } from '../../hooks/useAuth'
import { Button, Link } from '../../components'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const idName = useId()
  const idEmail = useId()
  const idPassword = useId()

  const { handleSubmit, register, reset } = useForm()

  const { mutateAsync } = useRegister()

  const navigate = useNavigate()

  const handleSubmitForm = async user => {
    const id = toast.loading('Cargando')
    const response = await mutateAsync(user)
    if (response.status !== 201) {
      toast.update(id, {
        type: 'error',
        render: 'algo salio mal',
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
        draggable: true
      })
      return
    }
    reset()
    toast.update(id, {
      render: 'Te registraste',
      type: 'success',
      isLoading: false,
      autoClose: 3000,
      closeOnClick: true,
      draggable: true
    })
    navigate('/')
  }

  return (
    <Container>
      <Form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
        <Title>Registrarse</Title>
        <Wrapper>
          <label htmlFor={idName}>Nombre</label>
          <TextField
            type='text'
            id={idName}
            {...register('name', { required: true })}
          />
        </Wrapper>
        <Wrapper>
          <label htmlFor={idEmail}>Correo</label>
          <TextField
            type='email'
            id={idEmail}
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            })}
          />
        </Wrapper>
        <Wrapper>
          <label htmlFor={idPassword}>Password</label>
          <TextField
            type='password'
            id={idPassword}
            {...register('password', { required: true, minLength: 5 })}
          />
        </Wrapper>
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
  width: 100%;
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
`

const Wrapper = styled.div`
  width: 100%;

  label {
    font-size: 1.2rem;
    line-height: 1.8;
  }
`

const TextField = styled(Input)``
