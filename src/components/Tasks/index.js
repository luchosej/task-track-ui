import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './taskSlice'

export default function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks())
  })

  return (
    <div className="tasks">
      tasks
    </div>
  )
}
