import {CartState} from './CartSlice';

export const updateAccounts = (state: CartState) => {
  state.accounts.subtotal = state.cartItems.reduce(
    (total, item) =>
      total +
      (item.price - (item.price * item.discountPercentage) / 100) *
        item.quantity,
    0,
  );
  state.accounts.total =
    state.accounts.subtotal + state.accounts.shippingCost + state.accounts.tax;
};
