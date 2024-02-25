import { useQuery } from '@tanstack/react-query'
import { getVerifyToken } from '../services/verify.service'

export const useVerifyToken = () => {
  return useQuery({
    queryKey: ['verifyToken'],
    queryFn: () => getVerifyToken(),
    refetchOnWindowFocus: false,
    retry: false
  })
}
