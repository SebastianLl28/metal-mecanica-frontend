import { Outlet, useNavigate, Navigate } from 'react-router-dom'
import { useAuthStore } from '../../store/tokenStore'
import { useEffect } from 'react'
import { useVerifyToken } from '../../hooks/useAuth'
import Loader from '../../components/Loader'
import styled from 'styled-components'
import Aside from './components/aside/Aside'

const PrivatePage = () => {
  const { token, clearToken } = useAuthStore()

  const navigate = useNavigate()

  const { data, isLoading } = useVerifyToken(token ?? '')

  const invalidateToken = () => {
    clearToken()
    navigate('/')
  }

  useEffect(() => {
    if (!token) invalidateToken()
  }, [token, isLoading])

  return (
    <>
      {token && !isLoading && data?.status === 200 ? (
        <Container>
          <Aside />
          <Outlet />
        </Container>
      ) : (
        <Loader />
      )}
      {isLoading && <Loader />}
      {!isLoading && data?.status !== 200 && <Navigate to='/' />}
    </>
  )
}

export default PrivatePage

const Container = styled.main`
  min-height: 100vh;
  display: flex;
`
