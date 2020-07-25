import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { hideModal } from 'components/ModalContainer/modalSlice'

export default function ConfirmModal({
  trigger,
  content,
  icon,
  open,
  onConfirm,
  title
}) {
  const dispatch = useDispatch()
  return (
  <Modal open={open} trigger={trigger} basic size='small'>
    <Header icon={icon} content={title} />
    <Modal.Content>
      <p>
        {content}
      </p>
    </Modal.Content>
    <Modal.Actions>
    <Button color='red' inverted onClick={() => dispatch(hideModal())}>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted onClick={onConfirm}>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)}
