import { useMutation } from '@tanstack/react-query'
import { postRegister } from '../services/register.service'

export const useRegister = () =>
  useMutation({
    mutationKey: ['register'],
    mutationFn: data => postRegister(data),
    onSuccess: response => {
      console.log('onSuccess')
      console.log(response)
    },
    onError: error => {
      console.log('onError')
      console.log(error)
    }
  })
