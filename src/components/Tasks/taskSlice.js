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
  },
});

export const { fetchTasksBegin, fetchTasksSuccess, fetchTasksFail } = taskSlice.actions;

export const fetchTasks = () => async dispatch => {
  try {
    dispatch(fetchTasksBegin())
    const data = await TaskService.getAll()
    dispatch(fetchTasksSuccess(data))
  } catch (error) {
    dispatch(fetchTasksFail(error))
  }
};

export const selectLoading = state => state.tasks.loading
export const selectError = state => state.tasks.error
export default taskSlice.reducer;
