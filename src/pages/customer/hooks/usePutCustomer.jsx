import { useMutation, useQueryClient } from '@tanstack/react-query'
import { putCustomer } from '../services/putCustomer.service'
import { toast } from 'react-toastify'

export const usePutCustomer = id => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['putCustomer', id],
    mutationFn: data => putCustomer(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries('findAllCustomer')
      toast.success('Cliente Editado')
    },
    onError: () => {
      toast.error('Error al editar al cliente')
    }
  })
}
