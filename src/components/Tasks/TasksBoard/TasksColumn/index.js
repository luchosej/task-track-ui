import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils'
import TaskCard from '../../TaskCard'

export default function TaskColumn({
    className,
    tasks,
    key,
    title,
  }) {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  return (
    <div className={className} ref={drop}>
      <div>{title}</div>
      {tasks?.map(task => (
        <TaskCard
          description={task.description}
          header={task.title}
          meta={task.createdAt.split('T')[0]}
        />
      ))}
    </div>
  )
}
