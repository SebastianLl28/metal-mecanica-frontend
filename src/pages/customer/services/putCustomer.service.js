import { baseURL } from '@api/metalmecanica.api'

export const putCustomer = async (id, data) =>
  await baseURL.put(`/customer/${id}`, data)
