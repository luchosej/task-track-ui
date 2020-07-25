import React, { useState } from 'react'
import { Modal, Form, TextArea, Button } from 'semantic-ui-react'
import { createTask, editTask } from 'components/Tasks/taskSlice'
import { hideModal } from 'components/ModalContainer/modalSlice'
import { useDispatch } from 'react-redux'

export default function CreateEditTaskModal({
    id,
    open,
    isEdit,
    description = null,
    completed = false
  }) {
  const [description_, setDescription] = useState(description)
  const [completed_, setCompleted] = useState(completed)
  const dispatch = useDispatch()

  const handleOnCreateEditTask = () => {
    if (isEdit)
      return dispatch(editTask(id, completed_))
    return dispatch(createTask(description_, completed_))
  }

  console.log(description)

  return (
    <Modal
      open={open}
    >
      <Modal.Header>{`${isEdit ? 'Edit' : 'Create new'} task!`}</Modal.Header>
      <Modal.Content>
        <Form>
          <TextArea
            value={description_}
            placeholder='Add a description for the task'
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => dispatch(hideModal())}>
          Cancel
        </Button>
        <Button
          positive
          icon='checkmark'
          labelPosition='right'
          content={`Yep, ${isEdit ? 'edit' : 'create new'} task!`}
          onClick={() => handleOnCreateEditTask()}
        />
      </Modal.Actions>
    </Modal>
  )
}
