import React from 'react'
import { Card } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../utils'
import { isEmpty } from 'lodash'
import { moveTask, selectSelectedTask } from '../../taskSlice'
import './styles.scss'

export default function TaskCard({ id, header, description, meta, onClick }) {
  const dispatch = useDispatch()
  const selectedTask = useSelector(selectSelectedTask)
  const [{ isDragging }, drag] = useDrag({
    item: { header, type: ItemTypes.CARD },
    begin: (monitor) => {
      if (!isEmpty(selectedTask)) onClick()
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
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
        onClick={onClick}
      />
    </div>
  )
}
