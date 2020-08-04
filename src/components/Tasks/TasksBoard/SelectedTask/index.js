import React from 'react'
import { Icon } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty } from 'lodash'
import { showModal } from 'components/ModalContainer/modalSlice'
import { selectSelectedTask, createTask } from '../../taskSlice'
import { STATUS } from '../utils'
import './styles.scss'

export default function SelectedTask() {
  const dispatch = useDispatch()
  const selectedTask = useSelector(selectSelectedTask)
  const { _id, title, description, state, createdAt, updatedAt } = selectedTask
  const createdDate = new Date(createdAt)
  const updatedDate = new Date(updatedAt)
  return (
    <>
      {!isEmpty(selectedTask) && (
        <div className="selected-task">
          <div className="selected-task__title">{title}</div>
          <div className='selected-task__actions'>
            <div className='selected-task--label'>Actions:</div>
            <div className='selected-task__actions-action'>
              <Icon
                name='edit'
                size='large'
                onClick={() => dispatch(showModal({
                  modalType: 'createEdit',
                  modalProps: {
                    isEdit: true,
                    description: description,
                    title: title,
                    id: _id,
                  }
                }))}
              />
            </div>
            <div className='selected-task__actions-action'>
              <Icon name='delete' size='large' />
            </div>
          </div>
          <div className="selected-task__status">
            <span className='selected-task--label'>Status:</span>
            <span className={`selected-task-status selected-task-status--${state}`}>{STATUS.find(s => s.id === state).label}</span>
          </div>
          <div className="selected-task__date">
            <div>
              <span className='selected-task--label'>Created:</span> {createdDate.toLocaleString('en-GB')}
            </div>
            <div>
              <span className='selected-task--label'>Updated:</span> {updatedDate.toLocaleString('en-GB')}
            </div>
          </div>
          <div className="selected-task__description">
            <span className='selected-task--label'>Description:</span> {description}
          </div>
        </div>
      )}
    </>
  );
}
