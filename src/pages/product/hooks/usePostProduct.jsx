import { useMutation } from '@tanstack/react-query'
import { postProduct } from '../services/postProduct'
import { toast } from 'react-toastify'

export const usePostProduct = () =>
  useMutation({
    mutationKey: ['postProduct'],
    mutationFn: product => postProduct(product),
    onSuccess: response => {
      toast.success(response.message)
    },
    onError: error => {
      console.log(error)
    }
  })
