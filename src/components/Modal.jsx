import { useRef } from 'react'
import { styled } from 'styled-components'

const Modal = ({ children, closeModal }) => {
  const modalRef = useRef()

  const handleClickBackModal = e => {
    if (modalRef.current === e.target) {
      closeModal()
    }
  }

  return (
    <ModalStyle ref={modalRef} onMouseUp={handleClickBackModal}>
      <Container>{children}</Container>
    </ModalStyle>
  )
}

export default Modal

const ModalStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  animation: init 0.2s forwards;

  @keyframes init {
    to {
      background-color: #0000009f;
    }
  }
`

const Container = styled.div`
  padding: 1.8rem;
  background-color: #fff;
  border-radius: 0.5rem;
  animation: init-modal 0.3s forwards;

  @keyframes init-modal {
    from {
      transform: translateY(2rem);
    }
    to {
      transform: translateY(0);
    }
  }
`
