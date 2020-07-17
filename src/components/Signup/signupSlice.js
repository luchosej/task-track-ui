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
      state.error = action.payload
    },
  },
});

export const { createUserBegin, createUserSuccess, createUserFail } = signupSlice.actions;

export const createUser = (name, email, password) => async dispatch => {
  dispatch(createUserBegin()) 
  const data = await createUserAPI(name, email, password)
  if (data.errors)
    return dispatch(createUserFail({ error: data.errors }))
  dispatch(createUserSuccess(data))
};

export default signupSlice.reducer;
