import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CreateTask from './CreateTask'
import TasksTable from './TasksTable'
import { fetchTasks, createTask, selectTasks } from './taskSlice'

export default function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  function handleOnCreateTask(description, completed = false) {
    dispatch(createTask(description, completed))
  }

  return (
    <div className="tasks">
      <CreateTask onCreateTask={handleOnCreateTask} />
      <TasksTable tasks={tasks} />
    </div>
  )
}
