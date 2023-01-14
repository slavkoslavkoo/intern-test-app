import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: { showModal: false, item: {} },
  reducers: {
    showModalAction(state, action) {
      state.showModal = true;
      state.item = action.payload.item;
    },
    hideModalAction(state) {
      state.showModal = false;
      state.item = {};
    },
  },
});

export const modalSliceActions = modalSlice.actions;
export default modalSlice;
