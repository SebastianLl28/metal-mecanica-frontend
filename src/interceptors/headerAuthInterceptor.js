import { baseURL } from '../api/metalmecanica.api'

export const headerAuthInterceptor = () => {
  baseURL.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${
      localStorage.getItem('token') || ''
    }`
    return request
  })
}
