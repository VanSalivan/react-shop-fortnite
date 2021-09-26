// Dependencies
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API
import { API_KEY, API_URL } from '../config';

// Types
import { IGoods } from '../types/IGoods';

export const fetchGoodsList = createAsyncThunk('goods/fetchGoodsList', async () => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const body = await response.json();

  return body.featured;
});

const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
    goods: [] as IGoods[],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGoodsList.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchGoodsList.fulfilled, (state, action) => {
      state.loading = false;
      state.goods = action.payload;
    });
  },
});

export default goodsSlice.reducer;
