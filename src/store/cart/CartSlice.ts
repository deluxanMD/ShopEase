import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../types/ProductsTypes';
import {updateAccounts} from './CartSliceUtils';

export type CartItem = {
  quantity: number;
} & Product;

export interface CartState {
  cartItems: CartItem[];
  accounts: {
    subtotal: number;
    shippingCost: number;
    tax: number;
    total: number;
  };
}

const initialState: CartState = {
  cartItems: [],
  accounts: {
    subtotal: 0,
    shippingCost: 5,
    tax: 0,
    total: 0,
  },
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
      updateAccounts(state);
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload,
      );
      updateAccounts(state);
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
      updateAccounts(state);
    },
  },
});

export const {addToCart, removeItemFromCart, updateQuantity} =
  cartSlice.actions;

export default cartSlice.reducer;
