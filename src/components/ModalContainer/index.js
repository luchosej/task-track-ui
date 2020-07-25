import React from 'react'
import { useSelector } from 'react-redux'
import { default as modalTypes } from 'components/Modals'
import { selectModalType, selectModalProps } from './modalSlice'

const MODAL_TYPES = {
  'confirm': modalTypes.ConfirmModal,
  'createEdit': modalTypes.CreateEditTaskModal
}

export default function ModalContainer() {
  const modalType = useSelector(selectModalType)
  const modalProps = useSelector(selectModalProps)
  
  if (!modalType)
    return null
  
  const SpecifiedModal = MODAL_TYPES[modalType]
  return (
    <div className='modal-container'>
      <SpecifiedModal  {...modalProps} />
    </div>
  )
}
