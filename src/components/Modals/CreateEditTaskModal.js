import React, { useState } from 'react'
import { Modal, Form, TextArea, Button, Checkbox, Input } from 'semantic-ui-react'
import { createTask, editTask } from 'components/Tasks/taskSlice'
import { hideModal } from 'components/ModalContainer/modalSlice'
import { useDispatch } from 'react-redux'

export default function CreateEditTaskModal({
    id,
    open,
    isEdit,
    description,
    title,
  }) {
  const [description_, setDescription] = useState(description)
  const [title_, setTitle] = useState(title)
  const dispatch = useDispatch()

  const handleOnCreateEditTask = () => {
    if (isEdit)
      return dispatch(editTask(id, { description: description_, title: title_ }))
    return dispatch(createTask(title_, description_))
  }

  return (
    <Modal open={open}>
      <Modal.Header>{`${isEdit ? 'Edit' : 'Create new'} task!`}</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field
            control={Input}
            value={title_}
            placeholder='Task title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Field>
            <TextArea
              value={description_}
              placeholder='Add a description for the task'
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Field>
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
