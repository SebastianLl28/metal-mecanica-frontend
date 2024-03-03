import { baseURL } from '@api/metalmecanica.api'

export const getCustomerById = async id => await baseURL.get(`/customer/${id}`)
