import styled from 'styled-components'
import { Button } from '../../../styled-component/Components'
import { useModal } from '../../../hooks/useModal'
import { Title } from '@styled/Text'
// import CreateOrder from "./CreateOrder"

const Header = () => {
  const { ModalContainer, handleOpen, handleClose } = useModal()

  return (
    <Wrapper>
      <Title>Pedidos</Title>
      <Button
        width='fit-content'
        fontSize='1em'
        $padding='0 1rem'
        onClick={handleOpen}>
        Agregar
      </Button>
      <ModalContainer>
        {/* <CreateOrder close={handleClose}/> */}
      </ModalContainer>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
