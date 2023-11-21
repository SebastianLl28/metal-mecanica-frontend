import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import authApi from '../api/auth.api'

const postRegister = async data => {
  try {
    await new Promise(resolve => setTimeout(resolve, 6000))
    return await authApi.post('/register', data)
  } catch (error) {
    return error.response
  }
}

export const useRegister = () =>
  useMutation({ mutationFn: data => postRegister(data) })

const postLogin = async data => {
  try {
    return await authApi.post('/login', data)
  } catch (error) {
    return error.response
  }
}

export const useLogin = () =>
  useMutation({ mutationFn: data => postLogin(data) })

const getVerifyToken = async token => {
  try {
    return await authApi.get('/verifyToken', {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

export const useVerifyToken = token => {
  const queryClient = useQueryClient()
  return useQuery({
    queryKey: ['verifyToken', token],
    queryFn: () => getVerifyToken(token),
    refetchOnWindowFocus: true,
    staleTime: 2 * 60 * 1000, // Datos considerados obsoletos después de 2 minutos
    cacheTime: 0, // Desactiva el almacenamiento en caché para evitar retener datos
    refetchInterval: 5 * 60 * 1000, // Realiza la petición nuevamente cada 5 minutos
    onError: error => {
      console.log('entro acaaaaaaaaaaaaaaaaaaaaaaaaaa en erroooooooooooooor')
      if (error.response && error.response.status === 401) {
        queryClient.invalidateQueries('verifyToken')
      }
      console.log('asdashdiasdhas')
    }
  })
}
