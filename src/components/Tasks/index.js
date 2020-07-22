import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CreateTask from './CreateTask'
import { fetchTasks, createTask } from './taskSlice'

export default function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks())
  })

  function handleOnCreateTask(description, completed = false) {
    dispatch(createTask(description, completed))
  }

  return (
    <div className="tasks">
      <CreateTask onCreateTask={handleOnCreateTask} />
    </div>
  )
}
