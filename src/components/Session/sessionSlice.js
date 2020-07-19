import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: null
  },
  reducers: {
    storeSessionUser: (state, action) => {
      state.user = action.payload.user
    },
  },
});

export const { storeSessionUser } = sessionSlice.actions;

export const selectSessionUser = state => state.session.user
export default sessionSlice.reducer;
