// Dependencies
import { createSlice } from '@reduxjs/toolkit';

// Types
import { IOrder } from '../types/IGoods';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    order: [] as IOrder[],
    isBasketOpen: false
  },
  reducers: {
    showTheBasket(state) {
      state.isBasketOpen = !state.isBasketOpen
    },
    addToBasket(state, action) {
      // Для отображения количества уникальных предметов в корзине
      const itemIndex = state.order.findIndex((orderItem) => orderItem.id === action.payload.id);
      let newOrder = null;

      // Условие первого элемента
      if (itemIndex < 0) { // Если уникальный предмет добавляется впервые
        const newItem = { ...action.payload, quantity: 1 };
        newOrder = [...state.order, newItem];
      } else { // Если элемент уже есть в корзине
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return { ...orderItem, quantity: orderItem.quantity + 1 };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
      };
    },

    removeFromBasket(state, action) {
      state.order = state.order.filter((item) => item.id !== action.payload);
    },

    incQuantity(state, action) {
      state.order = state.order.map((el) => {
        if (el.id === action.payload) {
          const newQuantity = el.quantity + 1;
          return { ...el, quantity: newQuantity };
        } else {
          return el;
        }
      });
    },

    decQuantity(state, action) {
      state.order = state.order.map((el) => {
        if (el.id === action.payload) {
          const newQuantity = el.quantity - 1;
          return {
            ...el,
            quantity: newQuantity >= 0 ? newQuantity : 0,
          };
        } else {
          return el;
        }
      });
    },
  },
});

export const { addToBasket, removeFromBasket, incQuantity, decQuantity, showTheBasket } = basketSlice.actions;

export default basketSlice.reducer;
