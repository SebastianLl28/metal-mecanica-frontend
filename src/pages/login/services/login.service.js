import { baseURL } from '../../../api/metalmecanica.api'

export const postLogin = async data => await baseURL.post('/auth/login', data)
