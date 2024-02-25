import { useId } from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  Input,
  Button,
  Container,
  Link,
  WrapperInput
} from '../../styled-component/Components'
import { useRegister } from './hooks/useRegister'

const Register = () => {
  const idName = useId()
  const idEmail = useId()
  const idPassword = useId()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm()

  const { mutate } = useRegister()

  const navigate = useNavigate()

  const handleSubmitForm = async user => {
    mutate(user)
    // const id = toast.loading('Cargando')
    // const response = await mutateAsync(user)
    // if (response.status !== 201) {
    //   toast.update(id, {
    //     type: 'error',
    //     render: 'algo salio mal',
    //     isLoading: false,
    //     autoClose: 3000,
    //     closeOnClick: true,
    //     draggable: true
    //   })
    //   return
    // }
    // reset()
    // toast.update(id, {
    //   render: 'Te registraste',
    //   type: 'success',
    //   isLoading: false,
    //   autoClose: 3000,
    //   closeOnClick: true,
    //   draggable: true
    // })
    // navigate('/')
  }

  return (
    <Container>
      <Form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
        <h2>Registrarse</h2>
        <WrapperInput>
          <label htmlFor={idName}>Nombre</label>
          <Input
            type='text'
            id={idName}
            {...register('name', { required: true })}
            isError={errors.name}
          />
          {errors.name?.type === 'required' && (
            <span className='error'>El nombre es requerido</span>
          )}
        </WrapperInput>
        <WrapperInput>
          <label htmlFor={idEmail}>Correo</label>
          <Input
            type='email'
            id={idEmail}
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            })}
            isError={errors.email}
          />
          {(errors.email?.type === 'pattern' && (
            <span className='error'>
              El correo tiene que estar en el formato adecuado
            </span>
          )) ||
            (errors.email?.type === 'required' && (
              <span className='error'>El correo es requerido</span>
            ))}
        </WrapperInput>
        <WrapperInput>
          <label htmlFor={idPassword}>Password</label>
          <Input
            type='password'
            id={idPassword}
            {...register('password', { required: true, minLength: 5 })}
            isError={errors.password}
          />
          {(errors.password?.type === 'required' && (
            <span className='error'>La contraseña es requerida</span>
          )) ||
            (errors.password?.type === 'minLength' && (
              <span className='error'>
                La contraseña tiene que tener al menos 5 caracteres
              </span>
            ))}
        </WrapperInput>
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

  & > h2 {
    width: 100%;
    font-weight: bold;
    font-size: 2.5rem;
    text-align: center;
  }
`
