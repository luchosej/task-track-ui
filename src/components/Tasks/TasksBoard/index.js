import React from 'react'
import TaskColumn from './TasksColumn'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import './styles.scss'
const COLUMNS = [{
  id: 'todo',
  label: 'To Do'
}, {
  id: 'inprogress',
  label: 'In Progress'
}, {
  id: 'done',
  label: 'Done'
}]

export default function TaskBoard({ tasks }) {

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='tasks-board'>
        {COLUMNS.map((column) =>
          <TaskColumn
            className='tasks-board__column'
            tasks={tasks[column.id]}
            key={column.id}
            id={column.id}
            title={column.label}
          />
        )}
      </div>
    </DndProvider>
  )
}
