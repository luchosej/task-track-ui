import { createSlice } from '@reduxjs/toolkit'
import createUserAPI from 'api/UserAPI/createUserAPI'

export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    error: null
  },
  reducers: {
    createUserBegin: state => {
      state.loading = true
    },
    createUserSuccess: state => {
      state.loading = false
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
    const data = await createUserAPI(name, email, password)
    dispatch(createUserSuccess(data))
  } catch (error) {
    dispatch(createUserFail(error))
  }
};

export const selectLoading = state => state.signup.loading
export const selectError = state => state.signup.error
export default signupSlice.reducer;
