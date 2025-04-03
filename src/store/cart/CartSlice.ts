import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../types/ProductsTypes';

interface CartState {
  cartItems: Product[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cartItems.push(action.payload);
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload,
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{id: number; quantity: number}>,
    ) => {
      const {id, quantity} = action.payload;
      state.cartItems = state.cartItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity,
          };
        }
        return item;
      });
    },
  },
});

export const {addToCart, removeItemFromCart, updateQuantity} =
  cartSlice.actions;

export default cartSlice.reducer;
