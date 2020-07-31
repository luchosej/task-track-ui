import React from 'react'
import TaskColumn from './TasksColumn'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import SelectedTask from './SelectedTask'
import { COLUMNS } from './utils'

import './styles.scss'

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
        <SelectedTask />
      </div>
    </DndProvider>
  )
}
