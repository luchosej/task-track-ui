import { createSlice } from '@reduxjs/toolkit'

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
    fetchTasksSuccess: state => {
      state.loading = false
      state.success = true
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
    dispatch(fetchTasksSuccess())
  } catch (error) {
    dispatch(fetchTasksFail(error))
  }
};

export const selectLoading = state => state.tasks.loading
export const selectError = state => state.tasks.error
export default taskSlice.reducer;
