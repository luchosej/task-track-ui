import React from 'react'
import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { showModal } from 'components/ModalContainer/modalSlice'
import './styles.scss'

export default function CreateTask() {
  const dispatch = useDispatch()
  return (
    <div className='create-task-btn'>
      <Button
        color='green'
        onClick={() => dispatch(showModal({
          modalType: 'createEdit',
        }))}
        content='Create new task'
      />
    </div>
  )
}