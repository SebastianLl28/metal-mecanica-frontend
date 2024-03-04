import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCustomer } from '../services/deleteCustomer.service'
import { toast } from 'react-toastify'

export const useDeleteCustomer = id => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['deleteUser', id],
    mutationFn: () => deleteCustomer(id),
    onSuccess: () => {
      queryClient.invalidateQueries('findAllCustomer')
      toast.success('Cliente Eliminado')
    },
    onError: () => {
      toast.error('Error al eliminar cliente')
    }
  })
}
