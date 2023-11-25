import styled from 'styled-components'
import Button from '../../components/Button'
import { useCustomer } from '../../hooks/useCustomer'
import { useEffect } from 'react'
import { useAuthStore } from '../../store/tokenStore'

const Customer = () => {
  const { token } = useAuthStore()

  const { data, isLoading } = useCustomer(token)

  useEffect(() => {
    if (!isLoading) {
      console.log(data)
    }
  }, [isLoading])

  return (
    <>
      {!isLoading && data.status === 200 && (
        <Container>
          <Title>Clientes</Title>
          <Button width='fit-content' padding='.8em 1.2em'>
            Agregar
          </Button>
        </Container>
      )}
      {isLoading && <p>Cargando...</p>}
      {!isLoading && data.status !== 200 && <p>Error al cargar los clientes</p>}
    </>
  )
}

export default Customer

const Container = styled.main`
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: start;
  flex-direction: column;
  padding: 5rem;
`
const Title = styled.h2`
  font-size: 2.8em;
  font-weight: bold;
`
