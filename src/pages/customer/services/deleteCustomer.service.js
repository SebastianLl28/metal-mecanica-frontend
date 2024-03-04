import { baseURL } from '@api/metalmecanica.api'

export const deleteCustomer = async id =>
  await baseURL.delete(`/customer/${id}`)
