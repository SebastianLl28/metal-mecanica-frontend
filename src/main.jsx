import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styled-component/GlobalStyle'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { headerAuthInterceptor } from './interceptors/headerAuthInterceptor.js'

const queryClient = new QueryClient()

headerAuthInterceptor()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-right' />
    </React.StrictMode>
  </QueryClientProvider>
)
