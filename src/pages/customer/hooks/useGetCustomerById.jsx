import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getCustomerById } from '../services/getCustomerById'

export const useGetCustomerById = id =>
  useQuery({
    queryKey: ['getCustomerById', id],
    queryFn: () => getCustomerById(id)
  })

export const usePreFetchUseGetCustomerById = () => {
  const queryClient = useQueryClient()

  const preFetchUserById = id => {
    queryClient.prefetchQuery({
      queryKey: ['getCustomerById', id],
      queryFn: () => getCustomerById(id)
    })
  }

  return { preFetchUserById }
}
