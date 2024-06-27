import { useQuery } from '@tanstack/react-query'
import { findAllCategories } from '../services/getAllCategories'

export const useFindAllCategories = () =>
  useQuery({
    queryKey: ['findAllCategories'],
    queryFn: findAllCategories,
    refetchOnWindowFocus: false,
    retry: 1
  })
