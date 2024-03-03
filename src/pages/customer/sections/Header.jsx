import styled from 'styled-components'
import CreateCustomer from '../modals/CreateCustomer'
import { useModal } from '@hooks/useModal'
import { Button, Title } from '@styled/Components'

const Header = () => {
  const { ModalContainer, handleOpen, handleClose } = useModal()

  return (
    <Wrapper>
      <Title>Clientes</Title>
      <Button
        width='fit-content'
        fontSize='1em'
        $padding='0 1rem'
        onClick={handleOpen}>
        Agregar
      </Button>
      <ModalContainer>
        <CreateCustomer close={handleClose} />
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
