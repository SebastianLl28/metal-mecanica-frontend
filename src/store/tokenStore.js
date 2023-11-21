import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      setToken: token => set({ token }),
      clearToken: () => set({ token: null })
    }),
    {
      name: '_token'
    }
  )
)
