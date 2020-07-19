import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import signupReducer from 'components/Signup/signupSlice'
import loginReducer from 'components/Login/loginSlice'
import sessionReducer from 'components/Session/sessionSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    signup: signupReducer,
    login: loginReducer,
    session: sessionReducer
  },
});
