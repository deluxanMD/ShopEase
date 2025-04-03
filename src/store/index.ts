import {configureStore} from '@reduxjs/toolkit';
import categoriesReducer from './categories/CategoriesSlice';
import cartReducer from './cart/CartSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
