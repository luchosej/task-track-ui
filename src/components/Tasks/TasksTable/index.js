import React from 'react'
import { useDispatch } from 'react-redux'
import { Table, Icon } from 'semantic-ui-react'
import ClickeableIcon from 'components/ClickeableIcon'
import { showModal } from 'components/ModalContainer/modalSlice'
import { COLUMNS } from './utils'

export default function TasksTable({ tasks, onDeleteTask }) {
  const dispatch = useDispatch()

  return (
    <div className='task-table'>
      <Table celled>
        <Table.Header>
          <Table.Row>
            {COLUMNS.map(columnName => <Table.HeaderCell>{columnName}</Table.HeaderCell>)}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tasks?.map((task, index) => (
            <Table.Row key={index}>
              <Table.Cell>{task.description}</Table.Cell>
              <Table.Cell collapsing >
                {task.createdAt.split('T')[0]}
              </Table.Cell>
              <Table.Cell textAlign='center' collapsing>
                {task.completed
                  ? <Icon color='green' name='check' />
                  : <Icon color='red' size='large' name='remove' />
                }
              </Table.Cell>
              <Table.Cell collapsing singleLine>
                <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
                  <ClickeableIcon
                      name='edit'
                      onClick={() => dispatch(showModal({
                        modalType: 'createEdit',
                        modalProps: {
                          id: task._id,
                          isEdit: true,
                          description: task.description,
                          completed: task.completed
                        },
                      }))}
                    />
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
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
