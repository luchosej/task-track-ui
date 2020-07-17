import { createSlice } from '@reduxjs/toolkit';

export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    error: null
  },
  reducers: {
    fetchUser: state => {
      state.loading = true
    },
    fetchUserSuccess: state => {
      state.loading = false
    },
    fetchUserFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
});

export const { fetchUser, fetchUserSuccess, fetchUserFail } = signupSlice.actions;

export default signupSlice.reducer;
