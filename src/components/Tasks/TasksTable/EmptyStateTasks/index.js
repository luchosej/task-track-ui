import React from 'react'
import { Icon } from 'semantic-ui-react'
import './styles.scss'

export default function EmptyStateTasks() {
  return (
    <div className='empty-tasks'>
      <Icon name='tasks' size='massive' />
      <div className='empty-tasks__msg'>
        <p>You don't have any task to track.</p>
        <p>Create a new one to start tracking your tasks!</p>
      </div>
    </div>
  )
}
