import { baseURL } from '@api/metalmecanica.api'

export const postRegister = async data => baseURL.post('/auth/register', data)
