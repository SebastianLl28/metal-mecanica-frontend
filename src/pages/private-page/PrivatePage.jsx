import { Outlet, Navigate } from 'react-router-dom'
import Loader from '../../components/Loader'
import styled from 'styled-components'
import Aside from './components/aside/Aside'
import { useVerifyToken } from './hooks/useVerify'

const PrivatePage = () => {
  const { isLoading, isError, isSuccess } = useVerifyToken()

  return (
    <>
      {isSuccess && !isError && !isLoading && (
        <Container>
          <Aside />
          <Outlet />
        </Container>
      )}
      {isLoading && <Loader />}
      {isError && <Navigate to='/' />}
    </>
  )
}

export default PrivatePage

const Container = styled.main`
  min-height: 100vh;
  display: flex;
`
