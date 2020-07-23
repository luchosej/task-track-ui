import { createSlice } from '@reduxjs/toolkit'
import { TaskService } from 'services'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    fetchTasksBegin: state => {
      state.loading = true
    },
    fetchTasksSuccess: (state, action) => {
      state.loading = false
      state.tasks = action.payload
    },
    fetchTasksFail: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    createTaskBegin: state => {
      state.loading = true
    },
    createTaskSuccess: (state, action) => {
      state.loading = false
      state.tasks.unshift(action.payload)
    },
    createTaskFail: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    deleteTaskBegin: state => {
      state.loading = true
    },
    deleteTaskSuccess: (state, action) => {
      state.loading = false
      state.tasks = state.tasks.filter(t => t._id !== action.payload._id)
    },
    deleteTaskFail: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
  },
})

export const {
  fetchTasksBegin,
  fetchTasksSuccess,
  fetchTasksFail,
  createTaskBegin,
  createTaskFail,
  createTaskSuccess,
  deleteTaskBegin,
  deleteTaskFail,
  deleteTaskSuccess
} = taskSlice.actions

export const fetchTasks = () => async dispatch => {
  try {
    dispatch(fetchTasksBegin())
    const data = await TaskService.getAll()
    dispatch(fetchTasksSuccess(data))
  } catch (error) {
    dispatch(fetchTasksFail(error))
  }
}

export const createTask = (description, completed) => async dispatch => {
  try {
    dispatch(createTaskBegin())
    const data = await TaskService.create(description, completed)
    dispatch(createTaskSuccess(data))
  } catch (error) {
    dispatch(createTaskFail(error))
  }
}

export const deleteTask = (id) => async dispatch => {
  try {
    dispatch(deleteTaskBegin())
    const data = await TaskService.delete(id)
    dispatch(deleteTaskSuccess(data))
  } catch (error) {
    dispatch(deleteTaskFail(error))
  }
};

export const selectLoading = state => state.tasks.loading
export const selectError = state => state.tasks.error
export const selectTasks = state => state.tasks.tasks
export default taskSlice.reducer;
