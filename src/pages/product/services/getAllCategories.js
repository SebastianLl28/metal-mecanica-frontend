import { baseURL } from '@api/metalmecanica.api'

export const findAllCategories = async () => {
  // await new Promise(resolve => setTimeout(resolve, 3000))
  return await baseURL.get('/category/findAll').then(response => response.data)
}
