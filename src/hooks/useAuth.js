import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import authApi from '../api/auth.api'

const postRegister = async data => {
  try {
    // await new Promise(resolve => setTimeout(resolve, 6000))
    return await authApi.post('/register', data)
  } catch (error) {
    return error.response
  }
}

export const useRegister = () =>
  useMutation({ mutationFn: data => postRegister(data) })
