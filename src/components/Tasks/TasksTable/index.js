import React from 'react'
import { useDispatch } from 'react-redux'
import { Table } from 'semantic-ui-react'
import ClickeableIcon from 'components/ClickeableIcon'
import { showModal } from 'components/ModalContainer/modalSlice'

export default function TasksTable({ tasks, onDeleteTask }) {
  const dispatch = useDispatch()

  return (
    <div className='task-table'>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Create At</Table.HeaderCell>
            <Table.HeaderCell>Completed</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tasks?.map((task, index) => (
            <Table.Row key={index}>
            <Table.Cell>{task.description}</Table.Cell>
            <Table.Cell collapsing >{task.createdAt.split('T')[0]}</Table.Cell>
            <Table.Cell collapsing>{task.completed ? 'Completed' : 'Uncompleted'}</Table.Cell>
            <Table.Cell collapsing>
              <ClickeableIcon
                name='trash'
                onClick={() => dispatch(showModal({
                  modalProps: {
                    onConfirm: () => onDeleteTask(task._id),
                    title: 'Do you want to delete the task?',
                    content: 'You will lose all the process you have done in this task and you will not be able to recover it.',
                    icon: 'trash',
                  },
                  modalType: 'confirm'
                }))}
              />      
            </Table.Cell>
          </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
