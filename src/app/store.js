import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import signupReducer from 'components/Signup/signupSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    signup: signupReducer
  },
});
