import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../types/ProductsTypes';

interface WishlistState {
  wishlistItems: Product[];
}

const initialState: WishlistState = {
  wishlistItems: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlistSlice',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      state.wishlistItems.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<Product>) => {
      state.wishlistItems = state.wishlistItems.filter(
        item => item.id !== action.payload.id,
      );
    },
  },
});

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;
