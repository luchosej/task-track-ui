import React from 'react'
import { Card } from 'semantic-ui-react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../TasksBoard/utils'
import './styles.scss'

export default function TaskCard({ header, description, meta }) {
  const [{ isDragging }, drag] = useDrag({
    item: { header, type: ItemTypes.CARD },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        alert(`You dropped ${item.header} into ${dropResult.name}!`)
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
