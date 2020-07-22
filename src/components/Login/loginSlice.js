import { createSlice } from '@reduxjs/toolkit'
import { AuthenticationService } from 'services'
import { storeSessionUser } from 'components/Session/sessionSlice'

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

export const loginUser = (email, password, history) => async dispatch => {
  try {
    dispatch(loginUserBegin()) 
    const data = await AuthenticationService.login(email, password)
    dispatch(storeSessionUser({ user: data }))
    dispatch(loginUserSuccess(data))
    history.push('/dashboard')
  } catch (error) {
    dispatch(loginUserFail(error))
  }
};

export const selectLoading = state => state.login.loading
export const selectError = state => state.login.error
export default loginSlice.reducer;
