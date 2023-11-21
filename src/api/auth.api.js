import axios from 'axios'

const authApi = axios.create({
  baseURL: 'http://localhost:3001/api/auth',
  withCredentials: true
})

export default authApi
