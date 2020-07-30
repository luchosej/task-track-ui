import React from 'react'
import { Card } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../TasksBoard/utils'
import { moveTask } from '../taskSlice'
import './styles.scss'

export default function TaskCard({ id, header, description, meta }) {
  const dispatch = useDispatch()
  const [{ isDragging }, drag] = useDrag({
    item: { header, type: ItemTypes.CARD },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      console.log(dropResult)
      if (item && dropResult) {
        dispatch(moveTask({
          id,
          newState: dropResult.name
        }))
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1
  return (
    <div className='task-card' ref={drag}>
      <Card 
        header={header}
        style={{ opacity, 'cursor': 'move' }}
        description={description}
        meta={meta}
      />
    </div>
  )
}
