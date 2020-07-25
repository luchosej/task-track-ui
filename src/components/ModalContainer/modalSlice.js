import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalType: null,
    modalProps: {
      open: false,
    },
    error: null
  },
  reducers: {
    showModal: (state, action) => {
      state.modalProps = {
        ...action.payload.modalProps,
        open: true
      }
      state.modalType = action.payload.modalType 
    },
    hideModal: (state, action) => {
      state.modalType = null
      state.modalProps = {
        open: false,
      }
      state.error = null
      
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export const selectModalType = state => state.modal.modalType
export const selectModalProps = state => state.modal.modalProps

export default modalSlice.reducer;
