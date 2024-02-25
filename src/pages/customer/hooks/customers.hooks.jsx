import { useQuery } from '@tanstack/react-query'
import { getAllCustomer } from '../services/customers.services'

export const useCustomer = filter =>
  useQuery({
    queryKey: ['findAllCustomer', filter],
    queryFn: () => getAllCustomer(filter)
  })
