import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils'
import TaskCard from '../../TaskCard'
import './styles.scss'

export default function TaskColumn({
    className,
    tasks,
    title,
    id,
  }) {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({ name: id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  let backgroundColor = ''
  if (isActive) {
    backgroundColor = 'white'
  } else if (canDrop) {
    backgroundColor = '#0466c8'
  }
  return (
    <div className='tasks-column' ref={drop}>
      <div className='tasks-column__title'>{title}</div>
      <div className='tasks-column__tasks' style={{ backgroundColor }}>
        {tasks?.map(task => (
          <TaskCard
            id={task._id}
            description={task.description}
            header={task.title}
            meta={task.createdAt.split('T')[0]}
          />
        ))}
      </div>
    </div>
  )
}
