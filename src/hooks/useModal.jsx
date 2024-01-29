import { useState } from 'react'
import styled from 'styled-components'

export const useModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleOutsideClick = event => {
    if (event.target === event.currentTarget) {
      handleClose()
    }
  }
  const ModalContainer = ({ children }) => {
    return open ? (
      <Modal onClose={handleClose} onMouseUp={handleOutsideClick}>
        <div>{children}</div>
      </Modal>
    ) : null
  }

  return { open, handleOpen, handleClose, ModalContainer }
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  & > div {
    position: absolute;
    background-color: #fff;
    padding: 2rem;
    border-radius: 1rem;
    animation: init-modal 0.3s forwards;
  }

  @keyframes init-modal {
    from {
      transform: translateY(2rem);
    }

    to {
      transform: translateY(0rem);
    }
  }

  .confirm {
    & > div {
      background-color: red;
    }
  }

  .title {
    font-size: 1.8rem;
    text-align: center;
  }

  .container-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
