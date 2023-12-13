import styled from 'styled-components'
import { Button, Title } from '../../../styled-component/Components'

const Header = () => {
  return (
    <Wrapper>
      <Title>Clientes</Title>
      <Button width='fit-content' fontSize='1em'>
        Agregar
      </Button>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
