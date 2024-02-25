import { baseURL } from '../../../api/metalmecanica.api'

export const getVerifyToken = async () => await baseURL.get('/auth/verifyToken')
