import { configureStore } from '@reduxjs/toolkit';
import signupReducer from 'components/Signup/signupSlice'
import loginReducer from 'components/Login/loginSlice'
import sessionReducer from 'components/Session/sessionSlice'
import tasksReducer from 'components/Tasks/taskSlice'

export default configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    session: sessionReducer,
    tasks: tasksReducer
  },
});
