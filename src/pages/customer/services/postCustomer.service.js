import { baseURL } from '@api/metalmecanica.api'

export const postCustomer = async data => await baseURL.post('/customer', data)
