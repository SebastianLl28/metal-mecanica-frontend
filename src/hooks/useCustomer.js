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

const getCustomerById = async (token, id) => {
  try {
    return await customerApi.get(`/${id}`, {
      headers: {
        token
      }
    })
  } catch (error) {}
}

export const useGetCustomerById = (token, id) =>
  useQuery({
    queryKey: ['getCustomerById', id],
    queryFn: () => getCustomerById(token, id)
  })

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
