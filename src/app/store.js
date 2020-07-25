import { configureStore } from '@reduxjs/toolkit';
import signupReducer from 'components/Signup/signupSlice'
import loginReducer from 'components/Login/loginSlice'
import sessionReducer from 'components/Session/sessionSlice'
import tasksReducer from 'components/Tasks/taskSlice'
import modalReducer from 'components/ModalContainer/modalSlice'

export default configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    session: sessionReducer,
    tasks: tasksReducer,
    modal: modalReducer
  },
});
