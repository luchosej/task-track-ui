import React, { useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default function ConfirmModal({
  trigger,
  content,
  icon,
  onConfirm,
  onCancel,
  title
}) {
  const [open, setOpen] = useState(false)
  return (
  <Modal trigger={trigger} basic size='small' closeIcon>
    <Header icon={icon} content={title} />
    <Modal.Content>
      <p>
        {content}
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='green' inverted onClick={onConfirm}>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)}
