import { createSlice } from '@reduxjs/toolkit'
import { loginUserAPI } from 'api/user'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    error: null
  },
  reducers: {
    loginUserBegin: state => {
      state.loading = true
    },
    loginUserSuccess: state => {
      state.loading = false
    },
    loginUserFail: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
  },
});

export const { loginUserBegin, loginUserSuccess, loginUserFail } = loginSlice.actions;

export const loginUser = (email, password) => async dispatch => {
  try {
    dispatch(loginUserBegin()) 
    const data = await loginUserAPI(email, password)
    dispatch(loginUserSuccess(data))
  } catch (error) {
    dispatch(loginUserFail(error))
  }
};

export const selectLoading = state => state.login.loading
export const selectError = state => state.login.error
export default loginSlice.reducer;
