// Dependencies
import { configureStore } from '@reduxjs/toolkit';

// Externals
import goodsSlice from './goodsSlice';
import basketSlice from './basketSlice';
import alertSlice from './alertSlice';

export default configureStore({
  reducer: {
    goods: goodsSlice,
    basket: basketSlice,
    alertMessage: alertSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
});
