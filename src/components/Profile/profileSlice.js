import { createSlice } from '@reduxjs/toolkit'
import { UserService, StorageService } from 'services'
import { hideModal } from 'components/ModalContainer/modalSlice'

export const profileSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    fetchUserSuccess: (state, action) => {
      state.user = action.payload
    },
    fetchUserFail: (state, action) => {
      state.error = action.payload
    },
    updateUserSuccess: (state, action) => {
      state.user = action.payload
    },
    updateUserFail: (state, action) => {
      state.error = action.payload
    },
    deleteUserSuccess: (state, action) => {
      StorageService.remove('user-token')
    }
  },
});

export const {
  storeSessionUser,
  fetchUserSuccess,
  fetchUserFail,
  updateUserSuccess,
  updateUserFail,
  deleteUserSuccess,
  deleteUserFail
} = profileSlice.actions;

export const fetchUser = () => async (dispatch) => {
  try {
    const data = await UserService.get()
    dispatch(fetchUserSuccess(data))
  } catch (error) {
    dispatch(fetchUserFail(error))
  }
}

export const updateUser = ({ name, age, bio, email, password }) => async (dispatch) => {
  try {
    const data = await UserService.update({ name, age, bio, email, password })
    dispatch(updateUserSuccess(data))
  } catch (error) {
    dispatch(updateUserFail(error))
  }
}

export const deleteUser = (history) => async (dispatch) => {
  try {
    await UserService.delete()
    StorageService.remove('user-token')
    history.push('/')
    dispatch(hideModal())
  } catch (error) {
    dispatch(deleteUserFail(error))
  }
}

export const updateUserAvatar = (file) => async (dispatch) => {
  try {
    const data = await UserService.addAvatar(file)
    console.log(data)
  } catch (error) {
    dispatch(updateUserFail(error))
  }
}

export const selectUser = state => state.profile.user
export default profileSlice.reducer;
