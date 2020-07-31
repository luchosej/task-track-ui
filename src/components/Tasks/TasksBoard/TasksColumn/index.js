import React from 'react'
import { useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { ItemTypes } from '../utils'
import TaskCard from '../TaskCard'
import { selectTask } from '../../taskSlice'
import './styles.scss'

export default function TaskColumn({
    className,
    tasks,
    title,
    id,
  }) {
  const dispatch = useDispatch()
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({ name: id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  return (
    <div className='tasks-column' ref={drop}>
      <div className='tasks-column__title'>{title}</div>
      <div className='tasks-column__tasks'>
        {tasks?.map(task => (
          <TaskCard
            id={task._id}
            // description={task.description}
            header={task.title}
            meta={task.description}
            onClick={() => dispatch(selectTask(task))}
          />
        ))}
      </div>
    </div>
  )
}
