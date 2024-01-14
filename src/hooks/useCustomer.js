import { useMutation, useQuery } from '@tanstack/react-query'
import customerApi from '../api/customer.api'

const getAllCustomer = async (token, filter) => {
  try {
    return await customerApi.get('', {
      headers: {
        token
      },
      params: filter
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

const postCustomer = async (token, data) => {
  try {
    return await customerApi.post('', data, {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

export const usePostCustomer = () =>
  useMutation({
    mutationFn: ({ token, data }) => postCustomer(token, data)
  })
