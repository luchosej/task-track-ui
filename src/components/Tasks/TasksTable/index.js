import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
import ClickeableIcon from 'components/ClickeableIcon'

export default function TasksTable({ tasks }) {
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
          {tasks?.map(task => (
            <Table.Row>
            <Table.Cell>{task.description}</Table.Cell>
            <Table.Cell>{task.createdAt.split('T')[0]}</Table.Cell>
            <Table.Cell>{task.completed ? 'Completed' : 'Uncompleted'}</Table.Cell>
            <Table.Cell><ClickeableIcon onClick={() => console.log('asd')} name='trash' /></Table.Cell>
          </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
