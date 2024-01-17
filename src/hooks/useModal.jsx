import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import Modal from '../components/Modal'

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const openModal = content => {
    setIsModalOpen(true)
    setModalContent(content)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalContent(null)
  }

  const modalComponent =
    isModalOpen &&
    createPortal(
      <Modal closeModal={closeModal}>{modalContent}</Modal>,
      document.body
    )

  return { openModal, closeModal, modalComponent }
}

export default useModal
