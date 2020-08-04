import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CreateTask from './CreateTask'
import TasksBoard from './TasksBoard'
import { fetchTasks, createTask, selectTasks, deleteTask } from './taskSlice'

export default function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  function OnCreateTask(description, completed = false) {
    dispatch(createTask(description, completed))
  }

  function onDeleteTask(id) {
    dispatch(deleteTask(id))
  }

  return (
    <div className="tasks">
      <CreateTask onCreateTask={OnCreateTask} />
      <TasksBoard tasks={tasks} />
    </div>
  )
}
