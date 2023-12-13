import { useQuery } from '@tanstack/react-query'
import customerApi from '../api/customer.api'

const getAllCustomer = async (token, filter) => {
  try {
    // await new Promise(resolve => setTimeout(resolve, 4000))
    console.log('entro a get all')
    console.log(filter)
    return await customerApi.get('', {
      headers: {
        token
      }
      // params: filter
    })
  } catch (error) {
    return error.response
  }
}

export const useCustomer = (token, filter) =>
  useQuery({
    queryKey: ['findAllCustomer', token, filter],
    queryFn: () => getAllCustomer(token, filter),
    enabled: !!token
  })
