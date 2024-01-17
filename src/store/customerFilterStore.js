import { create } from 'zustand'

export const useCustomerFilter = create((set, get) => ({
  filter: {
    name: '',
    pagination: 1,
    customerType: 'all'
  },
  setFilter: newFilter =>
    set(state => ({ ...state, filter: { ...state.filter, ...newFilter } }))
}))
