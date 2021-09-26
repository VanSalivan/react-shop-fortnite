// Dependencies
import { createSlice } from '@reduxjs/toolkit';

type alertName = string | null;

const basketSlice = createSlice({
  name: 'alert',
  initialState: {
    alertName: null as alertName,
  },
  reducers: {
    addAlertName(state, action) {
      state.alertName = action.payload;
    },
    removeAlertName(state) {
      state.alertName = null;
    }
  },
});

export const { addAlertName, removeAlertName } = basketSlice.actions;

export default basketSlice.reducer;
