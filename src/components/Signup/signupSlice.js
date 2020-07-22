import { createSlice } from '@reduxjs/toolkit'
import { UserService } from 'services'

export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    error: null,
    success: false
  },
  reducers: {
    createUserBegin: state => {
      state.loading = true
    },
    createUserSuccess: state => {
      state.loading = false
      state.success = true
    },
    createUserFail: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
  },
});

export const { createUserBegin, createUserSuccess, createUserFail } = signupSlice.actions;

export const createUser = (name, email, password) => async dispatch => {
  try {
    dispatch(createUserBegin()) 
    const data = await UserService.createUser(name, email, password)
    dispatch(createUserSuccess(data))
  } catch (error) {
    dispatch(createUserFail(error))
  }
};

export const selectLoading = state => state.signup.loading
export const selectError = state => state.signup.error
export const selectSuccess = state => state.signup.success
export default signupSlice.reducer;
