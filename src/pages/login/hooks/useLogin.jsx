import { useMutation } from '@tanstack/react-query'
import { postLogin } from '../services/login.service'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['login'],
    mutationFn: data => postLogin(data),
    onSuccess: data => {
      toast.success('Iniciaste sesión correctamente')
      localStorage.setItem('token', data.data.token)
      navigate('/dashboard')
    },
    onError: () => {
      toast.error('Correo o contraseña incorrectos')
    }
  })
}
