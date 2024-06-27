import { baseURL } from '@api/metalmecanica.api'

export const postProduct = async data => baseURL.post('/product', data)
