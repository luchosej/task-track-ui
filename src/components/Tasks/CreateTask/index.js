import React from 'react'
import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { showModal } from 'components/ModalContainer/modalSlice'

export default function CreateTask() {
  const dispatch = useDispatch()
  return (
    <Button
      color='green'
      onClick={() => dispatch(showModal({
        modalType: 'createEdit',
        modalProps: { isEdit: true }
      }))}
    >
      Create new task
    </Button>
  )
}