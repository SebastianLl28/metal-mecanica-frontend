import { useQuery } from '@tanstack/react-query'
import customerApi from '../api/customer.api'

const getAllCustomer = async token => {
  try {
    await new Promise(resolve => setTimeout(resolve, 4000))
    return await customerApi.get('', {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

export const useCustomer = token =>
  useQuery({
    queryKey: ['findAllCustomer', token],
    queryFn: () => getAllCustomer(token)
  })
