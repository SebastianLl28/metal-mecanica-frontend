import { create } from 'zustand'
/*
{
  nombre: "",
  paginación: 1,
  customer_type: "all"
}
*/
export const useCustomerFilter = create(set => ({
  filter: {
    name: '',
    pagination: 1,
    customer_type: 'all'
  },
  setFilter: filter => set(state => ({ filter }))
}))
