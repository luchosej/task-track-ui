import { configureStore } from '@reduxjs/toolkit';
import signupReducer from 'components/Signup/signupSlice'
import loginReducer from 'components/Login/loginSlice'
import profileReducer from 'components/Profile/profileSlice'
import tasksReducer from 'components/Tasks/taskSlice'
import modalReducer from 'components/ModalContainer/modalSlice'

export default configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    profile: profileReducer,
    tasks: tasksReducer,
    modal: modalReducer
  },
});
