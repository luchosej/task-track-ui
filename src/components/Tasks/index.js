import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CreateTask from './CreateTask'
import TasksBoard from './TasksBoard'
import { fetchTasks, createTask, selectTasks } from './taskSlice'
import { Header } from 'semantic-ui-react';

export default function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  function OnCreateTask(description, completed = false) {
    dispatch(createTask(description, completed))
  }

  return (
    <div className="tasks">
      <Header as='h1'>Dashboard</Header>
      <CreateTask onCreateTask={OnCreateTask} />
      <TasksBoard tasks={tasks} />
    </div>
  )
}
