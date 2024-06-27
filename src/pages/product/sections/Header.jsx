import { styled } from 'styled-components'
import { Title, Button } from '@styled'
import { useModal } from '@hooks/useModal'
import CreateProduct from '../modal/CreateProduct'

export const Header = () => {
  const { ModalContainer, handleOpen } = useModal()

  return (
    <Wrapper>
      <Title>Producto</Title>
      <Button width='fit-content' onClick={handleOpen}>
        Agregar
      </Button>
      <ModalContainer>
        <CreateProduct />
      </ModalContainer>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
