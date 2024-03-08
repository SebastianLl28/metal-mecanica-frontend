import { styled } from 'styled-components'
import { Title, Button } from '@styled'

export const Header = () => {
  return (
    <Wrapper>
      <Title>Producto</Title>
      <Button width='fit-content'>Agregar</Button>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
