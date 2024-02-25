import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postCustomer } from '../services/postCustomer.service'
import { toast } from 'react-toastify'

export const usePostCustomer = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: data => postCustomer(data),
    onSuccess: res => {
      queryClient.invalidateQueries('findAllCustomer')
      toast.success(res.data.message ?? 'Cliente agregado')
    },
    onError: err => {
      console.log(err)
      toast.error('Error al agregar cliente')
    }
  })
}
