import {configureStore} from '@reduxjs/toolkit';
import categoriesReducer from './categories/CategoriesSlice';
import cartReducer from './cart/CartSlice';
import wishlistReducer from './wishlist/WishlistSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
