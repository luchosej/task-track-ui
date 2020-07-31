import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from 'lodash'
import { selectSelectedTask } from '../../taskSlice'
import { STATUS } from '../utils'
import './styles.scss'

export default function SelectedTask() {
  const selectedTask = useSelector(selectSelectedTask)
  const { title, description, state, createdAt } = selectedTask
  return (
    <>
      {!isEmpty(selectedTask) && (
        <div className="selected-task">
          <div className="selected-task__title">{title}</div>
          <div className="selected-task__date">
            <span className='selected-task--label'>Created at:</span> {createdAt.split('T')[0]}
          </div>
          <div className="selected-task__status">
            <span className='selected-task--label'>Status:</span> {STATUS.find(s => s.id === state).label}
          </div>
          <div className="selected-task__description">
            <span className='selected-task--label'>Description:</span> {description}
          </div>
        </div>
      )}
    </>
  );
}
