import axios from 'axios'

const customerApi = axios.create({
  baseURL: 'http://localhost:3001/api/customer',
  withCredentials: true
})

export default customerApi
