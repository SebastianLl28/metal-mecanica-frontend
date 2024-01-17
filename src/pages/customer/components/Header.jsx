import styled from 'styled-components'
import { Button, Title } from '../../../styled-component/Components'
import useModal from '../../../hooks/useModal'
import CreateCustomer from './CreateCustomer'

const Header = () => {
  const { openModal, modalComponent, closeModal } = useModal()

  const handleClickOpen = () => {
    openModal(<CreateCustomer close={closeModal} />)
  }

  return (
    <Wrapper>
      <Title>Clientes</Title>
      <Button
        width='fit-content'
        fontSize='1em'
        $padding='0 1rem'
        onClick={handleClickOpen}>
        Agregar
      </Button>
      {modalComponent}
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
