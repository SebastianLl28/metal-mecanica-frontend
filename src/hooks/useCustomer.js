import { useMutation } from '@tanstack/react-query'
import customerApi from '../api/customer.api'

const putCustomer = async (token, id, data) => {
  try {
    return await customerApi.put(`/${id}`, data, {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

export const usePutCustomer = (token, id) =>
  useMutation({ mutationFn: data => putCustomer(token, id, data) })

const deleteCustomer = async (token, id) => {
  try {
    return await customerApi.delete(`/${id}`, {
      headers: {
        token
      }
    })
  } catch (error) {
    return error.response
  }
}

export const useDeleteCustomer = (token, id) =>
  useMutation({ mutationFn: () => deleteCustomer(token, id) })
