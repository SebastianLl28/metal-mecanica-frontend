import { styled } from 'styled-components'
import { Button } from '@styled/Components'
import { Title } from '@styled/Text'

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
