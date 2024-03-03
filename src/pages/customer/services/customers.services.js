import { baseURL } from '@api/metalmecanica.api'

export const getAllCustomer = async filter =>
  await baseURL.get('/customer', { params: filter })
