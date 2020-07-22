import React, { useState } from 'react'
import { Button, TextArea, Modal, Form } from 'semantic-ui-react'

export default function CreateTask() {
  const [open, setOpen] = useState(false)
  return (
    <Modal
      open={open}
      trigger={<Button color='green' onClick={() => setOpen(true)} >Create new task</Button>}
    >
      <Modal.Header>Create new task!</Modal.Header>
      <Modal.Content>
        <Form>
          <TextArea placeholder='Add a description for the task' />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          positive
          icon='checkmark'
          labelPosition='right'
          content="Yep, create task!"
        />
      </Modal.Actions>
    </Modal>
  )
}