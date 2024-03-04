import { useMutation } from '@tanstack/react-query'
import { postRegister } from '../services/register.service'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const useRegister = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationKey: ['register'],
    mutationFn: data => postRegister(data),
    onSuccess: response => {
      toast.success(response.data.message)
      navigate('/')
    },
    onError: err => {
      // console.log(err)
      toast.error(err.response.data.message)
    }
  })
}
